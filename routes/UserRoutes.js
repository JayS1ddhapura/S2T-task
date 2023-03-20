const expreess = require('express')

// creating router
const Router = new expreess.Router()
const { getInfo, searchOnVM, getUserCard } = require('../controllers/UserController')

// configuring routes
Router.post('/userInfo', getInfo)
Router.post('/search', searchOnVM)
Router.post('/userCard', getUserCard)

module.exports = Router