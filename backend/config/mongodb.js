import mongoose from "mongoose";

// connecting to the database
const connectDB = async () => {
    mongoose.connection.on("connected", () =>
        console.log("DB Connected")
    );

    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)
}

export default connectDB;