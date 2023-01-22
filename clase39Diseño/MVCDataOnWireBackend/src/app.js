import express from 'express';
import usersRouter from './routes/users.router.js';
import sessionsRouter from './routes/sessions.router.js';
import viewsRouter from './routes/views.router.js';
import mongoose from 'mongoose';
import config from './config/config.js';
import cookieParser from 'cookie-parser';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 8080;
const connection = mongoose.connect(config.mongo.URL)

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.static(`${__dirname}/public`))

// app.engine('handlebars',handlebars.engine());
// app.set('views',`${__dirname}/views`);
// app.set('view engine','handlebars');

// app.use('/',viewsRouter);

app.use('/api/users',usersRouter);
app.use('/api/sessions',sessionsRouter);

app.listen(PORT,()=>console.log("Listening"))