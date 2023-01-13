window.onload = iniciar();

function iniciar() {
  let formulario = document.createElement("form");

  let parrafo1 = document.createElement("p");
  let label1 = document.createElement("label");
  let input1 = document.createElement("input");
  label1.setAttribute("for", "nombre");
  label1.textContent = "Nombre: ";
  input1.setAttribute("type", "text");
  parrafo1.appendChild(label1);
  parrafo1.appendChild(input1);

  formulario.appendChild(parrafo1);

  let parrafo2 = document.createElement("p");
  let label2 = document.createElement("label");
  let input2 = document.createElement("input");
  label2.setAttribute("for", "grupo musica");
  label2.textContent = "Grupo de Música: ";
  input2.setAttribute("type", "text");
  parrafo2.appendChild(label2);
  parrafo2.appendChild(input2);

  formulario.appendChild(parrafo2);

  let parrafo3 = document.createElement("p");
  let label3 = document.createElement("label");
  let input3 = document.createElement("input");
  label3.setAttribute("for", "anno publicacion");
  label3.textContent = "Año de publicación: ";
  input3.setAttribute("type", "date");
  parrafo3.appendChild(label3);
  parrafo3.appendChild(input3);

  formulario.appendChild(parrafo3);

  let parrafo4 = document.createElement("p");
  let label4 = document.createElement("label");
  let input4 = document.createElement("input");
  label4.setAttribute("for", "tipo musica");
  label4.textContent = "Tipo de musica: ";
  input4.setAttribute("pattern", "(rock||(pop)||(punk)||(indie)");
  input4.type = "text";
  parrafo4.appendChild(label4);
  parrafo4.appendChild(input4);

  formulario.appendChild(parrafo4);

  let parrafo5 = document.createElement("p");
  let label5 = document.createElement("label");
  let input5 = document.createElement("input");
  label5.setAttribute("for", "localizacion");
  label5.textContent = "Localización: ";
  input5.setAttribute("type", "number");
  parrafo5.appendChild(label5);
  parrafo5.appendChild(input5);

  formulario.appendChild(parrafo5);

  let parrafo6 = document.createElement("p");
  let label6 = document.createElement("label");
  let input6 = document.createElement("input");
  label6.setAttribute("for", "prestado");
  label6.textContent = "Prestado: ";
  input6.setAttribute("type", "checkbox");
  parrafo6.appendChild(label6);
  parrafo6.appendChild(input6);

  formulario.appendChild(parrafo6);

  let submit = document.createElement("input");
  submit.type = "submit";

  formulario.appendChild(submit);

  document.body.appendChild(formulario);
}
