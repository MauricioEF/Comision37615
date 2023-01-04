import express from 'express';
import mongoose from 'mongoose';
import handlebars from 'express-handlebars';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';
import sessionsRouter from './routes/sessions.router.js';
import passport from 'passport';
import initializePassport from './config/passport.config.js';

const app = express();
const connection = mongoose.connect('mongodb+srv://CoderUser:123@codercluster.w5adegs.mongodb.net/papaconqueso?retryWrites=true&w=majority')

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');

app.use(session({
    store:MongoStore.create({
        mongoUrl:'mongodb+srv://CoderUser:123@codercluster.w5adegs.mongodb.net/papaconqueso?retryWrites=true&w=majority',
        ttl:100
    }),
    secret:'Coder89134epasc3',
    saveUninitialized:false,
    resave:false
}))

initializePassport();
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.static(__dirname+'/public'))

app.use('/',viewsRouter);
app.use('/api/sessions',sessionsRouter)
app.listen(8080,()=>console.log("Listening"))