import mongoose from 'mongoose';

const connectdb=async()=>{
    try {
        const connectionresponse=await mongoose.connect(" ")
        if(connectionresponse){
            console.log('MongoDB connected successfully : ',connectionresponse.host)
        }
        
    } catch (error) {
        console.log('MongoDB connection error :  ',error.message)
    }

}

export default connectdb;