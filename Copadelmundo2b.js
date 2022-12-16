/* EJECUTA LA FUNCIÓN AL CARGAR */
onload = ondea; 

var anchoFaja = 2; //ANCHO EN PIXELES DE CADA FAJA EN EL CLIP
var anchoOnda = 25; //VALOR DISTANCIA (DEMORA) EN SENOIDE

function ondea(){
  /* REFIERE AL TÍTULO */ 
  var titulo = document.querySelector("h1"); 
  /* CAPTURA EL CONTENIDO DEL TÍTULO */
  var texto = titulo.innerHTML; 
  /* MIDE EL TAMAÑO DEL TÍTULO */
  var ancho = titulo.offsetWidth; 
  var alto = titulo.offsetHeight; 

  /*SIEMPRE AJUSTA EL ancho COMO MÚLTIPLO DE anchoFaja EN PIXELES*/
  ancho = ancho+(anchoFaja-ancho%anchoFaja); 
  /* FIJA EL TAMAÑO DEL TÍTULO */
  titulo.style.width = ancho+"px"; 
  titulo.style.height = alto+"px"; 

  /* LA CANTIDAD DE BANDAS ES EL ANCHO DE TÍTULO SOBRE ANCHO DE CLIP */
  var totalFajas = ancho/2; 

  /* VACÍA EL TÍTULO CONTENEDOR DE TEXTO */
  titulo.innerHTML = ""; 

  /* CREA LAS BANDAS Y LES DA FORMATO */
  for(i=0; i<totalFajas; i++) {
    /* UN DIV PARA CADA FAJA */
    faja = document.createElement("div"); 
    /* LE ASIGNA LA MISMA ALTURA DEL TÍTULO */
    faja.style.height = alto+"px"; 
    /* PONE EL MISMO TEXTO ORIGINAL */
    faja.innerHTML = texto; 
    /* DEJA VISIBLE UN CLIP DE 2px DE ANCHO, CADA UNO 2px A LA IZQUIERDA DEL ANTERIOR PARA QUE PAREZCA UNA IMAGEN DE TÍTULO COMPLETA SIN CORTES */
    faja.style.clip = "rect(0, "+((i+1)*anchoFaja)+"px, "+alto+"px, "+(i*anchoFaja)+"px)"; 
    /* RETRASA LA ANIMACIÓN CSS DE CADA FAJA SIGUIENDO UNA ONDA DE TIEMPO SENOIDE */
    faja.style.animationDelay = (Math.cos(i)+i*anchoOnda)+"ms"; 
    /* AGREGA LA CAPA AL CONTENEDOR */
    titulo.appendChild(faja);
  }
}