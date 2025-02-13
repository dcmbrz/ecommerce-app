import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true},
        phone: { type: String, required: false , unique: true, default: ''},
        password: { type: String, required: true },
        verifyOtp: { type: String, default: '' },
        verifyOtpExpireAt: { type: Number, default: 0 },
        isVerified: { type: Boolean, default: false },
        resetOtp: { type: String, default: '' },
        resetOtpExpireAt: { type: Number, default: 0 },
        campus: { type: Object, required: true},
        profilePicture: { type: String, default: "https://th.bing.com/th/id/OIP.w94l64eOLz741Eok32ySUgHaHa?w=1184&h=1184&rs=1&pid=ImgDetMain" },
        followers: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }], default: [] },
        following: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }], default: [] },
        favorites: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: "product" }], default: [] },
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
