/*
    Uses JSON Web Tokens (JWTs) to authenticate Users
    Ensures that the User making the request is authorised, 
        e.g. When deleting User with a specific ID, ID in JWT must match
*/

export default function UserAuth(req, res, next) {
    const token = req.cookies.jwt
    if (!token) {
        return res.status(401).json({ message: "Unauthorised" })
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (err || decodedToken.id !== req.params.id) {
            return res.status(401).json({ message: "Unauthorised" })
        } else {
            next()
        }
    })
}