// Task 1: Create an Employee Class

class Employee { // Define employee class. 
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }

    getDetails() { // Used to get information of the employee. 
        return `${this.name} position is ${this.position} with a salary of $${this.salary}.`;
    }
}
