interface User {
    username: String,
    password: String,
    email: String,
    role: "Reader" | "Admin",
}

interface Blog {
    title: String,
    body: String,
    dateCreated: String,
    tags: [String],
    owner: String,
    isDraft: Boolean,
    wordCount: Number,
    totalTime: Number
}

export type { User, Blog }