let READY_STATE_COMPLETE = 4;
let HTTP_STATUS_OK = 200;

let peticion_http;

window.onload = inicio;

resultado = [];

function inicio() {
  let cargarCriminales = document.getElementById("cargarCriminales");
  cargarCriminales.addEventListener("click", carga_contenido, false);
  let limpiarTabla = document.getElementById("limpiarTabla");
  limpiarTabla.addEventListener("click", limpiaTabla, false);
}

function limpiaTabla() {
  let tabla = document.getElementById("tablaMalosos");
  let reminder = document.getElementById("reminder");
  tabla.innerHTML = "";
  reminder.innerHTML = "La tabla ha sido limpiada";
}

function carga_contenido() {
  if (window.XMLHttpRequest) {
    peticion_http = new XMLHttpRequest();
  } else {
    alert("No tiene soporte");
    return;
  }

  if (peticion_http) {
    const url = "https://api.fbi.gov/@wanted";
    peticion_http.onreadystatechange = crearTabla;
    peticion_http.open("GET", url, true);
    peticion_http.send();
  }
}
function procesado() {}

function crearTabla() {
  if (
    peticion_http.readyState === READY_STATE_COMPLETE &&
    peticion_http.status === HTTP_STATUS_OK
  ) {
    let respuesta = JSON.parse(peticion_http.responseText);
    let reminder = document.getElementById("reminder");
    reminder.innerHTML = "Criminales cargados desde el FBI";

    resultado = respuesta.items;

    let tabla = document.getElementById("tablaMalosos");
    tabla.innerHTML = "";

    let titulos = ["uid", "title", "description", "aliases", "image", "save"];

    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let img = document.createElement("img");
    let button = document.createElement("button");

    for (let i = 0; i < titulos.length; i++) {
      td = document.createElement("th");
      td.textContent = titulos[i];
      tr.appendChild(td);
    }
    tabla.appendChild(tr);

    for (let i = 0; i < resultado.length; i++) {
      let criminal = resultado[i];
      let check = resultado[i].uid;
      tr = document.createElement("tr");
      td = document.createElement("td");

      td.textContent = criminal.uid;
      tr.appendChild(td);

      td = document.createElement("td");
      td.textContent = criminal.title;
      tr.appendChild(td);

      td = document.createElement("td");
      td.textContent = criminal.description;
      tr.appendChild(td);

      td = document.createElement("td");
      td.textContent = criminal.aliases;
      tr.appendChild(td);

      td = document.createElement("td");
      img = document.createElement("img");
      img.setAttribute("src", resultado[i].images[0].thumb);
      td.appendChild(img);
      tr.appendChild(td);

      td = document.createElement("td");
      button = document.createElement("button");
      button.textContent = "Guardar";
      button.setAttribute("id", check);
      button.addEventListener("click", guardar, false);
      td.appendChild(button);
      tr.appendChild(td);
      button = document.createElement("button");

      tabla.appendChild(tr);
    }
  }
}

function guardar(x) {
  let boton = x.currentTarget;
  let preso;

  for (let i = 0; i < resultado.length; i++) {
    if (resultado[i].uid === boton.id) {
      preso = {
        uid: resultado[i].uid,
        title: resultado[i].title,
        description: resultado[i].description,
        aliases: resultado[i].aliases,
        imgages: resultado[i].images[0].thumb,
      };
    }
  }

  

  fetch("save_criminal.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(preso),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
