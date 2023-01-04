import minimist from 'minimist';

const args = minimist(process.argv.slice(2))._;

process.on('uncaughtException', error => {
    console.log('Excepción recibida: ' + error);
    console.log(error.code);
    console.log(error.stack);
})

if (args.length === 0) {
    const error = new Error('Entrada vacía');
    error.code = -4;
    throw error;
}

if (!args.every(arg => typeof arg === "number")) {
    const error = new Error('Invalid Types');
    const types = args.map(arg => typeof arg);
    error.code = -5
    error.stack = {
        descripcion: "Tipo inválido enviado en los argumentos",
        args,
        tipos: types
   }
   throw error;
}


let sum = args.reduce((prev, current) => prev + current);
const obj = {
    numeros: args,
    promedio: sum / args.length,
    max: Math.max(...args),
    min: Math.min(...args),
    ejecutable: process.title,
    pid: process.pid,
}

console.log(obj);