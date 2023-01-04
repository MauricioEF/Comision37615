import mongoose from "mongoose";

const collection = 'Users';

const schema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        default:'user'
    },
    password:String
})

const userModel = mongoose.model(collection,schema);

export default userModel;