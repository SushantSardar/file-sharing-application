import mongoose from "mongoose";

const DBConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.error("Error while connecting with the database", error.message);
  }
};

export default DBConnection;
