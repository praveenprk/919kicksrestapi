const express = require('express')
const cookie = require('cookie-parser')
const cookieParser = require('cookie-parser')
const cRouter = express.Router()
const { set_cookie, get_cookie, delete_cookie } = require('../controllers/cookieController.js')


cRouter.get('/setcookie', set_cookie)
cRouter.get('/getcookie', get_cookie)
cRouter.get('/deletecookie', delete_cookie)

module.exports = cRouter