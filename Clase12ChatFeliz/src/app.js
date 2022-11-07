import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import { Server } from 'socket.io';

import viewsRouter from './routes/views.router.js';
import router from './routes/views.router.js';

const app = express();

app.use(express.static(__dirname+'/public'));


app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');

app.use('/',viewsRouter);


const PORT = process.env.PORT||8080;
const server = app.listen(PORT,()=>console.log(`Listening on ${PORT}`));
const io = new Server(server);

const messages = [];

app.use((req,res,next)=>{
    req.io = io;
})

router.post('/',(req,res)=>{
    //Insertas el producto
    asdasdasdasd
    //Volver a leer los productos del archivo
    products = asdasdasdasd
    req.io.emit('products',products);
})

io.on('connection',socket=>{
    socket.emit('logs',messages);
    socket.on('message',data=>{
        messages.push(data);
        io.emit('logs',messages);
    })
    socket.on('authenticated',data=>{
        socket.broadcast.emit('newUserConnected',data);
    })
})