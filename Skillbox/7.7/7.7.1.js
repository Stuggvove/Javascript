function createStudentCard(name, age) {
    let studentCard = document.createElement("div");

    let studentName = document.createElement("h2");
    studentName.textContent = name;

    let studentAge = document.createElement("span");
    studentAge.textContent = "Возраст: " + age + " лет";

    studentCard.appendChild(studentName);
    studentCard.appendChild(studentAge);

    document.body.appendChild(studentCard);
}
