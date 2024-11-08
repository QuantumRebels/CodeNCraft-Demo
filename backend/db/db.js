import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

const connectdb=async()=>{
    try {
        const connectionresponse=await mongoose.connect(`${process.env.MONGODB_URL}/Invertrek`)
        if(connectionresponse){
            console.log('MongoDB connected successfully : ',connectionresponse.connection.host)
        }
        
    } catch (error) {
        console.log('MongoDB connection error :  ',error.message)
    }

}

export default connectdb;