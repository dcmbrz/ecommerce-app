// *** Controller function to add products ***

import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

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
    const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

    // Ensure req.files exist before accessing
    if (!req.files) {
      return res.status(400).json({ success: false, message: "No files uploaded" });
    }

    const image1 = req.files.image1 ? req.files.image1[0] : null;
    const image2 = req.files.image2 ? req.files.image2[0] : null;
    const image3 = req.files.image3 ? req.files.image3[0] : null;
    const image4 = req.files.image4 ? req.files.image4[0] : null;

    const images = [image1, image2, image3, image4].filter((item) => item !== null);

    // Check if images are uploaded
    if (images.length === 0) {
      return res.status(400).json({ success: false, message: "At least one image is required" });
    }

    // Upload images to Cloudinary
    let imageUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, { resource_type: "image" });
        return result.secure_url;
      })
    );

    console.log(name, description, price, category, subCategory, sizes, bestseller);
    console.log(imageUrl); // ✅ Corrected variable name

    res.json({ success: true, imageUrl });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};


// funciton for listing a product
const listProducts = async (req, res) => {
    
}


// funciton for removing a product
const removeProduct = async (req, res) => {
    
}


// funciton for single product information
const singleProduct = async (req, res) => {
    
}



export {listProducts, addProduct, removeProduct, singleProduct}