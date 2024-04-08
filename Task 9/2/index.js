function getDaysBeforeBirthday(nextBirthdayDate) {
    const now = new Date();
    const currentYear = now.getFullYear();
    const nextBirthday = new Date(currentYear, nextBirthdayDate.getMonth(), nextBirthdayDate.getDate());
    
    if (nextBirthday < now) {
        nextBirthday.setFullYear(currentYear + 1);
    }
    
    const timeDiff = nextBirthday.getTime() - now.getTime();
    const daysUntilBirthday = Math.round(timeDiff / (1000 * 60 * 60 * 24));
    
    return daysUntilBirthday;
}

function convertMsToDays(milliseconds) {
    return Math.round(milliseconds / (1000 * 60 * 60 * 24));
}