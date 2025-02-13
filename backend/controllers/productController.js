// *** Controller function to add products ***

import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import productModel from "../models/productModel.js"
import mongoose from "mongoose";

dotenv.config(); // Load environment variables

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Function for adding a product
const addProduct = async (req, res) => {
  try {
    console.log("Received Request Body:", req.body);

    let {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
      quantity,
      duration,
      sellerId,
      storefrontId,
      tags,
      shippingDetails
    } = req.body;

    // --- Ensure sellerId and storefrontId are provided ---
    if (sellerId == null || storefrontId == null) {
      return res.status(400).json({
        success: false,
        message: "Missing sellerId or storefrontId"
      });
    }

    // --- Convert IDs to strings if they aren’t already ---
    if (typeof sellerId !== "string") {
      if (sellerId.toString) {
        sellerId = sellerId.toString();
      } else {
        return res.status(400).json({
          success: false,
          message: "Invalid sellerId"
        });
      }
    }
    if (typeof storefrontId !== "string") {
      if (storefrontId.toString) {
        storefrontId = storefrontId.toString();
      } else {
        return res.status(400).json({
          success: false,
          message: "Invalid storefrontId"
        });
      }
    }

    // --- Debug: Log processed IDs and their types ---
    console.log("Processed sellerId:", sellerId, "Type:", typeof sellerId);
    console.log("Processed storefrontId:", storefrontId, "Type:", typeof storefrontId);

    // --- Validate MongoDB ObjectId format ---
    if (
      !mongoose.Types.ObjectId.isValid(sellerId) ||
      !mongoose.Types.ObjectId.isValid(storefrontId)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid MongoDB ObjectId format for sellerId or storefrontId"
      });
    }

    // --- Validate required fields ---
    if (!name || !description || !price || !category || !subCategory || !quantity || !duration) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields"
      });
    }

    // --- Validate that price, quantity, and duration are positive numbers ---
    if (Number(price) <= 0 || Number(quantity) <= 0 || Number(duration) <= 0) {
      return res.status(400).json({
        success: false,
        message: "Price, quantity, and duration must be positive values."
      });
    }

    // --- Check for image files in the request ---
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({
        success: false,
        message: "At least one image is required"
      });
    }

    // --- Extract and filter images ---
    const images = ["image1", "image2", "image3", "image4"]
      .map((key) => req.files[key] ? req.files[key][0] : null)
      .filter((item) => item !== null);

    // --- Upload images to Cloudinary ---
    let imageUrl = await Promise.all(
      images.map(async (item) => {
        try {
          const result = await cloudinary.uploader.upload(item.path, { resource_type: "image" });
          return result.secure_url;
        } catch (uploadError) {
          console.error("Cloudinary Upload Error:", uploadError);
          return null;
        }
      })
    ).then((urls) => urls.filter((url) => url !== null));

    if (imageUrl.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Image upload failed. Please try again."
      });
    }

    // --- Parse sizes, tags, and shippingDetails (if provided as JSON strings) ---
    const parsedSizes = Array.isArray(sizes) ? sizes : JSON.parse(sizes || "[]");
    const parsedTags = Array.isArray(tags) ? tags : JSON.parse(tags || "[]");
    const parsedShippingDetails = typeof shippingDetails === "string"
      ? JSON.parse(shippingDetails || "[]")
      : shippingDetails || [];

    // --- Construct the product object ---
    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      bestseller: bestseller === "true" || bestseller === true,
      sizes: parsedSizes,
      images: imageUrl,
      quantity: Number(quantity),
      duration: Number(duration),
      sellerId,       // Will be cast to ObjectId by Mongoose if valid
      storefrontId,   // Will be cast to ObjectId by Mongoose if valid
      tags: parsedTags,
      shippingDetails: parsedShippingDetails,
    };

    // --- Save the product to the database ---
    const product = new productModel(productData);
    await product.save();

    return res.status(201).json({
      success: true,
      message: "Product Added",
      product
    });

  } catch (error) {
    console.error("Error in addProduct:", error);
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// function for listing a product
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    return res.status(200).json({ success: true, products });
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};



// function for removing a product
const removeProduct = async (req, res) => {
    try {

      await productModel.findByIdAndDelete(req.body.id)
      res.json({success:true, message:"Product Removed"})

    }catch (error){
      console.log(error)
      res.json({success: false, message: error.message })
    }
}


// function for single product information
const singleProduct = async (req, res) => {
    
}



export {listProducts, addProduct, removeProduct, singleProduct}