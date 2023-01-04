import cluster from 'cluster';
import express from 'express';
import os from 'os';

const app = express();
const CPUs = os.cpus().length;

if (cluster.isPrimary) {
    console.log(`Proceso primario con PID ${process.pid} ejecutándose`)
    for (let i = 0; i < CPUs; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker) =>{
        console.log(`El proceso ${worker.process.pid} murió :(`)
        cluster.fork();
    })
} else {
    console.log(`Proceso worker con PID ${process.pid} ejecutándose`)
    app.listen(8080, () => console.log("Listening"))
}

app.get('/', (req, res) => {
    res.send(`Petición atendida por el proceso ${process.pid}`)
})
app.get('/operacion',(req,res)=>{
    let result = 0;
    for(let i=0;i<5e9;i++){
        result+=i;
    }
    res.send(`Petición atendida por ${process.pid}, resultado=${result}`)
})