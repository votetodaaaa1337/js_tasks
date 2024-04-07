function giveJobToStudent(student, jobName) {
    student.job = jobName;
    alert(`Студент ${student.name} получил новую работу: ${jobName}`);
}

const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript'
};

giveJobToStudent(student, 'Web Developer');