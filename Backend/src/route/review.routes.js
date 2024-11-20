import express from "express";
const router = express.Router();
import reviewController from "../controller/review.controller.js";
import authenticate from "../middleware/authenticate.js";

router.post("/create", authenticate, reviewController.createReview);
router.get("/product/:productId", authenticate, reviewController.getAllReview);

export default router;
 