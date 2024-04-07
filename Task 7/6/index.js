const numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += Math.pow(numbers[i], 3);
}

console.log(sum); // Ожидаемый результат: 1158411


const numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;

for (const number of numbers) {
    sum += Math.pow(number, 3);
}


console.log(sum); // Ожидаемый результат: 1158411

const numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;

numbers.forEach(number => {
    sum += Math.pow(number, 3);
});

console.log(sum); // Ожидаемый результат: 1158411


const numbers = [10, 4, 100, -5, 54, 2];
const sum = numbers.reduce((acc, number) => {
    return acc + Math.pow(number, 3);
}, 0);

console.log(sum); // Ожидаемый результат: 1158411

