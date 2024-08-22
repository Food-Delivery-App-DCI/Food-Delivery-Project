import createHttpError from "http-errors";
import Restaurant from "../models/RestaurantModel.js";
import OrderHistory from "../models/OrderHistoryModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import SearchedRestaurant from "../models/SearchedRestaurantsModel.js";
import cloudinary from "../middlewares/cloudinaryConfig.js";
import { io } from "../index.js";

//* Function to check the authentication of a restaurant
export async function checkAuthenticationOfRestaurant(req, res, next) {
  try {
    const restaurant = await Restaurant.findById(req.rest._id); // Find the restaurant by its ID

    if (!restaurant) {
      return next(400, createHttpError("Restaurant not found, Authentication failed! Please login.")); // Error if restaurant not found
    }

    await restaurant.populate("orderHistory.order"); // Populate orderHistory with order details
    await restaurant.populate("activeOrders.order"); // Populate activeOrders with order details

    // Send the restaurant data as response
    res.json(restaurant);
  } catch (error) {
    console.error(error);
    return next(createHttpError(500, "Authentication failed! Please login again."));
  }
}

//* Function to get details of a specific restaurant by ID
export async function getRestaurant(req, res, next) {
  const { id } = req.params;

  try {
    const restaurant = await Restaurant.findById(id); // Find restaurant by ID

    if (restaurant) {
      await restaurant.populate("orderHistory.order"); // Populate orderHistory with order details
      await restaurant.populate("activeOrders.order"); // Populate activeOrders with order details

      // Send the restaurant data as response
      res.json(restaurant);
    } else {
      return next(createHttpError(404, "Restaurant not found")); // Error if restaurant not found
    }
  } catch (error) {
    console.error(error);
    return next(createHttpError(500, "Server error getting restaurant"));
  }
}

//* Function to search and get all restaurants based on a search term
export async function getAllRestaurants(req, res, next) {
  try {
    const { search } = req.body;

    if (!search) {
      return next(createHttpError(400, "Search term is required")); // Error if search term is empty
    }

    const splitSearch = search.toLowerCase().split(" "); // Split search term into city and country/keywords
    const country = splitSearch[0]; // First part assumed as country/keyword
    const allowedCities = ["leipzig", "berlin", "hannover", "düsseldorf", "dusseldorf"]; // Allowed cities
    let cityInSearch = allowedCities.find((city) => splitSearch.includes(city)); // Check if city is in allowed list

    if (!cityInSearch) {
      return next(createHttpError(400, "Search city should be Leipzig, Berlin, Hannover or Düsseldorf")); // Error if city not allowed
    }

    if (cityInSearch === "dusseldorf") {
      cityInSearch = "düsseldorf"; // Normalize city name
    }

    // Fetch all restaurants
    const restaurants = await Restaurant.find({});

    // Filter restaurants based on city and keywords
    const filteredRestaurants = restaurants.filter((restaurant) => {
      const cityMatch = restaurant.basicInfo.address.city.toLowerCase() === cityInSearch;
      const keywordsMatch = restaurant.keywords.some((keyword) => keyword.toLowerCase() === country.toLowerCase());
      const restaurantMatch = restaurant.restaurantType.some(
        (restaurant) => restaurant.toLowerCase() === country.toLowerCase()
      );
      return (cityMatch && keywordsMatch) || (cityMatch && restaurantMatch); // Return true if matching criteria
    });

    if (filteredRestaurants.length === 0) {
      return next(createHttpError(404, "We don't have any restaurant with your search query in our database")); // Error if no match
    }

    //*removed code
    // Map filtered results to the SearchedRestaurant schema
    // const searchedRestaurantsData = filteredRestaurants.map((restaurant) => ({
    //   restaurantId: restaurant._id,
    //   basicInfo: restaurant.basicInfo,
    //   openAndCloseHours: restaurant.openAndCloseHours,
    //   keywords: restaurant.keywords,
    //   restaurantType: restaurant.restaurantType,
    //   menu: restaurant.menu,
    //   digitalPresence: restaurant.digitalPresence,
    //   promotionalInfo: restaurant.promotionalInfo,
    // }));

    //*removed code
    // Save filtered results to the database
    // await SearchedRestaurant.deleteMany({}); // Clear previous search results
    // await SearchedRestaurant.create(searchedRestaurantsData); // Save new search results

    // Send filtered results as response
    res.status(200).json(filteredRestaurants);
  } catch (error) {
    console.error(error);
    return next(createHttpError(500, "Server error getting all restaurants"));
  }
}

//* Function to get previously searched restaurants
//* removed code
// export async function getSearchedRestaurants(req, res, next) {
//   try {
//     const restaurants = await SearchedRestaurant.find(); // Find all previously searched restaurants

//     if (restaurants) {
//       // Send searched restaurants as response
//       res.json(restaurants);
//     } else {
//       return next(createHttpError(404, "No restaurants in database")); // Error if no restaurants found
//     }
//   } catch (error) {
//     next(createHttpError(500, "Server error getting restaurants"));
//   }
// }

//* Function to register a new restaurant
export async function registerRestaurant(req, res, next) {
  const email = req.body.basicInfo.contact.email; // Extract email from request body
  const phoneNumber = req.body.basicInfo.contact.phoneNumber; // Extract phone number from request body
  const password = req.body.basicInfo.password; // Extract password from request body

  try {
    // Check if a restaurant with the same email and phone number already exists
    const foundRestaurant = await Restaurant.findOne({
      "basicInfo.contact.email": email,
      "basicInfo.contact.phoneNumber": phoneNumber,
    });

    if (foundRestaurant) {
      return next(createHttpError(409, "Restaurant with email and phone number already exists.")); // Error if restaurant exists
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

    const newRestaurant = await Restaurant.create({
      ...req.body, // Create a new restaurant with request body data
      basicInfo: {
        ...req.body.basicInfo,
        password: hashedPassword, // Store the hashed password
      },
    });

    await newRestaurant.populate("orderHistory.order"); // Populate orderHistory with order details
    await newRestaurant.populate("activeOrders.order"); // Populate activeOrders with order details

    // Generate JWT tokens for authentication
    const restaurantAccessToken = jwt.sign({ id: newRestaurant._id }, process.env.JWT_SECRET_KEY, { expiresIn: "15m" });
    const restaurantRefreshToken = jwt.sign({ id: newRestaurant._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });

    const cookieOptions = {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    };

    const accessOptions = {
      ...cookieOptions,
      maxAge: 1000 * 60 * 15, // 15 minutes for access token
    };

    const refreshOptions = {
      ...cookieOptions,
      maxAge: 1000 * 60 * 60 * 24, // 1 day for refresh token
    };

    res.cookie("restaurantAccessCookie", restaurantAccessToken, accessOptions); // Set access token in cookie
    res.cookie("restaurantRefreshCookie", restaurantRefreshToken, refreshOptions); // Set refresh token in cookie

    // Send success response with restaurant data
    res.json({ message: "Restaurant has been created successfully", restaurant: newRestaurant });
  } catch (error) {
    console.error(error);
    next(createHttpError(500, "Server error creating a restaurant."));
  }
}

//* Function to log in a restaurant
export async function loginRestaurant(req, res, next) {
  const { email, password } = req.body;

  try {
    const foundRestaurant = await Restaurant.findOne({ "basicInfo.contact.email": email }); // Find restaurant by email

    if (!foundRestaurant) {
      return next(createHttpError(404, "No restaurant found")); // Error if restaurant not found
    }

    // Compare passwords
    const matchPasswords = await bcrypt.compare(password, foundRestaurant.basicInfo.password);

    if (!matchPasswords) {
      return next(createHttpError(400, "Wrong Password, please try again!")); // Error if passwords don't match
    }

    await foundRestaurant.populate("orderHistory.order"); // Populate orderHistory with order details
    await foundRestaurant.populate("activeOrders.order"); // Populate activeOrders with order details

    // Generate JWT tokens for authentication
    const restaurantAccessToken = jwt.sign({ id: foundRestaurant._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "15m",
    });
    const restaurantRefreshToken = jwt.sign({ id: foundRestaurant._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    const cookieOptions = {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    };

    const accessOptions = {
      ...cookieOptions,
      maxAge: 1000 * 60 * 15, // 15 minutes for access token
    };

    const refreshOptions = {
      ...cookieOptions,
      maxAge: 1000 * 60 * 60 * 24, // 1 day for refresh token
    };

    res.cookie("restaurantAccessCookie", restaurantAccessToken, accessOptions); // Set access token in cookie
    res.cookie("restaurantRefreshCookie", restaurantRefreshToken, refreshOptions); // Set refresh token in cookie

    // Send restaurant data as response
    res.json({ message: "Logging in successful", restaurant: foundRestaurant });
  } catch (error) {
    console.error(error);
    next(createHttpError(500, "Server error logging in."));
  }
}

//* Function to update the profile of the restaurant
export async function updateRestaurant(req, res, next) {
  const { id, section } = req.params; // Extract the restaurant ID and the section to update from the request parameters
  let updateData = req.body[section]; // Extract the update data for the specific section from the request body

  // Check if the update data exists for the specified section
  if (!updateData) {
    return next(createHttpError(400, "Invalid section or no data provided")); // Return a 400 error if no data or invalid section is provided
  }

  try {
    // Ensure updateData is an object for basicInfo, contact, and address sections
    if (
      section === "basicInfo" ||
      section === "contact" ||
      section === "address" ||
      section === "digitalPresence" ||
      section === "openingHours"
    ) {
      if (typeof updateData === "string") {
        updateData = JSON.parse(updateData); // Convert the update data to an object if it's a string
      }
    }

    // Find the restaurant by ID
    const restaurant = await Restaurant.findById(id);

    if (!restaurant) {
      return next(createHttpError(404, "Restaurant not found")); // Return a 404 error if the restaurant is not found
    }

    // Update the specific section of the restaurant document
    switch (section) {
      case "basicInfo":
        restaurant.basicInfo = updateData;
        if (req.file) {
          const cloudImageUrl = await cloudinary.uploader.upload(req.file.path, {
            folder: "/delivEats-food-delivery-app",
          });
          restaurant.basicInfo.coverImage = cloudImageUrl.secure_url; // If an image file is provided, update the cover image path
        }
        break;
      case "contact":
        restaurant.basicInfo.contact = updateData; // Update the contact details
        break;
      case "address":
        restaurant.basicInfo.address = updateData; // Update the address details
        break;
      case "digitalPresence":
        restaurant.digitalPresence = updateData; // Update the digital presence (e.g., social media links)
        break;
      case "openingHours":
        restaurant.openAndCloseHours = updateData; // Update the opening and closing hours
        break;
      default:
        return next(createHttpError(400, "Invalid section")); // Return a 400 error if an invalid section is specified
    }

    // Save the updated restaurant document to the database
    await restaurant.save();

    // Populate order history and active orders with related order details before sending the response
    await restaurant.populate("orderHistory.order");
    await restaurant.populate("activeOrders.order");

    // Send the updated restaurant document as the response
    res.json(restaurant);
  } catch (error) {
    console.error(error);
    return next(createHttpError(500, "Server error updating restaurant"));
  }
}

//* Function to handle image uploads
export async function uploadImage(req, res, next) {
  try {
    // Check if an image file was uploaded
    if (!req.file) {
      return next(createHttpError(400, "No image file uploaded")); // Return a 400 error if no image file is provided
    }

    const cloudImage = await cloudinary.uploader.upload(req.file.path, {
      folder: "/delivEats-food-delivery-app",
    });

    // console.log(cloudImage);

    const cloudImageUrl = cloudImage.secure_url;
    // const imageUrl = req.file.path; // Construct the image URL or path

    // Send the image URL as the response
    res.json({ cloudImageUrl });
  } catch (error) {
    console.log(error);
    return next(createHttpError(500, "Server error uploading image"));
  }
}

//* Function to update the menu of the restaurant
export async function updateRestaurantMenu(req, res, next) {
  const { id } = req.params;
  const { menu, keywords } = req.body;

  try {
    const restaurant = await Restaurant.findById(id); // Find the restaurant by its ID

    if (restaurant) {
      restaurant.menu = menu; // Update the restaurant's menu

      if (keywords) {
        restaurant.keywords = keywords; // Update the restaurant's keywords if provided
      }

      await restaurant.save(); // Save the updated restaurant document

      // Populate order history and active orders with related order details before sending the response
      await restaurant.populate("orderHistory.order");
      await restaurant.populate("activeOrders.order");

      // Send the updated restaurant document as the response
      res.json(restaurant);
    } else {
      return next(createHttpError(404, "Restaurant not found")); // Return a 404 error if the restaurant is not found
    }
  } catch (error) {
    console.error(error);
    return next(createHttpError(500, "Server error updating restaurant menu"));
  }
}

//* Function to update the special offers of the restaurant
export async function updateRestaurantOffers(req, res, next) {
  const { id } = req.params;
  const { offer } = req.body;

  try {
    const restaurant = await Restaurant.findById(id); // Find the restaurant by its ID

    if (restaurant) {
      restaurant.promotionalInfo.currentOffers = offer; // Update the restaurant's current offers

      await restaurant.save(); // Save the updated restaurant document

      // Populate order history and active orders with related order details before sending the response
      await restaurant.populate("orderHistory.order");
      await restaurant.populate("activeOrders.order");

      // Send the updated restaurant document as the response
      res.json(restaurant);
    } else {
      return next(createHttpError(404, "Restaurant not found")); // Return a 404 error if the restaurant is not found
    }
  } catch (error) {
    console.error(error);
    return next(createHttpError(500, "Server error updating restaurant offers"));
  }
}

//* Function to update the order status of the restaurant
export const updateOrderStatus = async (req, res) => {
  const { orderId, status } = req.body; // Extract the order ID and new status from the request body

  try {
    // Find the restaurant that has the specified active order
    const restaurant = await Restaurant.findOne({ "activeOrders.order": orderId });

    if (!restaurant) {
      return next(createHttpError(404, "Order not found")); // Return a 404 error if the order is not found
    }

    // Find the index of the order in the active orders array
    const orderIndex = restaurant.activeOrders.findIndex((order) => order.order.toString() === orderId);

    if (orderIndex === -1) {
      return next(createHttpError(404, "Order not found")); // Return a 404 error if the order is not found
    }

    // Update the order status and save the current timestamp
    restaurant.activeOrders[orderIndex].orderStatus = status;
    restaurant.activeOrders[orderIndex].statusTimestamp = new Date(); // Save the current timestamp

    // Save the updated restaurant document
    await restaurant.save();

    await restaurant.populate("orderHistory.order"); // Populate the order history with related order details
    await restaurant.populate("activeOrders.order"); // Populate the active orders with related order details

    // Emit a socket event to notify clients about the updated order status
    io.to(`order_${orderId}`).emit("orderStatusUpdated", {
      updatedOrderId: orderId,
      status,
      timestamp: restaurant.activeOrders[orderIndex].statusTimestamp,
    });

    console.log(`Emitting orderStatusUpdated for orderId: ${orderId}, status: ${status}`);

    // Send a success message with the updated timestamp
    res.status(200).json({
      message: "Order status updated successfully",
      timestamp: restaurant.activeOrders[orderIndex].statusTimestamp,
    });
  } catch (error) {
    console.error(error);
    return next(createHttpError(500, "Server error, failed to update order status"));
  }
};

//* Function to get the order history of the restaurant
export async function getRestaurantOrderHistory(req, res, next) {
  const { id } = req.params;

  try {
    const restaurant = await Restaurant.findById(id); // Find the restaurant by its ID

    if (!restaurant) {
      return next(createHttpError(404, "No restaurant found")); // Return a 404 error if the restaurant is not found
    }

    // Filter orders with status "Delivery Completed"
    const completedOrders = restaurant.activeOrders.filter((order) => order.orderStatus === "Delivery Completed");

    const options = {
      new: true,
      runValidators: true,
    };

    // Move the completed orders from active orders to order history
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      id,
      {
        $push: { orderHistory: { $each: completedOrders } },
        $pull: { activeOrders: { orderStatus: "Delivery Completed" } },
      },
      options
    );

    // Populate the order history and active orders with related order details before sending the response
    await updatedRestaurant.populate("orderHistory.order");
    await updatedRestaurant.populate("activeOrders.order");

    // Send the updated restaurant document as the response
    res.json(updatedRestaurant);
  } catch (error) {
    console.error(error);
    return next(createHttpError(500, "Server error, failed to get restaurant history"));
  }
}

//* Function to delete the account of the restaurant
export async function deleteRestaurantAccount(req, res, next) {
  const { id } = req.params;

  try {
    await Restaurant.findByIdAndDelete(id); // Delete the restaurant document by its ID
    //*removed code
    // await SearchedRestaurant.findOneAndDelete({ restaurantId: id }); // Delete the associated record from the SearchedRestaurant collection

    // Send a success message after deletion
    res.status(200).json({
      message: `Your Account has been deleted successfully`,
    });
  } catch (error) {
    console.error(error);
    return next(createHttpError(500, "Server error deleting your account"));
  }
}

//* Function to delete an order from the order history of the restaurant
export async function deleteOrder(req, res, next) {
  const { id, orderId } = req.params;

  try {
    const restaurant = await Restaurant.findById(id); // Find the restaurant by its ID
    if (!restaurant) {
      return next(createHttpError(404, "Restaurant not found")); // Return a 404 error if the restaurant is not found
    }

    // Remove the specific order from the order history
    restaurant.orderHistory = restaurant.orderHistory.filter((order) => order._id.toString() !== orderId);

    // Save the updated restaurant document
    await restaurant.save();

    // Populate the order history and active orders with related order details before sending the response
    await restaurant.populate("orderHistory.order");
    await restaurant.populate("activeOrders.order");

    // Send a success message with the updated restaurant data
    res.json({
      message: "Order successfully deleted",
      restaurant: restaurant,
    });
  } catch (error) {
    console.error(error);
    return next(createHttpError(500, "Server error deleting order"));
  }
}

//* Function to delete the order history of the restaurant
export async function deleteOrderHistory(req, res, next) {
  const { id } = req.params;

  try {
    const restaurant = await Restaurant.findById(id); // Find the restaurant by its ID

    if (!restaurant) {
      return next(createHttpError(404, "No restaurant found")); // Return a 404 error if the restaurant is not found
    }

    // Clear the order history array
    restaurant.orderHistory = [];

    // Save the updated restaurant document
    await restaurant.save();

    // Populate the order history and active orders with related order details before sending the response
    await restaurant.populate("orderHistory.order");
    await restaurant.populate("activeOrders.order");

    // Send a success message with the updated restaurant data
    res.json({ message: "Order history successfully deleted", restaurant: restaurant });
  } catch (error) {
    console.log(error);
    next(createHttpError(500, "Order history could not be deleted"));
  }
}

export async function getFavoriteRestaurant(req, res, next) {
  const { id } = req.params;

  try {
    const foundRestaurant = await Restaurant.findById(id);

    if (!foundRestaurant) {
      return next(createHttpError(404, "No restaurant found"));
    }

    res.json(foundRestaurant);
  } catch (error) {
    console.log(error);
    next(createHttpError(500, "Server error getting the restaurant"));
  }
}

export async function getOrderIdDetails(req, res, next) {
  const { orderId } = req.params;

  try {
    const restaurantWithOrder = await OrderHistory.findById(orderId);

    if (!restaurantWithOrder) {
      return next(createHttpError(404, "There is no restaurant with that order id."));
    }

    const restaurant = await restaurantWithOrder.populate("restaurantId");
    // console.log(restaurant);

    const orderDetails = {
      restaurantId: restaurant.restaurantId._id,
      items: restaurant.items,
      restaurantInfo: restaurant.restaurantId,
    };

    // console.log("Order Details:", orderDetails);

    res.json(orderDetails);
  } catch (error) {
    console.log(error);
    return next(createHttpError(500, "Server error getting the order details"));
  }
}
