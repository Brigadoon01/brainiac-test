# Brainiac Test - Registration Form Application

A modern, componentized React application featuring a user registration form with comprehensive validation, built following industry development standards.

## Architecture Overview

This project follows a well-structured, scalable architecture with clear separation of concerns:

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Basic UI components (Input, Button, etc.)
│   ├── forms/           # Form-specific components
│   ├── auth/            # Authentication-related components
│   ├── layout/          # Layout components
│   └── common/          # Common/shared components
├── hooks/               # Custom React hooks
├── pages/               # Page-level components
├── services/            # API and business logic services
├── utils/               # Utility functions and constants
└── styles/              # Global styles and CSS modules
```

## Features

- **Componentized Architecture**: Modular, reusable components with clear responsibilities
- **Custom Form Hook**: Powerful `useForm` hook for form state management and validation
- **Comprehensive Validation**: Email, password strength, age verification, and more
- **Accessibility**: ARIA labels, proper form semantics, and keyboard navigation
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type Safety**: PropTypes validation for all components
- **Service Layer**: Abstracted API calls and business logic
- **Error Handling**: Comprehensive error states and user feedback

## Technology Stack

- **React 19.1.0** - Latest React with modern features
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **React Icons** - Icon library for UI elements
- **PropTypes** - Runtime type checking for React props

## Project Structure

### Components

#### UI Components (`/components/ui/`)
- **Input**: Reusable input component with validation states
- **Button**: Flexible button component with variants and loading states
- **Label**: Accessible label component with required field indicators
- **Checkbox**: Styled checkbox component with error handling

#### Form Components (`/components/forms/`)
- **FormField**: Combines Input and Label for consistent form fields
- **CheckboxField**: Combines Checkbox and Label for form checkboxes

#### Auth Components (`/components/auth/`)
- **RegistrationForm**: Complete registration form with validation

#### Layout Components (`/components/layout/`)
- **HeroSection**: Reusable hero section with image and indicators

#### Common Components (`/components/common/`)
- **AppStoreBadges**: App store download badges

### Hooks (`/hooks/`)
- **useForm**: Custom hook for form state management, validation, and submission

### Services (`/services/`)
- **authService**: Authentication service for registration, login, and OAuth

### Utils (`/utils/`)
- **validation.js**: Validation utility functions
- **constants.js**: Application constants and configuration

## Key Features

### Form Validation
- **Email Validation**: RFC-compliant email format checking
- **Password Strength**: Comprehensive password requirements
- **Age Verification**: Ensures users are at least 13 years old
- **Real-time Validation**: Immediate feedback as users type
- **Accessibility**: Screen reader compatible error messages

### Component Design Principles
- **Single Responsibility**: Each component has a clear, focused purpose
- **Composition over Inheritance**: Components are composed together
- **Prop Validation**: All components use PropTypes for type safety
- **Accessibility First**: ARIA attributes and semantic HTML
- **Performance**: Memoization and optimized re-renders

### State Management
- **Custom Hooks**: Encapsulated form logic in reusable hooks
- **Controlled Components**: All form inputs are controlled
- **Error Boundaries**: Graceful error handling
- **Loading States**: User feedback during async operations

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd brainiac-test
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Styling

The project uses Tailwind CSS with a custom configuration:

- **Responsive Design**: Mobile-first breakpoints
- **Custom Components**: CSS modules for component-specific styles
- **Utility Classes**: Tailwind utilities for rapid development
- **Design System**: Consistent spacing, colors, and typography

## Testing

The project includes comprehensive testing setup:

- **React Testing Library**: Component testing utilities
- **Jest**: Test runner and assertion library
- **User Event**: Simulating user interactions

## Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Responsive layout for tablet screens
- **Desktop**: Full-featured desktop experience
- **Touch Friendly**: Appropriate touch targets and interactions

## Security Considerations

- **Input Validation**: Client-side and server-side validation
- **XSS Prevention**: Proper input sanitization
- **CSRF Protection**: Token-based request validation
- **Secure Headers**: Security headers for production deployment

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Environment Variables

Create a `.env` file for environment-specific configuration:

```env
REACT_APP_API_URL=https://api.example.com
REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- React Icons for the comprehensive icon library