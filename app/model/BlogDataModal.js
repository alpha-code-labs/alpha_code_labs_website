import mongoose from "mongoose";
import blogDataSchema from "../schema/BlogDataSchema";

const blogData =  mongoose.models.blogData || new mongoose.model('blogData',blogDataSchema) ;
export default blogData