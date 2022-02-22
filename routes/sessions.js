const express = require('express')
const sessionRoute = express.Router()
const sessionController = require('../controllers/sessionController.js')

sessionRoute.get('/setsession', sessionController.set_session)
sessionRoute.get('/getsession', sessionController.get_session)
sessionRoute.get('/deletesession', sessionController.delete_session)

module.exports = sessionRoute