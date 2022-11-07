import * as calculadora from './utils/operaciones';


const numero1:number = 2;
const numero2:number = 10;

console.log(`La suma de ${numero1} más ${numero2} es ${calculadora.sumar(numero1,numero2)}`)
console.log(`La resta de ${numero1} menos ${numero2} es ${calculadora.restar(numero1,numero2)}`)
console.log(`La multiplicación de ${numero1} por ${numero2} es ${calculadora.multiplicar(numero1,numero2)}`)
console.log(`La dividir de ${numero1} entre ${numero2} es ${calculadora.dividir(numero1,numero2)}`)
console.log(`El módulo de ${numero1} entre ${numero2} es ${calculadora.modular(numero1,numero2)}`)
