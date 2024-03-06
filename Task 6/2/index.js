function getSumOfNumbers(number, type = "odd") {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        if ((type === "odd" && i % 2 !== 0) || (type === "even" && i % 2 === 0) || type === "") {
            sum += i;
        }
    }
    return sum;
}

console.log(getSumOfNumbers(10, 'odd')); // Возвращает 25
console.log(getSumOfNumbers(10, 'even')); // Возвращает 30
console.log(getSumOfNumbers(10, '')); // Возвращает 55