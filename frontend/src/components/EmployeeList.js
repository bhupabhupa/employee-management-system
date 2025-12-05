import React from 'react';
import './EmployeeList.css';

const EmployeeList = ({
  employees,
  departments,
  loading,
  searchTerm,
  filterDepartment,
  onSearch,
  onFilterChange,
  onAdd,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="employee-list-container">
      <div className="controls">
        <div className="search-filter">
          <input
            type="text"
            placeholder="Search by name, email, or role..."
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
            className="search-input"
          />
          <select
            value={filterDepartment}
            onChange={(e) => onFilterChange(e.target.value)}
            className="filter-select"
          >
            <option value="">All Departments</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>
        <button onClick={onAdd} className="btn btn-primary">
          Add Employee
        </button>
      </div>

      {loading ? (
        <div className="loading">Loading employees...</div>
      ) : employees.length === 0 ? (
        <div className="no-data">
          No employees found. {searchTerm || filterDepartment ? 'Try adjusting your filters.' : 'Add your first employee!'}
        </div>
      ) : (
        <div className="table-container">
          <table className="employee-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Email</th>
                <th>Role</th>
                <th>Hire Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.department}</td>
                  <td>{employee.email}</td>
                  <td>{employee.role}</td>
                  <td>{new Date(employee.hireDate).toLocaleDateString()}</td>
                  <td className="actions">
                    <button
                      onClick={() => onEdit(employee)}
                      className="btn btn-edit"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(employee.id)}
                      className="btn btn-delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
