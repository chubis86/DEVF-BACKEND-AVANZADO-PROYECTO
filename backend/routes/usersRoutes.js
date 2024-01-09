const express = require('express')
const router = express.Router()
const { registrarUser, loginUser, datosUser } = require('../controllers/usersController')


//Público
router.post('/', registrarUser)
router.post('/login', loginUser)

//Privado
router.get('/data', datosUser)

module.exports = router

