function alterarCorDeFundoDoPrimeiroPost() {
    //selcionado dos os elementos que tenham a classe post
    let posts = document.getElementsByClassName('post') 
    //selecionar o primeiro elemento dentro do elemento
    let primeiroPost = posts[0]

    primeiroPost.style.backgroundColor = 'red'
    // alterar a cor de funto do primeiro post
}

function aumetarFonteSegundoPost() {
    let textoPosts  = document.getElementsByClassName('texto-post');

    //insere a classe fonte-grade no elemento
    textoPosts[1].classList.add('fonte-grande') 
}

function marcarRadio(genero) {
    let radioMasculino = document.getElementById('genero-masculino');
    let radioFeminino = document.getElementById('genero-feminino');

    if (genero === 'M') {
        radioMasculino.checked = true; // altera o atributo checked
    } else if (genero === 'F') {
        radioFeminino.checked = true; // altera o atributo checked
    }
}