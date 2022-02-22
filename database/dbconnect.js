const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const db = process.env.DB
exports.connectDB = async () => {
    try {
        await mongoose.connect(db)
        console.log(`mongoose connection is successful`)
    } catch (err) {
        return console.log(err)
    }
}
