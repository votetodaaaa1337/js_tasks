// Переменные с вопросами и правильными ответами
const question1 = "Сколько будет 2 + 2?";
const answer1 = 4;

const question2 = "Сколько будет 2 * 2?";
const answer2 = 4;

const question3 = "У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?";
const answer3 = 1;

const question4 = "У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?";
const answer4 = 12;

const question5 = "Сколько будет 2 + 2 * 2?";
const answer5 = 6;

// Переменные для подсчета правильных и неправильных ответов
let correctAnswers = 0;
let incorrectAnswers = 0;

// Функция для проведения теста
function takeMathTest(question, correctAnswer) {
    const userAnswer = Number(prompt(question));
    if (userAnswer === correctAnswer) {
        alert("Ответ Верный");
        correctAnswers++;
    } else {
        alert("Ответ Неверный");
        incorrectAnswers++;
    }
}

// Процесс прохождения теста
takeMathTest(question1, answer1);
takeMathTest(question2, answer2);
takeMathTest(question3, answer3);
takeMathTest(question4, answer4);
takeMathTest(question5, answer5);

// Подведение итогов
alert("Правильные ответы - " + correctAnswers + "; Неправильные ответы - " + incorrectAnswers + ".");