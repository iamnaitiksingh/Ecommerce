import User from "../models/user.models.js";
import bcrypt from "bcrypt";
import jwtProvider from "../config/jwtProvider.js";

const createUser = async (userData) => {
  try {
    let { firstName, lastName, email, password } = userData;

    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      throw new Error("user already exist with email : ", email);
    }

    password = await bcrypt.hash(password, 8);

    const user = await User.create({ firstName, lastName, email, password });

    // console.log("created user", user);

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};
//                   Topic  =>   findById

const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId).select('-password');
    if (!user) {
      throw new Error("user not found with id : ", userId);
    } else {
      return user;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

//                   Topic  =>   findById

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("user not found with email : ", email);
    } else {
      return user;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

//        Token

const getUserProfileByToken = async (token) => {
  try {
    const userId = jwtProvider.getUserIdFromToken(token);

    const user = await findUserById(userId);
    // console.log("user ", user);

    if (!user) {
      throw new Error("user not found with id : ", userId);
    } else {
      return user;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllusers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default {
  createUser,
  findUserById,
  getUserByEmail,
  getUserProfileByToken,
  getAllusers,
};
