let userString = prompt('Введите текст для обрезки');
userString = userString.trim(); // Удаление лишних пробелов

let startSliceIndex = parseInt(prompt('Введите индекс, с которого нужно начать обрезку строки'), 10); // Преобразование введенного значения в тип данных number
let endSliceIndex = parseInt(prompt('Введите индекс, которым нужно закончить обрезку строки'), 10); // Преобразование введенного значения в тип данных number

let resultString = userString.slice(startSliceIndex, endSliceIndex); // Обрезка строки по заданным индексам

alert(`Результат: ${resultString}`);