import express from 'express';
import petsRouter from './routes/pets.router.js';
import __dirname from './utils.js';

const app = express();

app.use(express.static(__dirname+'/public'))
app.use(express.json());

app.use('/api/pets',petsRouter);

app.listen(8080,()=>console.log("Listening :)"))