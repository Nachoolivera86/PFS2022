"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var numero = rls.questionInt("Ingrese numero: ");
var totalDivisores = cantidadDivisores(numero);
console.log("La cantidad de divisores de: ", numero, "son: ", totalDivisores);
function cantidadDivisores(numero) {
    var contador = 0;
    var divisor;
    for (divisor = 0; divisor <= numero; divisor++) {
        if (esMultiplo(numero, divisor)) {
            contador++;
        }
    }
    return contador;
}
function esMultiplo(numero, divisor) {
    var resultado = 0;
    resultado = (numero % divisor);
    if (resultado == 0) {
        return true;
    }
    else {
        return false;
    }
}
