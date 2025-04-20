import { getPayload } from "payload"
import buildConfig from "../../../payload.config"
import BlogPostContainer from "./BlogPostContainer";
import { Post } from "../../../payload-types";
import { FaChevronRight } from "react-icons/fa";

export default async function BlogPostGrid({ limit = Infinity }: { limit: number }) {
    const payloadCMS = await getPayload({ config: buildConfig });
    const tagsAndPosts = await payloadCMS.find({
        collection: "tags",
        pagination: false,
        joins: {
            posts: {
                limit: limit,
                where: {
                    isDraft: {
                        equals: false
                    }
                }
            }
        }
    });

    console.log(tagsAndPosts);

    return (
        <>
            { tagsAndPosts.docs.map((tag, index) => (
                <div className="flex flex-col md:flex-row place-content-between gap-5 md:gap-20 md:items-center" key={index}>
                    <div className="flex flex-row place-content-between md:place-content-evenly md:flex-col gap-3">
                        <h2 className="text-3xl font-bold">{ tag.name }</h2>
                        <a href={`/categories/${tag.slug}`} className="cursor-pointer w-fit py-2 px-5 rounded-lg border-2 border-accent dark:border-dark-accent text-accent dark:text-dark-accent">
                            <div className="inline-flex flex-row gap-2 items-center">
                                <p>See More</p>
                                <FaChevronRight />
                            </div>
                        </a>
                    </div>

                    <div className="flex flex-row gap-5">
                        { tag.posts && tag.posts.docs?.map((post, index) => (
                            <BlogPostContainer key={index} post={post as Post} />
                        ))}

                        { tag.posts && tag.posts.docs?.length === 0 && (
                            <p>There's nothing here yet! Check back soon :)</p>
                        ) }
                    </div>
                </div>
            ))}
        </>
    )
}