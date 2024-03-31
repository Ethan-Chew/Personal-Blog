import { User } from "../../schema.js"
import * as jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export default class AuthController {
    static async apiRegisterUser(req, res) {
        try {
            const createBody = new User(req.body)
            try {
                await createBody.validate()
            } catch (err) {
                throw {
                    statusCode: 400,
                    msg: "Missing or Invalid Fields"
                }
            }

            // Check if User with same username exists
            const checkUsernameExistance = await User.find({ username: createBody.username })
            if (checkUsernameExistance.length !== 0) {
                throw {
                    statusCode: 400,
                    msg: "Account with Username Exists"
                }
            }

            // Create User
            const registerUserRes = await createBody.save()

            // Create JWT
            const tokenMaxAge = 10800 // 3 hours (seconds)
            const token = jwt.sign(
                { id: registerUserRes._id, username: createBody.username, role: createBody.role },
                process.env.JWT_SECRET,
                {
                    expiresIn: tokenMaxAge
                }
            )
            res.cookie("jwt", token, {
                httpOnly: true,
                maxAge: tokenMaxAge * 1000, // 3 hours (ms)
            });

            res.status(200).json({ status: "success", "id": registerUserRes._id })
        } catch (err) {
            res.status(err.statusCode ? err.statusCode : 500).json({ error: err.msg ? err.msg : err.message })
        }
    }

    static async apiLoginUser(req, res) {
        try {
            // Validate Request Body
            const reqBody = req.body
            
            if (!(Object.keys(reqBody).includes("username") && Object.keys(reqBody).includes("password"))) {
                throw {
                    statusCode: 400,
                    msg: "Missing Request Body Fields"
                }
            }

            // Search Database for User
            const dbUser = await User.findOne({ username: reqBody.username })
            if (!dbUser) {
                throw {
                    statusCode: 404,
                    msg: `User with username: ${reqBody.username} not found`
                }
            }

            if (dbUser.password !== reqBody.password) {
                throw {
                    statusCode: 401,
                    msg: "Incorrect password"
                }
            }

            // Create JWT
            const tokenMaxAge = 10800 // 3 hours (seconds)
            const token = jwt.sign(
                { id: dbUser._id, username: dbUser.username, role: dbUser.role },
                process.env.JWT_SECRET,
                {
                    expiresIn: tokenMaxAge
                }
            )
            res.cookie("jwt", token, {
                httpOnly: true,
                maxAge: tokenMaxAge * 1000, // 3 hours (ms)
            });

            res.status(200).json({ status: "success" })
        } catch (err) {
            res.status(err.statusCode ? err.statusCode : 500).json({ error: err.msg ? err.msg : err.message })
        }
    }
}