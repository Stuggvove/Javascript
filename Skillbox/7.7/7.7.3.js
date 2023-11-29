function createStudentsList(listArr) {
    let studentsList = document.createElement("ul");

    for (let i = 0; i < listArr.length; i++) {
    let studentLi = document.createElement("li");
    let studentName = document.createElement("h2");
    let studentAge = document.createElement("span");

    studentName.textContent = listArr[i].name;
    studentAge.textContent = "Возраст: " + listArr[i].age + " лет";

    studentLi.appendChild(studentName);
    studentLi.appendChild(studentAge);

    studentsList.appendChild(studentLi);
    }

    document.body.appendChild(studentsList);
}
