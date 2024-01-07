const express = require('express')
const router = express.Router()
const { registrarUser, loginUser, datosUser } = require('../controllers/usersController')



router.post('/', registrarUser)
router.post('/login', loginUser)
router.get('/data', datosUser)

module.exports = router

