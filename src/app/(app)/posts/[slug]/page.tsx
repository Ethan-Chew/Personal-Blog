import { getPayload } from "payload"
import buildConfig from "../../../../../payload.config"

import { RichText } from "@/app/components/renderers/RichText";
import "./post.css"

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
            <header className="border-b-2 border-neutral-700 py-12 px-24 min-h-[35vh] flex flex-row items-end">
                <div>
                    <p className="font-bold capitalize text-secondary dark:text-dark-secondary mb-3">POST</p>
                    <h1 className="text-5xl font-bold mb-2">{ slug }</h1>
                    <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </header>

            {/* Main Content */}
            <div className="px-24 py-10 content">
                <RichText data={post.content} />
            </div>
        </div>
    )
}