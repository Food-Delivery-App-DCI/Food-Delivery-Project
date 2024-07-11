import { Router } from "express";
import { registerUser, loginUser, updateUser, deleteUser, getUserData } from "../controllers/userController.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/update/:userId", updateUser);
router.delete("/delete/:userId", deleteUser);
router.get("/getData/:userId", getUserData);

export default router;
