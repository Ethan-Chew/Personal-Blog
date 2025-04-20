import { getPayload } from "payload"
import buildConfig from "../../../../../payload.config"
import BlogPostContainer from "@/app/components/BlogPostContainer";
import { Post } from "../../../../../payload-types";

export default async function PostCategory({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const payloadCMS = await getPayload({ config: buildConfig });
    const categoryPostsCollection = await payloadCMS.find({
        collection: "tags",
        limit: 1,
        pagination: false,
        where: {
            slug: {
                equals: slug
            }
        },
        joins: {
            posts: { }
        }
    });

    const categoryPosts = categoryPostsCollection.docs[0];

    return (
        <div>
            <header className="border-b-2 border-neutral-700 py-12 px-24 min-h-[35vh] flex flex-row items-end">
                <div>
                    <p className="font-bold capitalize text-secondary dark:text-dark-secondary mb-3">CATEGORY</p>
                    <h1 className="text-5xl font-bold mb-2">{ categoryPosts.name }</h1>
                    <p className="text-lg">{ categoryPosts.description }</p>
                </div>
            </header>

            <div className="py-10 px-24">
                { categoryPosts.posts && categoryPosts.posts.docs?.map((post, index) => (
                    <BlogPostContainer key={index} post={post as Post} />
                ))}
            </div>
        </div>
    )
}