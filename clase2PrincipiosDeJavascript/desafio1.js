const mostrarLista = (lista=[]) => {
    if(lista.length===0){
        console.log("Lista vacía");
    }else{
        lista.forEach(elemento=>console.log(elemento))

        // for(let i=0;i<lista.length;i++){
        //     console.log(lista[i])
        // }
    }
}
// mostrarLista()

((lista=[]) => {
    if(lista.length===0){
        console.log("Lista vacía");
    }else{
        lista.forEach(elemento=>console.log(elemento))

        // for(let i=0;i<lista.length;i++){
        //     console.log(lista[i])
        // }
    }
})()