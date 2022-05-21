"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var nota, suma, promedio, posicion;
suma = 0;
for (posicion = 1; posicion < 11; posicion++) {
    nota = rls.questionInt("Ingrese la nota: ");
    console.log("La nota ingresada en la: ", posicion, "es: ", nota);
    suma += nota;
}
promedio = suma / 10;
console.log("El promedio de las notas es: ", promedio);
