/*
• Cree un método esMultiplo con 2 parámetros que devuelva el valor lógico verdadero o falso según si el primer número que se indique como parámetro es múltiplo del segundo 
• Recuerde que un numero es múltiplo de otro si al dividirlo su resto es cero
• Recuerde que la operación mod permite saber si el resto de una división es cero
*/

import * as rls from "readline-sync";

let numero : number = rls.questionInt("Ingrese numero: ");
let multiplo : number = rls.questionInt("Ingrese el multiplo: ");
console.log(esMultiplo(numero,multiplo));

function esMultiplo(numero,multiplo):boolean {
    let resultado : number = 0;
    resultado = (numero % multiplo) ;
    
    if (resultado == 0){
        return true;
    } else {
        return false;
    }  
}




