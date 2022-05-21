"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var numeroIngresado = rls.questionInt("Ingrese un numero entero: ");
if (numeroIngresado != 0 && numeroIngresado % 2 != 0) {
    console.log("El numero ingresado es IMPAR");
}
else if (numeroIngresado != 0 && numeroIngresado % 2 == 0) {
    console.log("El numero ingresado es PAR");
}
else {
    console.log("El numero ingresado es cero");
}
