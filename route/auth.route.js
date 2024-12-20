const express = require("express");
const passport = require("passport");
const {
  getLoginPage,
  SignUp,
  Login,
  Logout,
  forgotPassword,
  handleForgotPassword,
  verifyOtp,
  getResetPassword,
  handleResetPassword,
  handleOtpVerification,
} = require("../controller/auth.controller");
const router = express.Router();

router.get("/login", getLoginPage);
router.post("/signup", SignUp);
router.post("/login", Login);
router.get("/logout", Logout);
router.get("/get-forgot-password", forgotPassword);
router.post("/handle-forgot-password", handleForgotPassword);
router.post("/verify-otp", handleOtpVerification);
router.get("/get-create-newuser", getResetPassword);
router.post("/reset-password", handleResetPassword);

module.exports = router;
