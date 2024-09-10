document.addEventListener("DOMContentLoaded", function () {
  // Escribe el código necesario aquí
  const btn = document.getElementById("highlightBtn");
  btn.addEventListener('click', ()=>{
    document.getElementById("lorem").className = "highlight";
  });
  //
});
