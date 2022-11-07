import express from 'express';
import { Server } from 'socket.io';
import handlebars from 'express-handlebars';

import __dirname from './utils.js';

const app = express();
const server = app.listen(8080,()=>console.log("Listening"))

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');

app.use(express.json());
app.use(express.static(__dirname+'/public'));

const io = new Server(server)

app.get('/',(req,res)=>{
    res.render('home');
})
const messages = [];

io.on('connection',socket=>{
    console.log("Socket conectado :)")

    socket.on('message',data=>{
        messages.push({socketid:socket.id,message:data})
        io.emit('messageLog',messages);
    })
})