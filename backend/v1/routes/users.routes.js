import express from 'express'
import UsersController from '../controllers/users.controller.js'

const usersRouter = express.Router()

// Routes
usersRouter.route("/")
    .get(UsersController.apiGetAllUsers)

usersRouter.route("/:id")
    .get(UsersController.apiGetUser)
    .patch(UsersController.apiUpdateUser)

usersRouter.route("/:id/blogs")
    .get(UsersController.apiGetBlogsWUser)

usersRouter.route("/register")
    .post(UsersController.apiRegisterUser)

export default usersRouter