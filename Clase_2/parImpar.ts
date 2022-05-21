import * as rls from "readline-sync";

let numeroIngresado : number = rls.questionInt("Ingrese un numero entero: ");

if (numeroIngresado != 0 && numeroIngresado % 2 != 0){
    console.log("El numero ingresado es IMPAR");
}
   else
    if (numeroIngresado != 0 && numeroIngresado % 2 == 0){
        console.log("El numero ingresado es PAR")
    } else{
        console.log("El numero ingresado es cero")
    }
 