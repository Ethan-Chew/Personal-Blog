import express from 'express'
import BlogController from '../controllers/blog.controller.js'
import AdminAuth from '../helper/AdminAuth.js'

const blogRouter = express.Router()

// Routers
blogRouter.route("/")
    .get(BlogController.apiGetAllBlogs)
    .post(AdminAuth, BlogController.apiCreateBlog)
    
blogRouter.route("/:id")
    .get(BlogController.apiGetBlog)
    .put(AdminAuth, BlogController.apiUpdateBlog)    
    .delete(AdminAuth, BlogController.apiDeleteBlog)

export default blogRouter