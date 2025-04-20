'use client'

import ConvertISOToLocale from "@/utils/DateConverter";
import { Post, Tag } from "../../../payload-types";
import PostTag from "./Tag";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export default function BlogPostContainer({ post }: { post: Post }) {
    const router = useRouter();
    return (
        <div
            className="border-2 border-border dark:border-dark-border rounded-xl p-5 flex flex-col gap-5 cursor-pointer hover:bg-secondary-background dark:hover:bg-dark-secondary-background duration-150"
            onClick={() => router.push(`/posts/${post.slug}`)}
        >
            <p className="text-secondary dark:text-dark-secondary">{ ConvertISOToLocale(post.createdAt) }</p>
            <div>
                <p className="text-2xl font-semibold">{ post.title }</p>
                <p className="">{ post.excerpt }</p>    
            </div>

            <div className="inline-flex flex-row gap-5">
                { post.tags.map((tag, index) => (
                    <PostTag key={index} tag={tag as Tag} />
                ))}
            </div>
        </div>
    )
}