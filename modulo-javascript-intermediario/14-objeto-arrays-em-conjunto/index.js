// let jogo1 = { //objeto
//     nome: 'Final Fantasy'
// }

// let jogo2 = { //objeto
//     nome: 'Fallout'
// }


// let videoGame = {
//     nome: 'Xbox',
//     valor: 3000,
//     jogos: [
//         {
//             nome: 'Final Fantasy' // objeto
//         },
//         {
//             nome: 'Fallout' // objeto
//         }
//     ] }

// let jogo3 = { // objeto criado após a criação do objeto videoGame
//     nome: 'Fifa'
// }

// videoGame.jogos.push(jogo3) // adiociona o objeto dentro do array de jogos

// console.log(videoGame)

let cliente = {
    nome:'Wagner',
    ultimoPedido: {
        produto:'Xbox',
        valor:3000,
        jogos: [
            {nome:'fifa'}
        ]
    }
}

console.log(cliente.ultimoPedido.jogos[0].nome) // acesando o valor do jogo (Fifa) 