const express = require('express')
const router = express.Router()
const { getTareas, setTareas, modificarTareas, eliminarTareas } = require('../controllers/tareasController')
const { protect } = require('../middleware/authMiddleware')


router.get('/', protect, getTareas)

router.post('/', protect, setTareas)

router.put('/:id', protect, modificarTareas)

router.delete('/:id', protect, eliminarTareas)


module.exports = router

