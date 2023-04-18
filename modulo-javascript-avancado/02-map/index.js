let pessoas = [
    {nome: 'Wagner', idade:33},
    {nome: 'Natasha', idade:37},
    {nome:'Liandra', idade:15}
]

//criar um nova array apenas com o nome das pessoas
let nomePessoa = pessoas.map(pessoa =>`${pessoa.nome} tem ${pessoa.idade} anos de idade`)

   
// for(let i = 0; i < pessoas.length; i++) {
//     nomePessoa.push(pessoas[i].nome)
// }

console.log(nomePessoa)