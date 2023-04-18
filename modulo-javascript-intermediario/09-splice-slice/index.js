let frutas = ['banana', 'maçã', 'laranja', 'uva']



let removeEAdicionaFrutas = frutas.splice(1, 2, 'goiaba', 'abacaxi', 'pera')
// posição de inici0, qtdade a serem deletados, itens a serem colocados no lugar


console.log(frutas) // 'banana', 'goiaba', 'abacaxi', 'pera', 'uva']

// let frutasExtraidas = frutas.slice(1,3) // começa a fatiar na posição 1(maçã) do array e termina na posição 3 (uva), mas não inclui a posição 3
// console.log(frutasExtraidas) // 'maçã', 'laranja'
// console.log(frutas) // 'banana', 'maçã', 'laranja', 'uva'

// let frutasExtraidas = frutas.splice(1,2) // posição de inicio 1 (laranja) + quantidade de itens que serão retirados

// console.log(frutasExtraidas) //maçã', 'laranja'
// console.log(frutas) // 'banana', 'uva'