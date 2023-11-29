let userName = "AndreI";
let userSurname = "DobriNin";

let firstLetterName = userName.substring(0,1).toUpperCase();
let firstLetterSurname = userSurname.substring(0,1).toUpperCase();
let lastLettersName = userName.substring(1).toLowerCase();
let lastLettersSurname = userSurname.substring(1).toLowerCase();

let userName2 = firstLetterName + lastLettersName;
let userSurname2 = firstLetterSurname + lastLettersSurname;

if (userName === userName2)
{
    console.log("Имя осталось без изменений");
}
else
{
    console.log("Имя было изменено");
}

if (userSurname === userSurname2)
{
    console.log("Фамилия осталась без изменений");
}
else
{
    console.log("Фамилия была изменена");
}