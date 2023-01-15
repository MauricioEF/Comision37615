import winston from 'winston';

const customLevelsConfig = {
    fatal:0,
    error:1,
    warning:2,
    info:3,
    debug:4
}
const logger = winston.createLogger({
    levels:customLevelsConfig,
    transports:[
        new winston.transports.Console({level:"debug"}),
        new winston.transports.File({level:"info",filename:'./problems.log'}),
        new winston.transports.File({level:"error",filename:'./errors.log'})
    ]
})

export const addLogger = (req, res, next) =>{
    req.logger = logger;
    req.logger.info(`${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`)
    next();
}