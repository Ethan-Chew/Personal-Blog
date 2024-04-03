/*
    Uses JSON Web Tokens (JWTs) to authenticate Users
    Ensures that the User making the request has the 'Admin' role
*/
import pkg from "jsonwebtoken"
const { verify } = pkg

export default function AdminAuth(req, res, next) {
    const token = req.cookies.jwt
    if (!token) {
        return res.status(401).json({ message: "Unauthorised" })
    }

    verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (err || decodedToken.role !== "Admin") {
            return res.status(401).json({ message: "Unauthorised" })
        } else {
            next()
        }
    })
}
