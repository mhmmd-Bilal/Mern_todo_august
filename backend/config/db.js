import mongoose from "mongoose";

const connectDb = async()=>{
    try {
        let connect =await mongoose.connect("mongodb+srv://muhammedbilal6211_db_user:bv442tiAvDqit5V8@cluster0.lx4dig9.mongodb.net/?appName=Cluster0")
        console.log("Db Connected")
    } catch (error) {
        console.log(error.message)
    }
}

export default connectDb