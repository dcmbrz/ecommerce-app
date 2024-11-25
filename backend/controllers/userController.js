// logic for user to create an account and/or sign in
// created three router functions
import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

// Route for user login
// checking if the user is genuine and if they are we generate a token
// we can get the user id and password
const loginUser = async (req,res) =>{
    try{

        const {email, password} = req.body;

        const user = await userModel.findOne({email});

        if (!user){
            return res.json({success:false, message: "User doesn't exists"})
        }

        // comparing user.password(password already in database) with password(what is being entered at the time)
        const isMatch = await bcrypt.compare(password, user.password) 

        // if the passwords match 
        if (isMatch){
            const token = createToken(user._id)
            res.json({success:true, token})
        }
        else{
            res.json({success:false, message: "Invalid credentials"})
        }

    } catch (error){
        console.log(error);
        res.json({success:false, message: error.message})
    }
}

// Route for user regiser
const registerUser = async (req,res) => {

    try {
        const {name, email, password} = req.body;

        // checking if the user already exists 

        const exists = await userModel.findOne({email}) // if a user exists with this email then it will be stored in exists, else exists will remain undefinded
        if (exists){
            return res.json({success:false, message: "User already exists"})
        }

        // validating email format and strength of password
        if (!validator.isEmail(email)){
            return res.json({success:false, message: "Please enter a valid email"})
        }

        if (password.length < 8){
            return res.json({success:false, message: "Please enter a stronger password"})
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10) // the larger the # entered the longer bcrypt takes to encript the password range: 5 - 15 
        const hashedPassword = await bcrypt.hash(password, salt) // this gives us the hashed password
        
        // new user info
        const newUser = new userModel({
            name,
            email,
            password:hashedPassword
        }) 

        // stores the new user in out database
        // whne a new user is create a _id will be generated for them, which we'll store in a token
        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({success:true, token})

    } catch (error){
        console.log(error);
        res.json({success:false, message: error.message})
    }

}

// Route for Admin login
const adminLogin = async (req,res) => {

}


export { loginUser, registerUser, adminLogin }