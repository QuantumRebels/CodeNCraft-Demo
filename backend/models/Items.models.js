import mongoose from "mongoose";

const ItemsSchema=new mongoose.Schema({
    ItemName:{
        type:String,
        required:true
    },
    Quantity:{
        type:Number,
        required:true
    },
    Threshold:{
        type:Number,
        required:true
    },

    Status:{
        type:String,
        default:"inStock"
    }
},{timestamps:true})

export const Items=new mongoose.model('Items',ItemsSchema)