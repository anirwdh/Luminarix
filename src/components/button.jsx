import React, { useState } from 'react';

const Button = ({ children, onClick, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block'
      }}
    >
      {/* Gradient Shadow */}
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'linear-gradient(135deg, #00d4aa 0%, #00ff88 50%, #00d4aa 100%)',
          borderRadius: '2rem',
          filter: 'blur(12px)',
          opacity: '0.6',
          zIndex: -1,
          transform: 'scale(1.1)'
        }}
      />
      
      {/* Main Button */}
      <button
        style={{
          backgroundColor: isHovered ? '#00d4aa' : 'rgba(0, 0, 0, 0.8)',
          border: '1px solid #00d4aa',
          color: isHovered ? '#000000' : '#ffffff',
          padding: '0.75rem 2rem',
          borderRadius: '2rem',
          fontSize: '1rem',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          zIndex: 1,
          outline: 'none',
          whiteSpace: 'nowrap'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        {...props}
      >
        {children}
        <svg 
          style={{ 
            width: '1.2rem', 
            height: '1.2rem',
            transition: 'transform 0.3s ease',
            transform: isHovered ? 'translateX(2px)' : 'translateX(0)'
          }}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M17 8l4 4m0 0l-4 4m4-4H3" 
          />
        </svg>
      </button>
    </div>
  );
};

export default Button;