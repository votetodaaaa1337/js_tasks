

console.log(String(console.log)); // "function log() { [native code] }"
console.log(Number(console.log)); // NaN (не число, так как функция не может быть преобразована в число)
console.log(Boolean(console.log)); // true (функция существует, поэтому преобразованное значение - true)


console.log(String({name: 'Maxim'})); // "[object Object]"
console.log(Number({name: 'Maxim'})); // NaN (не число, объект не может быть преобразован в число)
console.log(Boolean({name: 'Maxim'})); // true (объект существует, поэтому преобразованное значение - true)


console.log(String(Symbol('key'))); // "Symbol(key)"
console.log(Number(Symbol('key'))); // Будет ошибка, так как символ нельзя преобразовать в число
console.log(Boolean(Symbol('key'))); // true (символ существует, поэтому преобразованное значение - true)


console.log(String(Number)); // "function Number() { [native code] }"
console.log(Number(Number)); // NaN (не число, функция не может быть преобразована в число)
console.log(Boolean(Number)); // true (функция существует, поэтому преобразованное значение - true)


console.log(String('')); // ""
console.log(Number('')); // 0
console.log(Boolean('')); // false


console.log(String(0)); // "0"
console.log(Number(0)); // 0
console.log(Boolean(0)); // false


console.log(String(-10)); // "-10"
console.log(Number(-10)); // -10
console.log(Boolean(-10)); // true


console.log(String('-105')); // "-105"
console.log(Number('-105')); // -105
console.log(Boolean('-105')); // true