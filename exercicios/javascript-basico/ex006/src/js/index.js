const abrirFaqBtn = document.querySelectorAll('h3')
const respostaFaq = document.querySelectorAll('.faq-fechado')

abrirFaqBtn.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        const faqAberto = document.querySelector('.mostrar')

        if(faqAberto){
            faqAberto.classList.remove('mostrar')
        }
        
        respostaFaq[indice].classList.toggle('mostrar')


    })
})
