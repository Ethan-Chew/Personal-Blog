'use client'
import axios from "axios"
import { useState, useEffect } from "react"
import { BlogCreation, blogTags } from "@/helper/types"
import Toggle from "react-toggle"
import { MultiSelect, Option } from "react-multi-select-component";
import MarkdownEditor from "@uiw/react-markdown-editor"

export default function CreatePost() {
    const [ tags, setTags ] = useState<Option[]>([])
    const [ allowCreate, setAllowCreate ] = useState(false)
    const [ writtenBlog, setWrittenBlog ] = useState<BlogCreation>({
        title: "",
        body: "",
        isDraft: true,
        tags: [] as string[],
        totalTime: 0
    })

    // Update Blog Tags
    useEffect(() => {
        let tempTags = [] as string[]
        tags!.forEach((tag) => {
            tempTags.push(tag.value)
        })
        setWrittenBlog({...writtenBlog, tags: tempTags})
    }, [tags])

    // Check if all fields have been entered. If yes, allow create blog
    useEffect(() => {
        if (!(writtenBlog.title === "" || writtenBlog.body === "" || writtenBlog.tags.length === 0)) {
            setAllowCreate(true)
        }
    }, [writtenBlog])

    // Handle Blog Creation
    async function createBlog() {
        try {
            const createRequest = await axios.post("", {
                ...writtenBlog,
                
            }, {
                withCredentials: true
            })
        } catch (err) {

        }
    }

    return (
        <main className="pt-3 pb-6 px-6">
            <header className="mb-6">
                <h1 className="text-4xl font-bold">Create Blog Post</h1>
                <p className="italic text-gray-600">What would you like to share?</p>
            </header>
            
            {/* Blog Creation Info */}
            <div className="flex flex-col gap-3">
                <div className="flex flex-row">
                    <div className="flex-grow w-1/2">
                        <label className="block font-semibold text-xl">Title</label>
                        <p className="block mb-1 text-gray-500 text-sm">Give your blog an engaging title</p>
                        <input type="text"
                            className="bg-gray-100 border border-gray-300 p-2 rounded-lg w-3/4"
                            onChange={e => setWrittenBlog({...writtenBlog, title: e.target.value})}
                            id="title"
                            required
                        />
                    </div>
                    <div className="flex-grow">
                        <label className="block font-semibold text-xl">Drafted Blog</label>
                        <p className="block mb-1 text-gray-500 text-sm">Want to publish immediately? Uncheck this.</p>
                        <Toggle 
                            id="drafted"
                            defaultChecked={writtenBlog.isDraft as boolean}
                            onChange={() => setWrittenBlog({...writtenBlog, isDraft: !writtenBlog.isDraft})}
                        />
                    </div>
                </div>

                <div>
                    <label className="font-semibold text-xl">Body</label>
                    <p className="mb-1 text-gray-500 text-sm">Write.. Write... and Write</p>
                    <MarkdownEditor 
                        value={writtenBlog.body}
                        onChange={(value, viewUpdate) => setWrittenBlog({...writtenBlog, body: value})}
                        height="50vh"
                        visible
                    />
                </div>

                <div>
                    <label className=" font-semibold text-xl">Tags</label>
                    <p className=" mb-1 text-gray-500 text-sm">Make it easier for people to find your blog</p>
                    <MultiSelect 
                        options={blogTags}
                        labelledBy="Select Tags.."
                        value={tags}
                        onChange={setTags}
                    />
                </div>

                <button
                    className="mt-10 p-2 bg-blue-400 hover:bg-blue-600 text-white cursor-pointer disabled:text-gray-800 disabled:bg-gray-200 disabled:cursor-not-allowed rounded-lg"
                    disabled={!allowCreate}
                    onClick={createBlog}
                >
                    Create Blog Post
                </button>
                <p></p>
            </div>
        </main>
    )
}