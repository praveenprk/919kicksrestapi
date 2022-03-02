//https://mongoosejs.com/docs/api/query.html#query_Query-gt

const mongoose = require('mongoose')

//Define Users Schema

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        default: 18
    },
    address:
            [{
                houseno: {
                    type: String,
                    required: true
                },
                street: {
                    type: String,
                    required: true
                },
                city: {
                    type: String,
                    required: true
                },
                district: {
                    type: String,
                    required: true
                },
                zipcode: {
                    type: String,
                    required: true,
                    trim: true
                },
                state: {
                    type: String,
                    required: true
                }
            }],

    phone: {
        type: String,
        required: false,
        trim: true,
        validate: {
            validator: function(v) {
                return /^\d{10}$/.test(v)
            }
        }
    },

    joinDate: {
        type: Date,
        default: Date.now
    }
})


// console.log(usersSchema.path('phone'))


//Compiling Schema into Model

const UsersModel = mongoose.model('Users', usersSchema)

module.exports = UsersModel
