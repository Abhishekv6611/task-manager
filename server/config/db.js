import mongoose from "mongoose";


export const ConnectDB=async()=>{
 try {
   const db=await mongoose.connect(process.env.MONGODB)
   if(db){
    console.log("succesfully connected to DB")
   }
 } catch (error) {
    console.log(error)
    process.exit(1)
 }
}