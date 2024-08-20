import { Schema, model } from "mongoose";

const contactSchema = new Schema({
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
});

const addressSchema = new Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postalCode: { type: String, required: true },
});

const daysSchema = new Schema({
  monday: { type: String, default: "" },
  tuesday: { type: String, default: "" },
  wednesday: { type: String, default: "" },
  thursday: { type: String, default: "" },
  friday: { type: String, default: "" },
  saturday: { type: String, default: "" },
  sunday: { type: String, default: "" },
});

const defaultDays = {
  monday: "",
  tuesday: "",
  wednesday: "",
  thursday: "",
  friday: "",
  saturday: "",
  sunday: "",
};

const basicInfoSchema = new Schema({
  businessName: { type: String, required: true },
  businessId: { type: String, required: true },
  coverImage: {
    type: String,
    default:
      "https://img.freepik.com/free-vector/beautiful-vintage-restaurant-facade_23-2147635517.jpg?t=st=1722937567~exp=1722941167~hmac=bfc674eac2d353dc0d787456c3b7e6578591625bba4f1991e05273a11f8cef0e&w=1060",
  },
  owner: { type: String, required: true },
  password: { type: String, required: true },
  venueName: { type: String, required: true },
  contact: { type: contactSchema, required: true },
  address: { type: addressSchema, required: true },
});

const menuItemSchema = new Schema({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  image: {
    type: String,
    default:
      "https://img.freepik.com/free-vectortakeaway-packages-3d-vector-illustration-coffee-soda-cup-burger-fast-food-packs-from-restaurant-cartoon-style-isolated-white-background-fast-food-shop-menu-concept_778687-647.jpg?t=st=1722929708~exp=1722933308~hmac=69f1d3bbaaf8599aa23efb9000feb41a49ed194639a6708d5b43e0c1e14031fa&w=1060",
  },
});

const menuCategorySchema = new Schema({
  category: { type: String, required: true },
  items: { type: [menuItemSchema], required: true },
});

const digitalPresenceSchema = new Schema({
  photos: { type: [String], required: true, default: [] },
  socialMedia: {
    facebook: { type: String, required: true, default: "Social" },
    instagram: { type: String, required: true, default: "Social" },
  },
});

const offerSchema = new Schema({
  category: { type: String, required: true, default: "No category" },
  items: { type: [menuItemSchema], required: true, default: [] },
});

const promotionalInfoSchema = new Schema({
  currentOffers: { type: [offerSchema], required: true, default: [] },
  loyaltyPrograms: {
    type: String,
    required: true,
    default: "no loyalty program",
  },
});

const historySchema = new Schema(
  {
    order: {
      type: Schema.Types.ObjectId,
      ref: "OrderHistory",
    },
    date: {
      type: Date,
      default: Date.now,
    },
    customerName: {
      type: String,
      required: true,
    },
    customerEmail: {
      type: String,
      required: true,
    },
    customerAddress: {
      type: String,
      required: true,
    },
    orderStatus: {
      // Added this field
      type: String,
      required: true,
      default: "Pending",
    },
    statusTimestamp: {
      // Added this field
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const restaurantSchema = new Schema({
  basicInfo: { type: basicInfoSchema, required: true },
  openAndCloseHours: { type: daysSchema, default: defaultDays },
  keywords: { type: [String], required: true, default: [] },
  restaurantType: { type: [String], required: true, default: [] },
  menu: { type: [menuCategorySchema], required: true, default: [] },
  digitalPresence: {
    type: digitalPresenceSchema,
    required: true,
    default: {
      photos: ["no image"],
      socialMedia: {
        facebook: "Social",
        instagram: "Social",
      },
    },
  },
  promotionalInfo: {
    type: promotionalInfoSchema,
    /* required: true, */
    default: {
      currentOffers: [],
      loyaltyPrograms: "no loyalties",
    },
  },
  orderHistory: { type: [historySchema], default: [] },
  activeOrders: { type: [historySchema], default: [] },
});

const Restaurant = model("Restaurant", restaurantSchema);

export default Restaurant;
