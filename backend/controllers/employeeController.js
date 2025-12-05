const Employee = require('../models/Employee');

// Get all employees
const getAllEmployees = (req, res) => {
  try {
    const employees = Employee.getAll();
    res.json({ success: true, data: employees, count: employees.length });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get employee by ID
const getEmployeeById = (req, res) => {
  try {
    const employee = Employee.getById(req.params.id);
    if (!employee) {
      return res.status(404).json({ success: false, error: 'Employee not found' });
    }
    res.json({ success: true, data: employee });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Create new employee
const createEmployee = (req, res) => {
  try {
    const { firstName, lastName, email, position, department, salary, dateOfJoining } = req.body;

    // Validation
    if (!firstName || !lastName || !email || !position || !department) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing required fields: firstName, lastName, email, position, department' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, error: 'Invalid email format' });
    }

    const newEmployee = Employee.create(req.body);
    res.status(201).json({ success: true, data: newEmployee });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update employee
const updateEmployee = (req, res) => {
  try {
    const updatedEmployee = Employee.update(req.params.id, req.body);
    if (!updatedEmployee) {
      return res.status(404).json({ success: false, error: 'Employee not found' });
    }
    res.json({ success: true, data: updatedEmployee });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete employee
const deleteEmployee = (req, res) => {
  try {
    const deleted = Employee.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, error: 'Employee not found' });
    }
    res.json({ success: true, message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Search employees
const searchEmployees = (req, res) => {
  try {
    const { q } = req.query;
    if (!q) {
      return res.status(400).json({ success: false, error: 'Search query is required' });
    }
    const results = Employee.search(q);
    res.json({ success: true, data: results, count: results.length });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get employees by department
const getEmployeesByDepartment = (req, res) => {
  try {
    const employees = Employee.getByDepartment(req.params.department);
    res.json({ success: true, data: employees, count: employees.length });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  searchEmployees,
  getEmployeesByDepartment
};
