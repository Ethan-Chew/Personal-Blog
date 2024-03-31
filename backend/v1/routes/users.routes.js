import express from 'express'
import UsersController from '../controllers/users.controller.js'
import UserAuth from '../helper/UserAuth.js'

const usersRouter = express.Router()

// Routes
usersRouter.route("/")
    .get(UsersController.apiGetAllUsers)

usersRouter.route("/:id")
    .get(UsersController.apiGetUser)
    .patch(UserAuth, UsersController.apiUpdateUser)
    .delete(UserAuth, UsersController.apiDeleteUser)

usersRouter.route("/:id/blogs")
    .get(UsersController.apiGetBlogsWUser)

export default usersRouter