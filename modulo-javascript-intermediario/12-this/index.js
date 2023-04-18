'use strict' // evita que o contexto global, vaze para o contexto local

// this.name = 'Wagner' // this no contexto global

// function saudar() {
//     console.log('This no contexto da função', this) // this sendo chamado no contexto local, retornar undefined
//     console.log(`Olá ${this.name}`) // this.name não foi definido dentro do contexto local, vai dar erro
// }

// saudar() // chamada da função

// let usuario = {
//     nome:'Wagner',
//     saudar: function() {
//         console.log(`this no contexto do método ${this}`)
//         console.log(`this.nome no contexto do método ${this.nome}`) // acesssa a propriedade nome do objeto através do this
//     }
// }

// usuario.saudar() //chamada do método

let comida = {
    nome:'Brócolis',
    temperatura:0,
}

comida.cozinhar = function(temperaturaDeCozimento) {
    this.temperatura = temperaturaDeCozimento
}

comida.cozinhar(100)

console.log(comida)
