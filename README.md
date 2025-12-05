# Employee Management System

A full-stack employee management system built with React.js for the frontend and Node.js/Express for the backend.

## Features

- 📊 **Dashboard**: View employee statistics and quick actions
- 👥 **Employee Management**: Complete CRUD operations for employees
- 🔍 **Search & Filter**: Search employees by name, email, position, or department
- 📝 **Form Validation**: Client-side and server-side validation
- 🎨 **Modern UI**: Responsive design with a clean and professional interface
- 🔒 **Data Persistence**: In-memory database for development (can be easily replaced with a real database)

## Technology Stack

### Frontend
- **React.js**: JavaScript library for building user interfaces
- **React Router**: For client-side routing
- **Axios**: Promise-based HTTP client
- **CSS3**: Modern styling with flexbox and grid

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **CORS**: Cross-Origin Resource Sharing middleware
- **Body-Parser**: Request body parsing middleware
- **Dotenv**: Environment variable management

## Project Structure

```
employee-management-system/
├── backend/
│   ├── controllers/
│   │   └── employeeController.js
│   ├── models/
│   │   └── Employee.js
│   ├── routes/
│   │   └── employeeRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── Dashboard.js
│   │   │   ├── EmployeeList.js
│   │   │   ├── AddEmployee.js
│   │   │   └── EditEmployee.js
│   │   ├── services/
│   │   │   └── employeeService.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── package.json
│   └── .env
└── README.md
```

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/bhupabhupa/employee-management-system.git
cd employee-management-system
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

## Configuration

### Backend Configuration

Create a `.env` file in the `backend` directory (or use the existing one):

```env
PORT=5000
NODE_ENV=development
```

### Frontend Configuration

Create a `.env` file in the `frontend` directory (or use the existing one):

```env
REACT_APP_API_URL=http://localhost:5000/api
```

## Running the Application

### Start Backend Server

```bash
cd backend
npm start
# or for development with auto-reload
npm run dev
```

The backend server will run on `http://localhost:5000`

### Start Frontend Application

```bash
cd frontend
npm start
```

The frontend application will run on `http://localhost:3000`

## API Endpoints

### Employee Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/employees` | Get all employees |
| GET | `/api/employees/:id` | Get employee by ID |
| POST | `/api/employees` | Create new employee |
| PUT | `/api/employees/:id` | Update employee |
| DELETE | `/api/employees/:id` | Delete employee |
| GET | `/api/employees/search?q={query}` | Search employees |
| GET | `/api/employees/department/:department` | Get employees by department |
| GET | `/api/health` | Health check endpoint |

### Request/Response Examples

#### Create Employee

**Request:**
```json
POST /api/employees
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "position": "Software Engineer",
  "department": "Engineering",
  "salary": 75000,
  "dateOfJoining": "2023-01-15",
  "status": "Active"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "position": "Software Engineer",
    "department": "Engineering",
    "salary": 75000,
    "dateOfJoining": "2023-01-15",
    "status": "Active"
  }
}
```

## Features & Functionality

### Dashboard
- View total employee count
- View active employee count
- View number of departments
- Quick action buttons to navigate to employee list or add new employee

### Employee List
- View all employees in a table format
- Search functionality to filter employees
- Edit employee details
- Delete employees with confirmation
- Responsive table design

### Add Employee
- Form with validation for all required fields
- Email format validation
- Department dropdown
- Status selection
- Date picker for joining date

### Edit Employee
- Pre-populated form with existing employee data
- Same validation as add employee
- Update employee details
- Cancel option to go back

## Development

### Adding a Database

To replace the in-memory storage with a real database (MongoDB, PostgreSQL, etc.):

1. Install the database driver:
```bash
cd backend
npm install mongoose  # for MongoDB
# or
npm install pg  # for PostgreSQL
```

2. Update the `Employee` model in `backend/models/Employee.js`
3. Add database connection logic in `server.js`
4. Update environment variables with database credentials

### Adding Authentication

To add authentication:

1. Install authentication packages:
```bash
npm install bcrypt jsonwebtoken
```

2. Create authentication middleware
3. Add user model and authentication routes
4. Protect routes with JWT verification
5. Update frontend to handle authentication tokens

## Security Best Practices Implemented

- Input validation on both client and server side
- Email format validation
- Error handling middleware
- CORS enabled for cross-origin requests
- Environment variables for sensitive configuration
- SQL injection prevention (when using real database)
- XSS prevention through React's built-in sanitization

## Future Enhancements

- [ ] Add user authentication and authorization
- [ ] Implement role-based access control
- [ ] Add pagination for large employee lists
- [ ] Export employee data to CSV/Excel
- [ ] Add employee profile pictures
- [ ] Implement advanced filtering and sorting
- [ ] Add employee performance tracking
- [ ] Send email notifications
- [ ] Add unit and integration tests
- [ ] Deploy to cloud platform (Heroku, AWS, etc.)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Author

Full-stack developer with expertise in React.js and Node.js

## Acknowledgments

- React.js documentation
- Express.js documentation
- Node.js community
- Open source contributors

