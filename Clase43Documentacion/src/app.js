import express from 'express';
import usersRouter from './routes/users.router.js';
import sessionsRouter from './routes/sessions.router.js';
import artworksRouter from './routes/artworks.router.js';
import viewsRouter from './routes/views.router.js';
import cookieParser from 'cookie-parser';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import cors from 'cors';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUIExpress from 'swagger-ui-express';
import typeDefs from './typeDefs.js';
import resolvers from './resolvers.js';
import { ApolloServer } from '@apollo/server';
import {expressMiddleware} from '@apollo/server/express4';

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>console.log("Listening"))
const swaggerOptions = {
    definition:{
        openapi:'3.0.1',
        info: {
            title: "API feliz de Coder",
            description: "API pensada para la clase de Swagger"
        }
    },
    apis:[`${__dirname}/docs/**/*.yaml`]
}

const specs = swaggerJSDoc(swaggerOptions);

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.static(`${__dirname}/public`))
app.use('/api-docs',swaggerUIExpress.serve, swaggerUIExpress.setup(specs));

app.engine('handlebars',handlebars.engine());
app.set('views',`${__dirname}/views`);
app.set('view engine','handlebars');

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
})

await apolloServer.start();

app.use(expressMiddleware(apolloServer));

app.use('/',viewsRouter);


app.use('/api/users',usersRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/artworks',artworksRouter);

