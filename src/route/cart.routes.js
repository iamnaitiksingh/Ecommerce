import express from "express";
import cartController from "../controller/cart.controller.js";
const router = express.Router();

import authenticate from "../middleware/authenticate.js";

router.get("/", authenticate, cartController.findUserCart);
router.put("/add", authenticate, cartController.addItemToCart);

export default router;  
