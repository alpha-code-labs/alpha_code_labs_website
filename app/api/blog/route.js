import CONNECT_DATABASE from "@/app/config/connections"
import blog from "@/app/model/blogModal";
import fsPromises from 'fs/promises'
import { NextResponse } from "next/server";

export const GET = async () => {
    await CONNECT_DATABASE();
    try {
        const getData = await blog.find();
        // console.log('getdata', getData);
        if (getData) {
            return NextResponse.json({ message: 'Data Fetch Successfully', resp: getData }, { status: 200 })
        } else {
            return NextResponse.json({ message: 'Failed To Fetch Data' }, { status: 200 })
        }
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
    }
}

export const POST = async (req) => {
    await CONNECT_DATABASE();
    try {
        const body = await req.formData();
        console.log('check nbody data', body)
        const title = await body.get('title');
        const description = await body.get('description');
        const category = await body.get('category');
        const image = await body.get('image');
        const link1 = await body.get('link1');
        const link2 = await body.get('link2');
        const link3 = await body.get('link3');
        const link4 = await body.get('link4');
        const link5 = await body.get('link5');
        const para1 = await body.get('para1');
        const para2 = await body.get('para2');
        const para3 = await body.get('para3');
        const para4 = await body.get('para4');
        const para5 = await body.get('para5');
        if (image) {
            const buffered = await image.arrayBuffer();
            // console.log('bufererd', buffered)
            const buffer = await Buffer.from(await buffered);
            // console.log('buffer', buffer)
            const fileName = Date.now() + image.name.replaceAll(" ", "_");
            // console.log('filename', fileName)
            const toSavepath = await process.cwd() + '/public/upload' + fileName;
            await fsPromises.writeFile(toSavepath, buffer);
            const blogDetails = {
                title: title,
                description: description,
                category: category,
                image: fileName,
                link1:link1,
                link2:link2,
                link3:link3,
                link4:link4,
                link5:link5,
                para1:para1,
                para2:para2,
                para3:para3,
                para4:para4,
                para5:para5,
            };
            const toSave = await blog(blogDetails);
            console.log( 'check data',toSave)
            const saved = await toSave.save();
            console.log('saved', saved)
            if (saved) {
                return NextResponse.json({ message: 'Blog Add Successfully' }, { status: 200 });
            } else {
                return NextResponse.json({ message: 'Failed To Add Blog' }, { status: 200 })
            }

        }
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}