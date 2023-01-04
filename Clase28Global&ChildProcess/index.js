process.on('exit',evt=>{
    console.log("Saliendo...");
    console.log(evt);
})

process.on('uncaughtException',evt=>{//NUNCA DE LOS NUNCAS SE UTILIZA PARA PREVENIR EL QUIEBRE
    console.log("Excepción no controlada recibida: "+evt)
})

console.log(process.argv);
console.log(process.pid);
console.log(process.cdw());
console.log(process.title);
console.log(process.version);
console.log(process.platform);
console.log(process.memoryUsage());