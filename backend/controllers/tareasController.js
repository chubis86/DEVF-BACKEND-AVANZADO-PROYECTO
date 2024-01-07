 const getTareas = (req, res) => {
    res.status(200).json({message:'Obtener algo'})
 }

 const setTareas = (req, res) => {
    res.status(201).json({message:'Crear nueva tarea'})
 }

 const modificarTareas = (req, res) => {
    res.status(200).json({message:`Modificar la tarea número ${req.params.id}`})
 }

 const eliminarTareas = (req, res) => {
    res.status(200).json({message:`Eliminar la tarea número ${req.params.id}`})
 }


module.exports = {
    getTareas,
    setTareas,
    modificarTareas,
    eliminarTareas
}