"use strict";
/*
• Diseñar un algoritmo que muestre por pantalla la tabla de multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de multiplicación, el usuario también deberá ingresar un valor
*/
exports.__esModule = true;
var rls = require("readline-sync");
var numero = rls.questionInt("Ingrese el numero deseado: ");
var hastaNumero = rls.questionInt("Ingrese numero final :");
var contador = 0;
var total;
while (contador < hastaNumero) {
    if (numero <= 9) {
        total = numero * contador;
        console.log(numero, " x ", contador, " = ", total);
        contador++;
    }
}
