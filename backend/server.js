import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js"
import cookieParser from "cookie-parser";
// import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import productRouter from "./routes/productRoute.js";

// App Config
const app = express();
const port = process.env.PORT || 4000 // this is the port number that the backend starts on
connectDB();
// connectCloudinary()

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials: true})) // allows us to access the backend from any IP

// api endpoints
app.use("/api/user",userRouter)
app.use('/api/product', productRouter)


app.get('/',(req,res)=>{
    res.send("API is Working")
})

app.listen(port, ()=> console.log('Server started on Port : '+ port))
