function calculateAverage(numbers){
    let total = 0

    for (let i = 0; i < numbers.length; i++){
        total += numbers[i]
    }

    return total / numbers.length
}

function sum(numbers){
    let total = 0

    for (let i = 0; i < numbers.length; i++){
        total += numbers[i]
    }

    return total 
}

module.exports = {calculateAverage, sum}