import mongoose from "mongoose";
import blogSchema from "../schema/blogSchema";


const blog =  mongoose.models.blog || new mongoose.model('blog',blogSchema) ;

export default blog;