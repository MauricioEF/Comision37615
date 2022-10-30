import { Router } from 'express';
import UsersManager from '../managers/users.manager.js';

const router = Router();
const userService = new UsersManager();

router.get('/',(req,res)=>{
    res.render("home")
})

router.get('/users',async(req,res)=>{
    const users = await userService.getUsers();
    res.render('users',{
        name:"Sol",
        users
    });
})

export default router;