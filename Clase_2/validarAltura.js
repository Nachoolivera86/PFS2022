"use strict";
/*Ejercicio que nos permite validar una altura*/
exports.__esModule = true;
var rls = require("readline-sync");
var alturaPersona = rls.questionFloat("Ingrese la altura a analizar para determinar si puede subirse a la montania rusa: ");
if (alturaPersona >= 1.30) {
    console.log("Usted mide: " + alturaPersona + " mts " + "y esta aprobado para subirse a la montaña rusa.");
}
else {
    console.log("Usted mide menos 1.30 mts y no puede participar del Juego.");
}
