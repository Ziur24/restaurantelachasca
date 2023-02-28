
const contenedorLogo = document.getElementById("contenedorLogo");
const barraNavegacion = document.getElementById("cabeceraBarraNavegacion");
const mensajeBienvenida = document.getElementById("logoRestaurante");


let timer;
let opacidadLogo=1;
let opacidadBarraNavegacion=0;
let etapaBinevenida = 1;

window.addEventListener('load', function(){
  timer = this.setInterval(cambioOpacidad, 15)
});


function cambioOpacidad(){
  
  if (etapaBinevenida==1 && contenedorLogo){
    
    if (opacidadLogo>0.0){
    opacidadLogo=opacidadLogo-0.01;
    contenedorLogo.style.opacity=opacidadLogo;
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
      contenedorLogo.style.opacity=opacidadLogo;
      }else if(etapaBinevenida==2 && opacidadLogo==1){
      document.body.style.overflow="auto";
      clearInterval(timer);
      }
  }else if(!contenedorLogo){ 
    barraNavegacion.style.opacity=1;
    document.body.style.overflow="auto";
    clearInterval(timer);
  }
  
}

/*function particionCadena(cadena){
  let separador='/';
  let arrayParticion = cadena.split(separador);
  let ultimoComponente = arrayParticion[arrayParticion.length-1];
  return ultimoComponente;
}*/

