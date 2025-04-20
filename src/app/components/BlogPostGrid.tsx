import { getPayload } from "payload"
import buildConfig from "../../../payload.config"
import BlogPostContainer from "./BlogPostContainer";

export default async function BlogPostGrid({ limit = Infinity }: { limit: number }) {
    const payloadCMS = await getPayload({ config: buildConfig });
    const posts = await payloadCMS.find({
        collection: "posts",
        // where: {
        //     isDraft: {
        //         equals: false
        //     }
        // }
    })

    return (
        <>
            {posts.docs
                .filter((_, index) => index < limit)
                .map((post, index) => (
                    <BlogPostContainer key={index} post={post} />
                ))
            }
        </>
    )
}