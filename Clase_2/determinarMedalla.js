"use strict";
/* Programa para determinar tipo de medalla a entregar */
exports.__esModule = true;
var cls = require("readline-sync");
var posicionLlegada = cls.questionInt("Ingrese la posicion de llegada: ");
if (posicionLlegada == 1) {
    console.log("Usted ha llegado en primer puesto, ha ganado la medalla de ORO");
}
else {
    if (posicionLlegada == 2) {
        console.log("Usted ha llegado en segundo puesto, ha ganado la medalla de PLATA");
    }
    else {
        if (posicionLlegada == 3) {
            console.log("Usted ha llegado en tercer lugar, ha ganado la medalla de BRONCE");
        }
    }
    {
        console.log("USted no ha ganado medalla, ha ganado un certificado de participación");
    }
}
