import mongoose from "mongoose";
import { config } from "dotenv";

config();

export const DB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.dbURL, {
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
  }
};
