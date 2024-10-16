import mongoose from "mongoose";

export const connectMongoDB = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB เชื่อมต่อสำเร็จ");
      
    } catch(error) {
        console.log("ข้อผิดพลาดในการเชื่อมต่อ MongoDB:", error);
    }
}