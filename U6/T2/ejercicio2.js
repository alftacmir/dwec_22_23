window.onload = iniciar();
let annadir = document.getElementById("annadir");
let borrar1 = document.getElementById("borrar1");
let borrar2 = document.getElementById("borrar2");
annadir.addEventListener("click",add,false);
borrar1.addEventListener("click",del1,false);
borrar2.addEventListener("click",del2,false);

// Crea una página web que tenga un listado de tipo <ul> con un <li> de muestra.
// Introduce un botón en la página que, cuando lo pulses, te muestre un prompt para que el usuario introduzca un texto.
// Una vez cerrado el prompt el valor se añadirá como un nuevo<li> a la lista creada.
// Añade dos botones más con texto “Borrar primer li” y “Borrar último li” de modo que cuando pulses el primer botón borre el primer elemento de la lista y cuando pulses el último borre el último elemento de la lista.

function iniciar(){

}

function add(){

    let contenido = prompt("Introduce el nuevo elemento de la lista")
    let li_Creado = document.createElement("li");
    li_Creado.textContent = contenido;
    document.getElementById("lista").appendChild(li_Creado);

};

function del1(){

    document.getElementById("lista").removeChild(document.getElementById("lista").firstElementChild);   

};

function del2(){

    document.getElementById("lista").removeChild(document.getElementById("lista").lastElementChild);   
   
};
