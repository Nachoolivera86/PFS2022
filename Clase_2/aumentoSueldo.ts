import * as rls from "readline-sync";

let salarioActual : number = rls.questionFloat("Ingrese su salario actual: ");

if (salarioActual > 0 && salarioActual <= 15000){
    let aumento = salarioActual * 0.20;
    salarioActual = salarioActual + aumento;
    console.log("El empleado recibe un aumento de: " + aumento);
    console.log("El sueldo final es de: " + salarioActual);
    } else if (salarioActual >= 15001 && salarioActual <= 20000){
        let aumento = salarioActual * 0.10;
        salarioActual = salarioActual + aumento;
        console.log("El empleado recibe un aumento de: " + aumento);
        console.log("El sueldo final es de: " + salarioActual);
        } else if (salarioActual >= 20001 && salarioActual <= 25000){
            let aumento = salarioActual * 0.05;
            salarioActual = salarioActual + aumento;
            console.log("El empleado recibe un aumento de: " + aumento);
            console.log("El sueldo final es de: " + salarioActual);
            } else {
                console.log("El empleado no tiene aumento");
}



