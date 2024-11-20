import express from "express";
const router = express.Router();
import ratingController from "../controller/rating.controller.js";
import authenticate from "../middleware/authenticate.js";

router.post("/create", authenticate, ratingController.createRating);
router.put(
  "/product/:productId",
  authenticate,
  ratingController.getAllRatings
);

export default router;
