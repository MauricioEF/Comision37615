const mostrarLetras = (palabra,callback) => {
    let index = 0;
    const timer = setInterval(()=>{
        console.log(palabra[index])
        //Index Out of Bounds
        index++;
        if(index>=palabra.length){
            clearInterval(timer);
            callback();
        }
    },1000)
}
const fin = () =>console.log("Terminé");

mostrarLetras('queso',fin);

setTimeout(()=>{
    mostrarLetras('queso',fin);
},250)

setTimeout(()=>{
    mostrarLetras('queso',fin);
},500)