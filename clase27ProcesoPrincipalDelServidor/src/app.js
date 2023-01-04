import express from 'express';
import mongoose from 'mongoose';
import config from './config/config.js';

const PORT  = config.app.PORT;

const app = express();
const connection = mongoose.connect(`mongodb+srv://${config.mongo.USER}:${config.mongo.PWD}@codercluster.w5adegs.mongodb.net/${config.mongo.DB}?retryWrites=true&w=majority`)

app.listen(PORT,()=>console.log(`Listening on ${PORT}`));