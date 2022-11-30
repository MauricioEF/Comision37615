import mongoose from 'mongoose';
import usersModel from './models/User.js';

const connection = mongoose.connect('TU URL DE MONGO AQUÍ :) ',err=>{
    if(err) console.log(err);
    else console.log("Base conectada")
})

const CRUD = async() =>{
    usersModel.create({name:"Rodrigo",email:"correorodri@correo.com",password:"123"})
}
CRUD();