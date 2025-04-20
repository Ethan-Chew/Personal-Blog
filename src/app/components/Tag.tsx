import { Tag } from "../../../payload-types";

export default function PostTag({ tag }: { tag: Tag}) {
    return (
        <a href={`/${tag.slug}`} className="border border-border dark:border-dark-border px-3 py-1 rounded-lg">
            { tag.name }
        </a>
    )
}