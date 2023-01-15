import userModel from "../dao/User.dao.js";
import { createHash, validatePassword } from "../utils.js";
import jwt from 'jsonwebtoken';
import config from "../config/config.js";

const register = async(req,res) =>{
    const  {first_name,last_name,email,password} = req.body;
    if(!first_name||!last_name||!email||!password) return res.status(400).send({status:"error",error:"Incomplete values"});
    const exists = await userModel.findOne({email});
    if(exists) return res.status(400).send({status:"error",error:"User already exists"});
    const hashedPassword = await createHash(password);
    const user = {
        first_name,
        last_name,
        email,
        password:hashedPassword
    }
    const result = await userModel.create(user);
    res.send({status:"success",payload:result._id})
}


const login = async(req,res) =>{
    const {email,password} = req.body;
    if(!email||!password) return res.status(400).send({status:"error",error:"Incomplete values"});
    const user = await userModel.findOne({email});
    if(!user) return res.status(404).send({status:"error",error:"Invalid credentials"});
    const isValidPassword = await validatePassword(user,password);
    if(!isValidPassword) return res.status(400).send({status:"error",error:"Invalid password"});
    const tokenizedUser = {
        id: user._id,
        role:user.role,
        name: `${user.first_name} ${user.last_name}`
    }
    const token = jwt.sign(tokenizedUser,config.jwt.SECRET,{expiresIn:"1d"});
    res.cookie(config.jwt.COOKIE,token).send({status:"success",message:"Logged in"})
}

export default {
    login,
    register
}