"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var parada = rls.question("Ingrese el estado de la parada:Si/NO ");
while (parada == "NO") {
    console.log("El colectivo no ha llegado aún");
    parada = rls.question("Ingrese el estado de la parada:Si/NO ");
}
console.log("El colectivo llego");
