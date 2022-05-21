"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var valor = rls.questionInt("Ingrese numero: ");
var maximo = 0;
var minimo = 0;
var positivos = 0;
var contador = 0;
var porcentaje = 0;
while (valor != 0) {
    if (valor > maximo && valor > 0) {
        console.log(valor);
        maximo = valor;
        console.log("El numero ingresado: ", maximo);
        positivos = positivos + maximo;
        contador++;
    }
    else if (valor < minimo) {
        minimo = valor;
        console.log("El numero ingresado: ", minimo);
        contador++;
    }
    porcentaje = (positivos / contador);
    valor = rls.questionInt("Ingrese numero: ");
}
console.log(maximo);
console.log(positivos);
console.log(porcentaje);
