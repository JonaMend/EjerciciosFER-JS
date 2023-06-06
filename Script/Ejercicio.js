/*
Realizar una función que realice o saatisfaga los siguientes escenarios

Realizar en manera de función general y funcion flecha.

1. Calcular el cuadrado de un número.

2. Escribir un código que convierta de grados celsius
a grados farenheit

3. Realizar una función que calcule el valor de
Voltaje, recibiendo como entradas o parámetros
Resistencia y Corriente.

4. Elaborar una función que calcule el volumen de
un cubo, recibiendo como dato de entrada Lado.

5. Calcular el área de un triángulo

6. Calcular el volumen de una esfera

7. Convertir una cadena de texto a mayúsculas, usando el método .toUpperCase()
*/



// 1. Calcular el cuadrado de un número 
//Flecha
const calcularCuadradoF = (numero) => {
    let=cuadradoO=numero
    console.log("El primer numero es  =  " + numero);
    return numero * cuadradoO
};
// General
function calcularCG(numero1){ // Inicio
return "El cuadrado es" + numero1*numero1;
 }  //Cierre

//console.log(calcularVelocidad());

// function calcularVelocidad(distancia, tiempo){ // Inicio
//     let velocidad = distancia / tiempo;
//     return "La velocidad calculada es: " + velocidad + " m/s";
// } // Cierre

// console.log(calcularVelocidad(30, 5));
/*2. Escribir un código que convierta de grados celsius
a grados farenheit */

const calcularCoversorF =(grado) => {
    let =fraccion = 1.8;
    let =entero = 32; 
    console.log("Los grados son  = " + grado + " °C"  );
    return grado * fraccion + entero;
};


function ConversorG (grado1)  {
    let =fraccion1 = 1.8;
    let =entero1 = 32; 
    console.log("Los grados son  = " + grado1 + " °C"  );
    return grado1 * fraccion1 + entero1;
};

/*3. Realizar una función que calcule el valor de
Voltaje, recibiendo como entradas o parámetros
Resistencia y Corriente.
*/


const calcularVolF = (resistencia,corriente) => {
    console.log(corriente);
    console.log(resistencia );
    return resistencia * corriente
};

// General
function calcularVolG(resistencia1,corriente2){ // Inicio
return "el voltaje es " + resistencia1 * corriente2;
 }  //Cierre

 /*4. Elaborar una función que calcule el volumen de
un cubo, recibiendo como dato de entrada Lado.
*/
const calcularCuboF = (lado) => {
    console.log(lado);
    return lado * lado * lado
}
// 5. Calcular el área de un triángulo
const calcularAreaF = (base,altura) => {
    console.log("El primer numero es  =  " + base);
    console.log("El segundo numero es  =  " + altura);
    return base * altura / 2 
}
//6. Calcular el volumen de una esfera
const calcularEsferaF =(radio) => {
    console.log("Los grados son  = " + radio + " °C"  );
    return 4/3 * radio * radio* radio  * 3.1416 ;
}