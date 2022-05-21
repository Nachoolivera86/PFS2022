"use strict";
/* Programa para calcular tiempo total y promedio de vuelta de un corredor de autos */
exports.__esModule = true;
var readlineSync = require("readline-sync");
console.log("Tiempos de Carrera");
var vuelta1 = readlineSync.questionFloat("Tiempo de vuelta 1: ");
var vuelta2 = readlineSync.questionFloat("Tiempo de vuelta 2: ");
var vuelta3 = readlineSync.questionFloat("Tiempo de vuelta 3: ");
var vuelta4 = readlineSync.questionFloat("Tiempo de vuelta 4: ");
var tiempoTotal = vuelta1 + vuelta2 + vuelta3 + vuelta4;
var promedioVuelta = tiempoTotal / 4;
console.log("El tiempo total de carrera fue de: " + tiempoTotal + " min");
console.log("El promedio de vuelta fue de: " + promedioVuelta + " min");
