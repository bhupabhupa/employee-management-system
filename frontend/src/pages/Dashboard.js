import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import employeeService from '../services/employeeService';

function Dashboard() {
  const [stats, setStats] = useState({
    totalEmployees: 0,
    departments: 0,
    activeEmployees: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const response = await employeeService.getAllEmployees();
      const employees = response.data;

      const uniqueDepartments = [...new Set(employees.map(emp => emp.department))];
      const activeEmployees = employees.filter(emp => emp.status === 'Active');

      setStats({
        totalEmployees: employees.length,
        departments: uniqueDepartments.length,
        activeEmployees: activeEmployees.length,
      });
      setError(null);
    } catch (err) {
      setError('Failed to fetch statistics');
      console.error('Error fetching stats:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading dashboard...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Employees</h3>
          <div className="stat-value">{stats.totalEmployees}</div>
        </div>
        <div className="stat-card">
          <h3>Active Employees</h3>
          <div className="stat-value">{stats.activeEmployees}</div>
        </div>
        <div className="stat-card">
          <h3>Departments</h3>
          <div className="stat-value">{stats.departments}</div>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Quick Actions</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/employees">
            <button className="btn btn-primary">View All Employees</button>
          </Link>
          <Link to="/add-employee">
            <button className="btn btn-success">Add New Employee</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
