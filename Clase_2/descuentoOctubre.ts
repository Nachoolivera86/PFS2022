import * as rls from "readline-sync";

let precio : number = rls.questionFloat("Ingrese el valor del producto a comprar:  ");
let cantidad : number = rls.questionInt("Ingrese la cantidad a comprar: ");
let mes : string = rls.question("Ingrese el mes: ");

let totalCompra = precio * cantidad;

if (mes == "Octubre" || mes == "octubre"){
    let descuento = totalCompra * 0.15;
    totalCompra = totalCompra - descuento
    console.log("Se le aplico el 15% de descuento por realizar la compra en el mes de Octubre");
    console.log("Se desconto: "+ descuento + "Y el total de la compra fue de: " + totalCompra);
    } else {
        console.log("El precio total de la compra es de: " + totalCompra);
}
  