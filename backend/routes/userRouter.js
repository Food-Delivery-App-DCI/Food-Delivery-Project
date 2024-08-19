import { Router } from "express";

import {
  registerUser,
  loginUser,
  checkAuthentication,
  updateUser,
  deleteUser,
  getUserData,
  addAddress,
  deleteAddress,
  editAddress,
  getAllAddresses,
  deleteOrderHistoryOfUser,
  deleteOrder,
  setFavorite,
  getFavorites,
} from "../controllers/userController.js";
import { authenticateToken } from "../middlewares/authenticateToken.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/update/:userId", updateUser);
router.delete("/delete/:userId", deleteUser);
router.get("/getData/:userId", getUserData);
router.post("/addAddress/:id", addAddress);
router.delete("/deleteAddress/:userId/addresses/:id", deleteAddress);
router.post("/editAddress/:userId/addresses/:id", editAddress);
router.get("/getAllAddresses/:id", getAllAddresses);
router.delete("/deleteOrderHistory/:id", deleteOrderHistoryOfUser);
router.delete("/deleteOrder/:userId/:orderId", deleteOrder);
router.post("/favorite/:userId/:id", setFavorite);
router.get("/get-favorites/:id", getFavorites);

router.use(authenticateToken);
router.get("/check-auth", checkAuthentication);

export default router;
