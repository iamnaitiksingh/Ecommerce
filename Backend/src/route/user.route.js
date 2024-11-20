import express from "express";

import userController from "../controller/user.controller.js";
const router = express.Router();

router.get("/profile", userController.getUserProfile);
router.get("/", userController.getAllUsers);

export default router;
