import mongoose from "mongoose";

const TaskSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
   completed:{
     type:Boolean,
     default:false
   }
},
 {timestamps:true}
)

const Task=mongoose.model("Tasks",TaskSchema)
export default Task