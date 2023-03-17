const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const UserRoute = require('./routes/UserRoutes')
require('dotenv').config()
require('./config/database')

const { PORT } = process.env

// initializing express
const app = express({});

// setting up CORS and body parser
app.use(bodyParser.json())
app.use(cors())

// using user routes
app.use(UserRoute)

// starting application
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})