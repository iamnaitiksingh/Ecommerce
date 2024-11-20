import jwt from "jsonwebtoken";
const SECRET_KEY = "secret_key_of_token";

const generateToken = (userId) => {
  const token = jwt.sign({ userId }, SECRET_KEY, { expiresIn: "60d" });
  return token;
};

const getUserIdFromToken = (token) => {
  const decodedToken = jwt.verify(token, SECRET_KEY);
  return decodedToken.userId;
};

export default { generateToken, getUserIdFromToken };
