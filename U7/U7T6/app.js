window.onload = inicio;

function inicio() {
  let boton = document.getElementById("boton");
  boton.addEventListener("click", cargar);
  let boton2 = document.getElementById("mostrar");
  boton2.addEventListener("click", tabla);
}

function cargar() {
  let serie = {
    titulo: document.getElementById("titulo").value,
    director: document.getElementById("director").value,
    cadena: document.getElementById("cadena").value,
    anyo: document.getElementById("ano").value,
    terminada: document.getElementById("terminada").value,
  };

  fetch("create_serie.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(serie),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      if (data == 'ok') {
        respuesta.style.color = "green";
        tabla();
      } else {
        respuesta.style.color = "red";
      }
      respuesta.innerHTML = data;
      
    })
    .catch((err) => console.log(err));
}


function tabla(){

  fetch("listar_series.php").then((response) => {
    if (response.ok) {
      return response.json();
    }
  }).then((data) => {
    console.log(data);

    let tabla = document.createElement("table");

    let body = document.getElementById("tabla");
    body.textContent = "";


    body.append(tabla);


    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      console.log(item);


      
        let fila = document.createElement("tr");
       

        let titulo = document.createTextNode(item.titulo);
        let cadena = document.createTextNode(item.cadena);
        let director =document.createTextNode(item.director);
        let ano = document.createTextNode(item.anyo);
        let terminada = document.createTextNode(item.terminada);
        console.log(titulo, cadena, director, ano, terminada);

        let coltitulo = document.createElement("th");
        let colcadena = document.createElement("td");
        let coldirector = document.createElement("td");
        let colanio = document.createElement("td");
        let colterminada = document.createElement("td");
        let e = document.createElement("i");

        e.appendChild(director);

        
        console.log(parseInt(ano.textContent));
        if(parseInt(ano.textContent) <= 2000){
          console.log("rojo");
          colanio.setAttribute("style", "color: red;");
        } else if (parseInt(ano.textContent)  >= 2001 && parseInt(ano.textContent) <= 2010){
          console.log("amarillo");
          colanio.setAttribute("style", "color: yellow;");
        } else{
          console.log("verde");
          colanio.setAttribute("style", "color: green;");
        }

        let check = document.createElement("img");
        check.src = "cheque.png";
        check.setAttribute("style", "width:5%");
        let cross = document.createElement("img");
        cross.src = "cancel.png";
        cross.setAttribute("style", "width:5%");
      

        coltitulo.appendChild(titulo);
        colcadena.appendChild(cadena);
        coldirector.appendChild(e);
        colanio.appendChild(ano);

        if(terminada.textContent == "1"){
          colterminada.appendChild(check);
        } else {
          colterminada.appendChild(cross);
        }



        fila.appendChild(coltitulo);
        fila.appendChild(colcadena);
        fila.appendChild(coldirector);
        fila.appendChild(colanio);
        fila.appendChild(colterminada);
        tabla.appendChild(fila);

      




    }

    
  })


}