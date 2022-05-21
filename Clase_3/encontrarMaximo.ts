import * as rls from "readline-sync";

let valor = rls.questionInt("Ingrese numero: ");
let maximo : number = 0; 
let minimo : number  = 0;

while (valor != 0){

    if(valor > maximo){
        console.log(valor);
        maximo = valor;
        console.log("El numero ingresado: ", maximo);
    } 
    else if(valor < minimo){
        minimo = valor;
        console.log("El numero ingresado: ", minimo);
    }
    valor = rls.questionInt("Ingrese numero: ");
   
}

console.log(maximo);
console.log(minimo);
    