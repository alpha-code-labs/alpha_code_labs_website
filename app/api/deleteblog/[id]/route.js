import CONNECT_DATABASE from "@/app/config/connections"
import blogData from "@/app/model/BlogDataModal";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
    // console.log('params',params)
    await CONNECT_DATABASE();
    try {
        const deleteBlog = await blogData.deleteOne({_id:params.id});
        // console.log('hel del', deleteBlog);
        if(deleteBlog){
            return NextResponse.json({message:'Blog Deleted Successfully'},{status:200})
        }else{
            return NextResponse.json({message:'Failed To Delete Blog'},{status:200})
        }


    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
    }
}