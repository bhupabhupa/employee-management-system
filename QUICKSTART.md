# Quick Start Guide

Get the Employee Management System up and running in 5 minutes!

## Prerequisites

- Node.js 14+ installed
- npm 6+ installed

## Step 1: Clone the Repository

```bash
git clone https://github.com/bhupabhupa/employee-management-system.git
cd employee-management-system
```

## Step 2: Set Up Backend

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start the server
npm start
```

✅ Backend is now running at `http://localhost:5000`

## Step 3: Set Up Frontend

Open a **new terminal window** and run:

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install

# Start the application
npm start
```

✅ Frontend will automatically open at `http://localhost:3000`

## Step 4: Explore the Application

1. **Dashboard**: View employee statistics
2. **Employees**: See the list of all employees
3. **Add Employee**: Click "Add Employee" to create a new employee
4. **Edit/Delete**: Use the action buttons in the employee list

## Default Test Data

The system comes with 3 sample employees:
- John Doe (Software Engineer)
- Jane Smith (Product Manager)
- Mike Johnson (UI/UX Designer)

## Quick API Test

Test the API is working:

```bash
curl http://localhost:5000/api/health
```

Expected response:
```json
{
  "status": "Server is running",
  "timestamp": "2023-12-05T10:15:00.000Z"
}
```

## Common Commands

### Backend
```bash
cd backend
npm start          # Start server
npm run dev        # Start with auto-reload
```

### Frontend
```bash
cd frontend
npm start          # Start development server
npm run build      # Create production build
```

## Troubleshooting

### Port Already in Use?

**Backend (Port 5000):**
```bash
# Mac/Linux
lsof -i :5000
kill -9 <PID>

# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

**Frontend (Port 3000):**
```bash
# Mac/Linux
lsof -i :3000
kill -9 <PID>

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Cannot Connect to API?

1. Check backend is running: `curl http://localhost:5000/api/health`
2. Verify `.env` file in frontend has: `REACT_APP_API_URL=http://localhost:5000/api`
3. Clear browser cache and refresh

### Dependencies Issues?

```bash
# Backend
cd backend
rm -rf node_modules package-lock.json
npm install

# Frontend
cd frontend
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

- Read the full [README.md](./README.md) for detailed documentation
- Check [DEVELOPMENT.md](./DEVELOPMENT.md) for development guidelines
- Explore the API documentation in [backend/README.md](./backend/README.md)
- Learn about the frontend in [frontend/README.md](./frontend/README.md)

## Features to Try

1. **Add a New Employee**
   - Click "Add Employee"
   - Fill in the form
   - Submit and see it in the list

2. **Search Functionality**
   - Go to "Employees"
   - Type in the search box
   - Watch the list filter in real-time

3. **Edit Employee**
   - Click "Edit" on any employee
   - Modify the details
   - Save and see the changes

4. **Delete Employee**
   - Click "Delete" on any employee
   - Confirm the action
   - Employee is removed

## What's Next?

### For Users
- Start managing your employee data
- Customize the departments list
- Add more employee fields as needed

### For Developers
- Add a real database (MongoDB, PostgreSQL)
- Implement authentication
- Add pagination for large datasets
- Export data to Excel/CSV
- Add employee photos
- Implement role-based access control

## Support

- GitHub Issues: [Report a bug](https://github.com/bhupabhupa/employee-management-system/issues)
- Documentation: Check README files in each directory

## Quick Reference

| Action | URL | Description |
|--------|-----|-------------|
| Dashboard | http://localhost:3000/ | View statistics |
| Employees | http://localhost:3000/employees | View all employees |
| Add Employee | http://localhost:3000/add-employee | Add new employee |
| API Health | http://localhost:5000/api/health | Check API status |
| All Employees API | http://localhost:5000/api/employees | Get employees data |

Happy coding! 🚀
