const express = require('express')
const router = express.Router()
const { registrarUser, loginUser, datosUser } = require('../controllers/usersController')
const { protect } = require('../middleware/authMiddleware')




//Público
router.post('/', registrarUser)
router.post('/login', loginUser)

//Privado
router.get('/data', protect, datosUser)
//Como la ruta datosUser está protegida, puede acceder a req.User que se genera dentro del authMiddleware y que mantiene la info del usuario
//Entiendo que para que protect pueda funcionar debe de haber un token en los encabezados http. Este token se genera al loguearse el usuario

module.exports = router

