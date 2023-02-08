import jwt from 'jsonwebtoken';
import config from '../config/config.js';


export const privateValidation = (req,res,next) =>{
    try{
        const token = req.cookies[config.jwt.COOKIE];
        if(!token) return res.redirect('/login');
        const user = jwt.verify(token,config.jwt.SECRET);
        req.user = user;
        next();
    }catch(error){
        console.log(error);
        res.redirect('/login');
    }
}


export const executePolicies = (policies) =>{
    return (req,res,next) =>{
        if(policies[0].toUpperCase()==="PUBLIC") return next();
        if(policies.includes(req.user.role.toUpperCase())) return next();
        res.redirect('/');
    }
}