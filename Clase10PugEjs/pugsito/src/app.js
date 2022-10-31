import express from 'express';
import __dirname from './utils.js';

const app = express();

app.set('views',__dirname+'/views');
app.set('view engine','pug');

app.get('/',(req,res)=>{
    res.render('hello.pug',{
        message:"Esta es mi primera página con pug :)"
    })
})

const users = [
    {name:"Leandro",edad:26},
    {name:"Panchito",edad:24},
    {name:"Yesenia",edad:15}
]

app.get('/datos',(req,res)=>{
    const {min,nivel,max,titulo} = req.query;
    res.render('data.pug',{
        min,
        max,
        nivel,
        titulo,
        users
    })
})

const server = app.listen(8080,()=>console.log("Listening"))