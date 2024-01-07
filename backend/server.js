//console.log("HOLA")

const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const connectDB = require('./config/db')
const app = express() 
const { errorHandler } = require('./middleware/errorMiddleware')

connectDB()

 //Esto es para probar ya que lo correcto sería tener una carpeta de rutas y no todo en el archivo server.js 
 //Se prueba en postman con GET y localhost:5000/api/tareas
/* app.get('/api/tareas', (req, res)=>{
    res.status(200).json({message:'Obtener algo'})
})
 */

//Estas líneas son para recibir info del body por post
app.use(express.json())
app.use(express.urlencoded({extended:false}))
 
app.use('/api/tareas', require('./routes/tareasRoutes'))
app.use('/api/users', require('./routes/usersRoutes'))
app.use(errorHandler)


app.listen(port, () => console.log(`Servidor iniciado en puerto ${port}`))  