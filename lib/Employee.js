//Employee Class -- all other classes will extend this class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //Returns the user-input name

    getName() {
        return this.name;
    }

    //Returns user-input ID

    getId() {
        return this.id;
    }

//Returns user-input email adress
    getEmail(){
        return this.email;
    }

//Returns employee position
    getRole () {
        return 'Employee'
    }
};

//Export this class to be used elsewhere
module.exports = Employee;