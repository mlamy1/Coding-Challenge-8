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

// Task 2: Create a Department Class

class Department { // Define Department class. 
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) { // Used to add an employee to the department. 
        this.employees.push(employee); // Pushes/add employee to employees array.
    }
    getDepartmentSalary() { // Returns the total salary of all employees in the department. 
        return this.employees.reduce((total, employee) => total + employee.salary, 0); // Calculation to add all employees salaries.
    }
    calculateTotalSalaryWithBonus(){ // Task 4: Handle Bonuses for Managers

        return this.employees.reduce((total, employee)=> { 
            if (employee instanceof Manager) {
                return total + employee.salary + employee.bonus; // Add salary to the bonus if the employee is in a manager position.  
            }
            return total + employee.salary; }, 0); // Used to add salary if the employee is not a manager. 
    }
}
