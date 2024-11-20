// import shipOrder from "../services/orderService.js";
// import confirmedOrder from "../services/orderService.js";
// import cancelledOrder from "../services/orderService.js";
// import deleteOrder from "../services/orderService.js";
// import deliverOrder from "../services/orderService.js";
// import getAllOrder from "../services/orderService.js";
import orderService from "../services/orderService.js";

const getAllOrders = async (req, res) => {
  try {
    const orders = await orderService.getAllOrder();
    // console.log("orders ", orders[5]);
    return res.status(200).send(orders);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error.message });
  }
};

const confirmedOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await orderService.confirmedOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const shippOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await orderService.shipOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deliverOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await orderService.deliverOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const cancelledOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await orderService.cancelledOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deleteOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await orderService.deleteOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
export default {
  getAllOrders,
  confirmedOrders,
  shippOrders,
  deliverOrders,
  cancelledOrders,
  deleteOrders,
};
