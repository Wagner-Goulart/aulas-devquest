const bntTrocarDeCor = document.querySelector('.botao-troca-de-cor')
const quadrado1 = document.querySelector('.quadrado1')

bntTrocarDeCor.addEventListener('click', ()=> {
   trocaCor()
})

function trocaCor() {
    quadrado1.classList.toggle('altera-cor')
}