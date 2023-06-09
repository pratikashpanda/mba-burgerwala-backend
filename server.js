import app from "./app.js";
import dotenv from "dotenv";
import "./config/database.js";
import Razorpay from "razorpay";

dotenv.config({ path: "./config/config.env" });

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

app.get("/", (req, res, next) => {
  res.send("<h1>Working</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(
    `Server is working on port ${process.env.PORT} in ${process.env.NODE_ENV} MODE`
  );
});
