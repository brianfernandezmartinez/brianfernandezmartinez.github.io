document.addEventListener('DOMContentLoaded', function () {
    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces de la página :
    const enlacesA = this.getElementsByTagName('a');
    console.log(enlacesA.length);
    // Incluye aquí el código necesario para mostrar en el párrafo "info", la dirección del penúltimo enlace de la página :
    const penultimoEnlace = enlacesA[(enlacesA.length-2)].href;
    console.log(penultimoEnlace);
    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces que apuntan a http://prueba/ :
    let contador=0;
    const url = "http://prueba/";
    function retornaNroEnlaces(array, direccion) {
        for(enlace of array){
            if(enlace.href == direccion){
                contador++;
            }
        }
        console.log(contador);
        contador=0;
    }
    retornaNroEnlaces(enlacesA,url);
    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces del tercer párrafo :
    const tercerParrafo = enlacesA[2].href;
    retornaNroEnlaces(enlacesA,tercerParrafo);
});button.addEventListener('click', function() { alert('¡Botón clicado!'); });