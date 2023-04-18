/*
    pendente (estado inicial) -> quando a promise foi criada mas não executada;
    realizada / resolve -> quando teve sucesso na execução
    recusada / reject -> quando teve algum falha na execução
    estabelecida -> quand ele foi realizado ou recusada
 */


let ferverAgua = (chaleiraNoFogao, fogaoLigado) =>{
    return new Promise ((resolve, reject)=>{
        if(chaleiraNoFogao && fogaoLigado){
            console.log('Começando a ferver a água')
            resolve()
        }else {
            console.log('Favor ligar o fogao e/ou colocar na chaleira no fogão')
            reject()
        }
    })
    
}

let chaleiraNoFogao = true;
let fogaoLigado = true

ferverAgua(chaleiraNoFogao, fogaoLigado)