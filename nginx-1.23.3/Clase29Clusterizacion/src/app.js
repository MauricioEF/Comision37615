import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>console.log(`Listening on PORT ${PORT}`))

app.get('/proceso',(req,res)=>{
    console.log(process.argv.slice(2));
    res.send(`Petición atendida por el PID ${process.pid}`)
})