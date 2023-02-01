let READY_STATE_COMPLETE = 4;
let HTTP_STATUS_OK = 200;

let peticion_http;
let boton = document.getElementById('boton');
let input = document.getElementById('pueblo');


boton.addEventListener('click', comprobar, false);

function comprobar(){
    const URL = `http://localhost:8090/U7/T2/localidad.php?localidad=${input.value}`;
    let texto = document.getElementById('pueblo');

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
   
    document.getElementById('pueblo').value = '';
}
function muestra_contenido() {
    if (peticion_http.readyState === READY_STATE_COMPLETE && peticion_http.status === HTTP_STATUS_OK) {
        document.getElementById('respuesta').innerHTML = peticion_http.responseText;

    if (peticion_http.responseText === 'SI') {
        document.getElementById('respuesta').style.color = 'green';
    }else{
        document.getElementById('respuesta').style.color = 'red';
    }
      }
    }
  
