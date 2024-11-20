// const express = require("express");
import express from "express";
import authenticate from "../middleware/authenticate.js";
import paymentController from "../controller/payment.controller.js";

const router = express.Router(); // Initialize the router

router.post("/:id", authenticate, paymentController.createPaymentLink);

router.get("/", authenticate, paymentController.updatePaymentInformation);

export default router;
