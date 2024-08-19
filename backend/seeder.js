import { restaurants } from "./restaurants2.js";
import Restaurant from "./models/RestaurantModel.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const DEFAULT_PASSWORD = "abcd1234A!";

try {
  console.log("Attempting to seed db...");

  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    console.log("Database is connected!");
  } catch (error) {
    console.log("Error connecting to the database", error);
  }

  const hashedPassword = await bcrypt.hash(DEFAULT_PASSWORD, 10);

  const restaurantsWithPassword = restaurants.map((restaurant) => ({
    ...restaurant,
    basicInfo: {
      ...restaurant.basicInfo,
      password: hashedPassword,
    },
  }));

  await Restaurant.deleteMany({});

  await Restaurant.create(restaurantsWithPassword);

  console.log("DB seeded!");

  // Exit process with "success" code
  process.exit(0);
} catch (error) {
  console.log(error);

  // Exit process with "failure" code
  process.exit(1);
}
