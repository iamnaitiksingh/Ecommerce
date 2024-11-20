import express from "express";
const router = express.Router();

import productController from "../controller/product.controller.js";
import authenticate from "../middleware/authenticate.js";

router.get("/", authenticate, productController.getAllProducts);
router.get("/id/:id", authenticate, productController.findProductById);

export default router;
