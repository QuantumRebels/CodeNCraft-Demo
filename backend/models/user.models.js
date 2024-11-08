import mongoose, { mongo } from "mongoose";

const userSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true

    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    PhoneNumber:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true
    },
    userRole:{
        type:String,
        default:'user'
    }
},{timestamps:true})

export const Users=new mongoose.model('Users',userSchema)