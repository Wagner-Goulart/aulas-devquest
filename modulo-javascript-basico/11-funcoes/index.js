/*
    function nomeDaFuncao() { // função sem parametro
        <bloco de execução>
    }

    nomeDaFunção() // invoca a função para que seja excutada
 */

    /*
    function nomeDaFuncao(parametro1, parametro2, ..) { // função com parametro
        <bloco de execução>
    }

    nomeDaFunção(parametro1, parametro2) // invoca a função para que seja excutada
 */

function incentivarQuester(nomeQuester = 'Quester') // paramtro com valor Default 
{
    alert('Muito bem ' +nomeQuester+ ', você chegou ao JS, continue assim')
}

incentivarQuester()

// function soma(numero1 = 0, numero2 = 0) {
//     return numero1 + numero2
// }

// let resultadoDaSoma = soma()
// console.log(resultadoDaSoma) // 9
