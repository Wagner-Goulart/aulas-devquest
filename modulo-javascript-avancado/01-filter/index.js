let pessoas = [
    {nome: 'Wagner', idade:33},
    {nome: 'Natasha', idade:37},
    {nome:'Liandra', idade:14}
]

// let pessasComIdadeDe33AnosOuMais = []

// for(let i = 0; i < pessoas.length; i++) {
//     if(pessoas[i].idade >= 33) {
//         pessasComIdadeDe33AnosOuMais.push(pessoas[i])
//     }
// }

// console.log(pessasComIdadeDe33AnosOuMais)


let pessoasComIdadeDe33AnosOuMais = pessoas.filter((pessoa)=>pessoa.idade >= 33)
    

console.log(pessoasComIdadeDe33AnosOuMais) // Wagner, Natasha