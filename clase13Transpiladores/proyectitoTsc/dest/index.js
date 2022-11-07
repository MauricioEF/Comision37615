"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var calculadora = __importStar(require("./utils/operaciones"));
var numero1 = 2;
var numero2 = 10;
console.log("La suma de ".concat(numero1, " m\u00E1s ").concat(numero2, " es ").concat(calculadora.sumar(numero1, numero2)));
console.log("La resta de ".concat(numero1, " menos ").concat(numero2, " es ").concat(calculadora.restar(numero1, numero2)));
console.log("La multiplicaci\u00F3n de ".concat(numero1, " por ").concat(numero2, " es ").concat(calculadora.multiplicar(numero1, numero2)));
console.log("La dividir de ".concat(numero1, " entre ").concat(numero2, " es ").concat(calculadora.dividir(numero1, numero2)));
console.log("El m\u00F3dulo de ".concat(numero1, " entre ").concat(numero2, " es ").concat(calculadora.modular(numero1, numero2)));
