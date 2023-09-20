import express from "express";
import passport from "passport";
import {
  getAdminStats,
  getAdminUsers,
  loginController,
  logout,
  myProfile,
  registerController,
} from "../controllers/user.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get(
  "/googlelogin",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

// router.get(
//   "/login",
//   passport.authenticate("google", {
//     successRedirect: process.env.FRONTEND_URL,
//   })
// );

router.post("/login", loginController);
router.post("/register", registerController);

router.get("/me", isAuthenticated, myProfile);

router.get("/logout", logout);

//admin route
router.get("/admin/users", isAuthenticated, authorizeAdmin, getAdminUsers);

router.get("/admin/stats", isAuthenticated, authorizeAdmin, getAdminStats);

export default router;
