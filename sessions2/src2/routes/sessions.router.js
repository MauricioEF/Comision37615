import { Router } from "express";
import passport from "passport";

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


export default router;