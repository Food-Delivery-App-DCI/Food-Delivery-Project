import { Schema, model } from "mongoose";

const addressesSchema = new Schema({
  label: { type: String, required: true },
  address: { type: String, required: true },
});

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    orderHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "OrderHistory",
      },
    ],
    addresses: {
      type: [addressesSchema],
      default: [],
    },
    //* new code
    favoriteRestaurants: [
      {
        type: Schema.Types.ObjectId,
        ref: "Restaurant",
      },
    ],
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
