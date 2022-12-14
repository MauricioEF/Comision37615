import passport from "passport";
import local from 'passport-local';
import userModel from "../models/User.js";
import { createHash, validatePassword } from "../utils.js";

const LocalStrategy = local.Strategy;

const initializePassport = () => {

    passport.use('register', new LocalStrategy({ passReqToCallback: true, usernameField: 'email' }, async (req, email, password, done) => {
        try {
            const { first_name, last_name } = req.body;
            if (!first_name || !last_name) return done(null, false, { message: "Valores incompletos" });
            const exists = await userModel.findOne({ email });
            if (exists) return done(null, false, { message: "El usuario ya existe" })
            const hashedPassword = await createHash(password);
            const user = {
                first_name,
                last_name,
                email,
                password: hashedPassword
            }
            const result = await userModel.create(user);
            //Si todo salió bien
            done(null, result)
        } catch (error) {
            done(error);
        }
    }))

    passport.use('login', new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
        try {
            if (!email || !password) return done(null,false,{message:'Valores incompletos'})
            const user = await userModel.findOne({ email });
            if (!user) return done(null,false,{message:'Usuario no encontrado'})
            const isValidPassword = await validatePassword(user, password);
            if (!isValidPassword) return done(null,false,{message:'Contraseña incorrecta'})
            done(null,user);
        }
        catch (error) {
            done(error);
        }
    }))



    passport.serializeUser((user, done) => {
        done(null, user._id)
    })

    passport.deserializeUser(async (id, done) => {
        let result = await userModel.findOne({ _id: id });
        return done(null, result);
    })

}

export default initializePassport;