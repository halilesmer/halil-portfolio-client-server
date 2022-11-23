import * as dotenv from "dotenv";

import mongoose from "mongoose";

dotenv.config();
const port = process.env.PORT || 4000;

const connectMdb = async () => {
    console.log('process.env.MONGO_URI :>> ', process.env.MONGO_URI);
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: true,
    });
    console.log(`MongoDB is connected on port ${port} `);
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};
export { connectMdb };
