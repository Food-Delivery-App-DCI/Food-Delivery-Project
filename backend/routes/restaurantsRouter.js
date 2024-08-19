import { Router } from "express";
import {
  registerRestaurant,
  loginRestaurant,
  updateRestaurant,
  getRestaurant,
  updateRestaurantMenu,
  updateOrderStatus,
  checkAuthenticationOfRestaurant,
  getRestaurantOrderHistory,
  deleteRestaurantAccount,
  uploadImage,
  deleteOrder,
  deleteOrderHistory,
  updateRestaurantOffers,
  getFavoriteRestaurant,
  getOrderIdDetails,
} from "../controllers/restaurantsController.js";
import { authenticateTokenOfRestaurant } from "../middlewares/authenticateToken.js";
import upload from "../middlewares/multerConfig.js";

const router = Router();

router.get("/check-auth", authenticateTokenOfRestaurant, checkAuthenticationOfRestaurant);

router.get("/:id", getRestaurant);
router.post("/register", registerRestaurant);
router.post("/login", loginRestaurant);
router.post("/update/profile/:id/:section", upload.single("image"), updateRestaurant);
router.post("/update/menu/:id", updateRestaurantMenu);
router.post("/update-order-status", updateOrderStatus);
router.post("/update/offers/:id", updateRestaurantOffers);
router.get("/get-restaurant-order-history/:id", getRestaurantOrderHistory);
router.delete("/deleteRestaurantAccount/:id", deleteRestaurantAccount);
router.post("/upload-image", upload.single("image"), uploadImage);
router.delete("/deleteOrder/:id/:orderId", deleteOrder);
router.delete("/deleteOrderHistory/:id", deleteOrderHistory);
router.get("/get-favorite-restaurant/:id", getFavoriteRestaurant);
router.get("/restaurant-with-order/:orderId", getOrderIdDetails);

export default router;
