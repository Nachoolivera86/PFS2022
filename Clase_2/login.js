"use strict";
exports.__esModule = true;
/* Programa para validar un usuario registrado y posterior login*/
var rls = require("readline-sync");
var ingreseUsuario = rls.question("Ingrese su nombre de Usuario: ");
var ingreseClave = rls.question("Ingrese su clave: ");
if (ingreseUsuario == "Juan" && ingreseClave == "claveJuan") {
    console.log("Usted se ha logueado correctamente.");
    console.log("Puede empezar a operar con normalidad. ");
}
else {
    console.log("Usted no es un Usuario valido.");
}
