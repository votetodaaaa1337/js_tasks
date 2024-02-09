const questions = [
    "JavaScript появился в 1995 году?",
    "Спецификация JavaScript называется ECMAScript?",
    "JavaScript был создан за 1 месяц?"
];

const answers = [true, true, false];
const correctAnswers = ["Верно", "Верно", "Неверно"];

for (let i = 0; i < questions.length; i++) {
    const userAnswer = confirm(questions[i]);
    if (userAnswer === answers[i]) {
        alert("Верно");
    } else {
        alert(`Неверно. Правильный ответ: ${correctAnswers[i]}`);
    }
}