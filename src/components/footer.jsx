import React from 'react';
import oneVideo from '../assets/Videos/one.mp4';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#000000', 
      color: '#ffffff',
      padding: '4rem 0 2rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Video */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: -2
      }}>
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
            right: 0,
            bottom: 0
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
          background: 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #0d9488 100%)',
          zIndex: -1
        }}></div>
        
        {/* Abstract glossy shapes overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1
        }}>
          {/* Large glossy shape bottom-left */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle, rgba(0, 212, 170, 0.3), rgba(0, 150, 136, 0.2))',
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
            background: 'radial-gradient(circle, rgba(0, 200, 160, 0.25), rgba(0, 140, 126, 0.2))',
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
            background: 'radial-gradient(circle, rgba(0, 180, 150, 0.2), rgba(0, 120, 116, 0.15))',
            borderRadius: '50%',
            filter: 'blur(30px)'
          }}></div>
        </div>
      </div>

      {/* Background Abstract Shapes */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 1,
        opacity: 0.3
      }}>
        {/* Blurred green and blue abstract shapes */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(0, 212, 170, 0.4), rgba(0, 150, 136, 0.2))',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '30%',
          right: '15%',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(33, 150, 243, 0.3), rgba(156, 39, 176, 0.2))',
          borderRadius: '50%',
          filter: 'blur(30px)'
        }}></div>
      </div>

      <div style={{ 
        maxWidth: 'min(90vw, 1400px)', 
        margin: '0 auto', 
        padding: '0 clamp(1rem, 4vw, 3rem)',
        position: 'relative',
        zIndex: 10
      }}>
        
        {/* Middle Section - Information Columns */}
        <div className="footer-columns" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(80vw, 250px), 1fr))', 
          gap: 'clamp(2rem, 4vw, 3rem)',
          marginBottom: 'clamp(2rem, 4vw, 3rem)',
          paddingBottom: 'clamp(2rem, 4vw, 3rem)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          
          {/* About Us Column */}
          <div className="footer-column">
            <h3 style={{ 
              fontSize: 'clamp(1rem, 2vw, 1.125rem)', 
              fontWeight: '600', 
              marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
              color: '#ffffff'
            }}>
              About Us
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.75rem, 1.5vw, 1rem)' }}>
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#00d4aa';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                }}
                onClick={() => {
                  document.getElementById('contact').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>hello@luminarix.com</span>
                <span style={{ color: '#00d4aa', fontSize: '0.875rem' }}>→</span>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
              }}>
                <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>+91 9027224030</span>
                <span style={{ color: '#00d4aa', fontSize: '0.875rem' }}>→</span>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
              }}>
                <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>70-72 Sector 63 Noida</span>
                <span style={{ color: '#00d4aa', fontSize: '0.875rem' }}>→</span>
              </div>
            </div>
          </div>

          {/* Links Column */}
          <div className="footer-column">
            <h3 style={{ 
              fontSize: 'clamp(1rem, 2vw, 1.125rem)', 
              fontWeight: '600', 
              marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
              color: '#ffffff'
            }}>
              Links
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
              <a href="#" style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                textDecoration: 'none', 
                transition: 'color 0.3s ease',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
              }}>Work</a>
              <a href="#" style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                textDecoration: 'none', 
                transition: 'color 0.3s ease',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
              }}>Services</a>
              <a href="#" style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                textDecoration: 'none', 
                transition: 'color 0.3s ease',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
              }}>Culture</a>
              <a href="#" style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                textDecoration: 'none', 
                transition: 'color 0.3s ease',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
              }}>Blog</a>
              <a 
                href="#contact" 
                style={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  textDecoration: 'none', 
                  transition: 'color 0.3s ease',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
                }}
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
            </div>
          </div>

          {/* Social Media Column */}
          <div className="footer-column">
            <h3 style={{ 
              fontSize: 'clamp(1rem, 2vw, 1.125rem)', 
              fontWeight: '600', 
              marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
              color: '#ffffff'
            }}>
              Social Media
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
              <a href="#" style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                textDecoration: 'none', 
                transition: 'color 0.3s ease',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
              }}>Facebook</a>
              <a href="#" style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                textDecoration: 'none', 
                transition: 'color 0.3s ease',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
              }}>Instagram</a>
              <a href="#" style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                textDecoration: 'none', 
                transition: 'color 0.3s ease',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
              }}>Linkedin</a>
              <a href="#" style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                textDecoration: 'none', 
                transition: 'color 0.3s ease',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
              }}>Behance</a>
              <a href="#" style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                textDecoration: 'none', 
                transition: 'color 0.3s ease',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
              }}>Dribble</a>
            </div>
          </div>

          {/* Legal Column */}
          <div className="footer-column">
            <h3 style={{ 
              fontSize: 'clamp(1rem, 2vw, 1.125rem)', 
              fontWeight: '600', 
              marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
              color: '#ffffff'
            }}>
              Legal
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
              <a href="#" style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                textDecoration: 'none', 
                transition: 'color 0.3s ease',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
              }}>Terms of Use</a>
              <a href="#" style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                textDecoration: 'none', 
                transition: 'color 0.3s ease',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
              }}>Privacy Policy</a>
              <a href="#" style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                textDecoration: 'none', 
                transition: 'color 0.3s ease',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
              }}>Cookie Policy</a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Branding and Copyright */}
        <div className="footer-bottom" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'clamp(1rem, 2vw, 2rem)',
          padding: 'clamp(1rem, 2vw, 2rem) 0'
        }}>
          {/* Company Logo */}
          <div style={{ 
            fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', 
            fontWeight: 'bold',
            color: '#ffffff'
          }}>
            L❤minarix{'>'}
          </div>

          {/* Copyright Notice */}
          <div style={{ 
            fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)', 
            color: 'rgba(255, 255, 255, 0.7)',
            textAlign: 'right'
          }}>
            © 2016 - 2025 All rights reserved. Luminarix Studio Ltd.
          </div>
        </div>
      </div>

      {/* CSS for mobile responsiveness */}
      <style jsx>{`
        @media (max-width: 768px) {
          .footer-columns {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            text-align: center;
          }
          
          .footer-column {
            padding: 1rem 0;
          }
          
          .footer-bottom {
            flex-direction: column !important;
            text-align: center !important;
            gap: 1rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .footer-columns {
            gap: 1.5rem !important;
          }
          
          .footer-column h3 {
            margin-bottom: 1rem !important;
          }
          
          .footer-column > div {
            gap: 0.75rem !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
