let inputText = document.getElementById('carta-texto');
let btnCriarCarta = document.getElementById('criar-carta');
let cartaGerada = document.getElementById('carta-gerada');
let arrayEstilo = ['newspaper', 'magazine1' , 'magazine2'];
let arrayTamanho = ['medium', 'big', 'reallybig'];
let arrayRotacao = ['rotateleft', 'rotateright'];
let arrayInclinacao = ['skewleft', 'skewright'];

//1 - Crie um input com o ID carta-texto onde a pessoa usuária poderá digitar o conteúdo da carta.

//2 - Crie um parágrafo com a tag p e ID carta-gerada onde a pessoa usuária verá o resultado de sua carta misteriosa.

//3 - Crie um botão com ID criar-carta que deve gerar a carta misteriosa ao ser clicado.

function gerandoCarta () {
    let palavrasArray = [];
    cartaGerada.innerHTML = '';
    let  textoValue= inputText.value;
    // if (textoValue.length < 1) {
    //     alert('Por favor, digite o conteúdo da carta');      
    // }
    if (!textoValue.replace(/\s/g, '').length) {
        cartaGerada.innerHTML ='Por favor, digite o conteúdo da carta.';
      }
    palavrasArray = textoValue.split(" ");
    console.log(palavrasArray);
    for (index = 0; index < palavrasArray.length; index ++) {        
        let spanTexto = document.createElement('span')
        spanTexto.innerText = palavrasArray[index]
        cartaGerada.appendChild(spanTexto);
    }
}

btnCriarCarta.addEventListener('click', gerandoCarta)