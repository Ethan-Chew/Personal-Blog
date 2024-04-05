interface User {
    username: string,
    password: string,
    email: string,
    role: "Reader" | "Admin",
}

interface Blog {
    title: string,
    body: string,
    dateCreated: string,
    tags: string[],
    owner: string,
    isDraft: Boolean,
    wordCount: Number,
    totalTime: Number
}

type BlogCreation = Omit<Blog, "dateCreated" | "owner" | "wordCount">

const blogTags = [
    { label: "Aviation ✈️", value: "aviation" },
    { label: "Development 💻", value: "dev" },
    { label: "School 🏫", value: "school" },
    { label: "Life 📅", value: "life" },
]

export type { User, Blog, BlogCreation }
export { blogTags }