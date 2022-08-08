let inputText = document.getElementById('carta-texto');
let btnCriarCarta = document.getElementById('criar-carta');
let cartaGerada = document.getElementById('carta-gerada');
let arrayEstilo = ['newspaper', 'magazine1' , 'magazine2'];
let arrayTamanho = ['medium', 'big', 'reallybig'];
let arrayRotacao = ['rotateleft', 'rotateright'];
let arrayInclinacao = ['skewleft', 'skewright'];
let contador = document.getElementById('carta-contador');

//1 - Crie um input com o ID carta-texto onde a pessoa usuária poderá digitar o conteúdo da carta.

//2 - Crie um parágrafo com a tag p e ID carta-gerada onde a pessoa usuária verá o resultado de sua carta misteriosa.

//3 - Crie um botão com ID criar-carta que deve gerar a carta misteriosa ao ser clicado.

function gerandoCarta () {
    let palavrasArray = [];
    cartaGerada.innerHTML = '';
    let  textoValue= inputText.value;
    //O código segunte foi refatorado com base no conteúdo deste lnk: https://stackoverflow.com/questions/10261986/how-to-detect-string-which-contains-only-spaces  
    //Ele identifica se o value do input está vazio ou se contém somente "espaços" e realizar uma ação confome determinado.
    if (!textoValue.replace(/\s/g, '').length) {
        cartaGerada.innerHTML ='Por favor, digite o conteúdo da carta.';
      }
    //Fim do código refatorado
    palavrasArray = textoValue.split(" ");
    contador.innerHTML = palavrasArray.length;
    // console.log(palavrasArray);
    for (index = 0; index < palavrasArray.length; index ++) {        
        let spanTexto = document.createElement('span')
        spanTexto.innerText = palavrasArray[index]
        spanTexto.classList.add(arrayEstilo[Math.floor(Math.random() * arrayEstilo.length)]);
        spanTexto.classList.add(arrayTamanho[Math.floor(Math.random() * arrayTamanho.length)]);
        spanTexto.classList.add(arrayRotacao[Math.floor(Math.random() * arrayRotacao.length)]);
        spanTexto.classList.add(arrayInclinacao[Math.floor(Math.random() * arrayInclinacao.length)]);
        cartaGerada.appendChild(spanTexto);
    }
}

btnCriarCarta.addEventListener('click', gerandoCarta)

//Requisito 17 - Adicione a possibilidade de alterar o estilo de uma palavra específica ao clicar nela.

function personalizarPalavra () {

    cartaGerada.addEventListener('click', function (event) {
        let elementoSelecionado = event.target;
        elementoSelecionado.className = '';
        elementoSelecionado.classList.add(arrayEstilo[Math.floor(Math.random() * arrayEstilo.length)]);
        elementoSelecionado.classList.add(arrayTamanho[Math.floor(Math.random() * arrayTamanho.length)]);
        elementoSelecionado.classList.add(arrayRotacao[Math.floor(Math.random() * arrayRotacao.length)]);
        elementoSelecionado.classList.add(arrayInclinacao[Math.floor(Math.random() * arrayInclinacao.length)]);
    })
}
personalizarPalavra ();

//Requisito 18 - Crie um parágrafo com o ID carta-contador que deve contar o número de palavras geradas naquela carta.

function contadorPalavras () {

}