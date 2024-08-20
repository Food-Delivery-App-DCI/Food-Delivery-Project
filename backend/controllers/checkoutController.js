import Stripe from "stripe";
import User from "../models/UserModel.js";
import Restaurant from "../models/RestaurantModel.js";
import OrderHistory from "../models/OrderHistoryModel.js";
import createHttpError from "http-errors";
import { io } from "../index.js";

// Initialize the Stripe client with the secret key from environment variables.
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

//* This function receives the basket and user ID from the request body, processes the items, and creates a Stripe checkout session with payment methods and redirection URLs.
export async function checkout(req, res, next) {
  const { basket, id } = req.body;

  try {
    // Map each product in the basket to Stripe's line item format.
    const lineItems = basket.map((product) => ({
      price_data: {
        currency: "eur",
        product_data: {
          name: product.name,
          description: product.description,
        },
        unit_amount: Math.round(product.price * 100), // Convert price to cents
      },
      quantity: product.quantity,
    }));

    // Create a Stripe checkout session with payment methods, line items, and redirect URLs.
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "paypal"],
      line_items: lineItems,
      mode: "payment",
      shipping_address_collection: {
        allowed_countries: ["DE"], // Allow only Germany
      },
      success_url:
        process.env.NODE_ENV === "production"
          ? "https://deliveats-food-delivery-app.onrender.com/success"
          : "http://localhost:5173/success", // URL to redirect to upon successful payment.
      cancel_url:
        process.env.NODE_ENV === "production"
          ? `https://deliveats-food-delivery-app.onrender.com/restaurant/${id}`
          : `http://localhost:5173/restaurant/${id}`, // URL to redirect to if payment is canceled.
    });

    // Respond with the session ID for client-side handling.
    res.json({ id: session.id });
  } catch (error) {
    console.error(error);
    return next(createHttpError(500, "Server error in processing checkout"));
  }
}

//* This function receives the basket, total sum, delivery option, and restaurant details, and saves them in the order history collection.
export async function setOrder(req, res, next) {
  const { basket, totalSum, deliveryOption, restaurantName, restaurantAddress, restaurantId } = req.body;

  try {
    // Format the basket items for saving in the order history.
    const basketItems = basket.map((item) => {
      return {
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        description: item.description,
      };
    });

    // Create an order object to save to the order history.
    const orderHistorySaved = {
      restaurantName: restaurantName,
      restaurantAddress: restaurantAddress,
      restaurantId: restaurantId,
      items: basketItems,
      totalSum: totalSum,
      paymentDetails: {
        paymentMethod: "Card",
        chargedAmount: totalSum,
      },
      additionalInfo: {
        orderType: deliveryOption,
        orderStatus: "Delivered",
      },
    };

    // Save the order to the OrderHistory collection in the database.
    const newOrder = await OrderHistory.create(orderHistorySaved);

    // Respond with the newly created order's ID.
    res.json({ id: newOrder._id });
  } catch (error) {
    console.log(error);
    next(createHttpError(500, "Order could not be created"));
  }
}

// * This function updates the user's document by pushing the order ID to their orderHistory array.
// * It associates an order with a user by adding the order ID to the user's order history.
export async function setOrderOfUser(req, res, next) {
  const { id } = req.params;
  const { orderId } = req.body;

  try {
    // Find the user in the database by their ID.
    const foundUser = await User.findById(id);

    if (!foundUser) {
      return next(createHttpError(404, "No User found")); // If no user is found, return a 404 error.
    }

    const options = {
      new: true, // Return the modified document rather than the original.
      runValidators: true, // Ensure the update complies with the schema's validation rules.
    };

    // Update the user's order history by pushing the new order ID.
    const updatedUser = await User.findByIdAndUpdate(id, {
      $push: { orderHistory: orderId },
      options,
    });

    // Populate the orderHistory field with the actual order documents.
    await updatedUser.populate("orderHistory");

    // Respond with the updated user document.
    res.json(updatedUser);
  } catch (error) {
    console.log(error);
    next(createHttpError(500, "OrderId could not be added to User"));
  }
}

// * This function fetches the user by their ID and populates their order history, returning it in the response.
// * It retrieves the order history for a specific user.
export async function getOrderHistory(req, res, next) {
  const { id } = req.params; // Extract the user ID from the request parameters.

  try {
    // Find the user by their ID.
    const foundUser = await User.findById(id);

    if (!foundUser) {
      return next(createHttpError(404, "No User found")); // If no user is found, return a 404 error.
    }

    // Populate the orderHistory field with the actual order documents.
    await foundUser.populate("orderHistory");

    // Respond with the user's order history.
    res.json({ orderHistory: foundUser.orderHistory });
  } catch (error) {
    console.log(error);
    next(createHttpError(500, "Order history could not be found"));
  }
}

// * This function retrieves the session and line items from Stripe, formats the order, and updates the restaurant's active orders. It also emits a real-time update to the restaurant.
// * It sends a new order to a restaurant for processing.
export async function sendOrderToRestaurant(req, res, next) {
  const { sessionId, newOrderId } = req.body; // Extract the Stripe session ID and new order ID from the request body.
  const { id } = req.params; // Extract the restaurant ID from the request parameters.

  try {
    // Find the restaurant by its ID.
    const foundRestaurant = await Restaurant.findById(id);

    if (!foundRestaurant) {
      return next(createHttpError(404, "No Restaurant found to process your order")); // If no restaurant is found, return a 404 error.
    }

    // Retrieve the session and line items from Stripe using Promise.all to run both async functions concurrently.
    // Promise.all will make the two functions run at the same time since none of them depends on the other.
    const result = Promise.all([
      stripe.checkout.sessions.retrieve(sessionId, {
        expand: ["payment_intent.payment_method"], // Expand the payment intent to include payment method details.
      }),
      stripe.checkout.sessions.listLineItems(sessionId), // Retrieve the line items for the session.
    ]);

    // Await the resolution of the promises.
    const orderDetails = await result;

    // Format the order object with customer and order details.
    const orderObj = {
      order: newOrderId,
      customerName: orderDetails[0].customer_details.name,
      customerEmail: orderDetails[0].customer_details.email,
      customerAddress: `${orderDetails[0].customer_details.address.line1}, ${orderDetails[0].customer_details.address.city}`,
    };

    const options = {
      new: true, // Return the modified document rather than the original.
      runValidators: true, // Ensure the update complies with the schema's validation rules.
    };

    // Update the restaurant's active orders by adding the new order.
    await Restaurant.findByIdAndUpdate(id, { $push: { activeOrders: orderObj } }, options);

    // Retrieve the updated restaurant document.
    const updatedRestaurant = await Restaurant.findById(id);

    // Populate the order fields within orderHistory and activeOrders with actual order documents.
    await updatedRestaurant.populate("orderHistory.order");
    await updatedRestaurant.populate("activeOrders.order");

    // Emit a real-time event to the restaurant's Socket.IO room with the new order details.
    io.to(`restaurant_${id}`).emit("newOrder", updatedRestaurant);

    // console.log(`Emitting newOrder to room: restaurant_${id} with data:`, updatedRestaurant);

    // Respond with a success message and the order ID.
    res.json({ message: `Your Order has been sent to the restaurant successfully`, orderId: orderObj.order });
  } catch (error) {
    console.error(error);
    next(createHttpError(500, "Order could not be sent to the restaurant"));
  }
}
