const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if (divisor === 0) {
            reject('No puedo dividir entre cero, lo siento chicos :(')
        } else {
            resolve(dividendo / divisor)
        }
    })
}
// //then: cuando la promesa sí se cumple :)
// //catch: cuando la promesa NO se pudo coumplir :()
// console.log("Comenzando operación de división");
// dividir(10,2)
// .then(resultado=>{
//     return resultado+1;
// })
// .then(nuevoResultado =>{
//     console.log(nuevoResultado);
// })
// .catch(error=>{
//     console.log(error);
// })

// setTimeout(()=>{
//     console.log("setTimeout listo");
// },0)
// console.log("Operación de división realizada :) ")
// Promise.resolve(10)
// .then( x => x + 1 )
// .then( x => x * 2 )
// .then( x => {
//     if(x==22) throw 'Error'
//     else return 80
// })
// .then( x => 30 )
// .then( x => x / 2 )
// .then( console.log )
// .catch( console.log )

const entorno = async () => {
    //todo aquí dentro, se rige bajo las leyes asíncronas.
    try {
        console.log("comenzando división");
        let result = await dividir(6, 2);
        console.log(result);
        console.log("Finalizada la división");
    } catch (error){
        console.log("Ahora sí atrapé el error")
    }
}
entorno();