import Footer from "./customer/components/Footer/Footer.js";
import Navigation from "./customer/components/Navigation/Navigation.js";
import Homepage from "./customer/pages/HomePages/Homepage.js";
import Product from "../src/customer/components/product/product.js";
import ProductDetail from "./customer/components/productDetail/ProductDetail.js";
import Cart from "./customer/components/cart/Cart.js";
import Checkout from "../src/customer/components/checkout/Checkout.js";
import Order from "./customer/Order/Order.js";
import OrderDetail from "./customer/Order/OrderDetail.js";
import { Route, Routes } from "react-router-dom";
import CustomerRoutes from "./Router/CustomerRoutes.js";
import AdminRouters from"./Router/AdminRouter.js"

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<CustomerRoutes />}></Route>
        <Route path="/admin/*" element={<AdminRouters/> }> </Route>
        </Routes>
    </>
  );
}

export default App;
