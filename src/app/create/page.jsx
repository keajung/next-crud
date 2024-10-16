"use client";

import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation'; //use for change to another page

function CreatePostPage() {

    const [title, setTitle] = useState(""); //default value is String
    const [img, setImg] = useState(""); //default value is String
    const [content, setContent] = useState(""); //default value is String

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!title || !img || !content){
            alert("Please fill all the fields");
            return;
        }
        try {
            const res = await fetch("http://localhost:3000/api/posts", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({title, img, content})
            })

            if(res.ok){
                router.push("/");
            }else{
                throw new Error("Failed to create post");
            }
            
        }catch(err){
            console.log(err);
        }
    }
    //ui 
    
    return (
        <div className='container mx-auto py-10'>
            <h3 className='text-3xl font -bold'>Create Post</h3>
            <hr className='my-3' />
            <Link href="/" className='bg-gray-500 inline-block text-white border py-3 px-3 rounded my-2'>Go Back</Link>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setTitle(e.target.value)} type='text' className='w-[300x] block bg-gray-200 border py-2 px-3 rounded text-lg my-2' placeholder='Post Title' />
                <input onChange={(e) => setImg(e.target.value)} type='text' className='w-[300x] block bg-gray-200 border py-2 px-3 rounded text-lg my-2' placeholder='Post Img URL' />
                <textarea onChange={(e) => setContent(e.target.value)} className='w-[300x] block bg-gray-200 border py-2 px-3 rounded text-lg my-2' placeholder='enter your content'></textarea>
                <button type='submit' className='bg-green-500 text-white border py=2 px-3 rounded text-lg my-2'>Create Post</button>
            </form>
        </div>
    )
}

export default CreatePostPage
