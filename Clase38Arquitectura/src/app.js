import express from 'express';
import usersRouter from './routes/users.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mongoose from 'mongoose';
import config from './config/config.js';
import cookieParser from 'cookie-parser';

const app = express();

const PORT = process.env.PORT || 8080;
const connection = mongoose.connect(config.mongo.URL)
app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/sessions',sessionsRouter);

app.listen(PORT,()=>console.log("Listening"))