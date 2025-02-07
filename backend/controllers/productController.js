// *** Controller function to add products ***

import {v2 as cloudinary} from 'cloudinary'

// funciton for adding a product
const addProduct = async (req, res) => {
    try{

        const {name, description, price, category, subCategory, sizes, bestseller } = req.body

        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1, image2, image3, image4].filter((item)=> item !== undefined)

        let imageUrl = await Promise.all(
            images.map(async (item) =>{
                let result = await cloudinary.uploader.upload(item.path,{resource_type: "image"})
                return result.secure_url
            })
        )

        console.log(name, description, price, category, subCategory, sizes, bestseller)
        console.log(imagesUrl)

        res.json({})

    }catch (error){
        console.log(error)
        res.json({success: false, message:error.message})
    }
}


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