import dotenv from 'dotenv';

const mode = process.argv.slice(2)[0];
console.log(mode);

dotenv.config({
    path:mode==="PRODUCTION"?'./.env.production':'./.env.development'
});

const config = {
    app: {
        PORT : process.env.PORT || '8080'
    },
    mongo: {
        USER : process.env.MONGO_USER || 'root',
        PWD  : process.env.MONGO_PASSWORD || '',
        DB   : process.env.MONGO_DATABASE || 'test'
    }
}

console.log(config);
export default config;