console.log("Prime numbers: https://en.wikipedia.org/wiki/Prime_number");

// 1000 e kadarki tüm asal sayıları listeleyen programı yazınız.

let lastNumber = 1000;
let numbers = getNumbers(lastNumber); 

function getNumbers() {
  let result = [];
  let i = 1;
  
  while (i < lastNumber) {
    result.push(i);
    i++;
  }
  
  return result;
};

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

console.log("All prime numbers till " + lastNumber + " are " + primeNumber(...numbers));