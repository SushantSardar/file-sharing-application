import mongoose from "mongoose";

const DBConnection = async () => {
  // const MONGODB_URI=`mongodb://sushant:sushant@ac-ckoc2ud-shard-00-00.ga1wvtm.mongodb.net:27017,ac-ckoc2ud-shard-00-01.ga1wvtm.mongodb.net:27017,ac-ckoc2ud-shard-00-02.ga1wvtm.mongodb.net:27017/?ssl=true&replicaSet=atlas-mhb5w7-shard-0&authSource=admin&retryWrites=true&w=majority`;
  const MONGODB_URI = `mongodb+srv://sushant:sushant@file-sharing.ga1wvtm.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.error("Error while connecting with the database", error.message);
  }
};

export default DBConnection;
