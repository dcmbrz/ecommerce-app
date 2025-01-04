import mongoose from "mongoose";
import {ObjectId} from "mongodb";

const userSchema = new mongoose.Schema({
    // info with "required" must be given from the user
    // info with "unique" can only be given from the user once
    _id: ObjectId,
    createdAt : Date,
    isVerified : {type: Boolean, default: false},
    firstname : { type : String, required : true },
    lastname : { type : String, required : true },
    email : { type : String, required : true, unique : true },
    password : { type : String, required : true },
    phoneNumber : { type : String, required : true, unique : true, default : "" },
    campus : { type : String, required : true, default : "" },
    profilePicture : { type : String, required : false, default : "" },
    followers : [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    following : [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    favorites : {type: Object, default: {}},
    paymentMethods : {type: Object, default: {}},
    cartData : { type : Object, default : {} },
    
    
}, {minimize:false}, { timestamps: true })

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel