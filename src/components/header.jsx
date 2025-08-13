import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header 
        style={{
          position: 'fixed',
          top: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000
        }}
      >
        {/* Desktop Navigation Menu - Original Design */}
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
          className="desktop-nav"
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

        {/* Mobile Header Bar - Only for Mobile */}
        <div 
          className="mobile-header"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '1rem',
            padding: '1rem 1.5rem',
            display: 'none',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '90%',
            maxWidth: '400px'
          }}
        >
          {/* Logo - Mobile Only */}
          <div 
            style={{
              color: '#ffffff',
              fontSize: '1.2rem',
              fontWeight: '600',
              fontFamily: 'monospace',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem'
            }}
          >
            <span>LUMINARIX</span>
            <span style={{ color: '#00d4aa' }}></span>
            <span></span>
            <span style={{ color: '#00d4aa' }}></span>
          </div>

          {/* Mobile Burger Menu Button */}
          <button
            onClick={toggleMenu}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: '1rem',
              height: '1rem',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '0',
              zIndex: 1001
            }}
          >
            <span 
              style={{
                width: '100%',
                height: '2px',
                background: '#ffffff',
                borderRadius: '1px',
                transition: 'all 0.3s ease',
                transform: isMenuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none'
              }}
            />
            <span 
              style={{
                width: '100%',
                height: '2px',
                background: '#ffffff',
                borderRadius: '1px',
                transition: 'all 0.3s ease',
                opacity: isMenuOpen ? 0 : 1
              }}
            />
            <span 
              style={{
                width: '100%',
                height: '2px',
                background: '#ffffff',
                borderRadius: '1px',
                transition: 'all 0.3s ease',
                transform: isMenuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none'
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(20px)',
            zIndex: 999,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            paddingTop: '6rem',
            animation: 'slideIn 0.3s ease-out'
          }}
          onClick={closeMenu}
        >
          <nav 
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '1rem 0 0 1rem',
              padding: '2rem',
              marginRight: '1rem',
              minWidth: '250px',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              animation: 'slideInRight 0.3s ease-out'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <a 
              href="#work" 
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '1.2rem',
                fontWeight: '500',
                transition: 'color 0.3s ease',
                padding: '0.5rem 0'
              }}
              onMouseEnter={(e) => e.target.style.color = '#00d4aa'}
              onMouseLeave={(e) => e.target.style.color = '#ffffff'}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('work').scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
                closeMenu();
              }}
            >
              Work
            </a>
            <a 
              href="#services" 
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '1.2rem',
                fontWeight: '500',
                transition: 'color 0.3s ease',
                padding: '0.5rem 0'
              }}
              onMouseEnter={(e) => e.target.style.color = '#00d4aa'}
              onMouseLeave={(e) => e.target.style.color = '#ffffff'}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services').scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
                closeMenu();
              }}
            >
              Services
            </a>
            <a 
              href="#culture" 
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '1.2rem',
                fontWeight: '500',
                transition: 'color 0.3s ease',
                padding: '0.5rem 0'
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
                fontSize: '1.2rem',
                fontWeight: '500',
                transition: 'color 0.3s ease',
                padding: '0.5rem 0'
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
                fontSize: '1.2rem',
                fontWeight: '500',
                transition: 'color 0.3s ease',
                padding: '0.5rem 0'
              }}
              onMouseEnter={(e) => e.target.style.color = '#00d4aa'}
              onMouseLeave={(e) => e.target.style.color = '#ffffff'}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact').scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
                closeMenu();
              }}
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}

      {/* CSS for animations and responsive design */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          
          .mobile-header {
            display: flex !important;
          }
        }

        @media (min-width: 769px) {
          .mobile-header {
            display: none !important;
          }
          
          .desktop-nav {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
