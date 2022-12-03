const Employee = require('./Employee.js')

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(id, name, email)
        this.officeNumber = officeNumber
    }
    getName(){
        return this.name
    };

    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }

    getRole(){
        return 'Manager'
    }
}

module.exports = Manager