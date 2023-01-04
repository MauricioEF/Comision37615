console.log("Hola");
console.log(process.pid);
console.log(process.argv);

const NODE_ENV = process.argv[2].split("=")[1];

console.log(NODE_ENV);
const moduloMailing = () =>{
    console.log("operaciones");
    const objFinal = {};
    if(NODE_ENV==="production"){
        enviarMail();
    }else{
        console.log("Aquí se debería enviar el mail feliz :)")
    }
}

const enviarMail = () =>{
    console.log(`Mail enviado`)
}

moduloMailing();