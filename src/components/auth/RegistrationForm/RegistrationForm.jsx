import React, { useMemo, useState, useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineCalendarDays } from 'react-icons/hi2';
import { Button } from '../../ui';
import { FormField, CheckboxField } from '../../forms';
import { useForm } from '../../../hooks';
import { 
  validateEmail, 
  validatePassword, 
  validateAge, 
  validateRequired, 
  validatePasswordConfirmation,
  FORM_FIELDS,
  INPUT_TYPES,
  EXTERNAL_LINKS,
  VALIDATION_MESSAGES
} from '../../../utils';

const RegistrationForm = ({ onSubmit, onGoogleSignIn }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // Initial form values
  const initialValues = {
    [FORM_FIELDS.FIRST_NAME]: '',
    [FORM_FIELDS.LAST_NAME]: '',
    [FORM_FIELDS.EMAIL]: '',
    [FORM_FIELDS.DATE_OF_BIRTH]: '',
    [FORM_FIELDS.PASSWORD]: '',
    [FORM_FIELDS.CONFIRM_PASSWORD]: '',
    [FORM_FIELDS.REMEMBER]: false,
    [FORM_FIELDS.AGREE_TO_TERMS]: false,
  };

  // Validation schema
  const validationSchema = (values) => {
    const errors = {};

    // Required field validation
    const requiredError = validateRequired(values[FORM_FIELDS.FIRST_NAME], 'First name');
    if (requiredError) errors[FORM_FIELDS.FIRST_NAME] = requiredError;

    const lastNameError = validateRequired(values[FORM_FIELDS.LAST_NAME], 'Last name');
    if (lastNameError) errors[FORM_FIELDS.LAST_NAME] = lastNameError;

    const emailRequiredError = validateRequired(values[FORM_FIELDS.EMAIL], 'Email');
    if (emailRequiredError) errors[FORM_FIELDS.EMAIL] = emailRequiredError;

    const dobError = validateRequired(values[FORM_FIELDS.DATE_OF_BIRTH], 'Date of birth');
    if (dobError) errors[FORM_FIELDS.DATE_OF_BIRTH] = dobError;

    const passwordRequiredError = validateRequired(values[FORM_FIELDS.PASSWORD], 'Password');
    if (passwordRequiredError) errors[FORM_FIELDS.PASSWORD] = passwordRequiredError;

    const confirmPasswordError = validateRequired(values[FORM_FIELDS.CONFIRM_PASSWORD], 'Confirm password');
    if (confirmPasswordError) errors[FORM_FIELDS.CONFIRM_PASSWORD] = confirmPasswordError;

    // Email validation
    if (values[FORM_FIELDS.EMAIL] && !validateEmail(values[FORM_FIELDS.EMAIL])) {
      errors[FORM_FIELDS.EMAIL] = VALIDATION_MESSAGES.INVALID_EMAIL;
    }

    // Age validation
    if (values[FORM_FIELDS.DATE_OF_BIRTH] && !validateAge(values[FORM_FIELDS.DATE_OF_BIRTH])) {
      errors[FORM_FIELDS.DATE_OF_BIRTH] = VALIDATION_MESSAGES.INVALID_AGE;
    }

    // Password validation
    if (values[FORM_FIELDS.PASSWORD]) {
      const passwordErrors = validatePassword(values[FORM_FIELDS.PASSWORD]);
      if (passwordErrors.length > 0) {
        errors[FORM_FIELDS.PASSWORD] = passwordErrors[0];
      }
    }

    // Confirm password validation
    const passwordConfirmError = validatePasswordConfirmation(
      values[FORM_FIELDS.PASSWORD], 
      values[FORM_FIELDS.CONFIRM_PASSWORD]
    );
    if (passwordConfirmError) {
      errors[FORM_FIELDS.CONFIRM_PASSWORD] = passwordConfirmError;
    }

    // Terms agreement validation
    if (!values[FORM_FIELDS.AGREE_TO_TERMS]) {
      errors[FORM_FIELDS.AGREE_TO_TERMS] = VALIDATION_MESSAGES.TERMS_REQUIRED;
    }

    return errors;
  };

  const {
    values,
    errors,
    isSubmitting,
    getFieldProps,
    handleSubmit,
  } = useForm(initialValues, validationSchema);

  // Memoized date input max value (today)
  const maxDate = useMemo(() => {
    return new Date().toISOString().split('T')[0];
  }, []);

  const handleFormSubmit = handleSubmit(async (formData) => {
    if (onSubmit) {
      await onSubmit(formData);
    }
  });

  const handleGoogleClick = () => {
    if (onGoogleSignIn) {
      onGoogleSignIn();
    }
  };

  return (
    <div style={{
      backgroundColor: 'white',
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
      paddingTop: '2.5rem',
      paddingBottom: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      maxWidth: '43rem',
      marginLeft: 'auto',
      marginRight: 'auto'
    }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.75rem',
          marginBottom: '1rem' 
        }}>
          <img 
            src="/assets/logo.png" 
            alt="Capzul" 
            style={{ height: '2.5rem' }}
            loading="eager"
          />
          <span style={{ 
            fontSize: '1rem', 
            fontWeight: '600',
            color: '#1D1D1D'
          }}>
            Capzul
          </span>
        </div>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: '600', 
          marginBottom: '0.25rem' 
        }}>Create account</h2>
        <p style={{ 
          color: '#6b7280', 
          fontSize: '0.875rem' 
        }}>For business, band or celebrity.</p>
      </div>

      <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} noValidate>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
          gap: '1.5rem' 
        }}>
          <FormField
            id={FORM_FIELDS.FIRST_NAME}
            label="First name"
            placeholder=""
            required
            autoComplete="given-name"
            {...getFieldProps(FORM_FIELDS.FIRST_NAME)}
          />

          <FormField
            id={FORM_FIELDS.LAST_NAME}
            label="Last name"
            placeholder=""
            required
            autoComplete="family-name"
            {...getFieldProps(FORM_FIELDS.LAST_NAME)}
          />

          <FormField
            id={FORM_FIELDS.EMAIL}
            label="Email or phone number"
            type={INPUT_TYPES.EMAIL}
            placeholder=""
            required
            autoComplete="email"
            {...getFieldProps(FORM_FIELDS.EMAIL)}
          />

          <FormField
            id={FORM_FIELDS.DATE_OF_BIRTH}
            label="Date of birth (dd/mm/yyyy)"
            type={INPUT_TYPES.DATE}
            placeholder=""
            required
            max={maxDate}
            autoComplete="bday"
            style={{ cursor: 'pointer' }}
            {...getFieldProps(FORM_FIELDS.DATE_OF_BIRTH)}
          />

          <FormField
            id={FORM_FIELDS.PASSWORD}
            label="Password"
            type={INPUT_TYPES.PASSWORD}
            placeholder=""
            required
            autoComplete="new-password"
            {...getFieldProps(FORM_FIELDS.PASSWORD)}
          />

          <FormField
            id={FORM_FIELDS.CONFIRM_PASSWORD}
            label="Confirm password"
            type={INPUT_TYPES.PASSWORD}
            placeholder=""
            required
            autoComplete="new-password"
            {...getFieldProps(FORM_FIELDS.CONFIRM_PASSWORD)}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '2rem', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
            <CheckboxField
              id={FORM_FIELDS.REMEMBER}
              checked={values[FORM_FIELDS.REMEMBER]}
              onChange={(checked) => getFieldProps(FORM_FIELDS.REMEMBER).onChange(checked)}
            >
              Remember me
            </CheckboxField>

            <CheckboxField
              id={FORM_FIELDS.AGREE_TO_TERMS}
              checked={values[FORM_FIELDS.AGREE_TO_TERMS]}
              onChange={(checked) => getFieldProps(FORM_FIELDS.AGREE_TO_TERMS).onChange(checked)}
              error={errors[FORM_FIELDS.AGREE_TO_TERMS]}
              required
            >
              <span style={{ fontSize: '0.875rem', lineHeight: '1.25' }}>
                I agree to all the{' '}
                <a 
                  href={EXTERNAL_LINKS.TERMS}
                  style={{
                    textDecoration: 'none',
                    color: '#2563eb',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#1d4ed8'}
                  onMouseLeave={(e) => e.target.style.color = '#2563eb'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms
                </a>
                {' '}and{' '}
                <a 
                  href={EXTERNAL_LINKS.PRIVACY}
                  style={{
                    textDecoration: 'none',
                    color: '#2563eb',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#1d4ed8'}
                  onMouseLeave={(e) => e.target.style.color = '#2563eb'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy policy
                </a>
              </span>
            </CheckboxField>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <a 
              href={EXTERNAL_LINKS.FORGOT_PASSWORD}
              style={{
                textDecoration: 'underline',
                color: '#2563eb',
                transition: 'color 0.2s',
                fontSize: '0.875rem'
              }}
              onMouseEnter={(e) => e.target.style.color = '#1d4ed8'}
              onMouseLeave={(e) => e.target.style.color = '#2563eb'}
            >
              Forgot password?
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          {errors.submit && (
            <div style={{ color: '#ef4444', fontSize: '0.875rem', textAlign: 'center' }} role="alert">
              {errors.submit}
            </div>
          )}

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Button 
              type="submit" 
              loading={isSubmitting}
              style={{ flex: 1 }}
            >
              {isSubmitting ? 'Creating Account...' : 'Create account'}
            </Button>

            <Button 
              variant="outline" 
              onClick={handleGoogleClick}
              disabled={isSubmitting}
              style={{ 
                flex: 1,
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: '0.5rem' ,
                backgroundColor: '#2D3748', 
                color: '#ffffff'
              }}
            >
              <FcGoogle style={{ width: '1.25rem', height: '1.25rem' }} /> 
              Sign-in with Google
            </Button>
          </div>

          <p style={{ textAlign: 'center', fontSize: '0.875rem' }}>
            Already have an account?{' '}
            <a 
              href={EXTERNAL_LINKS.LOGIN}
              style={{
                textDecoration: 'none',
                color: '#2563eb',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#1d4ed8'}
              onMouseLeave={(e) => e.target.style.color = '#2563eb'}
            >
              Log In
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;