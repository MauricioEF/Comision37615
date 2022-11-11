import express from 'express';
import artworksRouter from './routes/artworks.router.js';
import collectionsRouter from './routes/collections.router.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api/artworks',artworksRouter);
app.use('/api/collections',collectionsRouter);

const server = app.listen(PORT,()=>console.log(`Listening on ${PORT}`))