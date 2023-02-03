let READY_STATE_COMPLETE = 4;
let HTTP_STATUS_OK = 200;

window.onload = inicio;

let peticion_http;

function inicio() {
    let URL = "http://localhost:8090/U7/T3/series.xml";
    if (window.XMLHttpRequest) {
        peticion_http = new XMLHttpRequest();
      } else {
        alert("No tienes soporte para AJAX");
        return;
      }
      if (peticion_http) {
        // en la petición, me suscribo al evento "ReadyStateChange", y le 
        // digo que me llame a muestra_contenido cada vez que suceda (que cambie el estado)
        peticion_http.onreadystatechange = muestra_contenido;
        peticion_http.open("GET", URL, true);
        peticion_http.send();
      }   
}

function muestra_contenido(){
    if (peticion_http.readyState === READY_STATE_COMPLETE && peticion_http.status === HTTP_STATUS_OK) {
        resultados = peticion_http.responseXML;
        let series = resultados.getElementsByTagName("serie");
        console.log(series);

        let tabla = document.createElement("table");

        for (let i = 0; i < series.length; i++) {
            
        }

    }
}