import express from 'express';
import { fork } from 'child_process';
const app = express();
let contador = 0;
const calculoPesado = () =>{
    let sum = 0;
    for(let i=0;i<6e9;i++){
        sum+=i;
    }
    return sum;
}

app.get('/',(req,res)=>{
    res.send("Hola");
})

app.get('/calculo', (req,res)=>{
    const result = calculoPesado();
    res.send(`La suma pesada es ${result}`)
})
app.get('/visita',(req,res)=>{
    res.send(`Has visitado este endpoint ${++contador} veces`)
})

app.get('/calculoforkeado',(req,res)=>{
    const childProcess = fork('./calculoPesado.js');
    childProcess.send('Ejectutate por favor, felices fiestas')
    childProcess.on('message',val=>{
        res.send(`El valor de la suma es ${val}`)
    })
})

app.listen(8080,()=>console.log("Listening"))