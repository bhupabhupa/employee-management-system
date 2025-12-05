import React, { useState, useEffect } from 'react';
import './App.css';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';

function App() {
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('');

  const API_BASE_URL = 'http://localhost:5000/api';

  useEffect(() => {
    fetchEmployees();
    fetchDepartments();
  }, []);

  const fetchEmployees = async (department = '', search = '') => {
    setLoading(true);
    setError(null);
    try {
      let url = `${API_BASE_URL}/employees?`;
      if (department) url += `department=${encodeURIComponent(department)}&`;
      if (search) url += `search=${encodeURIComponent(search)}`;
      
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch employees');
      const data = await response.json();
      setEmployees(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchDepartments = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/departments`);
      if (!response.ok) throw new Error('Failed to fetch departments');
      const data = await response.json();
      setDepartments(data);
    } catch (err) {
      console.error('Error fetching departments:', err);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    fetchEmployees(filterDepartment, term);
  };

  const handleFilterChange = (department) => {
    setFilterDepartment(department);
    fetchEmployees(department, searchTerm);
  };

  const handleAddEmployee = () => {
    setSelectedEmployee(null);
    setShowForm(true);
  };

  const handleEditEmployee = (employee) => {
    setSelectedEmployee(employee);
    setShowForm(true);
  };

  const handleDeleteEmployee = async (id) => {
    if (!window.confirm('Are you sure you want to delete this employee?')) {
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/employees/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) throw new Error('Failed to delete employee');
      
      await fetchEmployees(filterDepartment, searchTerm);
      await fetchDepartments();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleFormSubmit = async (employeeData) => {
    setError(null);
    try {
      const url = selectedEmployee
        ? `${API_BASE_URL}/employees/${selectedEmployee.id}`
        : `${API_BASE_URL}/employees`;
      
      const method = selectedEmployee ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || errorData.errors?.join(', ') || 'Failed to save employee');
      }

      setShowForm(false);
      setSelectedEmployee(null);
      await fetchEmployees(filterDepartment, searchTerm);
      await fetchDepartments();
    } catch (err) {
      throw err;
    }
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setSelectedEmployee(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Management System</h1>
      </header>

      {error && (
        <div className="error-message">
          <p>{error}</p>
          <button onClick={() => setError(null)}>Dismiss</button>
        </div>
      )}

      <main className="App-main">
        {showForm ? (
          <EmployeeForm
            employee={selectedEmployee}
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
          />
        ) : (
          <EmployeeList
            employees={employees}
            departments={departments}
            loading={loading}
            searchTerm={searchTerm}
            filterDepartment={filterDepartment}
            onSearch={handleSearch}
            onFilterChange={handleFilterChange}
            onAdd={handleAddEmployee}
            onEdit={handleEditEmployee}
            onDelete={handleDeleteEmployee}
          />
        )}
      </main>
    </div>
  );
}

export default App;
