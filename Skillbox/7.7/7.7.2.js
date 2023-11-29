function createStudentCard(student) {
    let studentCard = document.createElement("div");

    let studentName = document.createElement("h2");
    studentName.textContent = student.name;

    let studentAge = document.createElement("span");
    studentAge.textContent = "Возраст: " + student.age + " лет";

    studentCard.appendChild(studentName);
    studentCard.appendChild(studentAge);

    document.body.appendChild(studentCard);
}