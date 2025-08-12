import React from 'react';

const Header = () => {
  return (
    <header 
      style={{
        position: 'fixed',
        top: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000
      }}
    >
      {/* Navigation Menu Only */}
      <nav 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(1.5rem, 3vw, 3rem)',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: 'clamp(0.5rem, 1.5vw, 0.75rem) clamp(1rem, 3vw, 2rem)',
          borderRadius: 'clamp(1.5rem, 3vw, 2rem)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        <a 
          href="#work" 
          style={{
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = '#00d4aa'}
          onMouseLeave={(e) => e.target.style.color = '#ffffff'}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('work').scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }}
        >
          Work
        </a>
        <a 
          href="#services" 
          style={{
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = '#00d4aa'}
          onMouseLeave={(e) => e.target.style.color = '#ffffff'}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('services').scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }}
        >
          Services
        </a>
        <a 
          href="#culture" 
          style={{
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = '#00d4aa'}
          onMouseLeave={(e) => e.target.style.color = '#ffffff'}
        >
          Culture
        </a>
        <a 
          href="#blog" 
          style={{
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = '#00d4aa'}
          onMouseLeave={(e) => e.target.style.color = '#ffffff'}
        >
          Blog
        </a>
        <a 
          href="#contact" 
          style={{
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = '#00d4aa'}
          onMouseLeave={(e) => e.target.style.color = '#ffffff'}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact').scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }}
        >
          Contact Us
        </a>
      </nav>
    </header>
  );
};

export default Header;
