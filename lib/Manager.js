// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        if(!officeNumber){
            throw new Error('Office number is required.');
        }
        if(typeof officeNumber !== 'number'){
            throw new Error('Enter valid office number.')
        }
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;
