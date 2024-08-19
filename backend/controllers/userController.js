import User from "../models/UserModel.js";
import Restaurant from "../models/RestaurantModel.js";
// import SearchedRestaurant from "../models/SearchedRestaurantsModel.js";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//* Function to register a new user
export async function registerUser(req, res, next) {
  const { firstName, lastName, email, password } = req.body;

  // Validate that all required fields are provided
  if (!firstName || !lastName || !email || !password) {
    return next(createHttpError(400, "All fields are required"));
  }

  try {
    const foundUser = await User.findOne({ firstName, lastName, email }); // Check if a user with the same name and email already exists

    // If the user does not exist, proceed to register a new user
    if (!foundUser) {
      const hashedPassword = await bcrypt.hash(password, 10); // Hash the user's password for secure storage

      // Create a new user with the hashed password and provided details
      const newUser = await User.create({ firstName, lastName, email, password: hashedPassword });

      // Populate the user's order history (initially empty) before returning the response
      await newUser.populate("orderHistory");
      // await newUser.populate("favoriteRestaurants");

      // Generate access and refresh tokens for the newly registered user
      const accessToken = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: "15m" });
      const refreshToken = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });

      const cookieOptions = {
        httpOnly: true, // Prevent client-side access to cookies
        secure: true, // Ensure cookies are sent over HTTPS only
        sameSite: "Strict", // Prevent cross-site request forgery (CSRF)
      };

      const accessOptions = {
        ...cookieOptions,
        maxAge: 1000 * 60 * 15, // 15-minute expiration for access token
      };

      const refreshOptions = {
        ...cookieOptions,
        maxAge: 1000 * 60 * 60 * 24, // 24-hour expiration for refresh token
      };

      // Set the access and refresh tokens as cookies in the response
      res.cookie("accessCookie", accessToken, accessOptions);
      res.cookie("refreshCookie", refreshToken, refreshOptions);

      // Return the newly registered user's details in the response
      res.status(201).json({
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        orderHistory: newUser.orderHistory,
        addresses: newUser.addresses,
        favoriteRestaurants: newUser.favoriteRestaurants.map((restaurantId) => restaurantId.toString()),
      });
    } else {
      return next(createHttpError(409, "User already exists")); // If the user already exists, return a conflict error
    }
  } catch (error) {
    console.error("Registration error:", error);
    next(createHttpError(500, "Registration unsuccessful"));
  }
}

//* Function to log in an existing user
export async function loginUser(req, res, next) {
  const { email, password } = req.body;

  try {
    const foundUser = await User.findOne({ email }); // Look for a user with the provided email address

    // If user is found, compare the provided password with the stored hashed password
    if (foundUser) {
      const matchPasswords = await bcrypt.compare(password, foundUser.password);

      // If passwords don't match, return an error
      if (!matchPasswords) {
        return next(createHttpError(400, "Wrong Password, please try again!"));
      }

      // Populate the user's order history before returning the response
      await foundUser.populate("orderHistory");
      // await foundUser.populate("favoriteRestaurants");

      // Generate access and refresh tokens for the logged-in user
      const accessToken = jwt.sign({ id: foundUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: "15m" });
      const refreshToken = jwt.sign({ id: foundUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });

      // Define secure cookie options for storing the tokens in the user's browser
      const cookieOptions = {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
      };

      // Set expiration options for access and refresh cookies
      const accessOptions = {
        ...cookieOptions,
        maxAge: 1000 * 60 * 15, // 15-minute expiration
      };

      const refreshOptions = {
        ...cookieOptions,
        maxAge: 1000 * 60 * 60 * 24, // 24-hour expiration
      };

      // Set the access and refresh tokens as cookies in the response
      res.cookie("accessCookie", accessToken, accessOptions);
      res.cookie("refreshCookie", refreshToken, refreshOptions);

      // Return the logged-in user's details in the response
      res.json({
        id: foundUser._id,
        firstName: foundUser.firstName,
        lastName: foundUser.lastName,
        email: foundUser.email,
        orderHistory: foundUser.orderHistory,
        addresses: foundUser.addresses,
        favoriteRestaurants: foundUser.favoriteRestaurants.map((restaurantId) => restaurantId.toString()),
      });
    } else {
      // If no user is found with the provided email, return a not found error
      return next(createHttpError(404, "No user found"));
    }
  } catch (error) {
    console.error("Login error:", error);
    next(createHttpError(500, "login unsuccessful"));
  }
}

//* Function to check authentication of the user
export async function checkAuthentication(req, res, next) {
  try {
    // Find the user by their ID from the request object
    const user = await User.findById(req.user._id);

    // If no user is found, return an authentication error
    if (!user) {
      return next(400, createHttpError("User not found, Authentication failed! Please login."));
    }

    // Populate the user's order history before returning the response
    await user.populate("orderHistory");
    // await user.populate("favoriteRestaurants");

    // Return the authenticated user's details in the response
    res.json({
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      // orderHistory: user.orderHistory,
      // addresses: user.addresses,
      favoriteRestaurants: user.favoriteRestaurants.map((restaurantId) => restaurantId.toString()),
    });
  } catch (error) {
    return next(createHttpError(500, "Authentication failed! Please login again."));
  }
}

//* Function to update the user details
export async function updateUser(req, res, next) {
  const { firstName, lastName, email, password } = req.body;
  const { userId } = req.params;

  try {
    const user = await User.findById(userId); // Find the user by their ID

    // If the user is found, proceed with the update
    if (user) {
      const hashedPassword = await bcrypt.hash(password, 10); // Hash the new password before updating

      const options = {
        new: true,
        runValidators: true,
      };

      // Update the user's details with the provided data
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        {
          firstName,
          lastName,
          email,
          password: hashedPassword,
        },
        options
      );

      // Populate the user's order history before returning the response
      await updatedUser.populate("orderHistory");
      // await updateUser.populate("favoriteRestaurants");

      // Return the updated user's details in the response
      res.status(201).json({
        id: updatedUser._id,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        email: updatedUser.email,
        message: `User updated successfully`,
        // orderHistory: updatedUser.orderHistory,
        // addresses: updatedUser.addresses,
        favoriteRestaurants: updatedUser.favoriteRestaurants.map((restaurantId) => restaurantId.toString()),
      });
    } else {
      return next(createHttpError(404, "User not found")); // If the user is not found, return a not found error
    }
  } catch (error) {
    console.error(error);
    return next(createHttpError(500, "Server error updating user"));
  }
}

export async function deleteUser(req, res, next) {
  const { userId } = req.params;
  try {
    await User.findByIdAndDelete(userId);
    res.status(200).json({
      message: `Your Account has been deleted successfully`,
    });
  } catch (error) {
    return next(createHttpError(500, "Server error deleting user"));
  }
}

export async function getUserData(req, res, next) {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (user) {
      await user.populate("orderHistory");
      // await user.populate("favoriteRestaurants");

      res.json({
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        // orderHistory: user.orderHistory,
        // addresses: user.addresses,
        favoriteRestaurants: user.favoriteRestaurants.map((restaurantId) => restaurantId.toString()),
      });
    } else {
      return next(createHttpError(404, "User not found"));
    }
  } catch (error) {
    return next(createHttpError(500, "Server error getting user data"));
  }
}

export async function addAddress(req, res, next) {
  const { label, address } = req.body;
  const { id } = req.params;

  if (!label || !address) {
    return next(createHttpError(400, "Label and address are required"));
  }

  try {
    const foundUser = await User.findById(id);

    if (!foundUser) {
      return next(createHttpError(404, "No user found"));
    }

    const options = {
      new: true,
      runValidators: true,
    };

    const updatedUser = await User.findByIdAndUpdate(id, { $push: { addresses: { label, address } } }, options);

    res.json({ addresses: updatedUser.addresses });
  } catch (error) {
    console.error(error);
    return next(createHttpError(500, "Server error adding address of user"));
  }
}

export async function deleteAddress(req, res, next) {
  const { userId, id } = req.params;

  try {
    const foundUser = await User.findById(userId);

    if (!foundUser) {
      return next(createHttpError(404, "No user found"));
    }

    foundUser.addresses = foundUser.addresses.filter((address) => address._id.toString() !== id);
    await foundUser.save();

    res.json({ addresses: foundUser.addresses });
  } catch (error) {
    console.error(error);
    return next(createHttpError(500, "Server error deleting address of user"));
  }
}

export async function editAddress(req, res, next) {
  const { editedAddress, editedLabel } = req.body;
  const { id, userId } = req.params;

  if (!editedAddress || !editedLabel) {
    return next(createHttpError(400, "Address and label are required"));
  }

  try {
    const foundUser = await User.findById(userId);

    if (!foundUser) {
      return next(createHttpError(404, "No user found"));
    }

    foundUser.addresses = foundUser.addresses.map((address) =>
      address._id.toString() === id ? { ...address, address: editedAddress, label: editedLabel } : address
    );
    await foundUser.save();

    res.json({ addresses: foundUser.addresses });
  } catch (error) {
    console.error(error);
    return next(createHttpError(500, "Server error editing address of user"));
  }
}

export async function getAllAddresses(req, res, next) {
  const { id } = req.params;

  try {
    const foundUser = await User.findById(id);

    if (!foundUser) {
      return next(createHttpError(404, "No user found"));
    }

    res.json({ addresses: foundUser.addresses });
  } catch (error) {
    console.error(error);
    return next(createHttpError(500, "Server error getting all addresses of user"));
  }
}

export async function deleteOrderHistoryOfUser(req, res, next) {
  const { id } = req.params;

  console.log(id);

  try {
    const foundUser = await User.findById(id);

    if (!foundUser) {
      return next(createHttpError(404, "No User found"));
    }

    // Clear the order history array
    foundUser.orderHistory = [];
    await foundUser.save();

    await foundUser.populate("orderHistory");
    // await foundUser.populate("favoriteRestaurants");

    res.json({ message: "Order history successfully deleted", orderHistory: foundUser.orderHistory });
  } catch (error) {
    console.log(error);
    next(createHttpError(500, "Order history could not be deleted"));
  }
}

export async function deleteOrder(req, res, next) {
  const { userId, orderId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return next(createHttpError(404, "User not found"));
    }
    // Remove the order from the order history
    user.orderHistory = user.orderHistory.filter((order) => order._id.toString() !== orderId);
    await user.save();

    // Optionally, repopulate orderHistory if needed
    await user.populate("orderHistory");
    // await user.populate("favoriteRestaurants");

    res.json({
      message: "Order successfully deleted",
      orderHistory: user.orderHistory,
    });
  } catch (error) {
    console.error(error);
    return next(createHttpError(500, "Server error deleting order"));
  }
}

export async function setFavorite(req, res, next) {
  const { isFavorited } = req.body;
  const { userId, id } = req.params;

  try {
    // Find the user by ID
    const foundUser = await User.findById(userId);

    if (!foundUser) {
      return next(createHttpError(404, "No user found"));
    }

    // Find the restaurant by ID to ensure it exists
    const restaurant = await Restaurant.findById(id);
    if (!restaurant) {
      return next(createHttpError(404, "No restaurant found"));
    }

    if (isFavorited) {
      // Add restaurant to favorites if not already present
      if (!foundUser.favoriteRestaurants.includes(restaurant._id)) {
        foundUser.favoriteRestaurants.push(restaurant._id);
      }
    } else {
      // Remove restaurant from favorites
      foundUser.favoriteRestaurants = foundUser.favoriteRestaurants.filter(
        (restaurantId) => restaurantId.toString() !== id
      );
    }

    await foundUser.save();

    // Send back the updated list of favorite restaurants with the restaurant documents populated
    const updatedUser = await User.findById(userId);

    await updatedUser.populate("orderHistory");
    // await updatedUser.populate("favoriteRestaurants");

    res.json({
      id: updatedUser._id,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
      orderHistory: updatedUser.orderHistory,
      addresses: updatedUser.addresses,
      favoriteRestaurants: foundUser.favoriteRestaurants.map((restaurantId) => restaurantId.toString()),
    });
  } catch (error) {
    console.error(error);
    return next(createHttpError(500, "Server error"));
  }
}

export async function getFavorites(req, res, next) {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (!user) {
      return next(createHttpError(404, "No user found"));
    }

    await user.populate("favoriteRestaurants");

    const favoriteRestaurants = user.favoriteRestaurants.map((restaurant) => ({
      _id: restaurant._id,
      basicInfo: restaurant.basicInfo,
      menu: restaurant.menu,
    }));

    res.json(favoriteRestaurants);
  } catch (error) {
    console.error(error);
    return next(createHttpError(500, "Server error getting favorite restaurants"));
  }
}
