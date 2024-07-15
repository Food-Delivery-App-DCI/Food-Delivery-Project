import Stripe from "stripe";
import User from "../models/UserModel.js";
import createHttpError from "http-errors";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function checkout(req, res, next) {
  const { basket, id } = req.body;

  // console.log(basket);

  const lineItems = basket.map((product) => ({
    price_data: {
      currency: "eur",
      product_data: {
        name: product.name,
        description: product.description,
      },
      unit_amount: Math.round(product.price * 100),
    },
    quantity: product.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card", "paypal"],
    line_items: lineItems,
    mode: "payment",
    shipping_address_collection: {
      allowed_countries: ["DE"], // Allow only Germany
    },
    success_url: "http://localhost:5173/success",
    cancel_url: `http://localhost:5173/restaurant/${id}`,
  });

  res.json({ id: session.id });
}

export async function getOrderDetails(req, res, next) {
  const { sessionId, basket, totalSum } = req.body;
  const { id } = req.params;

  try {
    // Promise.all will make the two functions run at the same time since none of them depends on the other.
    const result = Promise.all([
      stripe.checkout.sessions.retrieve(sessionId, { expand: ["payment_intent.payment_method"] }),
      stripe.checkout.sessions.listLineItems(sessionId),
    ]);

    // const session = await stripe.checkout.sessions.retrieve(sessionId, { expand: ["payment_intent.payment_method"] });
    // const lineItems = await stripe.checkout.sessions.listLineItems(sessionId);
    // console.log(session);
    // console.log(lineItems);
    // console.log(JSON.stringify(await result));
    const orderHistory = JSON.stringify(await result);

    if (!orderHistory) {
      return next(createHttpError(400, "Order History could not be retrieved"));
    }

    // const session = orderHistory[0]
    // const lineItems = orderHistory[1]

    const basketItems = basket.map((item) => {
      return {
        itemName: item.name,
        price: item.price,
        quantity: item.quantity,
        description: item.description,
      };
    });

    const orderHistorySaved = {
      restaurantName: "Den Home Restaurant",
      items: basketItems,
      totalSum: totalSum,
      paymentDetails: {
        paymentMethod: "Paypal",
        chargedAmount: totalSum,
      },
      additionalInfo: {
        orderType: "Delivery",
        orderStatus: "Delivered",
      },
    };

    const foundUser = await User.findById(id);

    if (!foundUser) {
      return next(createHttpError(404, "No User found"));
    }

    const options = {
      new: true,
      runValidators: true,
    };

    const updatedUser = await User.findByIdAndUpdate(id, { $push: { orderHistory: orderHistorySaved } }, options);

    console.log("Order history saved");

    res.json({ message: "order history saved" });
  } catch (error) {
    console.log(error);
    next(createHttpError(500, "Server error"));
  }
}
