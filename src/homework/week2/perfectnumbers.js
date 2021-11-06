console.log("Perfect numbers: https://en.wikipedia.org/wiki/Perfect_number");

// 1000 e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
// Mükemmel sayı, sayılar teorisinde, kendisi hariç pozitif tam bölenlerinin toplamı kendisine eşit olan sayı. 
// Diğer bir ifadeyle, bir mükemmel sayı, bütün pozitif tam bölenlerinin toplamının yarısına eşittir.

let lastNumber = 1000;

function getDivisorsTotal(number) {
    // excluding 'number'
    let total = 0;

    for (let i = 1; i < number; i++) {
        total = number % i == 0 ? total + i : total;
    }

    return total;
}

function getPerfectNumbers(number) {
    let perfectNumbers = [];

    for (let i = 1; i < number; i++) {
        if (getDivisorsTotal(i) == i) {
            perfectNumbers.push(i)
        } 
    }

    return perfectNumbers;
}

console.log(...getPerfectNumbers(lastNumber));
