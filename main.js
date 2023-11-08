//criando/declarando a função tocaSom
function tocaSom(IDaudio){
    document.querySelector(IDaudio).play();
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
