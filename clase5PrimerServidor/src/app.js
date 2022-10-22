import express from 'express';
import moment from 'moment';
const app = express(); //inciar el aplicativo

const server = app.listen(8080,()=>console.log("Listening on Express :)")) //Poner al aplicativo a escuchar

//ENDPOINTS

let contador = 0;

app.get('/',(req,res)=>{
    res.send(`<h1 style="color:blue;">Bienvenidos al servidor express</h1>`)
})
app.get('/visitas',(req,res)=>{
    contador++;
    res.send(`La cantidad de visitas es: ${contador}`)
})
app.get('/fyh',(req,res)=>{
    res.send({ fyh:moment().format('DD/MM/YYYY hh:mm:ss') });
})


//req.query SÓLO se utiliza con ?
app.get('/saludar',(req,res)=>{
    const {nombre="usuario",edad} = req.query;
    //req.query
    console.log(req.query);
    res.send(`Hola :) ${nombre}, tienes ${edad} años`)
})

const users = [
    {id:1,nombre:"Matias",edad:26},
    {id:2,nombre:"Julieta",edad:26},
    {id:3,nombre:"Alejandro",edad:26}
]
app.get('/users',(req,res)=>{
    res.send({users:users})
})


app.get('/users/:userId',async (req,res)=>{
    const id = parseInt(req.params.userId);
    console.log(typeof id);
    const filter = users.filter(u => u.id===id)
    if(filter[0]){
        res.send({user:filter[0]})
    }
    else{
        res.send({status:"error",message:"No encontré al usuario"})
    }
})


const frase = "Hola mundo cómo están";

app.get('/api/frase',(req,res)=>{
    res.send({frase})
})

app.get('/api/letras/:num',(req,res)=>{
    let pos = parseInt(req.params.num);
    res.send({letra:frase[pos-1]})
})

app.get('/api/palabras/:num',(req,res)=>{
    let pos = parseInt(req.params.num);
    res.send({word:frase.split(' ')[pos-1]})
})