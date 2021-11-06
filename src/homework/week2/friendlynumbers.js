console.log("Friendly numbers: https://en.wikipedia.org/wiki/Friendly_number");

function getAbundancy(number) {
  let total = 0;

  for (let i = 1; i < number; i++) {
      if (number % i === 0) {
        total += i;
      }   
  }

  return total;
}

function checkFriendlyNumbers(firstNumber, secondNumber) {
  return getAbundancy(firstNumber) == secondNumber && getAbundancy(secondNumber) == firstNumber;
}

let firstNumber = 220;
let secondNumber = 284;
let friendlyNumber = checkFriendlyNumbers(firstNumber, secondNumber) ? '' : 'not ';
let output = firstNumber + ' and '+ secondNumber + ' are ' + friendlyNumber + 'friendly numbers.';

console.log(output);