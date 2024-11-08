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
    Department:{
        type:String,
        required:true
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
        default:'Department Staff'
    }
},{timestamps:true})

export const Users=new mongoose.model('Users',userSchema)