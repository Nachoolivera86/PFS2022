/*
Escriba un programa que calcule la probabilidad de sacar todos los dados 6 siendo que tiramos N dados (N es un dato ingresado por el usuario)
*/

import * as rls from "readline-sync";

let cantidadDados : number = rls.questionInt("Ingrese la cantidad de dados: ");

if (cantidadDados > 0){
    let probabilidad : number = (1/6) ** cantidadDados;
    console.log("Tirando ", cantidadDados , " dados, la probabilidad de sacar 6 es: ", probabilidad);
    cantidadDados = 0;
} else{
    console.log("Para ejecutar el programa se necesita que al menos 1 dado se ponga en juego.")
}



