import express from 'express';
import database from './db/knex.js';

const app = express();
const server = app.listen(8080,()=>console.log("Listening on 8080"))

const users = [
    {first_name:"Rodrigo",last_name:"Ajnota",email:"correorodri@correo.com",age:26,gender:'male'},
    {first_name:"Matías Nicolás",last_name:"Saldaño",email:"correomati@correo.com",age:22,gender:'male'},
    {first_name:"Ayelen",last_name:"Aguilar",email:"correoaye@correo.com",age:36,gender:'female'},
    {first_name:"Julieta",last_name:"Castillo",email:"correorjuli@correo.com",age:24,gender:'female'},
]


app.get('/',async(req,res)=>{
    // let result = await database('users').select('*').where('age','>=',26);
    let result = await database('users').select('first_name','email','age').where('gender','male');
    console.log(result);
    res.send({result})
})

app.get('/usersInsertion',async(req,res)=>{
    let result = await database('users').insert(users);
    res.send({result})
})

app.get('/updateUser',async(req,res)=>{
    const updateAge = {age:30};
    let result = await database('users').where('gender','male').update(updateAge)
    res.send({result})
})

app.get('/deleteUser',async(req,res)=>{
    let result = await database('users').where('id',1).del();
    res.send({result})
})