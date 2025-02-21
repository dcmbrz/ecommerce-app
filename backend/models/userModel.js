import mongoose from "mongoose";
import {ObjectId} from "mongodb";

const userSchema = new mongoose.Schema(
    {
        firstname: { type: String, required: true },
        lastname: { type: String, required: true },
        email: { type: String, required: true, unique: true},
        phone: { type: String, required: false , unique: true},
        username: { type: String, required: true, unique: true },
        password: { type: String },
        verifyOtp: { type: String, default: '' },
        verifyOtpExpireAt: { type: Number, default: 0 },
        isVerified: { type: Boolean, default: false },
        resetOtp: { type: String, default: '' },
        resetOtpExpireAt: { type: Number, default: 0 },
        campus: { type: Object, required: true, unique: false},
        profilePicture: { type: String, default: "https://th.bing.com/th/id/OIP.w94l64eOLz741Eok32ySUgHaHa?w=1184&h=1184&rs=1&pid=ImgDetMain" },
        followers: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }], default: [] },
        following: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }], default: [] },
        favorites: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: "product" }], default: [] },
        // purchases: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: "product" }], default: [] },
        // inbbox: { type: ObjectId, default: {} },
        // paymentMethods: {
        //     type: [
        //         {
        //             type: { type: String, enum: ["Credit Card", "PayPal", "Bank Transfer"] },
        //             details: { type: String }, // Store only necessary data securely
        //         },
        //     ],
        //     default: [],
        // },
        cartData : { type : Object, default : {} },
    },
    { timestamps: true }
);

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
