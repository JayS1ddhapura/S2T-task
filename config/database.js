const mongoose = require('mongoose')
require('dotenv').config()
const { DB_URL } = process.env

// connecting database
const connectDB = async (url) => {
    const connection = await mongoose.connect(url)
    console.log("Successfully connected to the database.")
    return connection
}

connectDB(DB_URL)

module.exports = connectDB