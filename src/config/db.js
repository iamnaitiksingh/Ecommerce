import mongoose from "mongoose";

const mondbUrl =
  "mongodb+srv://naitiksingh7604:kTQ4NI6UeDl7DgM0@cluster0.dqylyn3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDb = () => {
  return mongoose.connect(mondbUrl);
};

export default connectDb;
