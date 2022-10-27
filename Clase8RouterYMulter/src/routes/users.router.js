import { Router } from 'express';
import { uploader } from '../utils.js';

const router = Router();

const users = [];

router.get('/',(req,res)=>{
    res.send({users});
})

router.post('/',uploader.single('image'),(req,res)=>{
    const {first_name,last_name,age} = req.body;
    const user = {
        first_name,
        last_name,
        age
    }
    users.push(user);
    res.send({status:"success",payload:user});
})

router.put('/',(req,res)=>{

})

router.delete('/',(req,res)=>{

})
export default router;