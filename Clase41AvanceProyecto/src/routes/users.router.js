import { Router } from "express";
import UserDTO from "../dao/DTO/User.dto.js";
import { userService, artworkService, cartService } from "../services/services.js";

const router = Router();

router.get('/', async(req,res)=>{
    const users = await userService.getAll();
    const artworks = await artworkService.getBy();
    const carts = await cartService.getBy();
    
    console.log(artworks);
    console.log(carts);
    res.send({status:"success",payload:users})
})

router.get('/:uid',async (req,res)=>{
    const userId = req.params.uid;
    if(!userId) return res.status(400).send({status:"error",error:"invalid id"});
    let user = await userService.getUserBy({_id:userId})
    if(!user) return res.status(404).send({status:"error",error:"User not found"});
    user = UserDTO.getPresenterFrom(user);
    res.send({status:"success",payload:user})
})




export default router;