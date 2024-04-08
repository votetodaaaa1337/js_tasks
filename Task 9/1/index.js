function getDateFormat(date, separator = '.') {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();
    
    // Добавляем нули к дню и месяцу, если они состоят из одной цифры
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    
    return `${day}${separator}${month}${separator}${year}`;
}

const today = new Date(); // Получаем текущую дату
const formattedDate = getDateFormat(today, '-');
console.log(formattedDate); // Выводит дату в формате "день-месяц-год"