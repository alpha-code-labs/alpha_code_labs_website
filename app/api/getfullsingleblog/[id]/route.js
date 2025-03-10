import CONNECT_DATABASE from "@/app/config/connections"
import blogData from "@/app/model/BlogDataModal";
import { NextResponse } from "next/server";

export const GET = async (req,{params}) => {
    // console.log('chekc param ids',params)
    await CONNECT_DATABASE();
    try { 
        const body = await blogData.findOne({_id:params.id});
        // console.log('body data',body);
        if(body){
            return NextResponse.json({message:'Fetch Data Successfully', resp:body},{status:200});
        }
        else{
            return NextResponse.json({message:'Failed To Fetch Data'},{status:200})
        }
        

    } catch (err) {
        console.log(err);
        return NextResponse.json({message:'Internal Server Error'},{status:500})
    }
}