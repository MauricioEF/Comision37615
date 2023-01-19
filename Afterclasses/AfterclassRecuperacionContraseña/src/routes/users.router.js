import { Router } from "express";

const users = [
    {
        id:1,
        nombre:"Mauricio",
        correo:"correomau@correo.com"
    },
    {
        id:2,
        nombre:"Pedro",
        correo:"correopedro@correo.com"
    },
    {
        id:3,
        nombre:"Carlos",
        correo:"correocarlos@correo.com"
    }
]

const router = Router();

router.get('/',(req,res)=>{
    res.send({status:"success",payload:users})
})

router.get('/:uid',(req,res)=>{
    const userId = parseInt(req.params.uid);
    if(isNaN(userId)) return res.status(400).send({status:"error",error:"invalid id"});
    const user = users.find(u=>u.id===userId);
    if(!user) return res.status(404).send({status:"error",error:"User not found"});
    res.send({status:"success",payload:user})
})




export default router;