import express from 'express';
import session from 'express-session';
import store from 'session-file-store';
import MongoStore from 'connect-mongo';


const app = express();
const FileStore = store(session)

app.use(session({
    //time to live
    // store: new FileStore({path:'./sessions',ttl:2,retries:0}),
    store: MongoStore.create({
        mongoUrl:'URL DE MONGO',
        ttl:25
    }),
    secret:'asdac3e1341asd123adf',
    resave:false,
    saveUninitialized:false
}))

app.get('/',(req,res)=>{
    req.session.user = {
        name: "Rodrigo Ajnota"
    }
    res.send("hola")
})


app.get('/otra',(req,res)=>{
    res.send("Adios");
})

app.listen(8080,()=>console.log("Listooo"))