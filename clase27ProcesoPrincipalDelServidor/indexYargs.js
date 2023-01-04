import yargs from 'yargs';

const yargsInstance = yargs(process.argv.slice(2)).default({
    m:"PRODUCTION",
    p:0,
    d:false
}).alias({
    m:"MODE",
    p:"PORT",
    d:"DEBUG",
    _:"other"
})

const args = yargsInstance.argv; 

const config = {
    mode: args.MODE,
    port: args.PORT,
    debug: args.DEBUG,
    other: args._
}

console.log(config);
