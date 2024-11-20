import express from "express";
import cors from "cors";
import authRouters from "../src/route/auth.route.js";
import userRouters from "../src/route/user.route.js";
import productRouters from "../src/route/product.routes.js";
import adminProductRouter from "../src/route/adminProduct.routes.js";
import cartRouter from "../src/route/cart.routes.js";
import cartItemRouter from "../src/route/cartItem.route.js";
import orderRouter from "../src/route/order.routes.js";
import adminOrderRouter from "../src/route/adminOrder.route.js";
import reviewRouter from "../src/route/review.routes.js";
import ratingRouter from "../src/route/rating.routes.js";
import paymentRouter from "./route/payment.routes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res
    .status(200)
    .send({ message: "Welcome to  ecommerce api  -  node ", status: true });
});

app.use("/auth", authRouters);
app.use("/api/users", userRouters);

app.use("/api/products", productRouters);
app.use("/api/admin/products", adminProductRouter);
app.use("/api/cart", cartRouter);
app.use("/api/cart_items", cartItemRouter);
app.use("/api/orders", orderRouter);
app.use("/api/admin/orders", adminOrderRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/ratings", ratingRouter);
app.use("/api/payments", paymentRouter);

export default app;
