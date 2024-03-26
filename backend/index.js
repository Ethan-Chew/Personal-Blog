import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

// Routes
import BlogRoutes from './v1/routes/blog.routes.js'
import UserRoute from './v1/routes/users.routes.js'

dotenv.config()

// Server Config
const app = express()
app.use(express.json())

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
app.use('/v1/users', UserRoute)

// Default
app.use("*", (req, res) => res.status(404).json({error: "Not Found"}))
app.use((err, req, res, next) => {
    const status = err.status || 500
    const msg = err.message || "Internal Server Error"
    res.status(status).send({ error: msg })
})

connectDB();