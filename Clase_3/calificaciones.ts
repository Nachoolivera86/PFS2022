/*
Calcular las calificaciones de un grupo de alumnos, donde la nota final de cada alumno se calcula según el siguiente criterio: 
• la parte práctica vale el 10%
• la parte de ejercicios vale el 50%
• la parte teórica el 40%
Se debe ingresar el nombre del alumno y sus tres notas (práctica, ejercicios y teórica), se escribirá el resultado y se volverá a pedir los datos del siguiente alumno hasta que el nombre sea una 
cadena vacía
Las notas deben estar entre 0 y 10 (si no lo están, no imprimirá las notas, mostrará un mensaje de error y continuará con otro alumno)
*/

import * as rls from "readline-sync";

let nombreAlumno : string ;
let notaPractica : number; 
let notaEjercicios : number;
let notaTeorica : number;

nombreAlumno = rls.question("Ingrese el nombre del alumno: "); 
while (nombreAlumno != ''){

    
    notaPractica = rls.questionInt("Ingrese su nota Practica: ");
    notaEjercicios = rls.questionInt("Ingrese su nota de Ejercicios: ");
    notaTeorica = rls.questionInt("Ingrese la nota de la parte Teorica: ");

    if((notaPractica > 0 && notaPractica < 10) && (notaEjercicios > 0 && notaEjercicios < 10) && (notaTeorica > 0 && notaTeorica < 10)){
        let notafinal : number = notaPractica * 0.1 + notaEjercicios * 0.5 + notaTeorica * 0.4;
        console.log("La nota final del alumno ", nombreAlumno , "es de: ", notafinal); 
    } else{
        console.log("Se ha producido un ERROR. Siga con otro ALUMNO");
    }
    nombreAlumno = rls.question("Ingrese el nombre del alumno: "); 
}