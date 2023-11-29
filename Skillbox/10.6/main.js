import Student from "./student.js"

//Студенты
const students = [
    new Student (
        'Андрей',
        'Добрынин',
        'Дмитриевич',
        new Date(2003, 9, 11), // Месяц начинаеться с 0 - январь
        "2022-2024",
        'Программная инженерия',
    ),
    new Student (
        'Иван',
        'Дроздов',
        'Владимирович',
        new Date(2002, 2, 14), // Месяц начинаеться с 0 - январь
        "2022-2022",
        'Информационная безопасность',
    ),
    new Student (
        'Роман',
        'Мустафин',
        'Олегович',
        new Date(2004, 8, 18), // Месяц начинаеться с 0 - январь
        "2022-2024",
        'Экономическая безопасность',
    ),
];

const $studentsList = document.getElementById('students-list');
const $studentsListTHALL = document.querySelectorAll('.studentsTable th');
let column = 'fio';
let columnDir = 'true';

//Создание студента в талбицу 
function newStudentTR(student) {
    const $studentTR = document.createElement('tr');
    const $fio = document.createElement('td');
    const $faculty = document.createElement('td');
    const $dateOfBirth = document.createElement('td');
    const $startOfStudy = document.createElement('td');

    $fio.textContent = student.fio;
    $faculty.textContent = student.getFaculty();
    $dateOfBirth.textContent = student.getOldString();
    $startOfStudy.textContent = student.getStudyPeriod();

    $studentTR.append($fio);
    $studentTR.append($faculty);
    $studentTR.append($dateOfBirth);
    $studentTR.append($startOfStudy);

    return $studentTR;
}

//Сортировка массива prop - свойства / dir - направление
function getSortStudent(prop, dir) {
    const studentCopy = [...students] // Копируем массив
    return studentCopy.sort(function(studentA, studentB) {
        if((!dir == false ? studentA[prop] < studentB[prop] : studentA[prop] > studentB[prop])) {
            return -1;
        } 
    });
}

//Отрисовка студентов
function render() {
    let studentsCopy = [...students];

    studentsCopy = getSortStudent(column, columnDir);

    $studentsList.innerHTML = '';

    for(const student of studentsCopy) {
        $studentsList.append(newStudentTR(student));
    }
}

$studentsListTHALL.forEach(element => {
    element.addEventListener('click', function() {
        column = this.dataset.column;
        columnDir = !columnDir;
        render();
    })
})

document.getElementById('add-student').addEventListener('submit', function(event) {
    event.preventDefault();
    students.push(new Student(
        document.getElementById('input-name').value,
        document.getElementById('input-surename').value,
        document.getElementById('input-lastname').value,
        new Date(document.getElementById('input-dateOfBirth').value),
        document.getElementById('input-startOfStudy').value,
        document.getElementById('input-faculty').value,
    ))

    render();
}) 

render();