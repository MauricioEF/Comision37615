import { Router } from "express";
import passport from "passport";
import jwt from 'jsonwebtoken';

const router = Router();

router.post('/register', passport.authenticate('register',{failureRedirect:'/api/sessions/failedregister'}), async(req,res)=>{
    const user = req.user;
    res.send({status:"success",payload:user._id})
})
router.get('/failedregister',(req,res)=>{
    console.log("Passport falló");
    res.status(500).send({status:"error",error:"Error de passport"})
})

router.post('/login',passport.authenticate('login'),async (req,res)=>{
    req.session.user = {
        name: `${req.user.first_name} ${req.user.last_name}`,
        email: req.user.email,
        role: req.user.role
    }
    res.send({status:"success", message:"Logueado!"})
})

router.get('/github',passport.authenticate('github'),(req,res)=>{
    //Este primer punto, ABRE la aplicación de github para solicitar los datos.
})
router.get('/githubcallback',passport.authenticate('github'),(req,res)=>{
    //Éste segundo, TOMA los datos que haya dado github con passport
    req.session.user = {
        name: `${req.user.first_name} ${req.user.last_name}`,
        email: req.user.email,
        role: req.user.role
    }
    res.send({status:"success", message:"Logueado!"})
})


router.post('/loginjwt',passport.authenticate('login'),async(req,res)=>{
    console.log(req.user);
    const user = {
        name: `${req.user.first_name} ${req.user.last_name}`,
        email: req.user.email,
        role: req.user.role
    }
    const token = jwt.sign(user,"aoksd#=;=CVOE",{expiresIn:"1d"});
    res.send({status:"success",message:"Logueado :) ",token})
})

router.get('/current',(req,res)=>{
    const tokenQueVieneDeFront = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUm9kcmlnbyBBam5vdGEiLCJlbWFpbCI6ImNvcnJlb3JvZHJpZ29AY29ycmVvLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjcxMjAyMjI5LCJleHAiOjE2NzEyODg2Mjl9.dmILM9ai54ktQFNdTslrsaCE-JnHkCtPW0Bt9EtHbLQ'
    try{
        const user = jwt.verify(tokenQueVieneDeFront,"aoksd#=;=CVOE")
        console.log(user);
        res.send({user});
    }catch(error){
        res.send(error);
    }
})
export default router;