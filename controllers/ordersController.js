const {join} = require('path')

exports.allOrders = (req, res) => {
    res.sendFile(join(process.cwd(), 'views', 'allOrder.html'))
}

exports.createOrder = (req, res) => {
    res.sendFile(join(process.cwd(), 'views', 'createOrder.html'))
}

exports.updateOrder = (req, res) => {
    res.sendFile(join(process.cwd(), 'views', 'updateOrder.html'))
}

exports.deleteOrder = (req, res) => {
    res.sendFile(join(process.cwd(), 'views', 'deleteOrder.html'))

}