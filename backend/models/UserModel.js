import { Schema, model } from "mongoose";

const orderItemsSchema = new Schema({
  itemName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  description: { type: String, required: true },
});

const paymentDetailsSchema = new Schema({
  paymentMethod: { type: String, required: true },
  chargedAmount: { type: Number, required: true },
});

const additionalInfoSchema = new Schema({
  orderType: { type: String, required: true },
  orderStatus: { type: String, required: true },
});

const historySchema = new Schema(
  {
    restaurantName: { type: String, required: true },
    items: {
      type: [orderItemsSchema],
      required: true,
    },
    totalSum: { type: Number, required: true },
    paymentDetails: {
      type: paymentDetailsSchema,
      required: true,
    },
    additionalInfo: {
      type: additionalInfoSchema,
      required: true,
    },
  },
  { timestamps: true }
);

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
    orderHistory: {
      type: [historySchema],
      default: [],
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;

// const test = [
//   {
//     restaurantName: "Den Home Restaurant",
//     items: [
//       {
//         itemName: "Pizza",
//         price: 24.0,
//         quantity: 2,
//       },
//       {
//         itemName: "Bread",
//         price: 24.0,
//         quantity: 2,
//       },
//     ],
//     totalSum: 48.0,
//     paymentDetails: {
//       paymentMethod: "Paypal",
//       chargedAmount: 48.0,
//     },
//     additionalInfo: {
//       orderType: "Delivery",
//       orderStatus: "Delivered",
//     },
//   },
// ];
