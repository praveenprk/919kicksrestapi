const express = require('express')
const product = express.Router()

product.get('/all', (req, res) => {
    res.send('All Products')
})

product.post('/create', (req, res) => {
    res.send('Create Product')
})

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