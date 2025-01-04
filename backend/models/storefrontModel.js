import mongoose from "mongoose";

const storefrontSchema = new mongoose.Schema(
    {
        ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
        name: { type: String, required: true },
        description: { type: String, required: true },
        profilePicture: { type: String, default: "" },
        bannerImage: { type: String, default: "" },
        products: [{ type: mongoose.Schema.Types.ObjectId, ref: "product", default: [] }],
        tags: { type: [String], default: [] },
        averageRating: { type: Number, default: 0, min: 0, max: 5 },
        customUrl: { type: String, unique: true },
        policies: {
            returnPolicy: { type: String, default: "" },
            shippingPolicy: { type: String, default: "" },
            paymentMethods: { type: [String], default: [] },
        },
        availability: { type: String, enum: ["Open", "Closed", "On Vacation"], default: "Open" },
        sales: { type: Number, default: 0 },
        socialLinks: {
            instagram: { type: String, default: "" },
            facebook: { type: String, default: "" },
            twitter: { type: String, default: "" },
            tiktok: { type: String, default: "" },
            email: { type: String, match: /.+\@.+\..+/, default: "" },
        },
    },
    { timestamps: true }
);

const storefrontModel = mongoose.models.storefront || mongoose.model("storefront", storefrontSchema);

export default storefrontModel;
