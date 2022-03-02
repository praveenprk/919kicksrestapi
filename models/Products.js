const mongoose = require('mongoose')

//Define product schema

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    vendor: {
        type: String,
        required: true,
        trim: true
    },
    quantity: {
        type: Number,
        required: true,
        trim: true
    },
    rating: {
        type: Number,
        required: true,
        trim: true
    },
    reviews: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now,
        trim: true
    }
})

const ProductModel = mongoose.model('Product', productSchema)

// const newProduct = new ProductModel({
//     name: 'Samsung Galaxy S10',
//     price: '12000',
//     description: 'Samsung Galaxy S10 is a smartphone manufactured by Samsung Electronics Co., Ltd. It was released on September 3, 2019, in India and was the first smartphone to feature the Samsung Pay feature.',
//     image: 'https://rukminim1.flixcart.com/image/612/612/jm2jz80/mobile/f/z/y/samsung-galaxy-s10-sm-g973fzkaxz-original-imafgqzjqzjzjzjy.jpeg?q=70',
//     category: 'Mobile',
//     vendor: 'Samsung',
//     quantity: '10',
//     rating: '4',
//     reviews: 'Good product'
// })
// newProduct.save()

module.exports = ProductModel



