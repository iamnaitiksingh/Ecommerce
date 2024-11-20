import orderService from "../services/orderService.js";

const createOrder = async (req, res) => {
  try {
    const user = req.user;
        if (!user) {
      return res.status(400).send({ error: "User not authenticated" });
    }
    
    let createdOrder = await orderService.createOrder(user, req.body);
    console.log("createdOrder",createdOrder)
    // console.log('createOrder',createdOrder);

    return res.status(201).send(createdOrder);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error.message });
    
  }
};

const findOrderById = async (req, res) => {
  const user = await req.user;
  // console.log("userDI",user._id)  
  // console.log("req.params._id => ",req.params.id)  // undefined
  try {
    let createdOrder = await orderService.findOrderById(req.params.id);
    console.log("createdOrder=> ", createdOrder)
    return res.status(201).send(createdOrder);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const orderHistory = async (req, res) => {
  const user = await req.user;
  try {
    let createdOrder = await orderService.usersOrderHistory(user._id);
    return res.status(201).send(createdOrder);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export default { createOrder, findOrderById, orderHistory };
