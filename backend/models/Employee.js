// In-memory database for employees
let employees = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    position: 'Software Engineer',
    department: 'Engineering',
    salary: 75000,
    dateOfJoining: '2023-01-15',
    status: 'Active'
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    position: 'Product Manager',
    department: 'Product',
    salary: 85000,
    dateOfJoining: '2022-11-20',
    status: 'Active'
  },
  {
    id: 3,
    firstName: 'Mike',
    lastName: 'Johnson',
    email: 'mike.johnson@example.com',
    position: 'UI/UX Designer',
    department: 'Design',
    salary: 70000,
    dateOfJoining: '2023-03-10',
    status: 'Active'
  }
];

let nextId = 4;

class Employee {
  static getAll() {
    return employees;
  }

  static getById(id) {
    return employees.find(emp => emp.id === parseInt(id));
  }

  static create(employeeData) {
    const newEmployee = {
      id: nextId++,
      ...employeeData,
      status: employeeData.status || 'Active'
    };
    employees.push(newEmployee);
    return newEmployee;
  }

  static update(id, employeeData) {
    const index = employees.findIndex(emp => emp.id === parseInt(id));
    if (index === -1) return null;

    employees[index] = {
      ...employees[index],
      ...employeeData,
      id: parseInt(id)
    };
    return employees[index];
  }

  static delete(id) {
    const index = employees.findIndex(emp => emp.id === parseInt(id));
    if (index === -1) return false;

    employees.splice(index, 1);
    return true;
  }

  static search(query) {
    const lowerQuery = query.toLowerCase();
    return employees.filter(emp => 
      emp.firstName.toLowerCase().includes(lowerQuery) ||
      emp.lastName.toLowerCase().includes(lowerQuery) ||
      emp.email.toLowerCase().includes(lowerQuery) ||
      emp.position.toLowerCase().includes(lowerQuery) ||
      emp.department.toLowerCase().includes(lowerQuery)
    );
  }

  static getByDepartment(department) {
    return employees.filter(emp => 
      emp.department.toLowerCase() === department.toLowerCase()
    );
  }
}

module.exports = Employee;
