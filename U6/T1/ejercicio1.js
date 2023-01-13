// Dispones del código de una página web en html: pagina.html. Introduce en el apartado de script el código necesario para extraer:

//     El número de párrafos de la página.
//     El texto del segundo párrafo.
//     El número de enlaces de la página.
//     La dirección del primer enlace.
//     La dirección del penúltimo enlace.
//     El número de enlaces que apuntan a /wiki/Municipio
//     El número de enlaces del primer párrafo.

// Para agregar texto en la página deberás introducir una etiqueta div con el id=info y  añadir en ella toda la información detallada mediante:


// let info = document.getElementById(“info”);

// info.innerHTML = “Texto informativo”;


let p_list = document.getElementsByTagName("p");
let p_number = p_list.length;
console.log("number of <p>: "+p_number);

let texto2= p_list[1].textContent;
console.log("El texto del segundo parrafo es: "+texto2);

let a_list = document.getElementsByTagName("a");
let a_number = a_list.length;
console.log("number of <a>: "+a_number);

let enlace1 = a_list[0].getAttribute("href");
console.log("El enlace primero tiene el contenido: "+enlace1);

let penultimo
if (a_list.length>=2){
    penultimo = a_list[a_list.length-2].getAttribute("href");
    console.log("El contenido del penultimo enlace es: "+penultimo);
}else {
    penultimo = a_list[0].getAttribute("href");
    console.log("El contenido del penultimo enlace es: "+penultimo);
}

let contadorEnlace=0
for (let index = 0; index < a_list.length; index++) {
    if(a_list[index].getAttribute("href").includes("/wiki/Municipio")){
        contadorEnlace++;
    }
}
console.log("El contador enlace que contienen el /wiki/Munucipio es: "+contadorEnlace)

let a_p_primero = p_list[0].getElementsByTagName("a").length;
console.log("El numero de enlaces en el primer parrafo es: "+a_p_primero);
