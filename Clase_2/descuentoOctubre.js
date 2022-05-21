"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var precio = rls.questionFloat("Ingrese el valor del producto a comprar:  ");
var cantidad = rls.questionInt(" Ingrese la cantidad a comprar: ");
var mes = rls.question("Ingrese el mes: ");
var totalCompra = precio * cantidad;
if (mes == "Octubre" || mes == "octubre") {
    var descuento = totalCompra * 0.15;
    totalCompra = totalCompra - descuento;
    console.log("Se le aplico el 15% de descuento por realizar la compra en el mes de Octubre");
    console.log("Se desconto: " + descuento + "Y el total de la compra fue de: " + totalCompra);
}
else {
    console.log("El precio total de la compra es de: " + totalCompra);
}
