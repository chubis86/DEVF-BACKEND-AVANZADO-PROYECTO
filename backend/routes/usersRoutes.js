const express = require('express')
const router = express.Router()
const { registrarUser, loginUser, datosUser } = require('../controllers/usersController')
const { protect } = require('../middleware/authMiddleware')




//Público
router.post('/', registrarUser)
router.post('/login', loginUser)

//Privado
router.get('/data', protect, datosUser)

module.exports = router

