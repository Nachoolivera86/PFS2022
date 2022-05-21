"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var base = rls.questionInt("Ingrese base: ");
var exponente = rls.questionInt("Ingrese exponente: ");
console.log("La potencia es :", potenciaNumero(base, exponente));
function potenciaNumero(base, exponente) {
    var resultado = 0;
    if (exponente != 0) {
        resultado = Math.pow(base, exponente);
        return resultado;
    }
    else {
        return 1;
    }
}
;
