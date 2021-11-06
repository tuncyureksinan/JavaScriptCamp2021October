const amountOfNumbers = 20;
const maxNumber = 25;
const minNumber = 1;
let generatedNumbers = getNumbers(); 

function getNumbers() {
  let result = [];
  let i = 0;
  
  while (i < amountOfNumbers) {
    let randonNumber = generateRandomNumber(minNumber, maxNumber);
    
    if (result.indexOf(randonNumber) === -1) {
      result.push(randonNumber);
      i++;
    }
  }
  
  return result;
};

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function primeNumber(...numbers) {
    let primeNumbers = [];
    
    for (let i = 0; i < numbers.length; i++) {
      let isPrime = true;
        for (let j = 2; j < numbers[i]; j++) {
          if (numbers[i] % j == 0) {
            isPrime = false;
            continue;
          }
        }
        
        if (isPrime == true) {
            primeNumbers.push(numbers[i]);
        }
    }
    
    return primeNumbers;
}

    console.log("I have generated " + amountOfNumbers + " numbers between " + minNumber + " and " + maxNumber + " for you.");
    console.log("");
    console.log("Given numbers: " + generatedNumbers)
    console.log("");
    console.log("Prime numbers: " + primeNumber(...generatedNumbers))