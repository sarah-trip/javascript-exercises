const add = function(num1, num2) {
	return num1 + num2; 
};

const subtract = function(num1, num2) {
	return num1 - num2; 
};

const sum = function(numbersArray) {
	return numbersArray.reduce((sum, currentNumber) => sum + currentNumber, 0); 
};

const multiply = function(numbersArray) {
  return numbersArray.reduce((total, currentNumber) => total * currentNumber, 1); 
};

const power = function(num1, num2) {
	return num1 ** num2; 
};

const factorial = function(num) {
  let total = 1; 
  for (let i = num; i >= 2; i--){
    total *= i; 
  }
  return total; 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
