window.onload = inicio;

let informacion = [];


function inicio(){
    let carga = document.getElementById("carga");
    carga.addEventListener("click", recuperarCriminales);

    let limpiar = document.getElementById("limpiar");
    limpiar.addEventListener("click", limpiarTabla);

    let xml = document.getElementById("XML");
    xml.addEventListener("click", cargaCriminalesBD);

    let fetch = document.getElementById("fetch");
    fetch.addEventListener("click", cargaCriminalesBDfetch);

}

function limpiarTabla(){
    let div = document.getElementById("tabla");
    div.innerHTML = "";
    document.getElementById("respuesta").innerHTML = "Se a limpiado la tabla";
}

function recuperarCriminales(){
    console.log("entra");
    if (XMLHttpRequest) {
        let xml = new XMLHttpRequest();
        xml.onreadystatechange = () =>{
            if (xml.readyState ===4 && xml.status === 200) {
                let datos = JSON.parse(xml.responseText);
                procesarDatos(datos);
            }
        };

        xml.open("GET", "https://api.fbi.gov/@wanted");
        xml.send();

    } else {
        console.log("no soporta ajax");
    }

}


function procesarDatos(datos){
    informacion = datos.items;
    console.log(informacion);

    crearTablaxml(informacion);

}

function procesarDatos2(datos){
    informacion = datos;
    console.log(informacion);

    crearTablaxml2(informacion);

}


function cargaCriminalesBD(){

    if (XMLHttpRequest) {
        let xml = new XMLHttpRequest();
        xml.onreadystatechange = () =>{
            if (xml.readyState ===4 && xml.status === 200) {
                let datos = JSON.parse(xml.responseText);
                console.log(datos);
                procesarDatos2(datos);
                
            }
        };

        xml.open("GET", "get_criminals.php");
        xml.send();

    } else {
        console.log("no soporta ajax");
    }


}


function cargaCriminalesBDfetch(){

    fetch("get_criminals.php")
    .then((response) =>{
        if(response.ok){
            return response.json();
     }
     })
     .then((data) =>{
        procesarDatos2(data);
    })
    .catch((err) => console.log(err));


}


function cargaCriminalesBD(){

    if (XMLHttpRequest) {
        let xml = new XMLHttpRequest();
        xml.onreadystatechange = () =>{
            if (xml.readyState ===4 && xml.status === 200) {
                let datos = JSON.parse(xml.responseText);
                console.log(datos);
                procesarDatos2(datos);
                
            }
        };

        xml.open("GET", "get_criminals.php");
        xml.send();

    } else {
        console.log("no soporta ajax");
    }


}


function crearTablaxml(datos) {
    console.log(datos);

    let cabecera = ["uid", "title", "description", "aliases", "images", "buton"];
        
    let table = document.createElement("table");
    let div = document.getElementById("tabla");
    div.innerHTML = "";
    let fila = document.createElement("tr");
    let th;
    for (const nombre of cabecera) {
        th = document.createElement("th");
        th.textContent = nombre;
        fila.appendChild(th);
    }


    table.appendChild(fila);
    
    console.log(datos);
    for (const objetos of datos) {
        
        let nombreuid = objetos.uid;
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let boton = document.createElement("button");
        let img = document.createElement("img");

        td.textContent = objetos.uid;
        tr.appendChild(td);
        td = document.createElement("td");

        td.textContent = objetos.title;
        tr.appendChild(td);
        td = document.createElement("td");

        td.textContent = objetos.description;
        tr.appendChild(td);
        td = document.createElement("td");

        td.textContent = objetos.aliases;
        tr.appendChild(td);
        td = document.createElement("td");

        img.setAttribute("src", objetos.images[0].thumb);
        td.appendChild(img);
        tr.appendChild(td);
        td = document.createElement("td");

        boton.textContent = "Guardar";
        boton.setAttribute("id", nombreuid);
        boton.addEventListener("click", insertarCriminal);
        td.appendChild(boton);
        tr.appendChild(td);
        td = document.createElement("td");

        table.appendChild(tr);
    }

    document.getElementById("respuesta").innerHTML = "Se a generado la tabla";
    div.appendChild(table);

}

function crearTablaxml2(datos) {
    console.log(datos);

    let cabecera = ["uid", "title", "description", "aliases", "images", "buton"];
        
    let table = document.createElement("table");
    let div = document.getElementById("tabla");
    div.innerHTML = "";
    let fila = document.createElement("tr");
    let th;
    for (const nombre of cabecera) {
        th = document.createElement("th");
        th.textContent = nombre;
        fila.appendChild(th);
    }


    table.appendChild(fila);
    
    console.log(datos);
    for (const objetos of datos) {
        
        let nombreuid = objetos.uid;
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let boton = document.createElement("button");
        let img = document.createElement("img");

        td.textContent = objetos.uid;
        tr.appendChild(td);
        td = document.createElement("td");

        td.textContent = objetos.title;
        tr.appendChild(td);
        td = document.createElement("td");

        td.textContent = objetos.description;
        tr.appendChild(td);
        td = document.createElement("td");

        td.textContent = objetos.aliases;
        tr.appendChild(td);
        td = document.createElement("td");

        img.setAttribute("src", objetos.images);
        td.appendChild(img);
        tr.appendChild(td);
        td = document.createElement("td");

        boton.textContent = "Guardar";
        boton.setAttribute("id", nombreuid);
        boton.addEventListener("click", insertarCriminal);
        td.appendChild(boton);
        tr.appendChild(td);
        td = document.createElement("td");

        table.appendChild(tr);
    }

    document.getElementById("respuesta").innerHTML = "Se a generado la tabla con los datos de la BD";
    div.appendChild(table);

}

function insertarCriminal(e){
    let boton = e.currentTarget;

    console.log(boton);
    console.log(informacion);

    let ainsertar;
    for (const iterator of informacion) {
        if(iterator.uid === boton.id){
            ainsertar = {
                uid: iterator.uid,
                title: iterator.title,
                description: iterator.description,
                aliases: iterator.descraliasesiption,
                images: iterator.images[0].thumb,
            }
        }
    }
    console.log(ainsertar);

    fetch("save_criminal.php", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
         body: JSON.stringify(ainsertar),
    })
    .then((response) =>{
        if(response.ok){
            return response.json();
     }
     })
     .then((data) =>{
        document.getElementById("respuesta").innerHTML = "Se a insertado el criminal en la BD";
    })
    .catch((err) => console.log(err));


}

