const botaotrocarConselho = document.querySelector('.troca-conselho')
const numeroConselho =document.querySelector('.id-conselho')
let mensagem = document.querySelector('.conselho')

botaotrocarConselho.addEventListener('click', ()=>{
    chamarConselho()
})

async function chamarConselho () {
    const url = 'https://api.adviceslip.com/advice'
    const reposta = await fetch(url)
    const json = await reposta.json()

    let idConselho = json.slip.id
    let conselho = json.slip.advice

    numeroConselho.innerHTML = idConselho
    mensagem.innerHTML = conselho
    

}

chamarConselho()
