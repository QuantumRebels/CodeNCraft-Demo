import mongoose from "mongoose";

const FileSchema=new mongoose.Schema({
    FileName:{
        type:String,
        required:true
    },
    FileDescription:{
        type:String,
        required:true
    },
    FileId:{
        type:String,
        required:true
    },
    From:{
        type:String,
        required:true
    },
    To:{
        type:String,
        required:true
    },
    ImageUrl:{
        type:String,

    }
},{timestamps:true})

export const files=new  mongoose.model("files",FileSchema)