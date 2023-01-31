// CODE DEFINING THE EMPLOYEE CLASS
class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return "Employee"
    }

}
// EXPORTING THE EMPLOYEE CLASS
module.exports = Employee