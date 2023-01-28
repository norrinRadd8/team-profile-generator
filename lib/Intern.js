const Employee = require("./Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

class Intern extends Employee {
    constructor(school) {
        this.school = school
    }
    getSchool() {
        console.log(this.school)
    }
    getRole() {
        return Intern
    }
}

module.exports = Intern


// don't forget the super()