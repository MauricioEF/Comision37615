const fs = require('fs');

// fs.writeFile('./otroarchivoconcallbacks.txt','Hola callbacks',(error)=>{
//     if(error){
//         console.log("Hubo un error");
//     }
// })

fs.readFile('./rutaInexistente.txt','utf-8',(error,data)=>{
    if(error){
        console.log("Hubo un error: "+error);
    }
    else{
        console.log(data);
    }
})
//Te invito a que practiques cómo sería la actualización el delete?
//¿Requieren un result como read?