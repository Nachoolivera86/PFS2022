/* Programa para determinar tipo de medalla a entregar */

import * as cls from "readline-sync";

let posicionLlegada : number = cls.questionInt("Ingrese la posicion de llegada: ");

switch (posicionLlegada){
    case 1:
        console.log("Usted ha llegado en primer puesto, ha ganado la medalla de ORO");
        break;
    case 2:
        console.log("Usted ha llegado en segundo puesto, ha ganado la medalla de PLATA");
        break;
    case 3:
        console.log("Usted ha llegado en tercer lugar, ha ganado la medalla de BRONCE");
        break;
    default:
        console.log("USted no ha ganado medalla, ha ganado un certificado de participación");
}        
    

