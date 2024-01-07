//const asyncHandler = require('express-async-handler')
//const User = require('../model/usersModel')

const registrarUser =  (req, res) => {
    
    res.status(201).json({message: 'Usuario registrado'})
}

const loginUser =  (req, res) => {
    
    res.status(201).json({message: 'Usuario logueado'})
}

const datosUser =  (req, res) => {
    
    res.status(201).json({message: 'datos de Ususario'})
}


 module.exports = {
    registrarUser,
    loginUser,
    datosUser
 }