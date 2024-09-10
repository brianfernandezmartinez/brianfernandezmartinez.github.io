const buttonAdd = document.getElementById("buttonAdd");
const buttonRemove = document.getElementById("buttonRemove");
const container = document.getElementById("container");
const inputParagraph = document.getElementById("inputParagraph");

buttonAdd.addEventListener("click", function () {
  let text = inputParagraph.value;
  if (text) {
    let paragraph = document.createElement("p");
    paragraph.appendChild(document.createTextNode(text));
    container.appendChild(paragraph);
    inputParagraph.value = "";
  } else {
    alert("Debe ingresar algún texto para ser ingresado")
  }
});

buttonRemove.addEventListener("click", function () {
  const ultimoP = container.lastElementChild;
  if(ultimoP.tagName === "P"){
    container.removeChild(ultimoP);
  }
});
// Escribe el código a continuación
