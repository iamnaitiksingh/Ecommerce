// const paymentService = require("../services/paymentService.js");
import paymentService from "../services/paymentService.js"

const createPaymentLink = async (req, res) => {
  console.log("1")
  try {
    console.log(req.params.id)
    
    const PaymentLink = await paymentService.createPaymentLink(req.params.id);

    // console.log("3")
    // console.log("PaymentLink ", PaymentLink)

    return res.status(200).send(PaymentLink);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updatePaymentInformation = async (req, res) => {
  try {
    await paymentService.updatePaymentInformation(req.query);

    return res
      .status(200)
      .send({ message: "Payment information updated", status: true });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export default {
  createPaymentLink,
  updatePaymentInformation,
};
