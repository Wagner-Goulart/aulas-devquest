const {calculateAverage, sum} = require('./average')

let numbers = [2,4,6,8,10]

let average = calculateAverage(numbers)
let totalSum = sum(numbers)
console.log(`A soma dos numeros ${numbers} é ${totalSum} e a média é ${average}`)