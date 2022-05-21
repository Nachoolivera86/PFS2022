// console.log(5*10);

//----------------------------------------------------------------------------------
/*
let base = 5;
let altura = 10;

let resultado = base*altura;

console.log(resultado);
                           */


import * as readlineSync from "readline-sync";

let base = readlineSync.questionInt("Ingrese la base: ");
let altura = readlineSync.questionInt("Ingrese la altura: ");
let area = base * altura;

console.log("El area del rectangulo es: " + area); 