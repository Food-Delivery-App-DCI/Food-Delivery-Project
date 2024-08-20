import { Schema, model } from "mongoose";

const orderItemsSchema = new Schema({
  name: { type: String, required: true },
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

const orderHistorySchema = new Schema(
  {
    restaurantName: { type: String, default: "No information" },
    restaurantAddress: { type: String, default: "No address information" },
    restaurantId: {
      type: Schema.Types.ObjectId,
      ref: "Restaurant",
    },
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
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const OrderHistory = model("OrderHistory", orderHistorySchema);

export default OrderHistory;
