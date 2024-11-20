import { Grid } from "@mui/material";
import React from "react";
import Achivement from "./Achivement.js";
import Monthlyoverview from "./Monthlyoverview.js";
import OrderTableView from "../view/OrderTableViews.js";
import ProductsTable from "./ProductTable.js";
import ProductsTableViews from "../view/ProductsTableViews.js";

const AdminDashboard = () => {
  return (
    <div className="p-10">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <div className="shadow-lg shadow-gray-600">
            <Achivement />
          </div>
        </Grid>

        <Grid item xs={12} md={8}>
          <div className="shadow-lg shadow-gray-600">
            <Monthlyoverview />
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div className="shadow-lg shadow-gray-600">
            <OrderTableView />
          </div>
        </Grid>
        

        <Grid item xs={12} md={6}>
          <div className="shadow-lg shadow-gray-600">
            <ProductsTableViews />
          </div>
        </Grid>

      </Grid>
    </div>
  );
};

export default AdminDashboard;
