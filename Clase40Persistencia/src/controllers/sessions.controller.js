import { userService } from "../services/services.js";
import { createHash, validatePassword } from "../utils.js";
import jwt from 'jsonwebtoken';
import config from "../config/config.js";
import MailingService from "../services/MailingService.js";
import UserDTO from "../dao/DTO/User.dto.js";

// import PersistenceFactory from "../dao/Factory.js";

// const Factory = await PersistenceFactory.getPersistence();
// const userService = Factory.users


const register = async(req,res) =>{
    const  {first_name,last_name,email,password, username} = req.body;
    if(!first_name||!last_name||!email||!password) return res.status(400).send({status:"error",error:"Incomplete values"});
    const exists = await userService.getBy({email})
    if(exists) return res.status(400).send({status:"error",error:"User already exists"});
    const hashedPassword = await createHash(password);
    const user = UserDTO.getDbDTOFrom({
        first_name,
        last_name,
        email,
        password:hashedPassword
    })
    console.log(user);
    const result = await userService.save(user);
    res.send({status:"success",payload:result._id})
}


const login = async(req,res) =>{
    const {email,password} = req.body;
    if(!email||!password) return res.status(400).send({status:"error",error:"Incomplete values"});
    const user = await userService.getUserBy({email})
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

const passwordRestoreRequest = async(req,res) =>{
    const {email} = req.body;
    if(!email) return res.status(400).send({status:"error",error:"Empty email, cannot send mail"})
    const exists = await userService.getUserBy({email});
    if(!exists) return res.status(400).send({status:"error",error:"No user found with this email"})
    const recoverToken = jwt.sign({email},config.jwt.SECRET,{expiresIn:300});
    const mailer = new MailingService();
    let result = await mailer.sendSimpleMail({
        from:'CoderRecuperaciones',
        to:'ing_mauricioespinosa@hotmail.com',
        subject:'Cambio de contraseña',
        html:`<div>
            <h1>Solicitud de reestablecimiento de contraseña</h1>
            <p>Para reestablecer la contraseña, entra al <a href=http://localhost:8080/restorePassword?token=${recoverToken}>siguiente enlace</a>
            <p>Si no solicitaste este camibo, ignora el correo o ten cuidado porque intentan acceder a tu cuenta</p>
        </div>
        `
    })
    res.send({status:"success",message:"Se envió un correo electrónico para reestablecer la contraseña"})
}

const restorePassword = async(req,res)=>{
    try{
        const {password,token} = req.body;
        const {email} = jwt.verify(token,config.jwt.SECRET);
        let user = await userService.getUserBy({email});
        if(!user) return res.status(404).send({status:"error",error:"Error en el correo electrónico"})
        user.password = await createHash(password);
        await userService.updateUser(user);
        res.send({status:"success",message:"contraseña cambiada"})
    }catch(error){
        console.log(error);
        if(error.expiredAt){
            return res.status(400).send({status:"error",error:"Token expirado, favor de solicitar el correo nuevamente"})
        }
        else{
            return res.status(400).send({status:"error",error:"Token malformado o no encontrado"});
        }
    }
}

export default {
    login,
    passwordRestoreRequest,
    register,
    restorePassword
}