import userService from "../services/user.service.js";
import jwtProvider from "../config/jwtProvider.js";
import bcrypt from "bcrypt";
import cartService from "../services/cart.service.js";

const register = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);

    const jwt = jwtProvider.generateToken(user._id);
    await cartService.createCart(user);
    return res.status(200).send({ jwt, message: "register success" });
  } catch (error) {
    // console.log(error);
    return res.status(500).send({ error: error.message });
  }
};

//  Login

const login = async (req, res) => {
  const { password, email } = req.body;

  try {
    const user = await userService.getUserByEmail(email);
    if (!user) {
      return res
      .status(404)
      .send({ message: "user not found with email :  ", email });
    }





    const isPasswordValid = await bcrypt.compare(password, user.password); // user.password is hashed password
    if (!isPasswordValid) {
      return res.status(401).send({ message: "Invalid Password..." });
    }
    const jwt = jwtProvider.generateToken(user._id);
    return res.status(200).send({ jwt, message: "login SuccessFully" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
export default { register, login };
