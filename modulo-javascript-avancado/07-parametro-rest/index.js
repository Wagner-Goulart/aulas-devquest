/*
    function (a,b, ...args) {
        bloco de declarção
    }
 */

function incentivarQuester(mensagem, ...nomesQuesters){
    nomesQuesters.map(function(nomeQuester){
        console.log(`${mensagem} ${nomeQuester} `)
    })
   
}

incentivarQuester('Parabens por chegar ao JS avançado', 'Wagner', 'Natasha', 'Liandra')