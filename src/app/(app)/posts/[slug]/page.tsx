import { getPayload } from "payload"
import buildConfig from "../../../../../payload.config"

import "./post.css"
import { RichText } from "@/app/components/renderers/RichText";
import PostTag from "@/app/components/Tag";
import { Tag } from "../../../../../payload-types";

export default async function BlogPost({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;

    const payloadCMS = await getPayload({ config: buildConfig });
    const postDocs = await payloadCMS.find({
        collection: "posts",
        limit: 1,
        pagination: false,
        where: {
            slug: {
                equals: slug
            }
        }
    })
    const post = postDocs.docs[0];

    return (
        <div>
            <header className="border-b-2 border-border dark:border-dark-border py-12 px-24 min-h-[35vh] flex flex-col justify-end">
                <div>
                    <p className="font-bold capitalize text-secondary dark:text-dark-secondary mb-3">POST</p>
                    <h1 className="text-5xl font-bold mb-2">{ post.title }</h1>
                    <p className="text-lg">{ post.excerpt }</p>
                </div>
                <div className="pt-5 flex flex-row gap-5">
                    { post.tags.map((tag, index) => (
                        <PostTag key={index} tag={tag as Tag} />
                    ))}
                </div>
            </header>

            {/* Main Content */}
            <div className="px-24 py-10 content">
                <RichText data={post.content} />
            </div>
        </div>
    )
}