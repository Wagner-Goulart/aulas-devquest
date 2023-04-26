const calcularValorPedido = require('./calcular-valor-pedido')

it('não deve cobrar valor de frete se valor dos produtos maior que 500',()=>{
    // AAA -> tres passos para criação de um test

    // ARRANGE -> Arrumar - O OBJETO DE TESTE
    const meuPedido = {
        itens: [
            {nome: 'Arco Long', valor: 1000},
            {nome: 'Entrega', valor: 40, entrega: true}
        ]
    }
    //ACT -> AÇÃO - O QUE VAI SER TESTADO
    const resultado = calcularValorPedido(meuPedido)
    //ASSERT -> RESULTADO ESPERADO
    expect(resultado).toBe(1000)
})

it('Cobra valor de frete se o valor dos produtos é menor que 500', ()=> {
    const meuPedido = {
        itens: [
            {nome: 'Cerveja', valor: 50},
            {nome: 'Entrega', valor: 40, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(meuPedido)

    expect(resultado).toBe(90)
})

it('cobra valor de frete se o valor for EXTAMENTE 500',()=>{
    const meuPedido = {
        itens: [
            {nome: 'Cerveja', valor: 500},
            {nome: 'Entrega', valor: 40, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(meuPedido)

    expect(resultado).toBe(540)
})