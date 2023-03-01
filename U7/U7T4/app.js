window.onload = inicio;

function inicio() {
  descarga_archivo();
}

function descarga_archivo() {
  if (window.XMLHttpRequest) {
    peticion_http = new XMLHttpRequest();

    peticion_http.onreadystatechange = peticion;
    peticion_http.open("GET", "http://localhost:8090/U7T4/tvshows.json");
    peticion_http.send();
  } else {
    alert("No tienes soporte para AJAX");
  }
}

function peticion() {
  if (peticion_http.readyState === 4) {
    if (peticion_http.status === 200) {

      resultados = JSON.parse(this.responseText);

      let tabla = document.createElement("table");

      let body = document.getElementsByTagName("body").item(0);


      body.append(tabla);

      console.log(resultados);

      for (let i = 0; i < resultados.series.length; i++) {
        let serie = resultados.series[i];
        console.log(serie);


        for (let j = 0; j < serie.serie.length; j++) {
          let fila = document.createElement("tr");
          let item = serie.serie[j];
          console.log(item);

          let titulo = document.createTextNode(item.titulo);
          let cadena = document.createTextNode(item.cadena);
          let director =document.createTextNode(item.director);
          let ano = document.createTextNode(item.ano);
          let terminada = document.createTextNode(item.terminada);
          console.log(titulo, cadena, director, ano, terminada);

          let coltitulo = document.createElement("th");
          let colcadena = document.createElement("td");
          let coldirector = document.createElement("td");
          let colanio = document.createElement("td");
          let colterminada = document.createElement("td");
          let i = document.createElement("i");

          i.appendChild(director);


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
          coldirector.appendChild(i);
          colanio.appendChild(ano);

          if(terminada.textContent == "si"){
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




      }




      console.log(body);


    }
  }
}