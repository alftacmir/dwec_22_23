window.onload = inicio;

//Constantes para la API de Marvel
const API_BASE_URL = "https://gateway.marvel.com";
const PRIVATE_API_KEY = "0ce1bc6cca3084049d618d81d694fc2d7679c96f";
const PUBLIC_API_KEY = "11ef0af212d4f2e1f996f6ece3d7e16e";
const TS = "1000";
const HASH = md5(TS + PRIVATE_API_KEY + PUBLIC_API_KEY);

//Constantes para el examen
let READY_STATE_COMPLETE = 4;
let HTTP_STATUS_OK = 200;
let peticion_http;
let documentacion = [];
let filtrado = [];
let aSubir = [];

//Funcion que se genera al principio para obtener los botones
function inicio() {
  console.log("funcion de inicio");
  let descargar = document.getElementById("descargar");
  let limpiar = document.getElementById("limpiar");
  let guardar = document.getElementById("descxml");
  let descfetch = document.getElementById("descfetch");

  descargar.addEventListener("click", api, false);
  limpiar.addEventListener("click", limpiarPantalla, false);
  guardar.addEventListener("click", meterarray, false);
  //   descfetch.addEventListener("click", traerfetch, false)
}

function limpiarPantalla() {
  let div = document.getElementById("main");
  div.textContent = "";
}

function api() {
  if (window.XMLHttpRequest) {
    peticion_http = new XMLHttpRequest();
  } else {
    alert("No tiene soporte con AJAX este nevegador");
  }
  if (peticion_http) {
    peticion_http.onreadystatechange = () => {
      if (
        peticion_http.readyState === READY_STATE_COMPLETE &&
        peticion_http.status === HTTP_STATUS_OK
      ) {
        let respuesta = JSON.parse(peticion_http.responseText);
        procesado(respuesta);
      }
    };
    peticion_http.open(
      "GET",
      `${API_BASE_URL}/v1/public/characters?apikey=${PUBLIC_API_KEY}&hash=${HASH}&ts=${TS}&limit=10&offset=0`,
      true
    );
    peticion_http.send();
  }
}

function procesado(respuesta) {
  let arrayComics = [];

  documentacion = respuesta.data.results;
  documentacion.forEach((superheroe) => {
    superheroe.comics.items.forEach((comic) => {
      arrayComics.push(comic.name);
    });
    let entidad = {
      name: superheroe.name,
      imagen: superheroe.thumbnail,
      modified: superheroe.modified,
      comics: arrayComics,
      id: superheroe.id,
    };
    filtrado.push(entidad);
  });

  let main = document.getElementById("main");
  let tarjeta = document.createElement("div");
  let img = document.createElement("img");
  let body = document.createElement("div");
  let title = document.createElement("h5");
  let modified = document.createElement("p");
  let array = document.createElement("p");
  let id = document.createElement("p");
  let check = document.createElement("div");
  let palanca = document.createElement("input");
  let texto = document.createElement("label");

  filtrado.forEach((persona) => {
    tarjeta = document.createElement("div");
    tarjeta.setAttribute("class", "card");
    tarjeta.setAttribute("style", "width: 18rem;");

    img = document.createElement("img");
    img.setAttribute(
      "src",
      persona.imagen.path + "." + persona.imagen.extension
    );
    img.setAttribute("class", "card-img-top");

    tarjeta.appendChild(img);

    body = document.createElement("div");
    body.setAttribute("class", "card-body");

    title = document.createElement("h5");
    title.textContent = persona.name;
    title.setAttribute("class", "card-title");
    body.appendChild(title);

    modified = document.createElement("p");
    modified.textContent = persona.modified;
    modified.setAttribute("class", "card-text");
    body.appendChild(modified);

    array = document.createElement("p");
    array.textContent = persona.comics;
    array.setAttribute("class", "card-text");
    body.appendChild(array);

    id = document.createElement("p");
    id.textContent = persona.id;
    id.setAttribute("class", "card-text");
    body.appendChild(id);

    check = document.createElement("div");
    check.setAttribute("class", "custom-control custom-switch");

    palanca = document.createElement("input");
    palanca.setAttribute("type", "checkbox");
    palanca.setAttribute("class", "custom-control-input");
    check.appendChild(palanca);

    texto = document.createElement("label");
    texto.setAttribute("class", "custom-control-label");
    texto.textContent = "Selecciona para guardar";
    check.appendChild(texto);

    body.appendChild(check);

    tarjeta.appendChild(body);
    main.appendChild(tarjeta);
  });
}

function meterarray() {

  
//   fetch("save_marvel_characters.php", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(aSubir),
//   })
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       }
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => console.log(err));
}

function traerfetch() {

  fetch("get_marvel_characters.php")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      procesado2(data);
    })
    .catch((err) => console.log(err));
}

function procesado2(data) {
    let main = document.getElementById("main");
    let tarjeta = document.createElement("div");
    let img = document.createElement("img");
    let body = document.createElement("div");
    let title = document.createElement("h5");
    let modified = document.createElement("p");

    let id = document.createElement("p");
    let check = document.createElement("div");
    let palanca = document.createElement("input");
    let texto = document.createElement("label");

    data.forEach((persona) => {
        tarjeta = document.createElement("div");
        tarjeta.setAttribute("class", "card");
        tarjeta.setAttribute("style", "width: 18rem;");
    
        img = document.createElement("img");
        img.setAttribute(
          "src",
          persona.imagen.path + "." + persona.imagen.extension
        );
        img.setAttribute("class", "card-img-top");
    
        tarjeta.appendChild(img);
    
        body = document.createElement("div");
        body.setAttribute("class", "card-body");
    
        title = document.createElement("h5");
        title.textContent = persona.name;
        title.setAttribute("class", "card-title");
        body.appendChild(title);
    
        modified = document.createElement("p");
        modified.textContent = persona.modified;
        modified.setAttribute("class", "card-text");
        body.appendChild(modified);
    
        id = document.createElement("p");
        id.textContent = persona.id;
        id.setAttribute("class", "card-text");
        body.appendChild(id);
    
        body.appendChild(check);
    
        tarjeta.appendChild(body);
        main.appendChild(tarjeta);});
}
