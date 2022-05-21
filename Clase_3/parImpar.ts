import * as rls from "readline-sync";

let numeroInvalido :number = 0 ;


while (numeroInvalido == 0){
    let numeroIngresado = rls.questionInt("Ingrese el numero a analizar: ");
    if (numeroIngresado != 0 && numeroIngresado % 2 != 0){
        console.log("El numero ingresado es IMPAR");
        numeroInvalido = 1;
    }
       else
        if (numeroIngresado != 0 && numeroIngresado % 2 == 0){
            console.log("El numero ingresado es PAR")
            numeroInvalido = 1
        } else{
            console.log("El numero ingresado es cero, VUELVA A INGRESAR UN NUMERO MAYOR A CERO")
        }
} 