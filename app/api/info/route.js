import CONNECT_DATABASE from "@/app/config/connections"
import info from "@/app/model/infoModal";
import { NextResponse } from "next/server";

export const POST =async(req,{params})=>{
    // console.log('req', req )
await CONNECT_DATABASE();
try{
    const body = await req.json();
    // console.log('check body',body)
    const toSave = await info(body);
    // console.log('save ',toSave)
    const saved = await toSave.save();
    // console.log('saved', saved);
    if(saved){
        return NextResponse.json({message:'Saved Your Details'},{status:200});
    }else{
        return NextResponse.json({message:'Failed to Saved Details'},{status:200})
    }

}catch(err){
    console.log(err);
    return NextResponse.json({message:'Internal Server Error'},{status:500})
}
}