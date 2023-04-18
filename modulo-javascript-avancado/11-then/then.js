let ferverAgua = (chaleiraNoFogao, fogaoLigado) => {
    return new Promise((resolve, reject)=>{
        if(chaleiraNoFogao && fogaoLigado) {
            console.log('Passo 1 finalizado: Aguar oi fervida')
            resolve()
        } else {
            console.log('colocar a chaleira no fogão e ligar o fogo')
            reject()
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

let chaleiraNoFogao = true
let fogaoLigado = true

ferverAgua(chaleiraNoFogao, fogaoLigado)
    .then(()=>{
        return passarCafe();
    })
    .then(()=>{
        return tomarCafe()
    })
    .then(()=>{
        return lavarXicara()
    })
    .then(()=>{
        console.log('Finalizado o ritual do café, Bora trabalhar')
    })