let userName = prompt('Как вас зовут?');

// шоб пробелов не было
userName = userName.trim().toLowerCase();

let userAge = prompt('Сколько вам лет?');
userAge = Number(userAge.trim()); // Преобразование введенного возраста в тип данных number

alert(`Вас зовут ${userName} и вам ${userAge} лет`);