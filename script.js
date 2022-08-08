let inputText = document.getElementById('carta-texto');
let btnCriarCarta = document.getElementById('criar-carta');
let cartaGerada = document.getElementById('carta-gerada');

//1 - Crie um input com o ID carta-texto onde a pessoa usuária poderá digitar o conteúdo da carta.

//2 - Crie um parágrafo com a tag p e ID carta-gerada onde a pessoa usuária verá o resultado de sua carta misteriosa.

//3 - Crie um botão com ID criar-carta que deve gerar a carta misteriosa ao ser clicado.
let palavrasArray = [];
function gerandoCarta () {
    cartaGerada.innerHTML = '';
    let  textoValue= inputText.value;
    palavrasArray = textoValue.split(" ");
    console.log(palavrasArray);
    for (index = 0; index < palavrasArray.length; index ++) {        
        let spanTexto = document.createElement('span')
        spanTexto.innerText = palavrasArray[index]
        cartaGerada.appendChild(spanTexto);
    }
}

btnCriarCarta.addEventListener('click', gerandoCarta)