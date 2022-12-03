const Employee = require('./Employee.js')

class Engineer extends Employee{
    constructor(name, id, email, gitUser){
        super(id, name, email)
        this.gitUser = gitUser
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
        return 'Engineer'
    }

    getGit(){
        return this.gitUser
    }
}

module.exports = Engineer