// const sumar = (a,b) => a+b;
// let result = sumar(1,2);
// console.log(result)

// const saludar = (nombre) =>{
//     console.log(`Hola ${nombre}`)
// }
// const button = document.getElementById('botoncitoconpapas');
// const adios = () => console.log("Adiós");
// button.addEventListener('click',adios)

const operacion = (num1,num2,cb) =>{
    return cb(num1,num2);
}
const sumar = (num1,num2) => num1+num2;
const restar = (num1,num2) => num1-num2;
const multiplicar= (num1,num2) => num1*num2;
const dividir = (num1,num2) => num1/num2;

let resultado = operacion(4,2,dividir);
console.log(resultado);

function lecturaDeArchivo(ruta,cb){
//Intento leer el archivo en la ruta que me pasen :)

//Imaginemos que el archivo no existe en esta ruta
cb('La ruta no lleva a nigún archivo');


//Si el archivo sí existiera en esa ruta, traigo su contenido y lo devuelvo
let result = "contenido";
cb(null,result);
}

// lecturaDeArchivo(rutaParaLeerArchivo,(error,resultado)=>{
//     if(error){
//         console.log("Hubo un error");
//     }
//     else{//seguramente el error era null, y sí hay contenido por mostrar
//         // aquí ya manejo el resultado

//         resultado;
//     }
// })

//IMAGINA QUE QUEREMOS COPIAR UN ARCHIVO

const copiarArchivo = (pathDelArchivoACopiar,callback) =>{
    //buscar
    buscarArchivo(pathDelArchivoACopiar,(error,resultado)=>{
        if(error){
            callback(error);
        }else{
            leerArchivo(pathDelArchivoACopiar,(error,resultado)=>{
                if(error){
                    callback(error)
                }else{
                    //el resultado será el contenido del archivo
                    escribirArchivo(nuevaRutaDelNuevoArchivo,resultado,(error,resultado)=>{
                        if(error){
                            callback(error);
                        }else{
                            callback(null,resultado);
                        }
                    })
                }
            })
        }
    })
}