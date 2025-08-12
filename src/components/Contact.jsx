import React, { useState } from 'react';
import oneVideo from '../assets/Videos/one.mp4';

const Contact = () => {
  // Form state
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Form validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const company = formData.get('company');

    // Reset previous errors
    setFormErrors({});

    // Check if all required fields are filled
    if (!name || !email || !phone) {
      setFormErrors({ general: 'Please fill in all required fields (Name, Email, and Phone are required).' });
      alert('Please fill in all required fields (Name, Email, and Phone are required).');
      return;
    }

    // Validate email format
    if (!validateEmail(email)) {
      setFormErrors({ email: 'Please enter a valid email address.' });
      alert('Please enter a valid email address.');
      return;
    }

    // Validate phone number (10 digits)
    if (!validatePhone(phone)) {
      setFormErrors({ phone: 'Please enter a valid 10-digit phone number.' });
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    try {
      // Set loading state
      setIsSubmitting(true);
      
      // Submit to Formspree using fetch
      const response = await fetch('https://formspree.io/f/myzplpwq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          company
        })
      });

      if (response.ok) {
        // Show success message
        setShowSuccessMessage(true);
        
        // Reset form fields
        e.target.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
      } else {
        // Handle submission error
        setFormErrors({ general: 'Failed to send message. Please try again later.' });
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      // Handle network error
      setFormErrors({ general: 'Network error. Please check your connection and try again.' });
      alert('Network error. Please check your connection and try again.');
    } finally {
      // Reset loading state
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" style={{ minHeight: '100vh', color: '#ffffff', position: 'relative', overflow: 'hidden' }}>
      {/* Background Video */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1
          }}
        >
          <source src={oneVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Fallback background if video fails */}
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          background: 'linear-gradient(135deg, #065f46 0%, #047857 50%, #0d9488 100%)',
          zIndex: -2
        }}></div>
        
        {/* Dark overlay for better text readability */}
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: -1
        }}></div>
        
        {/* Abstract glossy shapes overlay */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
          {/* Large glossy shape bottom-left */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(ellipse at top right, rgba(20, 83, 45, 0.3), rgba(6, 95, 70, 0.2))',
            borderRadius: '50%',
            filter: 'blur(60px)'
          }}></div>
          
          {/* Medium glossy shape center */}
          <div style={{
            position: 'absolute',
            bottom: '25%',
            left: '33%',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(ellipse at center, rgba(6, 95, 70, 0.25), rgba(20, 83, 45, 0.2))',
            borderRadius: '50%',
            filter: 'blur(40px)'
          }}></div>
          
          {/* Small glossy shape top-right */}
          <div style={{
            position: 'absolute',
            top: '25%',
            right: '25%',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(ellipse at bottom left, rgba(6, 95, 70, 0.2), rgba(20, 83, 45, 0.15))',
            borderRadius: '50%',
            filter: 'blur(30px)'
          }}></div>
          

        </div>
      </div>

              {/* Main Content */}
        <div style={{ 
          display: 'flex', 
          padding: '4rem',
          gap: '4rem',
          maxWidth: '1600px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 30
        }}>
        
        {/* Left Section - Contact Information */}
        <div style={{ flex: '1', paddingTop: '2rem' }}>
          {/* Breadcrumbs */}
          <div style={{ 
            fontSize: '0.875rem', 
            color: 'rgba(255, 255, 255, 0.7)', 
            marginBottom: '3rem' 
          }}>
           
          </div>
          
          {/* Main Heading */}
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            fontWeight: '700', 
            lineHeight: '1.1',
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #00d4aa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Let's make magic happen
          </h1>
          
          {/* Contact Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <div style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem' }}>
                Prefer a call?
              </div>
              <div style={{ fontSize: '1rem', fontWeight: '500' }}>
                +91 9027224030
              </div>
            </div>
            
            <div>
              <div style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem' }}>
                Drop us a line at
              </div>
              <div style={{ fontSize: '1rem', fontWeight: '500' }}>
                hello@luminarix.com
              </div>
            </div>
            
            <div>
              <div style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem' }}>
                Drop by our office
              </div>
              <div style={{ fontSize: '1rem', fontWeight: '500' }}>
                70-72 sector 63.<br />
                
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Section - Contact Form */}
        <div style={{ flex: '1' }}>
          {/* Form Title */}
          <h2 style={{ 
            fontSize: '1.25rem', 
            fontWeight: '600', 
            marginBottom: '1.5rem' 
          }}>
            Enter your contact details
          </h2>
          
          {/* Contact Form */}
          <form onSubmit={handleFormSubmit} style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1rem',
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '3rem',
            borderRadius: '0.75rem',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            {/* Full Width Input */}
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontSize: '0.75rem',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                Your name *
              </label>
              <input 
                name="name"
                type="text" 
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '0.5rem',
                  color: '#ffffff',
                  fontSize: '0.875rem'
                }}
              />
            </div>
            
            {/* Half Width Inputs Row */}
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between' }}>
              <div style={{ width: 'calc(50% - 2rem)' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontSize: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}>
                  Your email *
                </label>
                <input 
                  name="email"
                  type="email" 
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '0.5rem',
                    color: '#ffffff',
                    fontSize: '0.875rem'
                  }}
                />
              </div>
              
              <div style={{ width: 'calc(50% - 0.5rem)' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontSize: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}>
                  Your phone *
                </label>
                <input 
                  name="phone"
                  type="tel" 
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '0.5rem',
                    color: '#ffffff',
                    fontSize: '0.875rem'
                  }}
                />
              </div>
            </div>
            
            {/* Full Width Input with Info Icon */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <label style={{ 
                  fontSize: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}>
                  Company name / project name
                </label>
                <div style={{ 
                  width: '14px', 
                  height: '14px', 
                  backgroundColor: 'rgba(255, 255, 255, 0.3)', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.625rem',
                  cursor: 'pointer'
                }}>
                  ?
                </div>
              </div>
              <input 
                name="company"
                type="text" 
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '0.5rem',
                  color: '#ffffff',
                  fontSize: '0.875rem'
                }}
              />
            </div>
            
            {/* Checkboxes */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.75rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <div style={{ 
                  width: '16px', 
                  height: '16px', 
                  border: '2px solid #00d4aa', 
                  borderRadius: '3px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#00d4aa'
                }}>
                  <span style={{ color: '#000000', fontSize: '0.75rem', fontWeight: 'bold' }}>✓</span>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                  I have read & I agree with the privacy policy
                </span>
              </label>
              
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <div style={{ 
                  width: '16px', 
                  height: '16px', 
                  border: '2px solid #00d4aa', 
                  borderRadius: '3px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#00d4aa'
                }}>
                  <span style={{ color: '#000000', fontSize: '0.75rem', fontWeight: 'bold' }}>✓</span>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                  I have read & I agree with the terms & conditions
                </span>
              </label>
            </div>
            
            {/* Submit Button */}
            <button 
              type="submit"
              disabled={isSubmitting}
              style={{
                backgroundColor: 'transparent',
                color: '#ffffff',
                border: '1px solid #00d4aa',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                marginTop: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                opacity: isSubmitting ? 0.6 : 1
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send message'} <span>→</span>
            </button>

            {/* Success Message */}
            {showSuccessMessage && (
              <div style={{
                backgroundColor: 'rgba(0, 212, 170, 0.1)',
                border: '1px solid #00d4aa',
                borderRadius: '0.5rem',
                padding: '1rem',
                color: '#00d4aa',
                fontSize: '0.875rem',
                textAlign: 'center',
                marginTop: '1rem'
              }}>
                Message sent successfully! We'll get back to you soon.
              </div>
            )}

            {/* Error Message */}
            {formErrors.general && (
              <div style={{
                backgroundColor: 'rgba(255, 0, 0, 0.1)',
                border: '1px solid #ff0000',
                borderRadius: '0.5rem',
                padding: '1rem',
                color: '#ff0000',
                fontSize: '0.875rem',
                textAlign: 'center',
                marginTop: '1rem'
              }}>
                {formErrors.general}
              </div>
            )}
          </form>
          
          {/* Additional Contact Options */}
          <div style={{ marginTop: '2rem' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'flex-start',
              gap: '1rem'
            }}>
              {/* Start a project */}
              <div style={{ flex: '1', textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '0.65rem', 
                  color: 'rgba(255, 255, 255, 0.6)', 
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                  letterSpacing: '0.05em'
                }}>
                  Start a project
                </div>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '1.5rem',
                  padding: '0.5rem 0.75rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '0.75rem',
                  fontFamily: 'monospace'
                }}>
                  hello@luminarix.com
                </div>
              </div>
              
              {/* Partner with us */}
              <div style={{ flex: '1', textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '0.65rem', 
                  color: 'rgba(255, 255, 255, 0.6)', 
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                  letterSpacing: '0.05em'
                }}>
                  Partner with us
                </div>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '1.5rem',
                  padding: '0.5rem 0.75rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '0.75rem',
                  fontFamily: 'monospace'
                }}>
                  partner@luminarix.com
                </div>
              </div>
              
              {/* Work with us */}
              <div style={{ flex: '1', textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '0.65rem', 
                  color: 'rgba(255, 255, 255, 0.6)', 
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                  letterSpacing: '0.05em'
                }}>
                  Work with us
                </div>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '1.5rem',
                  padding: '0.5rem 0.75rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '0.75rem',
                  fontFamily: 'monospace'
                }}>
                  hr@luminarix.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
