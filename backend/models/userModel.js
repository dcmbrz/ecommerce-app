import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    // info with "required" must be given from the user
    // info with "unique" can only be given from the user once

    name : { type : String, required : true },
    email : { type : String, required : true, unique : true },
    password : { type : String, required : true },
    cartData : { type : Object, default : {} },
    
    
}, {minimize:false})

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel