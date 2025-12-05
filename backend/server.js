const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory data store
let employees = [
  {
    id: uuidv4(),
    name: 'John Doe',
    department: 'Engineering',
    email: 'john.doe@example.com',
    role: 'Software Engineer',
    hireDate: '2023-01-15'
  },
  {
    id: uuidv4(),
    name: 'Jane Smith',
    department: 'HR',
    email: 'jane.smith@example.com',
    role: 'HR Manager',
    hireDate: '2022-06-20'
  },
  {
    id: uuidv4(),
    name: 'Bob Johnson',
    department: 'Engineering',
    email: 'bob.johnson@example.com',
    role: 'Senior Developer',
    hireDate: '2021-03-10'
  }
];

// Validation middleware
const validateEmployee = (req, res, next) => {
  const { name, department, email, role, hireDate } = req.body;
  const errors = [];

  if (!name || name.trim().length === 0) {
    errors.push('Name is required');
  }

  if (!department || department.trim().length === 0) {
    errors.push('Department is required');
  }

  if (!email || email.trim().length === 0) {
    errors.push('Email is required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('Invalid email format');
  }

  if (!role || role.trim().length === 0) {
    errors.push('Role is required');
  }

  if (!hireDate) {
    errors.push('Hire date is required');
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  next();
};

// API Routes

// GET all employees or filter by department
app.get('/api/employees', (req, res) => {
  try {
    const { department, search } = req.query;
    let filteredEmployees = [...employees];

    if (department) {
      filteredEmployees = filteredEmployees.filter(
        emp => emp.department.toLowerCase() === department.toLowerCase()
      );
    }

    if (search) {
      const searchLower = search.toLowerCase();
      filteredEmployees = filteredEmployees.filter(
        emp =>
          emp.name.toLowerCase().includes(searchLower) ||
          emp.email.toLowerCase().includes(searchLower) ||
          emp.role.toLowerCase().includes(searchLower)
      );
    }

    res.json(filteredEmployees);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch employees' });
  }
});

// GET single employee by ID
app.get('/api/employees/:id', (req, res) => {
  try {
    const employee = employees.find(emp => emp.id === req.params.id);
    
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch employee' });
  }
});

// POST create new employee
app.post('/api/employees', validateEmployee, (req, res) => {
  try {
    const { name, department, email, role, hireDate } = req.body;

    // Check for duplicate email
    const existingEmployee = employees.find(emp => emp.email === email);
    if (existingEmployee) {
      return res.status(400).json({ error: 'Employee with this email already exists' });
    }

    const newEmployee = {
      id: uuidv4(),
      name: name.trim(),
      department: department.trim(),
      email: email.trim(),
      role: role.trim(),
      hireDate
    };

    employees.push(newEmployee);
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create employee' });
  }
});

// PUT update employee
app.put('/api/employees/:id', validateEmployee, (req, res) => {
  try {
    const { id } = req.params;
    const { name, department, email, role, hireDate } = req.body;

    const employeeIndex = employees.findIndex(emp => emp.id === id);
    
    if (employeeIndex === -1) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    // Check for duplicate email (excluding current employee)
    const existingEmployee = employees.find(
      emp => emp.email === email && emp.id !== id
    );
    if (existingEmployee) {
      return res.status(400).json({ error: 'Another employee with this email already exists' });
    }

    const updatedEmployee = {
      id,
      name: name.trim(),
      department: department.trim(),
      email: email.trim(),
      role: role.trim(),
      hireDate
    };

    employees[employeeIndex] = updatedEmployee;
    res.json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update employee' });
  }
});

// DELETE employee
app.delete('/api/employees/:id', (req, res) => {
  try {
    const { id } = req.params;
    const employeeIndex = employees.findIndex(emp => emp.id === id);
    
    if (employeeIndex === -1) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    employees.splice(employeeIndex, 1);
    res.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete employee' });
  }
});

// GET all unique departments
app.get('/api/departments', (req, res) => {
  try {
    const departments = [...new Set(employees.map(emp => emp.department))];
    res.json(departments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch departments' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
