"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var numero = rls.questionInt("Ingrese numero: ");
var multiplo = rls.questionInt("Ingrese el multiplo: ");
console.log(esMultiplo(numero, multiplo));
function esMultiplo(numero, multiplo) {
    var resultado = 0;
    resultado = (numero % multiplo);
    if (resultado == 0) {
        return true;
    }
    else {
        return false;
    }
}
