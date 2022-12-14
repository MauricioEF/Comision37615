import express, { response } from 'express';
import session from 'express-session';

const app = express();
let contador = 0;


app.use(express.json());
app.use(session({
    secret:"Cod3RS3ssi0nFelizConQuesito",
    resave:true,
    saveUninitialized:true
}))

app.get('/',(req,res)=>{
    const {nombre} = req.query;
    if(!req.session.contador){//Es su primera visita
        req.session.user = nombre||"usuario";
        req.session.contador = ++contador;
        res.send({status:"success",message:`¡Hola, ${req.session.user}!`})
    }else{
        res.send({status:"success",message: `Hola, ${req.session.user}, has visitado este endpoint ${++contador} veces`})
    }
})




app.post('/login',(req,res)=>{
    const {email, password} = req.body;
    //SE SUPOOOOONE QUE AQUI VALIDAMOS AL USUARIO
    if(email==="correofeliz@correo.com"&&password==="123"){
        const user = {
            name: "Ingrid",
            last_name:"Cuadra",
            email,
            role:"student",
            age:26,
            password
        }
        req.session.user = {
            name : `${user.name} ${user.last_name}`,
            role: "student"
        }
        res.send("logueado")
    }
    else{
        res.status(400).send("Credenciales incorrectas")
    }
})

app.get('/profile',(req,res)=>{
    res.send(req.session.user);
})



//Middleware
const validateStudent = (req,res,next) =>{
    if(!req.session.user) return res.status(401).send({status:"error",error:"No identificado"})
    if(req.session.user.role!=="student") return res.status(403).send({status:"error",error:"No autorizado"});
    next();
}

const validateTeacher = (req,res,next) =>{
    if(!req.session.user) return res.status(401).send({status:"error",error:"No identificado"})
    if(req.session.user.role!=="teacher") return res.status(403).send({status:"error",error:"No autorizado"});
    next();
}

app.get('/infoEstudiantil',validateStudent,(req,res)=>{
    res.send("Esto sólo lo debería ver un estudiante")
})

app.get('/logout',(req,res)=>{
    req.session.destroy(err=>{
        if(err) return res.status(500).send("No pude cerrar sesión")
    })
    res.send("Deslogueado :( ")
})

app.listen(8080,()=>console.log("Listening"));