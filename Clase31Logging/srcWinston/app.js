import express from 'express';
import { addLogger } from './utils/logger.js';


const app = express();
app.use(addLogger);

app.get('/',(req,res)=>{
    res.send("Cualquier Cosa");
})

app.get('*',(req,res)=>{
    res.send("Ruta visitada");
})

app.listen(8080,()=>console.log("Listening"))