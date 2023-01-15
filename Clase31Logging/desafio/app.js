import express from 'express';
import compression from 'compression';


const app = express();
app.use(compression());

app.get('/',(req,res)=>{
    let string ="Papa feliz con queso";
    for(let i=0;i<1000;i++){
        string+="Papa feliz con queso"
    }
    res.send(string);
})

app.listen(8080,()=>console.log(`Listening`))