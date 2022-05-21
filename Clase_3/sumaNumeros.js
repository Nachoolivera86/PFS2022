"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var numero1 = rls.questionInt("Ingrese el primer numero: ");
var numero2 = rls.questionInt("Ingrese el segundo numero: ");
var contador = 1;
var totalSuma = 0;
while (contador < numero2) {
    if (numero1 < numero2) {
        contador++;
        totalSuma = totalSuma + contador;
    }
}
console.log("Primer numero: ", numero1);
console.log("Segundo numero: ", numero2);
console.log("El total de la suma es: ", totalSuma);
