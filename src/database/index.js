import { config } from "dotenv";
import mongoose from "mongoose";
import path from "path";

export default async function connectToDB() {
  config({ path: path.resolve(__dirname, "./.env") });
  if (mongoose.connection.readyState >= 1) {
    console.log("DB Connected");
    return;
  }
  mongoose.connection.on("connected", () => {
    console.log("connected to mongo db");
  });
  mongoose.connection.on("error", (err) => {
    console.log("db connection problem", err.message);
  });
  return mongoose.connect(process.env.MONGO_URL);
}
