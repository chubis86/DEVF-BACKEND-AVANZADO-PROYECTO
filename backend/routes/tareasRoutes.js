const express = require('express')
const router = express.Router()
const { getTareas, setTareas, modificarTareas, eliminarTareas } = require('../controllers/tareasController')

router.get('/', getTareas)

router.post('/', setTareas)

router.put('/:id', modificarTareas)

router.delete('/:id', eliminarTareas)


module.exports = router

