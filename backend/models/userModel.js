import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        isVerified: { type: Boolean, default: false },
        firstname: { type: String, required: true },
        lastname: { type: String, required: true },
        email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
        password: { type: String, required: true },
        campus: { type: String, required: true, default: "" },
        profilePicture: { type: String, default: "" },
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
