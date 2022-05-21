/* Programa para validar un usuario registrado y posterior login*/
import * as rls from "readline-sync";

let ingreseUsuario : string =  rls.question("Ingrese su nombre de Usuario: ");
let ingreseClave : string = rls.question("Ingrese su clave: ");

if( ingreseUsuario == "Juan" && ingreseClave == "claveJuan"){
    console.log("Usted se ha logueado correctamente.");
    console.log("Puede empezar a operar con normalidad. ");
}  else {
    console.log("Usted no es un Usuario valido.");
}