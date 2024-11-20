import express from "express";
const router = express.Router();
import orderController from "../controller/order.controller.js";
import authenticate from "../middleware/authenticate.js";


router.post("/", authenticate, orderController.createOrder);
router.get("/user", authenticate, orderController.orderHistory);
router.get("/:id", authenticate, orderController.findOrderById);



export default router;
