
const parrafo = document.getElementsByClassName("prueba");

window.addEventListener('load', function(){
    parrafoVisible(parrafo);
});


function parrafoVisible(elemento1){
    for (let i=0; i < elemento1.length; i++){
        elemento1[i].style.visibility= "visible";

    }
}
