/* 
    Controllers for user routes register, login, update phone, and delete
*/

const { connectDB } = require("../database/dbconnect")
const UsersModel = require('../models/Users.js')
const bcrypt = require('bcrypt')

//register user controller

exports.registerUser = async (req, res) => {
    try {
        const { name, email, password, age, houseno, street, city, district, zipcode, state, phone } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new UsersModel({
            name: name,
            email: email,
            password: hashedPassword,
            age: age,
            address: [{
                houseno: houseno,
                street: street,
                city: city,
                district: district,
                zipcode: zipcode,
                state: state,
            }],
            phone: phone
        })
        
        const results = await user.save()
        // res.json(results)
        if(results) {
            res.status(201).json({
                status: true,
                message: "User created successfully"
            })
        } else {
            res.json({
                status: false,
                message: "User not created"
            })
        }
    } catch (error) {
        res.json(error)
    }
}

//login user controller
exports.loginUser = async (req, res) => {
    const {email, password} = req.body
    try {
        const search = await UsersModel.findOne({email: email})
        if(search) {
            const isMatch = await bcrypt.compare(password, search.password)
            if(isMatch) {
            res.json({
                status: true,
                message: "User found"
            })
            //redirect the user to the dashboard
            // res.redirect('/view/')
        } else {
            res.json({
                status: false,
                message: "username/password is incorrect"
            })
        }
    } else {
            res.json({
            status: false,
            message: 'not found'
        })
    }

    } catch (error) {
        console.log(error)
    }
}

//update
exports.updatePhone =  async (req, res) => {
    try {
        const update = await UsersModel.updateOne({email: req.params.email}, {$set: {phone: req.body.phone}})
        // res.json(update)
        if(update.modifiedCount > 0){
            res.json({message: "Mobile No. Updated Successfully"})
        }
    } catch (error) {
        res.json(error)
    }
}

//delete by email

exports.deleteUser = async (req, res) => {
    try {
        const remove = await UsersModel.deleteOne({email: req.params.email})
        if(remove.deletedCount > 0){
            res.json({message: "User Deleted Successfully"})
        }
    } catch (error) {
        res.json(error)
    }
}