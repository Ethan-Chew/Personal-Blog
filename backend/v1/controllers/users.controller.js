import { User } from "../../schema.js"

export default class UsersController {
    static async apiGetAllUsers() {

    }

    static async apiGetUser() {

    }

    static async apiDeleteUser() {

    }

    static async apiUpdateUser() {
        
    }

    static async apiGetBlogsWUser(req, res) {
        const { id } = req.params

        console.log(id)
    }
}