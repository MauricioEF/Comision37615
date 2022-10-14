class Contador {
    constructor(responsable){
        this.responsable = responsable;
        this.cuenta = 0;
    }
    static contadorGlobal = 0;
    obtenerResponsable = () =>{
        console.log(`El responsable es ${this.responsable}`)
    }
    obtenerCuentaIndividual = () =>{
        return this.cuenta;
    }
    obtenerCuentaGlobal = () =>{
        return Contador.contadorGlobal;
    }
    contar = () =>{
        this.cuenta++;
        Contador.contadorGlobal++;
    }
}

const contador1 = new Contador('Matías');
const contador2 = new Contador('Miguel');

contador1.obtenerResponsable();
contador2.obtenerResponsable();

contador1.contar();
contador2.contar();
contador2.contar();
let cuenta1 = contador1.obtenerCuentaIndividual();
let cuenta2 = contador2.obtenerCuentaIndividual();

console.log(`El contador de ${contador1.responsable} tiene ${cuenta1} contados`)
console.log(`El contador de ${contador2.responsable} tiene ${cuenta2} contados`)

const contador3 = new Contador('Ingrid');
console.log(contador3.obtenerCuentaGlobal());