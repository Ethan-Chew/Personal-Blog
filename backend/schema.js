import mongoose from "mongoose";

// Schema List
const UserSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    role: { 
        type: String,
        enum: ['Reader', 'Admin'],
        default: 'Reader',
    }
})

const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    dateCreated: { type: String, default: Date.now, required: true },
    lastUpdated: { type: String, required: false },
    tags: {
        type: [String],
        enum: ['school', 'aviation', 'dev', 'life'],
        required: true,
    },
    wordCount: { type: Number, required: true },
    totalTime: { type: Number, required: true },
    owner: { type: String, required: true },
    isDraft: { type: Boolean, required: true, default: true }
})

// Models
const User = mongoose.model("User", UserSchema)
const Blog = mongoose.model("BlogPost", BlogSchema)

// Export
export { Blog, User }