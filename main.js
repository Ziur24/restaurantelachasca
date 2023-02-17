
const contenedor = document.getElementById("contenedorLogo"); /*.addEventListener("wheel", cambioOpacidad());*/
const barraNavegacion = document.getElementById('barraDeNavegacion');
const mensajeBienvenida = document.getElementById('logoRestaurante');

let tamañoFuente = 30;
let cambio;
let timer;
window.addEventListener('load', function(){
  timer = this.setInterval(cambioOpacidad, 15)
});

let opacidadLogo=1;
let opacidadBarraNavegacion=0;
let etapaBinevenida = 1;

function cambioOpacidad(){

  if (etapaBinevenida==1){
    
    if (opacidadLogo>0.0){
    opacidadLogo=opacidadLogo-0.01;
    contenedor.style.opacity=opacidadLogo;
    }else if(opacidadBarraNavegacion<1){
    
      opacidadBarraNavegacion=opacidadBarraNavegacion+0.01;
      barraNavegacion.style.opacity=opacidadBarraNavegacion;
  
    }else{
      etapaBinevenida=2; 
    }

  }else if(etapaBinevenida==2){
    if (opacidadLogo<1){
      mensajeBienvenida.innerHTML="Bienvenidos";
      opacidadLogo=opacidadLogo+0.01;
      contenedor.style.opacity=opacidadLogo;
      }
  }
}
