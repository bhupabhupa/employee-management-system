# Employee Management System

A full-stack employee management system built with React 18 and Node.js, featuring CRUD operations, search and filter functionality, and an intuitive user interface.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete employee records
- **Employee Fields**: ID, Name, Department, Email, Role, Hire Date
- **Search & Filter**: Search employees by name, email, or role, and filter by department
- **RESTful API**: Clean and well-structured REST API design
- **Error Handling**: Comprehensive error handling on both frontend and backend
- **Intuitive UI**: Modern, responsive user interface with React 18
- **Form Validation**: Client-side and server-side validation

## Tech Stack

### Frontend
- React 18
- CSS3 (with modern flexbox/grid layouts)
- Fetch API for HTTP requests

### Backend
- Node.js
- Express.js
- In-memory data store (easily replaceable with a database)
- CORS enabled
- UUID for unique IDs

## Project Structure

```
employee-management-system/
├── backend/
│   ├── server.js          # Express server with all API routes
│   ├── package.json       # Backend dependencies
│   └── .gitignore
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── EmployeeList.js    # Employee list view with search/filter
│   │   │   ├── EmployeeList.css
│   │   │   ├── EmployeeForm.js    # Add/Edit employee form
│   │   │   └── EmployeeForm.css
│   │   ├── App.js         # Main application component
│   │   ├── App.css        # Global styles
│   │   └── index.js       # React entry point
│   ├── package.json       # Frontend dependencies
│   └── .gitignore
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```
   
   For development with auto-reload:
   ```bash
   npm run dev
   ```

   The backend server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   The frontend will run on `http://localhost:3000` and automatically open in your browser.

## API Documentation

### Base URL
```
http://localhost:5000/api
```

### Endpoints

#### Get All Employees
```
GET /employees
Query Parameters:
  - department (optional): Filter by department
  - search (optional): Search by name, email, or role
```

#### Get Single Employee
```
GET /employees/:id
```

#### Create Employee
```
POST /employees
Body: {
  "name": "John Doe",
  "department": "Engineering",
  "email": "john@example.com",
  "role": "Software Engineer",
  "hireDate": "2024-01-01"
}
```

#### Update Employee
```
PUT /employees/:id
Body: {
  "name": "John Doe",
  "department": "Engineering",
  "email": "john@example.com",
  "role": "Senior Software Engineer",
  "hireDate": "2024-01-01"
}
```

#### Delete Employee
```
DELETE /employees/:id
```

#### Get All Departments
```
GET /departments
```

## Usage

1. **View Employees**: The main page displays all employees in a table format
2. **Search**: Use the search bar to find employees by name, email, or role
3. **Filter**: Use the department dropdown to filter employees by department
4. **Add Employee**: Click "Add Employee" button to create a new employee record
5. **Edit Employee**: Click "Edit" button on any employee row to update their information
6. **Delete Employee**: Click "Delete" button to remove an employee (with confirmation)

## Error Handling

- Form validation on both client and server side
- Unique email validation
- User-friendly error messages
- Loading states for async operations
- Confirmation dialogs for destructive actions

## Future Enhancements

- Database integration (MongoDB, PostgreSQL, etc.)
- Authentication and authorization
- Role-based access control
- Employee photo upload
- Export to CSV/PDF
- Advanced filtering and sorting
- Pagination for large datasets
- Unit and integration tests

## License

MIT

