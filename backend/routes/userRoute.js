import express from "express";
import {
    loginUser,
    registerUser,
    googleSignup,
    adminLogin,
    logoutUser,
    sendVerifyOtp,
    verifyEmail,
    isAuthenticated, sendResetOtp, resetPassword, getUserData
} from "../controllers/userController.js";
import userAuth from "../middleware/userAuth.js";


const userRouter = express.Router();

userRouter.post("/register", registerUser)
userRouter.post('/google-signup', googleSignup);
userRouter.post("/login", loginUser)
userRouter.post("/logout", logoutUser)
userRouter.post("/admin", adminLogin)
userRouter.post("/send-verify-otp", sendVerifyOtp);
userRouter.post("/verify-account", userAuth,verifyEmail);
userRouter.post("/is-auth", userAuth, isAuthenticated);
userRouter.post("/send-reset-otp", userAuth, sendResetOtp);
userRouter.post("/reset-password", userAuth, resetPassword);
userRouter.get("/get-data", userAuth, getUserData);

export default userRouter;