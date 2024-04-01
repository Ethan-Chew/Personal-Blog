import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from "cors"
import cookieParser from 'cookie-parser'

// Routes
import BlogRoutes from './v1/routes/blog.routes.js'
import UserRoutes from './v1/routes/users.routes.js'
import AuthRoutes from './v1/routes/auth.routes.js'

dotenv.config()

// Server Config
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true
}))

// Connect to Database
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        app.listen(8080, () => {
            console.log("Server listening on port 8080")
        })
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

// App Routes
app.use('/v1/blog', BlogRoutes)
app.use('/v1/users', UserRoutes)
app.use('/v1/auth', AuthRoutes)

// Default
app.use("*", (req, res) => res.status(404).json({error: "Not Found"}))
app.use((err, req, res, next) => {
    const status = err.status || 500
    const msg = err.message || "Internal Server Error"
    res.status(status).send({ error: msg })
})

connectDB();