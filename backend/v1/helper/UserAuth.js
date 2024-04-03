/*
    Uses JSON Web Tokens (JWTs) to authenticate Users
    Ensures that the User making the request is authorised, 
        e.g. When deleting User with a specific ID, ID in JWT must match
*/
import pkg from "jsonwebtoken"
const { verify } = pkg

export default function UserAuth(req, res, next) {
    const token = req.cookies.jwt
    const userId = req.params.id

    if (!token) {
        return res.status(401).json({ message: "Unauthorised" })
    }

    if (!userId) {
        return res.status(400).json({ message: "UserID Field Empty" })
    }

    verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (err || decodedToken.id !== userId) {
            return res.status(401).json({ message: "Unauthorised" })
        } else {
            next()
        }
    })
}