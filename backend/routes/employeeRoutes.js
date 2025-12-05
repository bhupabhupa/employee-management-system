const express = require('express');
const router = express.Router();
const {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  searchEmployees,
  getEmployeesByDepartment
} = require('../controllers/employeeController');

// Search employees (must be before /:id route)
router.get('/search', searchEmployees);

// Get employees by department
router.get('/department/:department', getEmployeesByDepartment);

// CRUD routes
router.get('/', getAllEmployees);
router.get('/:id', getEmployeeById);
router.post('/', createEmployee);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

module.exports = router;
