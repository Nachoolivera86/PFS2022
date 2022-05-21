"use strict";
exports.__esModule = true;
/* Programa para calcular la compra total, si esta supera 1000 aplicar el 10% descuento */
var readlineSync = require("readline-sync");
var precioProducto = readlineSync.questionFloat("Ingrese precio del producto que va a comprar: ");
var cantidadProducto = readlineSync.questionFloat("Ingrese la cantidad: ");
var total = precioProducto * cantidadProducto;
if (total > 1000) {
    var descuento = total * 0.1;
    var totalConDescuento = total - descuento;
    console.log("El precio total es: $ " + total);
    console.log("El descuento aplicado es: $ " + descuento);
    console.log("El precio final de la compra con el descuento aplicado es: $ " + totalConDescuento);
}
else {
    console.log("El precio total de la compra sin descuento es: $ " + total);
}
