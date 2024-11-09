import mongoose from "mongoose";
import { SiRing } from "react-icons/si";

const messageSchema=new mongoose.Schema({
    FileName:{type:String
        ,required:true
    },
    Name:{
        type:String
       ,required:true
    },
    Department:{
        type:String,
        required:true
    },
    Message:{
        type:String
       ,required:true


    }
},{timestamps:true})

export const Messages=new mongoose.model('Messages',messageSchema)