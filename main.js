//criando/declarando a função tocaSom
function tocaSom(IDaudio){
    const elemento = document.querySelector(IDaudio);
    if (elemento && elemento.locaNine === ' audio'){
    
    elemento.play();
}else{ 
    console.log("elemento não encontrado")

  }
}
//criando referência constante ListaDeTeclas buscando todos
const listaDeTeclas = document.querySelectorAll('.tecla');

//invocando a função tocaSomPom a partir do item 0, 1º botão
//criando referência variável "contador" iniciando = 0
//estrutura de repetição while = enquanto
for(let contador = 0; contador < listaDeTeclas.length;contador++){
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1];
    const IDaudio = `#som_${efeito}`;
    tecla.onclick = function(){
        tocaSom(IDaudio);
    }
   tecla.onkeydown = function (evento){
if(evento.code === 'Space' || evento.code === "enter"){
tecla.classList.add('.ativa');
}
   }
tecla.onkeyup = function (){
    tecla.classList.remove('ativa');
  }
}