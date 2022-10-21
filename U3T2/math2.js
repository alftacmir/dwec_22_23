// Crea un programa que pida al usuario el valor del radio y muestre por pantalla:

//     El valor del radio.
//     El valor del diámetro.
//     El valor del perímetro de la circunferencia.
//     El valor del área del círculo.
//     El valor del área de la esfera.
//     El valor del volumen de la esfera.

// El valor de Pi debes obtenerlo del objeto Math, no introducirlo manualmente. Debes escribir al lado si son cm, o cm2, o cm3. Como datos de muestra, si metes 5, deberías obtener aproximadamente:
// 5 / 10 / 31,41 /78,54 / 314,15 / 523,59.

const prompt = require('prompt-sync')({sigint: true})

let radio = Number(prompt("Introduce el radio: ")) // Pedimos el radio con el que trabajaremos

console.log(radio)
console.log(diametro(radio))
console.log(aCirculo(radio))
console.log(aEsfera(radio))
console.log(vEsfera(radio))



/**
 * Esta funcion devuelve el diametro 
 * @param {r} radio  
 */
function diametro(r){
    let resultado = r*2
    return resultado
}

/**
 * Esta funcion nos devuelve el perímetro de una circunferencia
 * @param {r} radio
 */
function perimetro(r){
    let resultado = Math.PI*diametro(r)
    return resultado
    
}

/**
 * Esta funcion nos devuelve el area de un circulo
 * @param {r} radio
 */
function aCirculo(r){
    let resultado = Math.PI*Math.pow(r,2)
    return resultado

}

/**
 * Esta funcion nos devuelve el area de una esfera
 * @param {r} radio
 */
function aEsfera(r){
    let resultado= 4*aCirculo(r)
    return resultado

}

/**
 * Esta funcion nos devuelve el volumen de una esfera
 * @param {r} radio 
 */
function vEsfera(r){
    let resultado= 3/4*Math.PI*Math.pow(r,3)
    return resultado

}