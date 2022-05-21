"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var nombreAlumno;
var notaPractica;
var notaEjercicios;
var notaTeorica;
nombreAlumno = rls.question("Ingrese el nombre del alumno: ");
while (nombreAlumno != '') {
    notaPractica = rls.questionInt("Ingrese su nota Practica: ");
    notaEjercicios = rls.questionInt("Ingrese su nota de Ejercicios: ");
    notaTeorica = rls.questionInt("Ingrese la nota de la parte Teorica: ");
    if ((notaPractica > 0 && notaPractica < 10) && (notaEjercicios > 0 && notaEjercicios < 10) && (notaTeorica > 0 && notaTeorica < 10)) {
        var notafinal = notaPractica * 0.1 + notaEjercicios * 0.5 + notaTeorica * 0.4;
        console.log("La nota final del alumno ", nombreAlumno, "es de: ", notafinal);
    }
    else {
        console.log("Se ha producido un ERROR. Siga con otro ALUMNO");
    }
    nombreAlumno = rls.question("Ingrese el nombre del alumno: ");
}
