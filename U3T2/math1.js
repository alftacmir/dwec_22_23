// Crea un programa que pida al usuario que elija una opción del siguiente menú:

//     Potencia.
//     Raíz.
//     Redondeo.
//     Trigonometría.

// Si el usuario introduce 1, se le deberá pedir una base y un exponente y se mostrará el resultado en pantalla (La potencia de X elevado a Y es: )

// Si el usuario introduce 2, se le pedirá un número (no negativo) y se mostrará el resultado en pantalla (La raíz de X es: )

// Si el usuario introduce 3, se le pedirá un decimal por pantalla y se mostrará el redondeo al entero más próximo, al alta y a la baja.

// Si el usuario introduce 4, se le pedirá un ángulo (entre 0 y 360) y se le mostrarán por pantalla los valores trigonométricos del seno, coseno y tangente.

const prompt = require('prompt-sync')({sigint: true})

//Mostramos un mensaje para el usuario por pantalla
console.log("1.Si queires hacer potencias\n2.Si quieres una raices\n3.Si quieres redondear\n4.Si quieres consultar senos, cosenos y tangentes\n")
let opcion = prompt("Introduce una opción: ")
let resultado
switch(opcion){
    case "1":
        let base = parseInt(prompt("Introduce una base: "))
        let exponente = parseInt(prompt("Introduce un exponente: "))
        resultado= exponent(base, exponente)
        console.log(`La potencia de ${base} elevado a ${exponente} es: ${resultado}`)
        break
    case "2":
        let numero
        do{
            numero = Number(prompt("Introduce el numero para la raíz: "))
            
        }while(numero <1)
        console.log(`La raíz de ${numero} es: ${raiz(numero)}`)
        break
    case "3":
        let decimal = parseFloat(prompt("Introduce un numero decimal para el redondeo"))
        console.log(`El redondeo de ${decimal} es: ${redondeo(decimal)}`)
        break
    case "4":
        let angulo
        do{
            angulo = parseInt(prompt("Introduce el grado de angulo: "))
        }while(angulo<0 && angulo>360)
        angulo_rad = angulo*Math.PI/180
        Array = trigonometrica(angulo_rad)
        console.log(`Los valores trigonométricos de ${angulo} son: sen=${Array[0]}, cos=${Array[1]}, tan=${Array[2]}`)
        break
}

/**
 * Esta operación sirve para elevar a "b" a la potencia de "e"
 * @param {b} base Base de la opercion
 * @param {e} exp Exponente a la que se eleva
 */
function exponent(b, e){
    let resultado = Math.pow(b, e)
    return resultado
}

/**
 * Esta función devuelve la raiz cuadrada de un número
 * @param {n} numero Numero al cual se le hace la raiz 
 */
function raiz(n){
    let resultado = Math.sqrt(n)
    return resultado
}

/**
 * Esta función te permite redondear el numero decimal al entero mas cercano
 * @param {f} numero_flotante Numero decimal el cual se va a redondear  
 */
function redondeo(f){
    let resultado = Math.round(f)
    return resultado
}

/**
 * Esta funcion te devuelve cos x , sen x y tan x
 * @param {x} angulo El angulo introducido por el usuario 
 */
function trigonometrica(x){
    let resultado = [Math.sin(x),Math.cos(x),Math.tan(x)]
    return resultado // Devuelve un array
}

