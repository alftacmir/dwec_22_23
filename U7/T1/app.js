let READY_STATE_COMPLETE = 4;
let HTTP_STATUS_OK = 200;

let peticion_http;

window.onload = inicio;

function inicio(){
    let boton = document.getElementById("boton");
    boton.addEventListener("click", carga_contenido, false);
    let URL = window.location;
    document.getElementById("ruta").value = URL
}

function carga_contenido() {
  if (window.XMLHttpRequest) {
    peticion_http = new XMLHttpRequest();
  } else {
    alert("No tienes soporte para AJAX");
    return;  // Salimos y no hacemos la petición
  }

  // Preparamos la petición
  if (peticion_http) {
    const URL = window.location;
    // en la petición, me suscribo al evento "ReadyStateChange", y le 
    // digo que me llame a muestra_contenido cada vez que suceda (que cambie el estado)
    peticion_http.onreadystatechange = muestra_contenido;
    peticion_http.open("GET", URL, true);
    peticion_http.send();
  }
}

function muestra_contenido() {
  if (peticion_http.readyState === READY_STATE_COMPLETE && peticion_http.status === HTTP_STATUS_OK) {
      document.getElementById("area").textContent = peticion_http.responseText;
    }
  }





