import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "../customer/components/Navigation/Navigation";
import Homepage from "../customer/pages/HomePages/Homepage";
import Product from "../customer/components/product/product";
import Cart from "../customer/components/cart/Cart";
import Footer from "../customer/components/Footer/Footer";
import ProductDetail from "../customer/components/productDetail/ProductDetail";
import Checkout from "../customer/components/checkout/Checkout";
import Order from "../customer/Order/Order";
import OrderDetail from "../customer/Order/OrderDetail";
import PaymentSuccess from "../customer/components/Payment/PaymentSuccess";

const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>

      <Routes>
        <Route path="/login" element={<Homepage />}></Route>
        <Route path="/register" element={<Homepage />}></Route>

        <Route path="/" element={<Homepage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/:lavelOne/:lavelTwo/:lavelThree"
          element={<Product />}
        ></Route>
        <Route path="/product/:productId" element={<ProductDetail />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetail />}></Route>
        <Route path="/payment/:orderId" element={<PaymentSuccess />}></Route>
      </Routes>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRoutes;
