import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action.js";
import CartItem from "./CartItem.js";

const Cart = () => {
  const navigate = useNavigate();

  const { cart } = useSelector((store) => store);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };

  useEffect(() => {
    dispatch(getCart());
  }, [cart.updateCartItem, cart.deleteCartItem]);
  return (
    <>
      <div className="lg:grid grid-cols-3 lg:px-16 relative ">
        <div className="col-span-2">
          {cart.cart?.cartItems.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
        </div>

        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
          <div className="border">
            <p className="uppercase font-bold opacity-60  pb-4 ">
              price details
            </p>
            <hr />

            <div className="space-y-3 font-semibold  mb-10">
              <div className="flex justify-between pt-3 text-black ">
                <span>Price</span>
                <span> ₹{cart.cart?.totalPrice}</span>
              </div>
              <div className="flex justify-between pt-3 text-black ">
                <span>Discount</span>
                <span className="text-green-600">
                  {" "}
                  -₹{cart.cart?.discounte}{" "}
                </span>
              </div>
              <div className="flex justify-between pt-3 text-black ">
                <span>Delivery Charge</span>
                <span className="text-green-600"> Free </span>
              </div>
              <div className="flex justify-between pt-3 text-black font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">
                  ₹{cart.cart?.totalDiscountedPrice}{" "}
                </span>
              </div>
            </div>

            <Button
              onClick={handleCheckout}
              variant="contained"
              className="w-full mt-5"
              sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
