import express from "express";
import dotenv from "dotenv";
import { connectPassport } from "./utils/Provider.js";
import session from "express-session";

const app = express();
export default app;
dotenv.config({
  path: "./config/config.env",
});

//using middlewares

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());

connectPassport();

//importing routes
import userRoute from "./routes/user.js";
import passport from "passport";
app.use("/api/v1", userRoute);

//localhost:4000/api/v1/googlelogin
