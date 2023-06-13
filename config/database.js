import mongoose from "mongoose";

const DB = process.env.MONGO_URI;

mongoose
  .connect(DB)
  .then(() => {
    console.log("Database connected!");
  })
  .catch((err) => console.log("No connection"));



