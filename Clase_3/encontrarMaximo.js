"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var valor = rls.questionInt("Ingrese numero: ");
var maximo = 0;
var minimo = 0;
while (valor != 0) {
    if (valor > maximo) {
        console.log(valor);
        maximo = valor;
        console.log("El numero ingresado: ", maximo);
    }
    else if (valor < minimo) {
        minimo = valor;
        console.log("El numero ingresado: ", minimo);
    }
    valor = rls.questionInt("Ingrese numero: ");
}
console.log(maximo);
console.log(minimo);
