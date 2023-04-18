const imagens = document.querySelectorAll('.slide')
const leftBtn = document.querySelector('.seta-esquerda')
const rightBtn = document.querySelector('.seta-direita')


let imagemAtual = 0


leftBtn.addEventListener('click', () => {
    if(imagemAtual === 0) {
        return;
    }
    imagemAtual--
    esconderImagemAberta()
    mostarImage()
    mostrarOuEsconderSetas()
})

rightBtn.addEventListener('click', () => {
    if(imagemAtual === imagens.length-1) {
        return;
    }

    imagemAtual++
    esconderImagemAberta()
    mostarImage()
    mostrarOuEsconderSetas()
})

function esconderImagemAberta() {
    const imagemAberta = document.querySelector('.mostrar')
    imagemAberta.classList.remove('mostrar')
}

function mostarImage () {
    imagens[imagemAtual].classList.add('mostrar')
}

function mostrarOuEsconderSetas() {
    const naoEhAPrimeiraImagem = imagemAtual != 0

    if(naoEhAPrimeiraImagem) {
        leftBtn.classList.remove('opacidade')
    } else {
        leftBtn.classList.add('opacidade')
    }

    const ultimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length-1

    if(ultimaImagem) {
        rightBtn.classList.add('opacidade')
    } else {
        rightBtn.classList.remove('opacidade')
    }
}

