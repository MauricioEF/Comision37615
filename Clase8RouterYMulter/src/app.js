import express from 'express';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import __dirname from './utils.js';
const app = express();
const server = app.listen(8080,()=>console.log("Escuchando :)"))

app.use((req,res,next)=>{
    console.log("Petición recibida");
    next();
})
app.use(express.json());
app.use(express.static(__dirname+'/public'))

app.use('/api/users',usersRouter)
app.use('/api/pets',petsRouter);

//MIDDLEWARE