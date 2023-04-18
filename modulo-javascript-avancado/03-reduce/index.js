let ordens = [
    {cliente: 'Wagner', tipo: 'compra', quantidade: 56, ativo:'NFLX34'},
    {cliente: 'Natasha', tipo: 'compra', quantidade: 76, ativo:'AAPL34'},
    {cliente: 'Liandra', tipo: 'venda', quantidade: 21, ativo:'GOGL34'},
]

let quantidadeDeOrdens = ordens.reduce(function(somaDasOrdens, ordem){
    return somaDasOrdens + ordem.quantidade
}, 0)

// for(let i = 0; i < ordens.length; i++ ) {
//     quantidadeDeOrdens += ordens[i].quantidade
// }

console.log(quantidadeDeOrdens)