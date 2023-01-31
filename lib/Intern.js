// CODE DEFINING THE INTERN CLASS INHERTING FROM EMPLOYEE

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern"
    }
}
// EXPORTING THE INTERN CLASS
module.exports = Intern


