'use client'
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { FaFileAlt, FaClock } from "react-icons/fa";
import Link from "next/link";
import { Blog } from "@/helper/types";

async function LoadBlogs() {
  const loadResponse = await axios.get("http://localhost:8080/v1/blog")

  return loadResponse
}

export default function Home() {
  const [ userEmail, setUserEmail ] = useState("")
  const [ blogs, setBlogs ] = useState<Blog[]>()

  useEffect(() => {
    LoadBlogs().then((res: AxiosResponse) => {
      setBlogs(res.data)
    })
  }, [])

  return (
    <main className="px-6 text-black h-screen">
      <header className="h-[40%] md:h-[35%] flex flex-col justify-center gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-5xl">idkname</h1>
          <p className="md:max-w-[75%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur saepe aliquam deserunt laudantium natus, inventore dolorum illum impedit laborum magnam!</p>
        </div>
        <div className="border-2 border-blue-200 pl-3 pr-1 py-1 rounded-lg file:md:w-[75%] flex flex-row items-center">
          <input
            className="outline-none w-[70%]"
            placeholder="Your email address"
            onChange={e => setUserEmail(e.target.value)}
          ></input>
          <button className="ml-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
            Subscribe
          </button>
        </div>
        <hr />
      </header>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs?.filter((tBlog) => !tBlog.isDraft).map((blog) => (
          <BlogPreview blog={blog} key={blog._id} />
        ))}
      </div>
    </main>
  );
}

interface IBlogPreview {
  blog: Blog
}

function BlogPreview({ blog }: IBlogPreview) {
  return (
    <Link href={`/blog/${blog._id}`}>
      <div className="p-3 border-2 border-gray-300 rounded-xl hover:bg-gray-50">
        <p className="text-xl font-semibold">{ blog.title }</p>
        <div className="flex flex-row gap-4">
          <div className="flex flex-row items-center gap-1 text-gray-700">
            <FaFileAlt />
            0 words
          </div>
          <div className="flex flex-row items-center gap-1 text-gray-700">
            <FaClock />
            5 minutes
          </div>
        </div>
      </div>
    </Link>
  )
}