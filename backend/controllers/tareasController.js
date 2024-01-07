 const getTareas = (req, res) => {
    res.status(200).json({message:'Obtener algo'})
 }

 const setTareas = async (req, res) => {
    if(!req.body.texto){
        res.status(400)
        throw new Error ("Por favor teclea la descripción")
    }
    res.status(201).json({message:'Crear nueva tarea'})
 }

 const modificarTareas = async (req, res) => {
    res.status(200).json({message:`Modificar la tarea número ${req.params.id}`})
 }

 const eliminarTareas = async (req, res) => {
    res.status(200).json({message:`Eliminar la tarea número ${req.params.id}`})
 }


module.exports = {
    getTareas,
    setTareas,
    modificarTareas,
    eliminarTareas
}