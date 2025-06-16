// Form field names
export const FORM_FIELDS = {
  FIRST_NAME: 'firstName',
  LAST_NAME: 'lastName',
  EMAIL: 'email',
  DATE_OF_BIRTH: 'dateOfBirth',
  PASSWORD: 'password',
  CONFIRM_PASSWORD: 'confirmPassword',
  REMEMBER: 'remember',
  AGREE_TO_TERMS: 'agreeToTerms',
};

// API endpoints (for future use)
export const API_ENDPOINTS = {
  REGISTER: '/api/auth/register',
  LOGIN: '/api/auth/login',
  GOOGLE_AUTH: '/api/auth/google',
};

// External links
export const EXTERNAL_LINKS = {
  TERMS: '/terms',
  PRIVACY: '/privacy',
  FORGOT_PASSWORD: '/forgot-password',
  LOGIN: '/login',
  GOOGLE_PLAY: 'https://play.google.com/store',
  APP_STORE: 'https://www.apple.com/app-store/',
};

// Form validation messages
export const VALIDATION_MESSAGES = {
  REQUIRED: (field) => `${field} is required`,
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_AGE: 'You must be at least 13 years old',
  PASSWORDS_DONT_MATCH: 'Passwords do not match',
  TERMS_REQUIRED: 'You must agree to the terms and privacy policy',
};

// Button variants
export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  OUTLINE: 'outline',
  GHOST: 'ghost',
};

// Input types
export const INPUT_TYPES = {
  TEXT: 'text',
  EMAIL: 'email',
  PASSWORD: 'password',
  DATE: 'date',
  CHECKBOX: 'checkbox',
};