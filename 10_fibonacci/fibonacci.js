const fibonacci = function(number) {
    if (typeof number !== 'number') {
        number = parseInt(number); 
    }
    if (number < 0) return 'OOPS'; 
    let fibonacciSequence = [0, 1]; 
    for (let i = 2; i <= number; i++) {
        fibonacciSequence[i] = fibonacciSequence[i-2] + fibonacciSequence[i-1]; 
    }
    return fibonacciSequence[number]; 
};

// Do not edit below this line
module.exports = fibonacci;
