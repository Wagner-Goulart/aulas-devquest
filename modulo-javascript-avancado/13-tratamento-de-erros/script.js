let ferverAgua = (chaleiraNoFogao, fogaoLigado) => {
    return new Promise((resolve, reject)=>{
        if(typeof chaleiraNoFogao !='boolean') {
            throw 'Somente o tipo booleano é aceito'
        }
        if(chaleiraNoFogao && fogaoLigado) {
            console.log('Passo 1 finalizado: Agua foi fervida')
            resolve()
        } else {
            const mesagemDeErro ='colocar a chaleira no fogão e ligar o fogo'
            reject(mesagemDeErro)
        }
    })
}

let passarCafe = (aguarfervida) => {
    return new Promise((resolve)=>{
        console.log('Passo 2 finalizado: Café foi passado')
        resolve(true)
    })
}

let tomarCafe = (cafePassado)=>{
    return new Promise((resolve)=>{
        console.log('Passo 3 finalizado: Terminei de tomar café')
        resolve(true)
    })
}

let lavarXicara = (cafeTomado)=>{
    return new Promise((resolve)=>{
        console.log('Passo 4 finalizado: Terminei de lavar a xícara')
        resolve(true)
    })
}

let chaleiraNoFogao = 1
let fogaoLigado = false

// ferverAgua(chaleiraNoFogao, fogaoLigado)
//     .then(()=>{
//         return passarCafe();
//     })
//     .then(()=>{
//         return tomarCafe()
//     })
//     .then(()=>{
//         return lavarXicara()
//     })
//     .then(()=>{
//         console.log('Finalizado o ritual do café, Bora trabalhar')
//     })

 async function iniciarRitualDoCafe() {
    try { // TRY antes do bloco de execução
        const aguarFervida = await ferverAgua(chaleiraNoFogao, fogaoLigado)
        const cafePassado = await passarCafe(aguarFervida)
        const cafeTomado = await tomarCafe(cafePassado)
        const xicaraLavada = await lavarXicara(cafeTomado)

        throw "Mensagem de erro"

    } catch(err) { // CATCH com parametro err
        console.log(err) // print no console.lo a mensagem de erro
    } finally {
        console.log('Finalizado o ritual do café, Bora trabalhar')
    }
 }

 iniciarRitualDoCafe()