import {exec,spawn} from 'child_process';

// exec('node ./desafio1.js',(error,stdout,stderror)=>{
//     if(error){
//         console.log(`error: ${error}`)
//     }
//     if(stderror) {
//         console.log(`error: ${stderror}`)
//     }else{
//         console.log(`stdout: ${stdout}`);
//     }
// })

// console.log("Hola");

// const procesoSpawn = spawn('node desafio1.js',[2,5,6],{shell:true});

// procesoSpawn.stdout.on('data',data=>{
//     console.log(`stdout: ${data}`);
// })