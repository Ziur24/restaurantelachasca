
const contenedor = document.getElementById("contenedorLogo"); /*.addEventListener("wheel", cambioOpacidad());*/
const barraNavegacion = document.getElementById('barraDeNavegacion');
const mensajeBienvenida = document.getElementById('logoRestaurante');
const localizacion = document.location;

alert(localizacion.pathname);

let timer;
let opacidadLogo=1;
let opacidadBarraNavegacion=0;
let etapaBinevenida = 1;

window.addEventListener('load', function(){
  timer = this.setInterval(cambioOpacidad, 15)
});



function cambioOpacidad(){

  if (etapaBinevenida==1 && localizacion.pathname=="/home.html"){
    
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
  }else if(localizacion.pathname=="/carta.html" || localizacion.pathname=="/contacto.html"){
    barraNavegacion.style.opacity=1;
  }
}



