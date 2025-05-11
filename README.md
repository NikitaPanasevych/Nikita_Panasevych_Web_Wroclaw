## Project Approach

During this test assignment, I aimed to fulfill basic requirements provided in the assignment description, while also considering scaling and maintainability. I also considered the possibility of implementing additional features and improvements in the future. 

I decided to use Feature-Sliced Design (FSD) architecture, which promotes code organization and maintainability. For state management, I chose Redux Toolkit over React Context API, as it provides a more scalable and maintainable solution for managing complex state. 

Since this task doesn't include an actual API endpoint, I utilized the provided JSON file with RTK Query to simulate API requests. This approach allows for easy replacement with real API endpoints in the future.

For styling, I implemented SCSS modules to ensure component-scoped styling that prevents style conflicts and improves maintainability. I also configured Prettier for code formatting, ESLint for code consistency, Jest for unit testing, and Husky for pre-commit hooks to ensure code quality and prevent committing errors.

This project follows the Feature-Sliced Design (FSD) architecture, organizing code into layers:

- **entities**: Core business logic (products, cart)
- **features**: User interactions (add to cart)
- **pages**: Application screens
- **shared**: UI components and utilities
- **app**: Application setup and configuration

### Technical Implementation

- **State Management**: Redux Toolkit for global state
- **Data Fetching**: RTK Query for mock API requests
- **Routing**: React Router for navigation
- **Styling**: SCSS modules for component-scoped styling
- **Testing**: Jest for unit testing
- **Build**: Vite for fast development and optimized production builds
- **Deployment**: GitHub Pages
- **Linting**: ESLint with Prettier for code consistency
- **Api**: Mocked API for demonstration purposes
- **Pre-commit**: Husky for pre-commit hooks

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```
