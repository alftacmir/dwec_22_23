// Adjuntar un archivo por ejercicio que se llamen number1.js

// Adjuntar imágenes de evidencia de ejecución: number1.png

// El código debe tener logs, y comentarios de calidad.
// Ejercicio 1

// Crea un programa que pida al usuario un número entero por pantalla y muestre:

// Su valor exponencial.

//     El número con 4 decimales.
//     El número en binario.
//     El número en octal.
//     El número en hexadecimal.

// Utiliza para ello los métodos del objeto Number.

// Como datos de muestra, si metes 50, deberías obtener:

// 5e1 / 50.0000 / 00110010 / 62 / 0x32

const prompt = require('prompt-sync')({sigint: true})
let numero = Number(prompt("Introduce el numero a operar: "))
console.log(exponencial(numero))
console.log(decimal(numero))
console.log(binario(numero))
console.log(octal(numero))
console.log(hexadecimal(numero))



/**
 * Devuelve el exponencial de un numero
 * @param {n} numero 
 */
function exponencial(n){
    let resultado = n.toExponential()
    return resultado
}

/**
 * Devuelve un decimal con 4 digitos despues del punto
 * @param {n} numero 
 */
function decimal(n){
    let resultado = n.toPrecision(4)
    return resultado
}

/**
 * Devuelve el numero en binario
 * @param {n} numero 
 */
function binario(n){
    let resultado = n.toString(2)
    return resultado    
}

/**
 * Devuelve el numero en octal 
 * @param {n} numero 
 */
function octal(n){
    let resultado = n.toString(8)
    return resultado
}

/**
 * Devuelve el numero en hexadecimal
 * @param {n} numero 
 */
function hexadecimal(n){
     let resultado = n.toString(16);
     return resultado
}
