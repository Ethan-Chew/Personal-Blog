import express from "express";
import AuthController from "../controllers/auth.controller.js";

const authRouter = express.Router()

authRouter.route("/")
    .get(AuthController.apiAuthoriseUser)

authRouter.route("/login")
    .post(AuthController.apiLoginUser)

authRouter.route("/register")
    .post(AuthController.apiRegisterUser)

export default authRouter