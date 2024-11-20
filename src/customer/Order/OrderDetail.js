import React from "react";
import AdressCard from "../components/AdressCard/AdressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { StarIcon } from "@heroicons/react/24/outline";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetail = () => {
  return (
    <div className="px:5 lg:px-20">
      <div className="">
        <h1 className="font-bold text-xl py-7"> Delivery Address </h1>
        <AdressCard />
      </div>

      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>

      <Grid className="space-y-5" container>
        {[1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="">
                <img
                  className="w-[5rem] h-[5rem]  object-cover object-top"
                  src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
                  alt=""
                />
                <div className="space-y-2 ml-5">
                  <p className="font-semibold">
                    {" "}
                    Men Slim Mid Rise Black Jeans{" "}
                  </p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold ">
                    <span>Color : pink</span> <span>Size : M</span>{" "}
                  </p>
                  <p> Seller: linaria </p>
                  <p> ₹1099</p>
                </div>
              </div>
            </Grid>

            <Grid item>
              <Box className=" text-purple-500 ">
                <StarBorderIcon className="m-2" />

                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetail;
