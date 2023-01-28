const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

class Engineer extends Employee {
    constructor(github) {
        this.github = github
    }
    getGitHub() {
        console.log(this.github)
    }
    getRole() {
        return Engineer
    }
}

module.exports = Engineer

// don't forget the super()