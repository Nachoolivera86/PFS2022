/*
• Diseñar un algoritmo que muestre por pantalla la tabla de multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de multiplicación, el usuario también deberá ingresar un valor
*/

import * as rls from "readline-sync";

let numero : number = rls.questionInt("Ingrese el numero deseado: ");
let hastaNumero : number = rls.questionInt("Ingrese numero final :");
let contador :number = 0;
let total :number;

while (contador < hastaNumero){
    if (numero <= 9){
        total = numero * contador;
        console.log(numero," x " ,contador, " = " ,total); 
        contador ++;
    }

}
   