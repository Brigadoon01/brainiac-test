import React, { useCallback, useState, useEffect } from 'react';
import { HeroSection, RegistrationForm, AppStoreBadges } from '../../components';
import { authService } from '../../services';
import './RegistrationPage.css';

const RegistrationPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const handleRegistration = useCallback(async (formData) => {
    try {
      const response = await authService.register(formData);
      
      if (response.success) {
        // Store user data and token
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        
        // Show success message
        alert('Account created successfully!');
        
        // TODO: Redirect to dashboard or home page
        console.log('Registration successful:', response);
      }
    } catch (error) {
      console.error('Registration error:', error);
      throw error; // Re-throw to be handled by the form
    }
  }, []);

  const handleGoogleSignIn = useCallback(async () => {
    try {
      const response = await authService.googleAuth();
      
      if (response.success && response.redirectUrl) {
        // Redirect to Google OAuth
        window.location.href = response.redirectUrl;
      }
    } catch (error) {
      console.error('Google sign-in error:', error);
      alert('Google sign-in failed. Please try again.');
    }
  }, []);

  return (
    <div className="registration-page">
      <div className="registration-page__container">
        {/* Left Panel - Hero Section - Hidden on mobile */}
        {!isMobile && (
          <div className="registration-page__hero">
            <HeroSection
              title="Social media shared today, tomorrow or by location"
              imageSrc="/assets/authImage.png"
              imageAlt="App preview showing social media interface"
              indicators={3}
              activeIndicator={0}
            />
          </div>
        )}

        {/* Right Panel - Registration Form */}
        <div className="registration-page__form">
          <div className="registration-page__form-content">
            <RegistrationForm
              onSubmit={handleRegistration}
              onGoogleSignIn={handleGoogleSignIn}
            />
            
            <div className="registration-page__app-badges">
              <AppStoreBadges />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;