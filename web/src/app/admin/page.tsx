import axios from "axios"
import Link from "next/link"
import { headers, cookies } from 'next/headers'
import { User, Blog } from "@/helper/types"

async function getAllBlogs() {
    try {
        const request = await axios.get("http://localhost:8080/v1/blog", {
            headers: {
                Cookie: cookies().toString()
            }
        })

        if (request.status !== 200) throw new Error()

        return { "status": "success", "request": request.data }
    } catch (err) {
        return { "status": "error", "error": err }
    }
}

async function getUserInfo(userId: string) {
    try {
        const request = await axios.get(`http://localhost:8080/v1/users/${userId}`, {
            headers: {
                Cookie: cookies().toString()
            }
        })

        if (request.status !== 200) throw new Error()

        return { "status": "success", "request": request.data }
    } catch (err) {
        return { "status": "error", "error": err }
    }
}

export default async function Admin() {
    const headersList = headers()
    const userId = headersList.get('userid')

    // Retrieve Blogs
    const blogsResponse = await getAllBlogs()
    let blogs
    if (blogsResponse.status === "success") {
        blogs = blogsResponse.request
    }

    // Retrieve User Info
    const userResponse = await getUserInfo(userId as string)
    let user: User | null = null
    if (userResponse.status === "success") {
        user = userResponse.request
    }

    if (user === null) return <p>An error occured. sigh</p>

    return (
        <main className="flex flex-col min-h-screen bg-gray-100 text-black">

            {/* Main Content */}
            <div className="pt-3 px-6 flex flex-col">
                <header className="py-8">
                    <h2 className="text-3xl font-semibold">Welcome Back! 👋</h2>
                    <p className="text-md font-light text-gray-500">{ user.username }</p>
                </header>

                <div className="flex flex-col gap-5">
                    <div className="flex flex-row gap-6 w-1/2">
                        <div className="bg-white p-4 flex-grow">
                            <p>Total Posts</p>
                            <p className="text-2xl font-semibold">100</p>
                        </div>

                        <div className="bg-white p-4 flex-grow">
                            <p>Total Words</p>
                            <p className="text-2xl font-semibold">10,000</p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-8">
                        {/* Recent Posts Section */}
                        <div className="bg-white p-4 flex-grow">
                            <h3 className="text-xl font-semibold mb-2">Recent Posts</h3>
                            <div className="flex flex-col gap-1">
                                {/* <BlogInfo />
                                <BlogInfo />
                                <BlogInfo /> */}
                            </div>
                        </div>

                        {/* Drafted Posts Section */}
                        <div className="bg-white p-4 flex-grow">
                            <h3 className="text-xl font-semibold mb-2">Drafted Posts</h3>
                            <div className="flex flex-col gap-1">
                                {blogs.map((blog: Blog) => (
                                    <BlogInfo blog={blog} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

interface IBlogInfo {
    blog: Blog
}

function BlogInfo({ blog }: IBlogInfo) {
    return (
        <Link href={`/admin`}>
            <div>
                <p>{ blog.title }</p>
                <div className="flex flex-row gap-2">
                    <p className="text-gray-400">{`${blog.wordCount} words`}</p>
                </div>
            </div>
        </Link>
    )
}