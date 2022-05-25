import * as rls from "readline-sync";

let numero : number = rls.questionInt("Ingrese numero: ");
let totalDivisores : number = cantidadDivisores(numero);
console.log("La cantidad de divisores de: ",numero, "son: ", totalDivisores);


function cantidadDivisores(numero):number {
    let contador: number = 0;
    let divisor : number;
    for(divisor = 0; divisor <= numero; divisor ++){
        if (esMultiplo(numero,divisor)){
            contador++;
        }
    }
    return contador;
}


function esMultiplo(numero,divisor):boolean {
    let resultado : number = 0;
    resultado = (numero % divisor);

    if (resultado == 0){
        return true;
    } else {
        return false;
    }
}
