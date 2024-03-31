import { Blog } from "../../schema.js"
import { Types } from "mongoose"
import { NotFoundException } from "../../errors.js"
import * as jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

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
            const { id } = req.params
            
            if (!Types.ObjectId.isValid(id)) {
                throw new Error("Invalid Object ID")
            }
            
            const findIDResult = await Blog.findById(id)

            if (findIDResult === null) {
                throw new NotFoundException(id)
            }

            res.status(200).json(findIDResult)
        } catch (err) {
            res.status(err.statusCode ? err.statusCode : 500).json({ error: err.msg ? err.msg : err.message })
        }
    }

    static async apiUpdateBlog(req, res) {
        try {
            const { id } = req.params

            // TODO: Authenticate User 

            // Validate Update Response
            const updateBody = req.body
            const updateModelAttr = Object.keys(Blog.schema.paths)
            Object.keys(updateBody).forEach((vKey) => {
                if (!updateModelAttr.includes(vKey)) {
                    throw new Error(`Key ${vKey} does not exist!`)
                }
            })

            // Update Blog
            const updateResult = await Blog.updateOne({ _id: id }, updateBody)

            if (!updateResult.acknowledged) {
                throw new Error("Unknown Error Occured")
            }

            if (updateResult.matchedCount == 0) {
                throw new NotFoundException(id)
            }

            res.status(200).json({ status: "success" })
        } catch (err) {
            res.status(err.statusCode ? err.statusCode : 500).json({ error: err.msg ? err.msg : err.message })
        }
    }

    static async apiDeleteBlog(req, res) {
        try {
            const { id } = req.params

            // TODO: Authenticate User

            // Delete Blog
            const deleteResult = await Blog.deleteOne({ _id: id })

            if (deleteResult.deletedCount == 0) {
                throw new NotFoundException(id)
            }

            res.status(200).json({ "status": "success", "id": id })
        } catch (err) {
            res.status(err.statusCode ? err.statusCode : 500).json({ error: err.msg ? err.msg : err.message })
        }
    }

    static async apiCreateBlog(req, res) {
        try {
            // Create Blog
            const newBlog = new Blog(req.body)
            const creationResult = await newBlog.save()

            res.status(200).json({ status: "success", "id": creationResult._id })
        } catch (err) {
            res.status(err.statusCode ? err.statusCode : 500).json({ error: err.msg ? err.msg : err.message })
        }
    }
}