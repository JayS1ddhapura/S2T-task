const expreess = require('express')
const Router = new expreess.Router()
const { getInfo, searchOnVM } = require('../controllers/UserController')

Router.post('/userInfo', getInfo)
Router.post('/search', searchOnVM)

module.exports = Router