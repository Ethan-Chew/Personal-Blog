import mongoose from "mongoose";

// Schema List
const UserSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { 
        type: String,
        enum: ['Reader', 'Admin'],
        default: 'Reader',
        required: true,
    }
})

const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    dateCreated: { type: String, default: Date.now, required: true },
    tags: {
        type: String,
        enum: ['Tech', 'Aviation', 'Dev'],
        default: 'Dev',
        required: true,
    },
    owner: { type: String, required: true }
})

// Models
const User = mongoose.model("User", UserSchema)
const Blog = mongoose.model("BlogPost", BlogSchema)

// Export
export { Blog, User }