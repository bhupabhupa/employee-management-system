# Employee Management System - Backend

This is the backend API for the Employee Management System, built with Node.js and Express.

## Technology Stack

- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **CORS**: Cross-Origin Resource Sharing middleware
- **Body-Parser**: Request body parsing middleware
- **Dotenv**: Environment variable management

## Project Structure

```
backend/
├── controllers/
│   └── employeeController.js    # Business logic for employee operations
├── models/
│   └── Employee.js               # Employee data model
├── routes/
│   └── employeeRoutes.js         # API route definitions
├── server.js                     # Main application entry point
├── package.json                  # Project dependencies
└── .env                          # Environment variables
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
Create a `.env` file with the following variables:
```
PORT=5000
NODE_ENV=development
```

## Running the Server

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Documentation

### Base URL
```
http://localhost:5000/api
```

### Endpoints

#### 1. Health Check
```
GET /api/health
```
**Response:**
```json
{
  "status": "Server is running",
  "timestamp": "2023-01-01T00:00:00.000Z"
}
```

#### 2. Get All Employees
```
GET /api/employees
```
**Response:**
```json
{
  "success": true,
  "data": [
    {
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
  ],
  "count": 1
}
```

#### 3. Get Employee by ID
```
GET /api/employees/:id
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

#### 4. Create Employee
```
POST /api/employees
```
**Request Body:**
```json
{
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane.smith@example.com",
  "position": "Product Manager",
  "department": "Product",
  "salary": 85000,
  "dateOfJoining": "2023-02-01",
  "status": "Active"
}
```
**Required Fields:**
- firstName
- lastName
- email
- position
- department

**Optional Fields:**
- salary
- dateOfJoining
- status (default: "Active")

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 2,
    "firstName": "Jane",
    "lastName": "Smith",
    "email": "jane.smith@example.com",
    "position": "Product Manager",
    "department": "Product",
    "salary": 85000,
    "dateOfJoining": "2023-02-01",
    "status": "Active"
  }
}
```

#### 5. Update Employee
```
PUT /api/employees/:id
```
**Request Body:** Same as Create Employee (all fields optional)

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.updated@example.com",
    "position": "Senior Software Engineer",
    "department": "Engineering",
    "salary": 85000,
    "dateOfJoining": "2023-01-15",
    "status": "Active"
  }
}
```

#### 6. Delete Employee
```
DELETE /api/employees/:id
```
**Response:**
```json
{
  "success": true,
  "message": "Employee deleted successfully"
}
```

#### 7. Search Employees
```
GET /api/employees/search?q={query}
```
**Response:**
```json
{
  "success": true,
  "data": [
    {
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
  ],
  "count": 1
}
```

#### 8. Get Employees by Department
```
GET /api/employees/department/:department
```
**Response:**
```json
{
  "success": true,
  "data": [
    {
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
  ],
  "count": 1
}
```

## Error Handling

The API uses standard HTTP status codes:

- `200 OK`: Success
- `201 Created`: Resource created successfully
- `400 Bad Request`: Invalid request data
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server error

**Error Response Format:**
```json
{
  "success": false,
  "error": "Error message"
}
```

## Data Model

### Employee
```javascript
{
  id: Number,           // Auto-generated unique identifier
  firstName: String,    // Required
  lastName: String,     // Required
  email: String,        // Required, validated format
  position: String,     // Required
  department: String,   // Required
  salary: Number,       // Optional
  dateOfJoining: String, // Optional (ISO date format)
  status: String        // Optional (default: "Active")
}
```

## Development Notes

### In-Memory Storage
The current implementation uses in-memory storage for simplicity. Data will be lost when the server restarts. For production use, integrate with a real database:

**MongoDB Example:**
```javascript
npm install mongoose
// Update models/Employee.js to use Mongoose schema
```

**PostgreSQL Example:**
```javascript
npm install pg
// Update models/Employee.js to use pg client
```

### Adding Authentication
To add JWT-based authentication:
```bash
npm install jsonwebtoken bcrypt
```

Then create authentication middleware and protect routes.

## Testing

You can test the API using:

1. **Postman**: Import the endpoints and test
2. **cURL**: Command line testing
3. **Frontend**: Use the React frontend application

**Example cURL command:**
```bash
curl -X GET http://localhost:5000/api/employees
```

## Contributing

1. Follow the existing code structure
2. Add proper error handling
3. Validate input data
4. Update documentation for new endpoints
5. Test thoroughly before committing

## License

ISC
