window.onload = inicio;

let informacion = [];

function inicio(){
    let vehiculos = document.getElementById("carga");
    vehiculos.addEventListener("click", recuperarVehiculos);

    let registrar = document.getElementById("registrar");
    registrar.addEventListener("click", registrarInformacion);

}

function registrarInformacion(){
    //console.log("entra");

    let checks = document.getElementsByClassName("checkbox");
    //let checkss = document.querySelectorAll("input[type=checkbox]");
    console.log(checks);

    let final_checks = [];

    for (const valores of checks) {
        if(valores.checked){
            final_checks.push(valores.value);
        }
    }

    console.log(final_checks); 

    let nuevo = {
        nombre: document.getElementById("nombre").value,
        direccion: document.getElementById("direccion").value,
        telefono: parseInt(document.getElementById("telefono").value),
        correo: document.getElementById("correo").value,
        vehiculos: final_checks,
    }

    console.log(nuevo); 

    fetch("registrar_envio.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevo),
    })
    .then((response) =>{
        if(response.ok){
            return response.json();
        }
    })
    .then((data) =>{
        console.log(data);
    })
    .catch((err) => console.log(err));

    document.getElementById("mensaje").innerHTML = "envio registrado";
}


function recuperarVehiculos(){
    //console.log("entra recuperar vehiculos");
    if (XMLHttpRequest) {
        let xml = new XMLHttpRequest();
        xml.onreadystatechange = () =>{
            if (xml.readyState ===4 && xml.status === 200) {
                let datos = JSON.parse(xml.responseText);
                procesarDatos(datos);
            }
        };

        xml.open("GET", "vehiculos.json");
        xml.send()



    } else {
        console.log("no soporta ajax");
    }

}


function procesarDatos(datos){
    for (const info of datos) {
        informacion.push(info);
    }
    document.getElementById("mensaje").innerHTML = "Vehículos insertados correctamente";
    console.log(informacion);
    insertarDatos(informacion);

}

function insertarDatos(datos){
    console.log("entra");

    fetch("insertar_vehiculos.php" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
    })
    .then((response) => {
        if(response.ok){
            return response.json();
        }
    })
    .then((data) =>{
        console.log(data);
        generarTabla(informacion);
    })
    .catch((err) => console.log(err));

}

function generarTabla(datos){
    console.log(datos);
    let cabecera = ["Id", "Name", "Description", "Vehicle Class", "Enviar"];
    
    let tabla = document.createElement("table");
    let fila = document.createElement("tr");
    let th;
    for (const titulos of cabecera) {
        th = document.createElement("th");
        th.textContent = titulos;
        fila.appendChild(th);
    }

    tabla.appendChild(fila);
    let div = document.getElementById("respuesta");
    
    for (const infor of datos) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("class", "checkbox");
        
        td.textContent = infor.id;
        checkbox.setAttribute("value", td.textContent);
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = infor.name;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = infor.description;
        tr.appendChild(td);
        td = document.createElement("td");
        
        td.textContent = infor.vehicle_class;
        
        tr.appendChild(td);
        td = document.createElement("td");
        
        td.appendChild(checkbox);
        tr.appendChild(td);
        tabla.appendChild(tr);
    }

    div.appendChild(tabla);
    
}