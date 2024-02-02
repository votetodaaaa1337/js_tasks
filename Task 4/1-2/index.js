const myName = 'Иван';
const programmingLanguage = 'Java Script';
const courseCreatorName = 'Никиты Михайловича';
const reasonText = 'я люблю делать задания по джсу<3';
const numberOfMonths = 6;

let myInfoText = `Всем привет! Меня зовут, ${myName}. 
Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. 
Я хочу стать веб-разработчиком, потому что ${reasonText}. 
До этого я изучал ${programmingLanguage} ${numberOfMonths} месяцев. Я уверен, что пройду данный курс до конца!`;

myInfoText = myInfoText.replaceAll('JavaScript', 'JAVASCRIPT').toUpperCase();

console.log(myInfoText); //вывод
console.log(myInfoText.length);//длина
console.log(myInfoText[0], myInfoText[myInfoText.length - 1]);//первый и послед символ