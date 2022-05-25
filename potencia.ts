/*
• Realice un programa que devuelva la potencia de un número. 
• La base y el exponente deben ser ingresados por teclado. 
• Sólo deben admitirse exponentes mayores o iguales a cero. 
• Recuerde que el resultado de un numero elevado a 0 es 1.
• Separe la lógica de calcular la potencia utilizando métodos.
*/

import * as rls from "readline-sync";

let base : number = rls.questionInt("Ingrese base: ");
let exponente : number = rls.questionInt("Ingrese exponente: ");
console.log("La potencia es :", potenciaNumero(base,exponente));

function potenciaNumero (base,exponente):number{
    let resultado : number = 0;
    if (exponente != 0){
            resultado = base ** exponente; 
            return resultado;
    } else {
            return 1;
     }
};
    


      

