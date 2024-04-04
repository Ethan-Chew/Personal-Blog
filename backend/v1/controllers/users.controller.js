import { User } from "../../schema.js"
import { Types } from "mongoose"
import { NotFoundException } from "../../errors.js"

export default class UsersController {
    static async apiGetAllUsers(req, res) {
        try {
            const allUsers = await User.find()

            res.status(200).json(allUsers)
        } catch (err) {
            res.status(err.statusCode ? err.statusCode : 500).json({ error: err.msg ? err.msg : err.message })
        }
    }

    static async apiGetUser(req, res) {
        try {
            const userId = req.params.id

            if (!Types.ObjectId.isValid(userId)) {
                throw new Error("Invalid Object ID")
            }

            const userRequest = await User.findById(userId).exec()

            if (userRequest === null) {
                throw new NotFoundException(userId)
            }
            
            res.status(200).json(userRequest)
        } catch (err) {
            res.status(err.statusCode ? err.statusCode : 500).json({ error: err.msg ? err.msg : err.message })
        }
    }

    static async apiDeleteUser() {
        try {
            
        } catch (err) {
            res.status(err.statusCode ? err.statusCode : 500).json({ error: err.msg ? err.msg : err.message })
        }
    }

    static async apiUpdateUser() {
        try {
            
        } catch (err) {
            res.status(err.statusCode ? err.statusCode : 500).json({ error: err.msg ? err.msg : err.message })
        }
    }

    static async apiGetBlogsWUser(req, res) {
        try {
            
        } catch (err) {
            res.status(err.statusCode ? err.statusCode : 500).json({ error: err.msg ? err.msg : err.message })
        }
    }
}