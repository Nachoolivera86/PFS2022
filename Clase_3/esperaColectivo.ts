import * as rls from "readline-sync";

let parada : string = rls.question("Ingrese el estado de la parada:Si/NO ");

while (parada == "NO"){
        console.log("El colectivo no ha llegado aún");
        parada = rls.question("Ingrese el estado de la parada:Si/NO ");
       
    }

console.log("El colectivo llego")


