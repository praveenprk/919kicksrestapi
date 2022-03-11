const express = require('express')
const { viewAllProducts, createProduct, viewProduct } = require('../controllers/productsController')
const product = express.Router()
const { connectDB } = require("../database/dbconnect")


product.get('/all', viewAllProducts)

product.post('/create', createProduct)

product.get('/viewProduct/:id', viewProduct)

product.put('/update', (req, res) => {
    res.send('Update Product')
})

product.get('/delete/:category/:id', (req, res) => {
    res.send(`Product ${req.params.id} of ${req.params.category} deleted`)
})

product.get('/:category/sort/:order', (req, res) => {
    if(req.params.order === 'asc') {
        res.send(`Products sorted by ascending order`)
    } else {
        res.send(`Products sorted by descending order`)
    }
})


module.exports = product