/* Programa para calcular tiempo total y promedio de vuelta de un corredor de autos */

import * as readlineSync from "readline-sync";

console.log("Tiempos de Carrera")

let vuelta1 : number = readlineSync.questionFloat("Tiempo de vuelta 1: "); 
let vuelta2 : number = readlineSync.questionFloat("Tiempo de vuelta 2: "); 
let vuelta3 : number = readlineSync.questionFloat("Tiempo de vuelta 3: "); 
let vuelta4 : number = readlineSync.questionFloat("Tiempo de vuelta 4: ");

let tiempoTotal : number = vuelta1 + vuelta2 + vuelta3 + vuelta4 ;
let promedioVuelta : number = tiempoTotal / 4 ;

console.log("El tiempo total de carrera fue de: " + tiempoTotal + " seg");
console.log("El promedio de vuelta fue de: " + promedioVuelta + " seg");