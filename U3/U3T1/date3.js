// Crea un programa que muestre la fecha actual en diferentes formatos, según el valor que introduzca el usuario por parámetro:

// 15/10/2020
// Jueves, 15 de octubre de 2020.
// Thursday, October 15, 2020.

let fecha = new Date() // Lo primero cogemos y guardamos en una variable la fecha actual
fecha_barra(fecha)
fecha_espanol(fecha)
fecha_ingles(fecha)

/**
 * Esta funcion nos muestra la fecha con barra lateral
 * @param {f} fecha 
 */
function fecha_barra(f){ 
    console.log(f.toLocaleDateString()) // Utilizamos la funcion de LocaleDateString para sacarla
}

/**
 * Esta funcion nos va a mostrar la fecha en español
 * @param {f} fecha 
 */
function fecha_espanol(f){
    let dia_semana // Esta variable la voy a generar para poder hacer un switch xon los dias de la semana en español
    switch(f.getDay()){
        case 0:
            dia_semana='Domingo'
            break
        case 1:
            dia_semana='Lunes'
            break
        case 2:
            dia_semana='Martes'
            break
        case 3:
            dia_semana='Miércoles'
            break
        case 4:
            dia_semana='Jueves'
            break
        case 5:
            dia_semana='Viernes'
            break
        case 6:
            dia_semana='Sábado'
            break
    }

    console.log(`${dia_semana}, ${f.getDate()} ${f.toLocaleString('es', {month: 'long'})} de ${f.getFullYear()}`) // En este console log he aprovechado las funcionees de tipo Date para ahorrar codigo
}

/**
 * 
 * @param {f} fecha 
 */
function fecha_ingles(f){
    console.log(`${f.toLocaleString('en', {weekday: 'long'})}, ${f.toLocaleString('en', {month: 'long'})} ${f.getDate()}, ${f.getFullYear()}`)
}