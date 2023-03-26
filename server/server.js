require('dotenv').config()
const express = require('express')
const app = express()
const { errorHandler } = require('./middleware/errorMiddleware')
const colors = require('colors')
const connectDB = require('./config/db')
const port = process.env.PORT

connectDB()

// Initialization and settings
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routing
app.use('/api/exercises', require('./routes/exerciseRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

// Error Handling Middleware:: sets express error handler to output JSON instead of HTML
app.use(errorHandler)

// Mongoose


app.listen(port, () => console.log(`Server Started on Port ${port}`))