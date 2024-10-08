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

//Task 3: Create a Manager Class that Inherits from Employee

class Manager extends Employee { // Define manager class that inherits from employee. 
    constructor(name, salary, position, department, bonus) {
        super(name, salary, position, department);
        this.bonus = bonus;
    }

    getDetails(){ // Used to include the bonuses. 
        return ` ${this.name} works as a ${this.position} with a salary of $${this.salary} and a bonus of $${this.bonus}.`;
    }
}
// Task 5: Create and Manage Departments and Employees

//Define departments
const accounting = new Department("Accounting");
const hr = new Department("Human Resource");

//Define employees
const cameron = new Employee("Cameron", 90000, "Developer", "Accounting");
const myia = new Employee("Myia", 85000, "Designer", "Human Resource");
const eboni = new Manager("Eboni", 170000, "Accounting Manager", "Accounting", 12000);
const braylin = new Manager("Braylin", 190000, "Human Resource Manager", "Human Resource", 30000);

//Used to add employees to departments.
accounting.addEmployee(cameron);
accounting.addEmployee(myia);
hr.addEmployee(eboni);
hr.addEmployee(braylin);

//Messages displayed for calculations of salaries. 
console.log(`Total salary for Accounting: $${accounting.getDepartmentSalary()}`);
console.log(`Total salary including bonuses for Accounting: $${accounting.calculateTotalSalaryWithBonus()}`);
console.log(`Total salary for Human Resource: $${hr.getDepartmentSalary()}`);
console.log(`Total salary including bonuses for Human Resource: $${hr.calculateTotalSalaryWithBonus()}`);

// Sample data used.