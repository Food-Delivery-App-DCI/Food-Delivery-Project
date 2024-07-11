import User from "../models/UserModel.js";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function registerUser(req, res, next) {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return next(createHttpError(400, "All fields are required"));
  }

  try {
    const foundUser = await User.findOne({ firstName, lastName, email });

    if (!foundUser) {
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({ firstName, lastName, email, password: hashedPassword });

      res.status(201).json({
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
      });
    } else {
      return next(createHttpError(409, "User already exists"));
    }
  } catch (error) {
    next(createHttpError(500, "Registration unsuccessful"));
  }
}

export async function loginUser(req, res, next) {
  const { email, password } = req.body;

  try {
    const foundUser = await User.findOne({ email });

    if (foundUser) {
      const matchPasswords = await bcrypt.compare(password, foundUser.password);

      if (!matchPasswords) {
        return next(createHttpError(400, "Wrong Password, please try again!"));
      }

      res.json({
        id: foundUser._id,
        firstName: foundUser.firstName,
        lastName: foundUser.lastName,
        email: foundUser.email,
      });
    } else {
      return next(createHttpError(404, "No user found"));
    }
  } catch (error) {
    next(createHttpError(500, "login unsuccessful"));
  }
}

export async function updateUser(req, res, next){
  const { firstName, lastName, email, password } = req.body;
  const { userId } = req.params;
  console.log(userId);
  try {
    const user = await User.findById(userId);
    if (user) {
      const options = {
        new: true,
        runValidators: true
      }
      const updatedUser = await User.findByIdAndUpdate(userId, {
        firstName, lastName, email, password
      }, options)
      res.status(200).json({message: `${updatedUser.firstName} updated successfully`})

    } else {
      return next(createHttpError(404, "User not found"))
    }

  } catch (error) {
    res.status(400).send(`Error updating user`);
    
  }
}

export async function deleteUser(req, res, next){
  const { userId } = req.params;
  try {
    await User.findByIdAndDelete(userId);
    res.status(200).send(`User deleted successfully`);
  } catch (error) {
    res.status(400).send(`Error deleting user`);
  }
}

export async function getUserData(req, res, next){
  const { userId } = req.params;
  try {
    const user = await User.findById(userId)
    if (user){
      res.json({
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      })
    } else {
      return next(createHttpError(404, "User not found"));
    }
  } catch (error) {
    return next(createHttpError(500, "Server error"));
  }
}