// Crea un programa que muestre el número de días que quedan desde hoy hasta el fin de curso (por ejemplo, el 24 de junio).

// Recuerda que los meses empiezan desde el número 0

let hoy = new Date() //capturamos la fecha de hoy
console.log("La fecha de hoy es"+hoy)
let fin_curso = new Date(2023,6,24) //hacemos lo mismo con el fin de curso
console.log("La fecha de fin de curso es ")
let resultado = parseInt((fin_curso.getTime()-hoy.getTime())/(24*60*60*1000)) //restamos las dos fechas mediante getTime que devuelve milisegundos y parseamos

console.log("El resultado total de dias que faltan para el final de curso es: "+resultado)//finalmente monstramos en consola