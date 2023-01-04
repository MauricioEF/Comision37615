import minimist from 'minimist';

const args = minimist(process.argv.slice(2), { alias: { m: "MODE", p: "PORT", d: "DEBUG" }, default: { m: "PRODUCTION", p: 0, d: false } });
// console.log(args);

const config = {
    mode: args.MODE,
    port: args.PORT,
    debug: args.DEBUG,
    other: args._
}

console.log(config);