/* Programa para calcular el 10% de un precio inicial de un producto*/

let precioInicialProducto : number  =  450.50;
let descuentoAplicar : number = precioInicialProducto * 0.1;

let precioFinalProducto : number = precioInicialProducto - descuentoAplicar;

console.log("Precio inicial: $ " + precioInicialProducto);
console.log("Se aplico un descuento de: $ " + descuentoAplicar);
console.log("El precio final del producto despues de aplicado el descuento fue: $ " + precioFinalProducto);

