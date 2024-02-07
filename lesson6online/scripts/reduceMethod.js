const userSalaries = [1500, 5000, 5700, 7000, 3400, 2000, 1000, 500, 50];

const sum = userSalaries.reduce(function
    (accumlator, currentNumber) {
    console.log(accumlator, currentNumber);
    return accumlator + currentNumber
}, 0) // 0 ამ შემთხვევაში საწყისი მნიშვნელობაა "accumulator"-თვის.

console.log(sum);