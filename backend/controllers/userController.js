// ***USER LOGIN & Registration Feature***
// logic for user to create an account and/or sign in
// created three router functions
import userModel from "../models/userModel.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import crypto from 'crypto';
import nodemailer from "nodemailer";
import {errorHandler} from "../utils/error.js";

// const createToken = (id) => {
//     return jwt.sign({id}, process.env.JWT_SECRET)
// }

// Route for user login
// checking if the user is genuine and if they are we generate a token
// we can get the user id and password
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASS,
    },
});

// Route for user register
const registerUser = async (req,res) => {
    const {firstname, lastname, email, username, password, campus} = req.body;

    if (!firstname || !lastname || !email || !username || !password || !campus){
        return res.json({success:false, message: "Missing Details"})
    }

    try {
        // checking if the user already exists
        const emailExists = await userModel.findOne({ email });
        if (emailExists) {
            return res.json({ success: false, message: "User already exists with this email" });
        }

        // Check if username already exists
        const usernameExists = await userModel.findOne({ username });
        if (usernameExists) {
            return res.json({ success: false, message: "User already exists with this username" });
        }

        const hashedPassword = await bcrypt.hash(password, 10) // this gives us the hashed password
        
        // new user info
        const user = new userModel({
            firstname,
            lastname,
            username,
            email,
            password:hashedPassword,
            campus,
        })
        await user.save();

        // stores the new user in out database
        // when a new user is create a _id will be generated for them, which we'll store in a token

        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn: '7d'})

        res.cookie('token',token,
            {
                httpOnly:true,
                secure: process.env.NODE_ENV === 'production', //uses http on dev mode and https on production
                sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
                maxAge: 7 * 24 * 60 * 60 * 1000, //max age is 7 days in milliseconds
            })

        return res.json({success:true});

    } catch (error){
        res.json({success:false, message: error.message})
    }

}

const googleSignup = async (req, res) => {
    try {
        const { email, name, googleId } = req.body;

        // Ensure the email is from an educational institution
        if (!email.endsWith('.edu')) {
            return res.status(400).json({ success: false, message: "Only .edu email addresses are allowed." });
        }

        // Check if user already exists
        let user = await userModel.findOne({ email });
        if (!user) {
            user = new userModel({ email, name, googleId, isVerified: true });
            await user.save();
        }

        // Generate JWT token for session
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.cookie('token', token, { httpOnly: true });

        res.json({ success: true, message: "User registered successfully", user, token });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const loginUser = async (req,res) =>{

    const {email, password} = req.body;

    if (!email || !password){
        return res.json({success: false, message: "Email and password are required"})
    }

    const normalizedEmail = email.toLowerCase();

    try{
        const user = await userModel.findOne({email: normalizedEmail});

        if (!user){
            return res.json({success:false, message: "Invalid email or password"})
        }

        // comparing user.password(password already in database) with password(what is being entered at the time)
        const isMatch = await bcrypt.compare(password, user.password)

        // if the passwords match
        if (isMatch){
            const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn: '7d'})

            res.cookie('token',token,
                {
                    httpOnly:true,
                    secure: process.env.NODE_ENV === 'production', //uses http on dev mode and https on production
                    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
                    maxAge: 7 * 24 * 60 * 60 * 1000, //max age is 7 days in milliseconds
                })
            return res.json({success:true});
        }
        else{
            return res.json({success:false, message: "Invalid email or password"})
        }

    } catch (error){
        res.json({success:false, message: "Server error. Please try again later."})
    }
}

const logoutUser = async (req,res) =>{
    try{
        res.clearCookie('token', {
            httpOnly:true,
            secure: process.env.NODE_ENV === 'production', //uses http on dev mode and https on production
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        })
        return res.json({success:true, message: "Logout successful"})
    }catch(error){
        res.json({success:false, message: error.message})
    }
}

// Route for Admin login
const adminLogin = async (req,res) => {
    try{
        const {email, password} = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password, process.env.JWT_SECRET);
            res.json({success:true, token})
        } else{
            res.json({success:false, message:"Invalid Credentials"})
        }

    }catch (error) {
        res.json({success:false, message: error.message})
    }

}

//generates email and otp and sends it to user's email
const sendVerifyOtp = async (req,res) =>{

    try{
        const {email} = req.body;

        const user = await userModel.findOne({ email })

        if (!email) {
            return res.status(400).json({ success: false, message: "Email is required" });
        }

        if (user.isVerified){
            return res.json({success:false, message: "Account Already Verified"})
        }

        user.verifyOtp = crypto.randomInt(100000, 999999).toString()
        user.verifyOtpExpireAt = Date.now() + 10 * 60 * 1000
        await user.save();

        const htmlContent = `
    <html>
      <head>
        <style>
          /* You can include your styles here */
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            
          </div>
          <div class="content">
            <h2>Welcome to SideHustle!</h2>
            <p>Hello ${user.firstname},</p>
            <p>Thank you for registering with us. To complete your registration, please verify your email by using the verification code below:</p>
            <p><strong>${user.verifyOtp}</strong></p>
            <p>This verification code will expire in 10 minutes. If it expires, you can request a new one by clicking the “Send New Code” link on the verification page.</p>
          
          </div>
          <div class="footer">
            <p>If you did not request this, please ignore this email.</p>
            <p>Best regards,</p>
            <p>The SideHustle Team</p>
          </div>
        </div>
      </body>
    </html>
  `;
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: `Welcome to SideHustle! ${user.verifyOtp}`,
            html: htmlContent,
        };

        await transporter.sendMail(mailOptions);

        return res.json({success:true, message: "Verification code Sent to Email"})

    }catch(error){
        res.json({success:false, message: error.message})
    }
}

//verifies the email using the otp
const verifyEmail = async (req, res) => {
    try{
        const {otp} = req.body;

        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ success: false, message: "Unauthorized: No token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;

        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        if (user.verifyOtp === "" || user.verifyOtp !== otp){
            return res.json({success: false, message:"Invalid OTP"});
        }

        if (user.verifyOtpExpireAt < Date.now()) {
            return res.json({success: false, message:"OTP Expired"});
        }

        user.isVerified = true;
        user.verifyOtp = "";
        user.verifyOtpExpireAt = 0;

        await user.save();
        return res.json({success:true, message: "Email verified successfully"});

    }catch(error){
        res.json({success:false, message: error.message})
    }
}

//checks if user is already authenticated
const isAuthenticated = async (req, res) => {
    try{
        return res.json({success:true})

    }catch (error){
        res.json({success:false, message:error.message})
    }
}

//send password reset otp
const sendResetOtp = async (req, res) => {
    const {email} = req.body;

    if (!email){
        return res.json({success:false, message:"Email is required"})
    }
    try{
        const user = await userModel.findOne({email});

        if (!user){
            return res.json({success:false, message:"User not found"})
        }

        user.resetOtp = crypto.randomInt(100000, 999999).toString()
        user.resetOtpExpireAt = Date.now() + 10 * 60 * 1000
        await user.save();

        const htmlContent = `
    <html>
      <head>
        <style>
          /* You can include your styles here */
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
        
          </div>
          <div class="content">
            <h2>Need a new password?</h2>
            <p>Hello ${user.firstname},</p>
            <p>We've received your request to reset your password. Use this verification code to proceed with resetting your password:</p>
            <p><strong>${user.resetOtp}</strong></p>
            <p>This verification code will expire in 10 minutes. If it expires, you can request a new one by clicking the “Send New Code” link on the verification page.</p>
          
          </div>
          <div class="footer">
            <p>If you did not request this, please ignore this email.</p>
            <p>Best regards,</p>
            <p>The SideHustle Team</p>
          </div>
        </div>
      </body>
    </html>
  `;
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: 'Welcome to SideHustle!',
            html: htmlContent,
        };

        await transporter.sendMail(mailOptions);

        return res.json({success:true, message: "OTP sent to your email"})

    } catch (error){
        res.json({success:false, message:error.message})
    }
}

//reset user password
const resetPassword = async (req, res) => {
    const {email, otp, newPassword} = req.body;

    if (!email || !newPassword || !otp){
        return res.json({success:false, message:"Email, OTP, amd new password is required"})
    }

    try{

        const user = await userModel.findOne({email});

        if (!user){
            res.json({success:false, message:"User not found"})
        }

        if (user.resetOtp === "" || user.resetOtp !== otp){
            return res.json({success:false, message:"Invalid OTP"})
        }

        if (user.resetOtpExpireAt < Date.now()) {
            return res.json({success:false, message:"OTP Expired"})
        }

        user.password = await bcrypt.hash(newPassword, 10);
        user.resetOtp = "";
        user.resetOtpExpireAt = 0;

        await user.save()

        res.json({success:true, message: "Password has been reset successfully"})

    }catch(error){
        res.json({success:false, message:error.message})
    }
}

const getUserData = async (req, res) => {
    console.log("req: ", req);
    try{
        const token = req.cookies.token;
        console.log(token);
        if (!token) {
            return res.status(401).json({ success: false, message: "Unauthorized: No token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;
        console.log("userid", userId);

        const user = await userModel.findById(userId);
        console.log("user", user)
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.json({
            success:true,
            userData: {
                id: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                username: user.username,
                isVerified: user.isVerified,
                campus: user.campus,
                picture: user.profilePicture,
                followers: user.followers,
                following: user.following,
                favorites: user.favorites,
            }
        })

    }catch (error){
        res.json({success:false, message:error.message})
    }
}

export {
    loginUser,
    registerUser,
    googleSignup,
    adminLogin,
    logoutUser,
    sendVerifyOtp,
    verifyEmail,
    isAuthenticated,
    sendResetOtp,
    resetPassword,
    getUserData,
}