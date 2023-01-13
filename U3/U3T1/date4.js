// Crea un programa que muestre la hora actual en diferentes formatos, según el valor que introduzca el usuario por parámetro:

// 14:35:07 (hora detallada con minutos y segundos)
// 02:35 PM o 02:35:07 AM (hora con minutos y AM o PM según sea antes o después del medio día)

const prompt = require('prompt-sync')({sigint: true})

let opcion = parseInt(prompt("Introduce la opción que quieras: ")) // Esta es l avariable que te permite obtener distintos formatos
let fecha=new Date()

//Evalua las distintas opciones
switch(opcion){
    case 1:
        console.log(fecha.toTimeString().substring(8,0)) //Muestrala hora en tipo texto solo la cadena hasta los segundos
        break
    case 2:
        console.log(fecha.toLocaleString('en', {hour:'numeric', minute:'numeric', second:'numeric', hour12:'true'}))
        break
    default:
        console.log("Elige un número del 1 al 3 por favor")
}   