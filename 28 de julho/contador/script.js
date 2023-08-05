let contador = 0;

const contadorElemento = document.getElementById("contador");

function incrementar(){
    contador +=1;
    contadorElemento.innerHTML=contador;
}
function decrementar(){
    contador -=1;
    contadorElemento.innerHTML=contador;
}