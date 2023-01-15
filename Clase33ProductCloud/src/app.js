import express from 'express';

const app = express();

const PORT = process.env.PORT || 8080;

app.get('/',(req,res)=>{
    res.send("Inicio de mi servidor");
})

app.get('/endpointsenior',(req,res)=>{
    res.send("Endpoint hecho por Mau Senior");
})

app.get('/endpointjunior',(req,res)=>{
    res.send("Endpoint hecho por Mau JR")
})

app.get('/nuevoEndpoint',(req,res)=>{
    res.send("otro endpoint");
})

app.listen(PORT,()=>console.log(`Listening ${PORT}`))