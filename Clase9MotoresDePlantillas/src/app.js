import express from 'express';
import handlebars from 'express-handlebars';

import viewsRouter from './routes/views.router.js';
import usersRouter from './routes/users.router.js';
import __dirname from './utils.js';
const app = express();

//Motor de plantillas

//Registro
app.engine('handlebars',handlebars.engine());
//Conectar con la carpeta de vistas
app.set('views',__dirname+'/views');
//Activo el motor registrado
app.set('view engine','handlebars');

app.use(express.json());
app.use('/',viewsRouter);
app.use('/api/users',usersRouter);

const server = app.listen(8080,()=>console.log("Listening "))