import { redirect } from 'next/navigation'
import axios from 'axios'
import { Blog } from '@/helper/types'
import Markdown from 'react-markdown'

async function getBlogWithID(id: string) {
    try {
        const getBlogRequest = await axios.get(`http://localhost:8080/v1/blog/${id}`)

        if (getBlogRequest.status === 200) {
            return getBlogRequest.data
        } else {
            redirect("/")
        }
    } catch (err) {
        console.error(err)
        redirect("/")
    }
}

function formatEpochToReadable(epochMS: string) {
    const date = new Date(Number(epochMS));
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    return date.toLocaleString('en-US', options);
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
    const blog: Blog = await getBlogWithID(params.slug)

    return (
        <div className='text-black'>
            {blog.isDraft ? 
                <div className='w-full bg-orange-500 py-2 text-white text-center'>
                    <p>This blog is a draft, and cannot be seen by the public.</p>
                </div> 
            : <></>}

            <div className='pt-3 px-6'>
                <header className='mt-3 mb-5'>
                    <h1 className='text-4xl font-bold'>{ blog.title }</h1>
                    <p className='text-gray-600'>Created on {formatEpochToReadable(blog.dateCreated)}</p>
                </header>
                <div className='prose lg:prose-xl'>
                    <Markdown>{ blog.body.replaceAll("\\n", "  \n" ) }</Markdown>
                </div>
            </div>
        </div>
    )
}