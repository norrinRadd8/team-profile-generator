// CODE DEFINING THE ENGINEER CLASS INHERTING FROM EMPLOYEE

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return "Engineer"
    }
}
// EXPORTING THE ENGINEER CLASS
module.exports = Engineer

