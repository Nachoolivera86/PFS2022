/*
• Escriba un programa que pida al usuario dos números enteros, y luego retorne la suma de todos los números que están entre ellos
• Por ejemplo, si los números son 2 y 7, debe entregar como resultado 2 + 3 + 4 + 5 + 6 + 7 = 27
*/

import * as rls from "readline-sync";

let numero1 : number = rls.questionInt("Ingrese el primer numero: ");
let numero2 : number =rls.questionInt("Ingrese el segundo numero: ");
let contador : number = 1;
let totalSuma : number = 0 ;

while(contador < numero2){    
    if(numero1 < numero2){
        contador ++
        totalSuma =  totalSuma + contador;
    }    
} 
console.log("Primer numero: " , numero1);
console.log("Segundo numero: ", numero2);
console.log("El total de la suma es: " , totalSuma);



    
