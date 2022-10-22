import http from 'http';

const server = http.createServer((peticion,respuesta)=>{
    respuesta.end('<h1>HOLA  A TODOS</h1>')
})

const connectedServer = server.listen(8080,()=>{
    console.log("Primer servidor de mi carrera como backend, finalmente escuchando")
})