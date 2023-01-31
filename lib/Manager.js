// CODE DEFINING THE MANAGER CLASS INHERTING FROM EMPLOYEE

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return "Manager"
        
    }
}
// EXPORTING THE MANAGER CLASS
module.exports = Manager


