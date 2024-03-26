import { Blog } from "../../schema.js"

export default class BlogController {
    static async apiGetAllBlogs(req, res) {
        try {
            const allBlogs = await Blog.find()
            res.status(200).json(allBlogs)
        } catch (err) {
            res.status(err.statusCode ? err.statusCode : 500).json({ error: err.msg ? err.msg : err.message })
        }
    }

    // Get info on one blog based on ID
    static async apiGetBlog(req, res) {
        try {

        } catch (err) {
            res.status(err.statusCode ? err.statusCode : 500).json({ error: err.msg ? err.msg : err.message })
        }
    }

    static async apiUpdateBlog(req, res) {
        console.log("1")

    }

    static async apiDeleteBlog(req, res) {
        console.log("1")

    }

    static async apiCreateBlog(req, res) {
        console.log("1")

    }
}