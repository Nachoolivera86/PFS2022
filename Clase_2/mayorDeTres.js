"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var primerNumero = rls.questionInt("Ingrese primer numero: ");
var segundoNumero = rls.questionInt("Ingrese segundo numero: ");
var tercerNumero = rls.questionInt("Ingrese tercer numero: ");
if (primerNumero > segundoNumero && primerNumero > tercerNumero) {
    console.log("El mayor de los 3 numeros ingresados es: " + primerNumero);
}
else if (segundoNumero > primerNumero && segundoNumero > tercerNumero) {
    console.log("El mayor de los 3 numeros ingresados es: " + segundoNumero);
}
else if (tercerNumero > segundoNumero && tercerNumero > primerNumero)
    console.log("El mayor de los 3 numeros es: " + tercerNumero);
else {
    console.log("No existe un numero mayor dentro de los ingresados");
}
