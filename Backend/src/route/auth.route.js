import express from "express";
import authController from "../controller/auth.controller.js";
const router = express.Router();

router.post("/signup", authController.register);
router.post("/signin", authController.login);

export default router;
