/* Programa para calcular la compra total, si esta supera 1000 aplicar el 10% descuento */
import * as readlineSync from "readline-sync";

let precioProducto : number = readlineSync.questionFloat("Ingrese precio del producto que va a comprar: ");
let cantidadProducto : number = readlineSync.questionFloat("Ingrese la cantidad: ");
let total :number = precioProducto * cantidadProducto;


if (total > 1000){
    let descuento : number = total * 0.1;
    let totalConDescuento = total - descuento;
    console.log("El precio total es: $ " + total);
    console.log("El descuento aplicado es: $ " + descuento);
    console.log("El precio final de la compra con el descuento aplicado es: $ " + totalConDescuento); 
    
}else {
    console.log("El precio total de la compra sin descuento es: $ " + total);  
}
