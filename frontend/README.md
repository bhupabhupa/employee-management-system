# Employee Management System - Frontend

This is the frontend application for the Employee Management System, built with React.js.

## Technology Stack

- **React.js**: JavaScript library for building user interfaces
- **React Router**: Client-side routing
- **Axios**: HTTP client for API calls
- **CSS3**: Modern styling with flexbox and grid

## Project Structure

```
frontend/
├── public/
│   ├── index.html              # HTML template
│   └── favicon.ico             # Favicon
├── src/
│   ├── pages/
│   │   ├── Dashboard.js        # Dashboard with statistics
│   │   ├── EmployeeList.js     # List all employees
│   │   ├── AddEmployee.js      # Add new employee form
│   │   └── EditEmployee.js     # Edit employee form
│   ├── services/
│   │   └── employeeService.js  # API service layer
│   ├── App.js                  # Main application component
│   ├── App.css                 # Global styles
│   └── index.js                # Application entry point
├── package.json                # Project dependencies
└── .env                        # Environment variables
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
Create a `.env` file with:
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Running the Application

### Development Mode
```bash
npm start
```
Opens the app at `http://localhost:3000`

### Production Build
```bash
npm run build
```
Creates optimized production build in the `build` folder.

### Running Tests
```bash
npm test
```

## Features

### 1. Dashboard
- **URL:** `/`
- **Description:** Displays employee statistics
- **Features:**
  - Total employee count
  - Active employee count
  - Number of departments
  - Quick action buttons

### 2. Employee List
- **URL:** `/employees`
- **Description:** View and manage all employees
- **Features:**
  - Searchable employee table
  - Edit employee details
  - Delete employees
  - Responsive design
  - Real-time filtering

### 3. Add Employee
- **URL:** `/add-employee`
- **Description:** Form to add new employees
- **Features:**
  - Form validation
  - Email format validation
  - Required field checking
  - Department dropdown
  - Status selection
  - Date picker

### 4. Edit Employee
- **URL:** `/edit-employee/:id`
- **Description:** Form to edit existing employees
- **Features:**
  - Pre-populated form
  - Same validation as add form
  - Update functionality
  - Cancel option

## Component Details

### App Component
Main application component with:
- Navigation bar
- Routing setup
- Page layout

### Dashboard Component
```jsx
- Fetches employee statistics from API
- Displays stats in cards
- Provides quick navigation
```

### EmployeeList Component
```jsx
- Lists all employees in a table
- Search functionality
- Edit and delete actions
- Empty state handling
```

### AddEmployee Component
```jsx
- Form for creating new employees
- Client-side validation
- Error handling
- Success navigation
```

### EditEmployee Component
```jsx
- Fetches existing employee data
- Pre-populates form
- Update functionality
- Form validation
```

## Services

### employeeService
API service layer that handles all HTTP requests:

```javascript
- getAllEmployees()
- getEmployeeById(id)
- createEmployee(data)
- updateEmployee(id, data)
- deleteEmployee(id)
- searchEmployees(query)
- getEmployeesByDepartment(department)
```

## Styling

The application uses custom CSS with:
- Responsive design
- Modern color scheme (Purple gradient theme)
- Flexbox and Grid layouts
- Smooth transitions
- Mobile-friendly breakpoints

### Color Palette
- Primary: `#667eea` (Purple)
- Secondary: `#764ba2` (Dark Purple)
- Success: `#48bb78` (Green)
- Danger: `#f56565` (Red)
- Background: `#f5f5f5` (Light Gray)

## Form Validation

### Client-Side Validation
- Required field checking
- Email format validation
- Number validation for salary
- Real-time error display

### Server-Side Validation
Handled by the backend API

## State Management

Uses React Hooks for state management:
- `useState`: Component state
- `useEffect`: Side effects and data fetching
- `useNavigate`: Programmatic navigation
- `useParams`: URL parameters

## API Integration

All API calls go through the `employeeService`:

```javascript
import employeeService from '../services/employeeService';

// Example usage
const fetchEmployees = async () => {
  const response = await employeeService.getAllEmployees();
  setEmployees(response.data);
};
```

## Environment Variables

- `REACT_APP_API_URL`: Backend API base URL

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Tips

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `App.js`
3. Add navigation link in navbar

### Adding New API Calls
1. Add function to `employeeService.js`
2. Use in component with try-catch
3. Handle loading and error states

### Styling
- Global styles in `App.css`
- Component-specific styles can be added inline or in separate CSS files

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
1. **Netlify**: Drop `build` folder
2. **Vercel**: Connect GitHub repo
3. **AWS S3**: Upload `build` folder
4. **GitHub Pages**: Use `gh-pages` package

### Environment Setup for Production
Update `.env` with production API URL:
```
REACT_APP_API_URL=https://your-api-domain.com/api
```

## Troubleshooting

### API Connection Issues
- Check if backend is running
- Verify `REACT_APP_API_URL` in `.env`
- Check CORS settings on backend

### Build Errors
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear cache: `npm cache clean --force`

### Development Server Not Starting
- Check if port 3000 is available
- Try different port: `PORT=3001 npm start`

## Performance Optimization

- Code splitting with React.lazy (can be added)
- Memoization with useMemo/useCallback (can be added)
- Production build is optimized automatically

## Future Enhancements

- [ ] Add loading skeletons
- [ ] Implement pagination
- [ ] Add sorting functionality
- [ ] Export to CSV feature
- [ ] Profile pictures for employees
- [ ] Dark mode theme
- [ ] Advanced filtering
- [ ] Unit tests with Jest
- [ ] Integration tests with React Testing Library

## Contributing

1. Follow React best practices
2. Use functional components with hooks
3. Keep components small and focused
4. Add proper error handling
5. Update documentation

## License

ISC
