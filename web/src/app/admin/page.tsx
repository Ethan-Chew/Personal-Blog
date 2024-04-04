import axios from "axios"
import Navbar from "@/components/navbar"
import Link from "next/link"

async function getAllBlogs() {
    try {
        const request = await axios.get("http://localhost:8080/v1/blog", {
            withCredentials: true
        })

        if (request.status !== 200) throw new Error()

        return {
            "status": "success",
            "request": request.data
        }
    } catch (err) {
        return {
            "status": "error",
            "error": err
        }
    }
}

export default async function Admin() {
    // Retrieve Blogs
    const blogsResponse = await getAllBlogs()
    let blogs
    if (blogsResponse.status === "success") {
        blogs = blogsResponse.request
    }

    return (
        <main className="flex flex-col min-h-screen bg-white text-black">

            {/* Main Content */}
            <div className="pt-3 px-6 flex items-center">
                
            </div>
        </main>
    )
}