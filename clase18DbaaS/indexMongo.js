import mongoose from 'mongoose';
import usersModel from './models/User.js';

const connection = mongoose.connect('mongodb+srv://CoderUser:123@codercluster.difiz1u.mongodb.net/BaseFeliz?retryWrites=true&w=majority',err=>{
    if(err) console.log(err);
    else console.log("Base conectada")
})

const CRUD = async() =>{
    usersModel.create({name:"Rodrigo",email:"correorodri@correo.com",password:"123"})
}
CRUD();