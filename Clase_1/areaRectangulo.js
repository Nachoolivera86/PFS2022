"use strict";
// console.log(5*10);
exports.__esModule = true;
//----------------------------------------------------------------------------------
/*
let base = 5;
let altura = 10;

let resultado = base*altura;

console.log(resultado);
                           */
var readlineSync = require("readline-sync");
var base = readlineSync.question("Ingrese la base: ");
var altura = readlineSync.question("Ingrese la altura: ");
var resultado = base * altura;
console.log("El area del rectangulo es: " + resultado);
