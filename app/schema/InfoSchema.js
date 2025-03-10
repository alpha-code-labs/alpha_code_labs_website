import mongoose from "mongoose";
const infoSchema = new mongoose.Schema({
name:{
    type:String,
    required:true
},
phone:{
    type:Number,
    required:true
},
gender:{
    type:String,
    required:true
},
age:{
    type:Number,
    required:true
}
},{timestamps:true}
)
export default infoSchema