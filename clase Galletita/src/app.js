import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(cookieParser("palabraClaveS3cr3tA"));


app.get('/',(req,res)=>{
    const valorDeCookie= {
        a:1,
        b:"c",
        d:true
    };
    res.cookie('cookieConPapas',valorDeCookie).send({status:"success", message:"Hola cookie :)"})
})
app.get('/cookieEspia',(req,res)=>{
    const valorDeCookie = {
        a:1,
        b:"c",
        d:true
    }
    res.cookie('cookieEspia',valorDeCookie,{signed:true}).send({status:"success",message:"Secretito shhhhhh"})
})
app.get('/cookieEspecial',(req,res)=>{
    const otraCookie = "Otra papa";
    res.cookie('cookieMortal',otraCookie,{
        maxAge:10000
    }).send({status:"success",message:"Cookie mortal seteada"})
})
app.get('/another',(req,res)=>{
    const cookies = req.cookies;
    console.log(cookies);
    res.send({status:"success", payload:cookies})
})
app.get('/analisisEspiosologo',(req,res)=>{
    const cookies = req.signedCookies;
    res.send({status:"success",payload:cookies})
})
app.get('/salida',(req,res)=>{
    res.clearCookie('cookieConPapas').send({status:"adiós"})
})
app.listen(8080,()=>console.log("Listening"))