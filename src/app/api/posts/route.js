import { connectMongoDB } from "../../../../lib/mongodb";
import Post from "../../../../models/post";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { title, img, content } = await req.json(); //.json for transformation json to Java Script
    console.log(title, img, content);
    await connectMongoDB();
    await Post.create({ title, img, content });
    return NextResponse.json({ message: "Success" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();

    const posts = await Post.find({});
    console.error("เชื่อมต่อเพื่อดึงสำเร็จ");
    return NextResponse.json(posts);
}

export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Post.findByIdAndDelete(id);
    return NextResponse.json({ message: "Deleted Post "},{ status: 200 });
}