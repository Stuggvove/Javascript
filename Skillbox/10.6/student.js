export default class Student { 
    constructor(name, suremane, lastname, dateOfBirth, startOfStudy, faculty) {
        this.name = name;
        this.suremane = suremane;
        this.lastname = lastname;
        this.dateOfBirth = dateOfBirth;
        this.startOfStudy = startOfStudy;
        this.faculty = faculty;
    }

    //Свойство - Выводит фио
    get fio() {
        return this.suremane + " " + this.name + " " + this.lastname;    
    }

    //Выводит период убечение и курс
    getStudyPeriod() {
        let studyDate = this.startOfStudy.split('-');
        let course = (Number(studyDate[0]) + 4) - Number(studyDate[1])
        if (course < 0) {
            return this.startOfStudy + ' ' + '(Закончил)';
        }
        else {
            return this.startOfStudy + ' ' + '(' + String(course) + ' курс)';
        }
    }

    //Выводит дату рождения и возраст
    getOldString() {
        let yyyy = this.dateOfBirth.getFullYear();
        let mm = this.dateOfBirth.getMonth() + 1;
        let dd = this.dateOfBirth.getDate();
        let years = new Date().getFullYear() - this.dateOfBirth.getFullYear();
        if(dd < 10) dd = '0' + dd;
        if(mm < 10) mm = '0' + mm;
        return dd + '.' + mm + '.' + yyyy + ' ' + '(' + years + ' лет)';
    }

    getFaculty() {
        return this.faculty;
    }
}