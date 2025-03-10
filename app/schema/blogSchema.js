import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
        default: '/uploads/abc.png'
    },
    link1: {
        type: String,
        required: true
    },
    link2: {
        type: String,
        required: true
    },
    link3: {
        type: String,
        required: true
    },
    link4: {
        type: String,
        required: true
    },
    link5: {
        type: String,
        required: true
    },
    para1: {
        type: String,
        required: true
    },
    para2: {
        type: String,
        required: true
    },
    para3: {
        type: String,
        required: true
    },
    para4: {
        type: String,
        required: true
    },
    para5: {
        type: String,
        required: true
    },

}, { timestamps: true });

export default blogSchema;