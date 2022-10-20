// Crea un programa que pida por parámetro tu cumpleaños (no hace falta el año) y saque todos los años en que tu cumpleaños va a caer en domingo desde este año hasta el año 2100.

// Recuerda que los meses empiezan desde el número 0.

const prompt = require('prompt-sync')({sigint: true})


let dia = prompt('Introduce el dia de tu cumpleaños: ') // Preguntamos el dia de partida
console.log(dia)
let mes = prompt('Introduce el mes de tu cumpleaños: ') // Preguntamos el mes
let anno = new Date().getFullYear(); // Nos guardamos el año actual 
console.log("")
console.log(`La fecha de tu cumpleaños es ${dia}/${mes}/${anno}`) // Esta es la fecha de mi cumpleaños
console.log("")
let mi_cumple= new Date(anno,mes-1,dia) // Una variable con mi fecha
let array_annos = new Array // Esta es un array en la que guardo todos los años
for (let i = anno; i < 2100; i++) { // hago un bucle que recorra los años desde el actual hasta el 2100
    mi_cumple.setFullYear(i)
    if(mi_cumple.getDay() == 0){ // Compruebo si el dia de mi cumpleaños cae en domingo
        array_annos.push(i);
    }
    
}
console.log(array_annos)