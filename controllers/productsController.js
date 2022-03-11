/* 
    Controllers for products' routes create, read, update, and delete
*/

const { connectDB } = require("../database/dbconnect")
const ProductModel = require('../models/Products.js')

exports.viewAllProducts = async (req, res) => {
    try {
        const results = await ProductModel.find()
        res.json(results)
    } catch (error) {
        res.json(error)
    }
}

exports.viewProduct = async (req, res) => {
    try {
        const results = await ProductModel.findOne({ _id: req.params.id })
        res.json(results)
    } catch (error) {
        res.json(error)
    }
}

exports.createProduct = async (req, res) => {
    try {
        const { pname, price, description, image, category, vendor, quantity } = req.body   

        const newProduct = new ProductModel({
            name: pname,
            price: price,
            description: description,
            image: image,
            category: category,
            vendor: vendor,
            quantity: quantity
        })

        /* const newProduct = new ProductModel({
            name: 'Razer Blade Pro',
            price: '70000',
            description: 'Razer Blade Pro is a gaming laptop designed by Razer, which is a subsidiary of Razer International Ltd. It was released on September 3, 2019, in India and was the first gaming laptop to feature the Razer Pay feature.',
            image: 'https://images-na.ssl-images-amazon.com/images/I/61-Q-q-X-sL._AC_SL1500_.jpg',
            category: 'Laptop',
            vendor: 'Razer',
            quantity: 10
        }) */
        
        const results = newProduct.save()
        // res.json(results)
        if(results) {
            res.status(201).json({
                status: true,
                message: "New product added successfully"
            })
        } else {
            res.json({
                status: false,
                message: "Product could not be added"
            })
        }
    } catch (error) {
        res.json(error)
    }
}

