import express from "express";
import orderController from "../controller/adminOrder.controller.js";
import authenticate from "../middleware/authenticate.js";

const router = express.Router();

router.get("/", authenticate, orderController.getAllOrders);
router.put("/:orderId/confirmed", authenticate, orderController.confirmedOrders);    
router.put("/:orderId/ship", authenticate, orderController.shippOrders);    
router.put("/:orderId/deliver", authenticate, orderController.deliverOrders);    
router.put("/:orderId/cancel", authenticate, orderController.cancelledOrders);    
router.put("/:orderId/delete", authenticate, orderController.deleteOrders);    

export default router;  