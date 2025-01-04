import mongoose from "mongoose";
import {ObjectId} from "mongodb";

const serviceSchema = new mongoose.Schema(
    {
        storefrontId: { type: mongoose.Schema.Types.ObjectId, ref: "storefront", required: true },
        providerId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
        name: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        duration: { type: Number, required: true, min: 1 },
        isAvailable: { type: Boolean, default: true },
        remoteAvailable: { type: Boolean, default: false },
        images: { type: [String], required: true },
        quantity: { type: Number, required: true, min: 1 },
        category: { type: String, required: true },
        subCategory: { type: String, required: true },
        bestseller: { type: Boolean, default: false },
        ratings: [
            {
                reviewerId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
                rating: { type: Number, required: true, min: 1, max: 5 },
                comment: { type: String },
                createdAt: { type: Date, default: Date.now },
            },
        ],
        tags: { type: [String], default: [] },
        availability: [
            {
                days: { type: [String] }, // E.g., ["Monday", "Wednesday"]
                timeSlots: { type: [String] }, // E.g., ["9 AM - 12 PM", "2 PM - 5 PM"]
            },
        ],
    },
    { timestamps: true }
);

const serviceModel = mongoose.models.product || mongoose.model("service", serviceSchema);

export default serviceModel