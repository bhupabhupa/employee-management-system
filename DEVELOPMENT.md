# Development Guide

This guide provides detailed information for developers working on the Employee Management System.

## Table of Contents
1. [Getting Started](#getting-started)
2. [Architecture](#architecture)
3. [Development Workflow](#development-workflow)
4. [Code Standards](#code-standards)
5. [Testing](#testing)
6. [Deployment](#deployment)

## Getting Started

### Prerequisites
- Node.js 14+ and npm 6+
- Git
- Code editor (VS Code recommended)

### Initial Setup
```bash
# Clone repository
git clone https://github.com/bhupabhupa/employee-management-system.git
cd employee-management-system

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Running Development Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api

## Architecture

### System Overview
```
┌─────────────────┐
│   React App     │
│  (Frontend)     │
│  Port: 3000     │
└────────┬────────┘
         │
         │ HTTP/REST
         │
┌────────▼────────┐
│  Express API    │
│  (Backend)      │
│  Port: 5000     │
└────────┬────────┘
         │
         │
┌────────▼────────┐
│  In-Memory DB   │
│  (Data Layer)   │
└─────────────────┘
```

### Backend Architecture

```
server.js (Entry Point)
    │
    ├─ Middleware (CORS, Body Parser)
    │
    ├─ Routes (employeeRoutes.js)
    │   │
    │   └─ Controllers (employeeController.js)
    │       │
    │       └─ Models (Employee.js)
    │
    └─ Error Handlers
```

### Frontend Architecture

```
App.js (Root Component)
    │
    ├─ Router Setup
    │
    ├─ Navigation Bar
    │
    └─ Routes
        │
        ├─ Dashboard (/)
        ├─ EmployeeList (/employees)
        ├─ AddEmployee (/add-employee)
        └─ EditEmployee (/edit-employee/:id)
            │
            └─ Services (employeeService.js)
                └─ Axios HTTP Calls
```

## Development Workflow

### Feature Development Process

1. **Create Feature Branch**
```bash
git checkout -b feature/your-feature-name
```

2. **Make Changes**
- Write code following standards
- Test locally
- Update documentation

3. **Commit Changes**
```bash
git add .
git commit -m "Description of changes"
```

4. **Push and Create PR**
```bash
git push origin feature/your-feature-name
```

### Making API Changes

When adding a new endpoint:

1. **Add Model Method** (backend/models/Employee.js)
```javascript
static newMethod() {
  // Implementation
}
```

2. **Add Controller** (backend/controllers/employeeController.js)
```javascript
const newController = (req, res) => {
  // Implementation
};
```

3. **Add Route** (backend/routes/employeeRoutes.js)
```javascript
router.get('/new-route', newController);
```

4. **Add Service** (frontend/src/services/employeeService.js)
```javascript
newService: async () => {
  const response = await api.get('/new-route');
  return response.data;
}
```

5. **Use in Component**
```javascript
const data = await employeeService.newService();
```

### Adding New Pages

1. **Create Component** (frontend/src/pages/NewPage.js)
```javascript
import React from 'react';

function NewPage() {
  return <div>New Page</div>;
}

export default NewPage;
```

2. **Add Route** (frontend/src/App.js)
```javascript
import NewPage from './pages/NewPage';
// ...
<Route path="/new-page" element={<NewPage />} />
```

3. **Add Navigation** (frontend/src/App.js)
```javascript
<Link to="/new-page" className="nav-link">
  New Page
</Link>
```

## Code Standards

### JavaScript/React

- Use functional components with hooks
- Use const for variables that don't change
- Use descriptive variable names
- Keep functions small and focused
- Use async/await instead of promises
- Handle errors with try/catch

**Good Example:**
```javascript
const fetchEmployees = async () => {
  try {
    const response = await employeeService.getAllEmployees();
    setEmployees(response.data);
  } catch (error) {
    console.error('Error:', error);
    setError('Failed to fetch employees');
  }
};
```

### Naming Conventions

- **Components:** PascalCase (e.g., `EmployeeList`)
- **Functions:** camelCase (e.g., `fetchEmployees`)
- **Constants:** UPPER_CASE (e.g., `API_BASE_URL`)
- **Files:** PascalCase for components, camelCase for utilities

### CSS Standards

- Use class names that describe purpose
- Keep specificity low
- Group related styles together
- Use CSS variables for colors and spacing (can be added)
- Mobile-first responsive design

## Testing

### Manual Testing Checklist

**Backend API:**
- [ ] GET /api/health returns status
- [ ] GET /api/employees returns all employees
- [ ] POST /api/employees creates new employee
- [ ] PUT /api/employees/:id updates employee
- [ ] DELETE /api/employees/:id deletes employee
- [ ] Search functionality works
- [ ] Department filter works

**Frontend:**
- [ ] Dashboard displays correct statistics
- [ ] Employee list loads and displays
- [ ] Search filters employees
- [ ] Add employee form validates
- [ ] Edit employee form pre-populates
- [ ] Delete employee shows confirmation
- [ ] Navigation works correctly
- [ ] Responsive design on mobile

### Testing with cURL

```bash
# Health check
curl http://localhost:5000/api/health

# Get all employees
curl http://localhost:5000/api/employees

# Create employee
curl -X POST http://localhost:5000/api/employees \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "position": "Developer",
    "department": "Engineering"
  }'

# Update employee
curl -X PUT http://localhost:5000/api/employees/1 \
  -H "Content-Type: application/json" \
  -d '{"salary": 90000}'

# Delete employee
curl -X DELETE http://localhost:5000/api/employees/1
```

### Automated Testing (Future)

To add automated tests:

**Backend:**
```bash
npm install --save-dev jest supertest
```

**Frontend:**
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

## Deployment

### Production Build

**Backend:**
```bash
cd backend
npm install --production
NODE_ENV=production npm start
```

**Frontend:**
```bash
cd frontend
npm run build
```

### Environment Variables

**Backend (.env):**
```
PORT=5000
NODE_ENV=production
DATABASE_URL=your-database-url (if using real DB)
```

**Frontend (.env):**
```
REACT_APP_API_URL=https://your-api-domain.com/api
```

### Deployment Options

#### Heroku
```bash
# Backend
heroku create your-app-name-api
git push heroku main

# Frontend
heroku create your-app-name
heroku buildpacks:set mars/create-react-app
git push heroku main
```

#### Vercel (Frontend)
```bash
npm install -g vercel
cd frontend
vercel
```

#### AWS EC2 (Backend)
1. Launch EC2 instance
2. Install Node.js
3. Clone repository
4. Install dependencies
5. Use PM2 for process management
```bash
npm install -g pm2
pm2 start server.js
```

### Database Integration

To replace in-memory storage:

**MongoDB:**
```bash
cd backend
npm install mongoose
```

```javascript
// server.js
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

// models/Employee.js
const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  // ...
});
module.exports = mongoose.model('Employee', employeeSchema);
```

**PostgreSQL:**
```bash
cd backend
npm install pg
```

```javascript
// database.js
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});
```

## Common Issues

### Port Already in Use
```bash
# Find process using port
lsof -i :3000
lsof -i :5000

# Kill process
kill -9 <PID>
```

### CORS Issues
- Ensure backend CORS is configured
- Check frontend API URL in .env
- Verify both servers are running

### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Useful Commands

```bash
# Check Node/npm versions
node --version
npm --version

# View running processes
ps aux | grep node

# Check logs
npm run dev # with nodemon for backend

# Clean build
rm -rf build
npm run build
```

## Additional Resources

- [React Documentation](https://react.dev/)
- [Express Documentation](https://expressjs.com/)
- [Node.js Documentation](https://nodejs.org/)
- [MDN Web Docs](https://developer.mozilla.org/)

## Contributing

Please read the main README.md for contribution guidelines.

## Support

For questions or issues, please open a GitHub issue or contact the development team.
