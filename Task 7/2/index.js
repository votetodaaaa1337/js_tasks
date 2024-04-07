function getSumOfSequence(number) {
    let sequence = [];
    for (let i = 1; i <= number; i++) {
        sequence.push(i);
    }
    
    if (sequence.length === 0) {
        return 0;
    }
    
    return sequence[0] + sequence[sequence.length - 1];
}

// Пример использования:
const sum = getSumOfSequence(5); // [1, 2, 3, 4, 5], 1 + 5 = 6
console.log(sum);