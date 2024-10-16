"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import DeleteBtn from "./DeleteBtn";
export default function Home() {

  const [postData, setPostData] = useState([]); //create parameter "postData" as array []
  // console.log(postData);

  const getPost = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/posts", {
        method: "GET",
        cache: "no-store", //! cache used to avoid memory of old data when fetching 
      })
      if (!res.ok) {
        throw new Error("Error fetching post");
      }
      const data = await res.json();
      setPostData(data);

    } catch (error) {
      console.log("Error loading post data: " + error);
    }
  }

  useEffect(() => {
    getPost();
  }, []) //[] means run only once when component mount


  return (
    <main className="container mx-auto">

      <h1>first page NextJS Crud + MonoDB</h1>
      <hr className="my-3" />
      {/* <button className='bg-green-500 text-white p-3 px-3 rounded'><Link href="/create"></Link>Create Post</button> */}
      <Link className='bg-green-500 text-white border py-2  px-3 rounded-md mx-2' href="/create">Create Post</Link>

      <div className="grid grid-cols-4 p-5 mt-3 gap-5">

        {postData.length > 0 ? (
          postData.map(val => (

            <div key={val._id} className="shadow-xl my-0 p-10 rounded-x5">
              <h4>{val.title}</h4>
              {/* <img src={val.img} width={ 300} height={200} alt={val.title} /> */}
              <Image src={val.img} width={300} height={0} alt={val.title} />
              <p>{val.content}</p>
              <div className="mt-5">
                <Link className='bg-gray-500 text-white border py-1 px-2 rounded-md text-lg' href={`/edit/${val._id}`} >edit</Link>
                {/* <Link className='bg-red-500 text-white border py-1  px-2 rounded-md text-lg mx-2' href={`/delete/${val._id}`}>delete</Link> */}
                <DeleteBtn id={val._id}/>
                
              </div>
            </div>

          ))

        ) : (
          <p className="bg-gray-300 p-6 my-3">
            No post available ควยยย
          </p>
        )}



      </div>
    </main>


  );
}
