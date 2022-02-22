const express = require("express")
const { registerUser, loginUser, updatePhone, deleteUser } = require("../controllers/usersController")


const { connectDB } = require("../database/dbconnect")
const UsersModel = require('../models/Users.js')

// const {createUserDoc, getUsersAgeDetails} = require('../models/Users')

const user = express.Router()

//get All users
user.get("/all", async (req, res) => {
    try {
        const results = await UsersModel.find()
        res.json(results)
    } catch (error) {
        res.json(error)
    }
})

//get users by email
user.get('/view/:email', async (req, res) => {
    try {
        const results = await UsersModel.findOne({ email: req.params.email })
        res.json(results)
    } catch (error) {
        res.json(error)
    }
})

//Create user and save to database
user.post("/create", registerUser)

//login user

user.post('/login', loginUser)


//update phone number by email
user.put("/update/:email", updatePhone)

//delete by email
user.delete("/delete/:email", deleteUser)


//Get users above age of 18
user.get('/search/', (req, res) => {
    console.log(req.query.order)
    res.send(`Response OK`)
})

module.exports = user

/*
exports.createUserDoc = async () => {
try {
    //preparing data
    const userDoc = new UsersModel({
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        password: 'pass@1234',
        address: [
            {
                houseno: '137',
                street: 'N.S Nagar Bharatpur',
                city: 'Talcher',
                district: 'Angul',
                zipcode: '759148',
                state: 'Odisha'
            }],
        phone: '9078989262'
    })
    //saving data
    const result = await userDoc.save()
    console.log(result)
} catch (err) {
        console.log(err)
    }
}
//Get All Records
exports.getAllUsers = async () => {
   const users = await UsersModel.find()
   console.log(users)
}

//Get Specific Fields & Records
exports.getUsersDetail = async () => {
    const usersDetails = await UsersModel.find().select(['-password', '-joinDate', '-__v', '-age'])
    console.log(usersDetails)
}

//Get Specific Record
exports.getUsersAgeDetails = async (searchAge) => {
    //Using Object
    // const usersDetails = await UsersModel.find({age:{$lt:21}}).count() //works
    const usersDetails = await UsersModel.find({age:{$lt:searchAge}}).select(['-password', '-joinDate', '-__v', '-address']) //works
    
    //using API
    // const usersDetails = await UsersModel.find().where('age').gt(20).count() //works
    console.log(usersDetails)
}
*/