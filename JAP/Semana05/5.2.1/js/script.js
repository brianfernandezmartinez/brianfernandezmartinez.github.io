const DATA = [
  { name: "Laura", lastname: "Hightower" },
  { name: "Roberto", lastname: "Carlos" },
  { name: "Fulano", lastname: "Detal" },
  { name: "Joaquina", lastname: "Hand" },
  { name: "Maria", lastname: "White" },
];

// Escribe el código necesario aquí
const divContenedor = document.getElementById('container');

document.addEventListener("DOMContentLoaded", function () {
  for(let element of DATA){
    divContenedor.innerHTML+=`
    <p>${element.name} ${element.lastname}</p>
  `;
  }
});
//
