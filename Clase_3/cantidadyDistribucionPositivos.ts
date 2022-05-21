import * as rls from "readline-sync";

let valor = rls.questionInt("Ingrese numero: ");
let maximo : number = 0 ; 
let minimo : number  = 0 ;
let positivos : number = 0 ;
let contador : number = 0 ;
let porcentaje : number = 0 ;

while (valor != 0){

    if(valor > maximo && valor > 0){
        maximo = valor;
        console.log("El numero ingresado: ", maximo);
        positivos = positivos + maximo;
        contador ++;
    } 
    else if(valor < minimo){
        minimo = valor;
        console.log("El numero ingresado: ", minimo);
        contador ++;
    }
    porcentaje = (positivos / contador) ;
    valor = rls.questionInt("Ingrese numero: ");
   
}

console.log(maximo);
console.log(positivos);
console.log(porcentaje);

    