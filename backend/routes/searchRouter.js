import { Router } from "express";
import { getAllRestaurants /* getSearchedRestaurants */ } from "../controllers/restaurantsController.js";

const router = Router();

router.post("/restaurants", getAllRestaurants);
// router.get("/getRestaurants", getSearchedRestaurants);

export default router;
