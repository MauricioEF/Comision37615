import express from 'express';
import pino from 'pino';

const app = express();

const streams = [
    { level: "info", stream: process.stdout },
    { level: "error", stream: pino.destination('./errorsPino.log') }
]

const logger = pino({}, pino.multistream(streams));

app.get('/', (req, res) => {
    logger.fatal('fatal');
    logger.error('error');
    logger.warn('warn');
    logger.info('info');
    logger.debug('debug');
    logger.trace('trace');
    res.send("ok");
})

app.listen(8080, () => console.log(`Listening on PORT 8080`))