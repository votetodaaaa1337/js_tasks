function addDays(date, days = 1) {
    const timestamp = date.getTime(); // Получаем текущее время в миллисекундах
    const millisecondsInDay = 24 * 60 * 60 * 1000; // Количество миллисекунд в одном дне
    const newTimestamp = timestamp + days * millisecondsInDay; // Добавляем нужное количество дней в виде миллисекунд
    
    const newDate = new Date(newTimestamp); // Создаем новую дату на основе нового timestamp
    return newDate;
}

// Пример использования функции
const currentDate = new Date(); // Текущая дата
const newDate = addDays(currentDate, 5); // Добавляем 5 дней
console.log(newDate); // Выводим в консоль новую дату
