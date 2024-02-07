const numbers = [11, 24, 45, 78, 35, 23, 98, 77, 75];

const evenNumbers = numbers.filter(Number =>Number % 2 === 0) .map(filteredNum => filteredNum * 2);

console,log(evenNumbers);