import * as rls from "readline-sync";

let nota, suma, promedio, posicion : number ;

suma = 0;


for(posicion = 1; posicion < 11; posicion++){
    nota = rls.questionInt("Ingrese la nota: ");
    console.log("La nota ingresada en la: ", posicion, "es: ", nota);
    suma+=nota; 
} 

promedio = suma / 10;
console.log("El promedio de las notas es: ", promedio);
