// ***USER LOGIN & Registration Feature***
// logic for user to create an account and/or sign in
// created three router functions
import userModel from "../models/userModel.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// const createToken = (id) => {
//     return jwt.sign({id}, process.env.JWT_SECRET)
// }

// Route for user login
// checking if the user is genuine and if they are we generate a token
// we can get the user id and password
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

// Route for user regiser
const registerUser = async (req,res) => {
    const {firstname, lastname, phone, email, password} = req.body;
    if (!firstname || !lastname || !phone || !email){
        return res.json({success:false, message: "Missing Details"})
    }

    try {

        // checking if the user already exists
        const exists = await userModel.findOne({email}) // if a user exists with this email then it will be stored in exists, else exists will remain undefinded
        if (exists){
            return res.json({success:false, message: "User already exists"})
        }

        const hashedPassword = await bcrypt.hash(password, 10) // this gives us the hashed password
        
        // new user info
        const user = new userModel({
            firstname,
            lastname,
            phone,
            email,
            password:hashedPassword
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
        console.log(error);
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
        return res.json({success:true, message: "Logout successfully"})
    }catch(error){
        res.json({success:false, message: error.message})
    }
}

// Route for Admin login
const adminLogin = async (req,res) => {

}


export { loginUser, registerUser, adminLogin, logoutUser }