const express = require('express')
const orderRoute = express.Router()
const controlOrder = require('../controllers/ordersController.js')

orderRoute.get('/all', controlOrder.allOrders)

orderRoute.post('/create', controlOrder.createOrder)

orderRoute.get('/update', controlOrder.updateOrder)

orderRoute.get('/delete/:oid([0-9])/', controlOrder.deleteOrder)

module.exports = orderRoute