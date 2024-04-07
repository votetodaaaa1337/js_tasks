const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

function giveParcel() {
    if (peopleWaiting.length > 0) {
        const name = peopleWaiting.shift();
        alert(`${name} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`);
    }
}

function leaveQueueWithoutParcel() {
    if (peopleWaiting.length > 0) {
        const name = peopleWaiting.pop();
        alert(`${name} не получил(а) посылку и ушел(ла) из очереди.`);
    }
}

// Шаг 1
giveParcel();
giveParcel();

// Шаг 2
const indexToLeave = peopleWaiting.indexOf('Кирилл');
if (indexToLeave !== -1) {
    peopleWaiting.splice(indexToLeave, 1);
    for (let i = peopleWaiting.length - 1; i >= indexToLeave; i--) {
        leaveQueueWithoutParcel();
    }
}