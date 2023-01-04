import { Router } from "express";

const router = Router();


router.get('/',(req,res)=>{
    res.render('register')
})

router.get('/login',(req,res)=>{
    res.render('login');
})

router.get('/profile',(req,res)=>{
    if(req.session.user){
        res.render('profile',{user:req.session.user})
    }else{
        res.status(401).send({status:"error",error:"Not authenticated"})
    }
})
export default router;