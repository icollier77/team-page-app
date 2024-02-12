// Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
      if(!name){
        throw new Error('Name was not included.')
      }
      if(typeof name  !== 'string'){
        throw new Error('Name should be text.')
      };
      if(!id){
        throw new Error('ID was not included');
      }
      if(typeof id  !== 'number'){
        throw new Error("Please enter a valid number for ID.")
      }
      if(!email){
        throw new Error('Email was not included.')
      }
      if(typeof email !== "string"){
        throw new Error('Please enter a valid email.')
      }
      this.name = name;
      this.id = id;
      this.email = email;
    }

    getName() {
      return this.name;
    }

    getId() {
      return this.id;
    }

    getEmail() {
      return this.email;
    }

    getRole() {
      return "Employee";
    }

  }
  
  // Export the Employee class
  module.exports = Employee;
  