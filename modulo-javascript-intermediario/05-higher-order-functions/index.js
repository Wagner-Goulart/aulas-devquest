const calcularAnoDeNascimento = function (idade, mesdeNascimento, imprimir) {
    const mesAtual = 2
    let anoDeNascimento = 2023 - idade
    if(mesdeNascimento > mesAtual) anoDeNascimento--
    imprimir(anoDeNascimento)
}

let imprimirAnoDeNascimento = anoDeNascimento => {
    console.log(`Seu ano de nascimento é ${anoDeNascimento}`)
}

calcularAnoDeNascimento(33, 7, imprimirAnoDeNascimento)

