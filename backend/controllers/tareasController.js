const asyncHandler = require('express-async-handler')
const Tarea = require('../model/tareasModel')

const getTareas = asyncHandler ( async (req, res) => {
    const tareas = await Tarea.find({user:req.user.id})
    res.status(200).json(tareas)
 })

 const setTareas =asyncHandler( async (req, res) => {
    if(!req.body.texto){
        res.status(400)
        throw new Error ("Por favor teclea la descripción")
    }

    const tarea = await Tarea.create({
      texto: req.body.texto,
      user: req.user.id
    })

    res.status(201).json({tarea})
 })

 const modificarTareas = asyncHandler( async (req, res) => {
    const tarea = await Tarea.findById(req.params.id)
    if(!tarea){
      res.status(400)
      throw new Error('La tarea no fue encontrada')
    }

    ///Verificamos que la tarea sea del usuario
    if(tarea.user.toString() !== req.user.id){
      res.status(401)
      throw new Error('Acceso no autorizado')
    }else{
      const tareaUpdated = await Tarea.findByIdAndUpdate(req.params.id, req.body, {new : true})
      res.status(200).json({tareaUpdated})
    }
    
 })

 const eliminarTareas = asyncHandler( async (req, res) => {
   const tarea = await Tarea.findById(req.params.id)
   if(!tarea){
     res.status(400)
     throw new Error('La tarea no fue encontrada')
   } 
   
   await Tarea.findByIdAndDelete(req.params.id)
     
    res.status(200).json({message:`Tarea ${tarea} eliminada`})
 })


module.exports = {
    getTareas,
    setTareas,
    modificarTareas,
    eliminarTareas
}