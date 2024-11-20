import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  confirmOrder,
  deleteOrder,
  deliveredOrder,
  getOrders,
  shipOrder,
} from "../../State/Admin/Order/Action";
import {
  Card,
  CardHeader,
  Avatar,
  Button,
  AvatarGroup,
  MenuItem,
  Menu,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const OrderTable = () => {
  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);

  const handleClick = (event, index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = event.currentTarget;
    setAnchorEl(newAnchorElArray);
  };

  const handleClose = (index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = null;
    setAnchorEl(newAnchorElArray);
  };

  const dispatch = useDispatch();
  const { adminOrder } = useSelector((store) => store);
  useEffect(() => {
    dispatch(getOrders());
  }, [adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered, adminOrder.deleteOrder]);

  const handleShipedOrder = (orderId) => {
    // console.log("handleShipedOrder => ", orderId )
    dispatch(shipOrder(orderId));
    // console.log("shipOrder --> ",  shipOrder(orderId))
    handleClose();
  };
  
  const handleConfirmedOrder = (orderId) => {
    // console.log("handleConfirmedOrder => ", orderId )
    dispatch(confirmOrder(orderId));
    // console.log("confirmOrder --> ",  confirmOrder(orderId))
    handleClose();
  };
  
  const handleDeliveredOrder = (orderId) => {
    // console.log("handleDeliveredOrder => ", orderId )
    dispatch(deliveredOrder(orderId));
    // console.log("deliveredOrder --> ",  deliveredOrder(orderId))
    handleClose();
  };
  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
  };

  // console.log("admin Orders --->  ", adminOrder.orders[0]);

  return (
    <div className="p-5">
      <Card className="mt-2">
        <CardHeader title="All Products" />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Image</TableCell>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Id </TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Update </TableCell>
                <TableCell align="center">Delete </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder.orders?.map((item, index) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {/* imageUrl */}

                  <TableCell align="left" className="">
                    <AvatarGroup max={3} sx={{ justifyContent: "start" }}>
                      {item?.orderItems?.map((orderItem) => (
                        <Avatar src={orderItem?.product?.imageUrl}></Avatar>
                      ))}
                    </AvatarGroup>
                  </TableCell>

                  {/* title */}

                  <TableCell align="right">
                    <AvatarGroup>
                      {item?.orderItems?.map((orderItem) => (
                        <span> {orderItem?.product.title} </span>
                      ))}
                    </AvatarGroup>
                  </TableCell>

                  {/* _Id */}

                  <TableCell align="left">
                    <AvatarGroup>
                      {item?.orderItems?.map((orderItem) => (
                        <span> {orderItem?.product._id} </span>
                      ))}
                    </AvatarGroup>
                  </TableCell>

                  {/* price */}

                  <TableCell align="center">
                    <AvatarGroup>
                      {item?.orderItems?.map((orderItem) => (
                        <span> {orderItem?.product.price} </span>
                      ))}
                    </AvatarGroup>
                  </TableCell>

                  {/* Status */}

                  <TableCell>
                    <p
                      className={`text-white  pl-12 py-2   rounded-full  ${
                        item.orderStatus === "CONFIRMED"
                          ? "bg-[#369236]"
                          : item.orderStatus === "SHIPPED"
                          ? "bg-[#4141ff]"
                          : item.orderStatus === "PLACED"
                          ? "bg-[#02B290]"
                          : item.orderStatus == "PENDING"
                          ? "bg-[gray]"
                          : "bg-[#025720]"
                      }`}
                    >
                      {item.orderStatus}
                    </p>
                  </TableCell>

                  {/* Update	 */}

                  <TableCell>
                    <Button
                      id="basic-button"
                      aria-haspopup="true"
                      onClick={(event) => handleClick(event,index)}
                      arial-controls={`basic-menu-${item.id}`}
                      arial-expanded={Boolean(anchorEl[index])}
                    >
                      Status
                    </Button>
                    <Menu
                      id={`basic-menu -${item.id}`}
                      anchorEl={anchorEl[index]}
                      open={Boolean(anchorEl[index])}
                      onClose={() => handleClose(index)}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={() => handleConfirmedOrder(item._id)}>
                        Confirmed Order
                      </MenuItem>
                      <MenuItem onClick={() => handleShipedOrder(item._id)}>
                        Shipped Order
                      </MenuItem>
                      <MenuItem onClick={() => handleDeliveredOrder(item._id)}>
                        Delivered Order
                      </MenuItem>
                    </Menu>
                  </TableCell>

                  <TableCell align="left">
                    <Button
                      onClick={() => handleDeleteOrder(item.id)}
                      variant="outlined"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default OrderTable;
