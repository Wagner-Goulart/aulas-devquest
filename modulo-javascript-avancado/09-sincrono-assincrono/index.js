function colocarAguarPraFerver(){
    console.log('Colocar água pra ferver')

    setTimeout(()=>{
        console.log('água ferveu')
        passarOCafe()
    },5000)
}

function prepararPraPassarOCafe(){
    console.log('pegar o pó')
    console.log('pegar o filtro de café')
    console.log('colocar café no filtro')
    console.log('colocar o filtro em cima da xícara')
}

function passarOCafe() {
    console.log('passando o café')
}

colocarAguarPraFerver()
prepararPraPassarOCafe()
