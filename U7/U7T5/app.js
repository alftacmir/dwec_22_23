window.onload = inicio;

function inicio() {
  let boton = document.getElementById("boton");
  boton.addEventListener("click", cargar);
}

function cargar() {
  if (window.XMLHttpRequest) {
    peticion_http = new XMLHttpRequest();

    let serie = {
      titulo: document.getElementById("titulo").value,
      director: document.getElementById("director").value,
      cadena: document.getElementById("cadena").value,
      anyo: document.getElementById("ano").value,
      terminada: document.getElementById("terminada").value,
    };
    
    peticion_http.onreadystatechange = () => {
      let respuesta = document.getElementById("respuesta");
      if (
        peticion_http.readyState === 4 &&
        peticion_http.status === 200 &&
        peticion_http.responseText == '"ok"'
      ) {
        respuesta.innerHTML = peticion_http.responseText;
        respuesta.style.color = 'green';
        console.log(peticion_http.responseText);
      } else {
        respuesta.innerHTML = peticion_http.responseText;
        respuesta.style.color = 'red';
      }
    };
    
    peticion_http.open("POST", "http://localhost:8090/U7T5/create_serie.php");
    peticion_http.setRequestHeader("Content-Type", "application/json");
    peticion_http.send(JSON.stringify(serie));
  } else {
    alert("No tienes soporte para AJAX");
  }
}
