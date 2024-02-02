let userText = prompt('Введите текст');
userText = userText.trim(); // Удаление лишних пробелов

let wordFromText = prompt('Введите слово из текста');
wordFromText = wordFromText.trim(); // Удаление лишних пробелов

let indexOfWord = userText.indexOf(wordFromText); // Нахождение индекса слова в строке

let resultString = userText.slice(0, indexOfWord + wordFromText.length); // Обрезка строки до указанного слова

alert(`Результат: ${resultString}`);