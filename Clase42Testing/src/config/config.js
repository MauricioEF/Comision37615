export default {
    app: {
        PORT: process.env.PORT||'',
        ADMIN_EMAIL: process.env.ADMIN_EMAIL,
        ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
        PERSISTENCE: process.env.PERSISTENCE||'MONGO'
    },
    mongo:{
        URL: process.env.MONGO_URL
    },
    jwt:{
        COOKIE:process.env.JWT_COOKIE,
        SECRET: process.env.JWT_SECRET
    }
}