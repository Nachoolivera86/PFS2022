"use strict";
/*
Escriba un programa que calcule la probabilidad de sacar todos los dados 6 siendo que tiramos N dados (N es un dato ingresado por el usuario)
*/
exports.__esModule = true;
var rls = require("readline-sync");
var cantidadDados = rls.questionInt("Ingrese la cantidad de dados: ");
if (cantidadDados > 0) {
    var probabilidad = Math.pow((1 / 6), cantidadDados);
    console.log("Tirando ", cantidadDados, " dados, la probabilidad de sacar 6 es: ", probabilidad);
    cantidadDados = 0;
}
else {
    console.log("Para ejecutar el programa se necesita que al menos 1 dado se ponga en juego.");
}
