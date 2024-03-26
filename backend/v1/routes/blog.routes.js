import express from 'express'
import BlogController from '../controllers/blog.controller.js'

const blogRouter = express.Router()

// Routers
blogRouter.route("/")
    .get(BlogController.apiGetAllBlogs)
    .post(BlogController.apiCreateBlog)
    
blogRouter.route("/:id")
    .get(BlogController.apiGetBlog)
    .patch(BlogController.apiUpdateBlog)    
    .delete(BlogController.apiDeleteBlog)

export default blogRouter