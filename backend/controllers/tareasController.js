const asyncHandler = require('express-async-handler')
const Tarea = require('../model/tareasModel')

const getTareas = asyncHandler ( async (req, res) => {
    const tareas = await Tarea.find()
    res.status(200).json(tareas)
 })

 const setTareas =asyncHandler( async (req, res) => {
    if(!req.body.texto){
        res.status(400)
        throw new Error ("Por favor teclea la descripción")
    }

    const tarea = await Tarea.create({
      texto: req.body.texto
    })

    res.status(201).json({tarea})
 })

 const modificarTareas = asyncHandler( async (req, res) => {
    res.status(200).json({message:`Modificar la tarea número ${req.params.id}`})
 })

 const eliminarTareas = asyncHandler( async (req, res) => {
    res.status(200).json({message:`Eliminar la tarea número ${req.params.id}`})
 })


module.exports = {
    getTareas,
    setTareas,
    modificarTareas,
    eliminarTareas
}