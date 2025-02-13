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

const loginUser = async (req,res) =>{

    const {email, password} = req.body;

    if (!email || !password){
        return res.json({success: false, message: "Email and password are required"})
    }

    try{
        const user = await userModel.findOne({email});

        if (!user){
            return res.json({success:false, message: "User doesn't exists"})
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
                    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
                    maxAge: 7 * 24 * 60 * 60 * 1000, //max age is 7 days in milliseconds
                })
            return res.json({success:true});
        }
        else{
            return res.json({success:false, message: "Invalid credentials"})
        }

    } catch (error){
        console.log(error);
        res.json({success:false, message: error.message})
    }
}

// Route for user register
const registerUser = async (req,res) => {
    const {name, phone, email, password, campus} = req.body;
    if (!name || !email || !password || !campus){
        return res.json({success:false, message: "Missing Details"})
    }

    try {
        // checking if the user already exists
        const exists = await userModel.findOne({email:email}) // if a user exists with this email then it will be stored in exists, else exists will remain undefinded
        if (exists){
            return res.json({success:false, message: "User already exists"})
        }

        const hashedPassword = await bcrypt.hash(password, 10) // this gives us the hashed password
        
        // new user info
        const user = new userModel({
            name,
            phone,
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
                sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
                maxAge: 7 * 24 * 60 * 60 * 1000, //max age is 7 days in milliseconds
            })

        return res.json({success:true});

    } catch (error){
        res.json({success:false, message: error.message})
    }

}

const logoutUser = async (req,res) =>{
    try{
        res.clearCookie('token', {
            httpOnly:true,
            secure: process.env.NODE_ENV === 'production', //uses http on dev mode and https on production
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        })
        return res.json({success:true, message: "Logout successful"})
    }catch(error){
        res.json({success:false, message: error.message})
    }
}

// Route for Admin login
const adminLogin = async (req,res) => {

}

//generates email and otp and sends it to user's email
const sendVerifyOtp = async (req,res) =>{

    try{
        const {userId} = req.body;

        const user = await userModel.findById(userId)

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
            subject: 'Welcome to SideHustle!',
            html: htmlContent,
        };

        await transporter.sendMail(mailOptions);

        return res.json({success:true, message: "Verification OTP Sent on Email"})

    }catch(error){
        res.json({success:false, message: error.message})
    }
}

//verifies the email using the otp
const verifyEmail = async (req, res) => {
    const {userId, otp} = req.body;

    if(!userId || !otp){
        return res.json({success: false, message:"Missing Details"})
    }

    try{
        const user = await userModel.findById(userId);

        if(!user){
            return res.json({success: false, message:"User not found"});
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
    try{
        const {userId} = req.body;
        const user = await userModel.findById(userId);

        if (!user){
            return res.json({success:false, message:"User not found"})
        }

        res.json({
            success:true,
            userData: {
                name: user.name,
                isVerified: user.isVerified,
            }
        })

    }catch (error){
        res.json({success:false, message:error.message})
    }
}

export {
    loginUser,
    registerUser,
    adminLogin,
    logoutUser,
    sendVerifyOtp,
    verifyEmail,
    isAuthenticated,
    sendResetOtp,
    resetPassword,
    getUserData,
}