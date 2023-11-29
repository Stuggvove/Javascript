function getAge(birthYear) {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let age = currentYear - birthYear;
    return age;
}
console.log(getAge(1990));
console.log(getAge(1995));
console.log(getAge(2005));
