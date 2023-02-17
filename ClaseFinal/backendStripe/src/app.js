import express from 'express';
import paymentRouter from './routes/payments.router.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT||8080;
app.use(express.json());
app.use(cors());
app.use('/api/payments',paymentRouter);

app.listen(PORT,()=>console.log(`Listening on PORT ${PORT}`))