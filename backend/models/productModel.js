import mongoose from "mongoose";
import {ObjectId} from "mongodb";

const productSchema = new mongoose.Schema({

    // must provide all "required fields" or info will not be saved in the data
    name: { type: String, required: true },
    sellerId : { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    storefrontId : { type: mongoose.Schema.Types.ObjectId, ref: 'storefront', required: true },
    quantity: { type: Number, required: true, min: 1 },
    sizes: { type: [String], default: [] },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    duration: { type: Number, required: true, min: 1 },
    isAvailable: { type: Boolean, default: true },
    bestseller: { type: Boolean, default: false },
    images: { type: [String], required: true },
    ratings: [
        {
            reviewerId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
            rating: { type: Number, required: true, min: 1, max: 5 },
            comment: { type: String },
            createdAt: { type: Date, default: Date.now },
        },
    ],
    tags: { type: [String], default: [] },
    shippingDetails: [
        {
            weight: { type: Number },
            dimensions: { type: String }, // E.g., "10x10x5 cm"
            shippingCost: { type: Number },
            pickupOnly: { type: Boolean, default: false }, // Default for flexibility
        },
    ],


}, { timestamps: true })

const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel