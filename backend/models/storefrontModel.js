import mongoose from "mongoose";
import {ObjectId} from "mongodb";

const storefrontSchema = new mongoose.Schema({

    // must provide all "required fields" or info will not be saved in the data
    _id: ObjectId,
    ownerId : { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    name : { type:String, required:true },
    description : { type:String, required:true },
    profilePicture : { type:String, required:false, default: "" },
    bannerImage : { type:String, required:false, default:"" },
    products : [{ type: mongoose.Schema.Types.ObjectId, ref: 'product' }],
    tags : {type: Object, default: {}},
    averageRating: { type: Number, default: 0 },
    policies: {
        returnPolicy: { type: String, default: "" },
        shippingPolicy: { type: String, default: "" },
        paymentMethods: [{ type: String }]
    },
    availability: {type: String, default: "Open"},
    sales: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    socialLinks: {
        instagram: { type: String },
        facebook: { type: String },
        twitter: { type: String },
        tiktok: { type: String },
        email: { type: String },
    },
}, { timestamps: true })

const storefrontModel = mongoose.models.product || mongoose.model("storefront", storefrontSchema);

export default storefrontModel