import React from 'react';
import oneVideo from '../assets/Videos/one.mp4';
import Header from '../components/header';
import Button from '../components/button';
import Contact from '../components/Contact';
import Footer from '../components/footer';

const Homescreen = () => {
  console.log('Homescreen component rendering');
  
  // Add CSS animation for auto-scrolling reviews and responsive design
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scrollLeft {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      
      .auto-scroll-reviews {
        animation: scrollLeft 30s linear infinite;
      }
      
      .auto-scroll-reviews:hover {
        animation-play-state: paused;
      }
      
      /* Responsive design improvements */
      @media (max-width: 1200px) {
        .responsive-container {
          padding: 0 clamp(1rem, 3vw, 2rem);
        }
      }
      
      @media (max-width: 768px) {
        .responsive-container {
          padding: 0 1rem;
        }
      }
      
      /* Ensure smooth scrolling on all devices */
      html {
        scroll-behavior: smooth;
      }
      
      /* Better touch targets for mobile */
      @media (max-width: 768px) {
        button, a {
          min-height: 44px;
          min-width: 44px;
        }
        
        /* Mobile hero adjustments */
        .hero-title {
          font-size: clamp(1.8rem, 5vw, 3rem) !important;
          line-height: 1.1 !important;
          gap: 0.5rem !important;
          flex-direction: column !important;
        }
        
        .hero-subtitle {
          font-size: clamp(0.7rem, 1.2vw, 1.2rem) !important;
          margin-bottom: clamp(-1.5rem, -2vw, -2rem) !important;
        }
        
        .hero-description {
          font-size: clamp(0.7rem, 1.3vw, 1.2rem) !important;
          max-width: 90vw !important;
          padding: 0 1rem !important;
        }
        
        .responsive-container {
          padding: 0 1rem !important;
          height: auto !important;
          min-height: 100vh !important;
        }
      }
      
      @media (max-width: 480px) {
        .hero-title {
          font-size: clamp(1.5rem, 4vw, 2.5rem) !important;
          gap: 0.25rem !important;
        }
        
        .hero-subtitle {
          font-size: clamp(0.65rem, 1vw, 1rem) !important;
          margin-bottom: clamp(-1rem, -1.5vw, -1.5rem) !important;
        }
        
        .hero-description {
          font-size: clamp(0.65rem, 1.2vw, 1rem) !important;
          padding: 0 0.75rem !important;
        }
        
        .responsive-container {
          padding: 0 0.75rem !important;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <>
      <Header />
      <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', zIndex: 1, margin: 0, padding: 0 }}>
      {/* Background Video */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'fill',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            minWidth: '100%',
            minHeight: '100%',
            zIndex: -1
          }}
        >
          <source src={oneVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Fallback background if video fails */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900"></div>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 w-full h-full bg-black/40"></div>
        
        {/* Abstract glossy shapes overlay */}
        <div className="absolute inset-0 w-full h-full">
          {/* Large glossy shape bottom-left */}
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-teal-900/30 to-emerald-800/20 rounded-full blur-3xl"></div>
          
          {/* Medium glossy shape center */}
          <div className="absolute bottom-1/4 left-1/3 w-full h-full bg-gradient-to-br from-teal-800/25 to-emerald-700/20 rounded-full blur-2xl"></div>
          
          {/* Small glossy shape top-right */}
          <div className="absolute top-1/4 right-1/4 w-full h-full bg-gradient-to-bl from-teal-700/20 to-emerald-600/15 rounded-full blur-xl"></div>
          
          {/* Subtle grid lines */}
          <div className="absolute inset-0 w-full h-full opacity-10">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute top-0 w-px h-full bg-teal-400"
                style={{ left: `${i * 5}%` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ 
        position: 'relative', 
        zIndex: 30, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '100%', 
        height: '100%', 
        padding: '0 clamp(1rem, 4vw, 3rem)', 
        margin: 0 
      }}>
        <div className="text-center" style={{ 
          maxWidth: 'min(90vw, 1400px)', 
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%'
        }}>
          {/* Subtitle */}
          <h2 
            style={{
              color: '#ffffff',
              fontSize: 'clamp(0.875rem, 1.5vw, 1.5rem)',
              fontWeight: '500',
              letterSpacing: 'clamp(0.2em, 0.35em, 0.5em)',
              marginBottom: 'clamp(-3rem, -5vw, -5rem)',
              textTransform: 'uppercase',
              opacity: '0.9',
              textAlign: 'center'
            }}
          >
            WEB & APP DEV
          </h2>
          
          {/* Main Title */}
          <h1 
            style={{
              fontSize: 'clamp(4rem, 8vw, 8rem)',
              fontWeight: '900',
              lineHeight: '1.2',
              marginBottom: 'clamp(1.5rem, 3vw, 3rem)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              gap: '1rem'
            }}
          >
            <span 
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #00d4aa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block'
              }}
            >
              Creative
            </span>
            <span 
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #00d4aa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block'
              }}
            >
              Agency
            </span>
            
          </h1>
          
          {/* Description */}
          <p 
            style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: 'clamp(0.875rem, 1.8vw, 1.5rem)',
              lineHeight: '1.6',
              maxWidth: 'min(80vw, 70rem)',
              margin: '0 auto clamp(2rem, 4vw, 4rem) auto',
              textAlign: 'center',
              fontWeight: '400',
              padding: '0 clamp(1rem, 2vw, 2rem)'
            }}
          >
            Luminarix Studio crafts exceptional digital experiences that transform brands and captivate audiences. We're the strategic partner that brings your vision to life.
          </p>
          
          {/* Call-to-Action Button */}
          <div style={{ 
            margin: '0 auto',
            transform: 'scale(clamp(0.8, 1, 1.2))'
          }}>
            <Button onClick={() => {
              document.getElementById('contact').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}>
              Start a project
            </Button>
          </div>
        </div>
      </div>
    </div>

    {/* Work Section */}
    <section 
      id="work"
      style={{
        backgroundColor: '#000000',
        padding: '8rem 0',
        minHeight: '100vh',
        position: 'relative',
        zIndex: 10,
        width: '100vw',
        margin: 0,
        boxSizing: 'border-box'
      }}
    >
      <div 
        style={{
          maxWidth: 'min(90vw, 1400px)',
          margin: '0 auto',
          padding: '0 clamp(1rem, 4vw, 3rem)'
        }}
      >
        {/* Section Header */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
            flexWrap: 'wrap',
            gap: '2rem'
          }}
        >
          <div>
            <h2 
              style={{
                color: '#ffffff',
                fontSize: 'clamp(2rem, 4vw, 5rem)',
                fontWeight: '700',
                lineHeight: '1.1',
                marginBottom: 'clamp(0.5rem, 1vw, 1rem)'
              }}
            >
              Turning Vision
            </h2>
            <h2 
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #00d4aa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: 'clamp(2rem, 4vw, 5rem)',
                fontWeight: '700',
                lineHeight: '1.1',
                margin: 0
              }}
            >
              Into Voltage
            </h2>
          </div>
          
          
        </div>

        {/* Project Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(90vw, 400px), 1fr))',
            gap: 'clamp(1rem, 3vw, 2rem)',
            alignItems: 'start'
          }}
        >
          {/* Project 1 - Break A Leg */}
          <div 
            style={{
              backgroundColor: '#111111',
              borderRadius: '1.5rem',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-8px)';
              const video = e.target.querySelector('video');
              if (video) video.play();
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              const video = e.target.querySelector('video');
              if (video) video.pause();
            }}
          >
            {/* Project Video */}
            <div 
              style={{
                borderRadius: '1rem',
                height: '300px',
                marginBottom: '2rem',
                overflow: 'hidden'
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              >
                <source src="/src/assets/Videos/sceneapp.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Project Tags */}
            <div 
              style={{
                display: 'flex',
                gap: '0.5rem',
                marginBottom: '1.5rem'
              }}
            >
              <span 
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  padding: '0.5rem 1rem',
                  borderRadius: '1rem',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
              >
                UX/UI Design
              </span>
              <span 
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  padding: '0.5rem 1rem',
                  borderRadius: '1rem',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
              >
                Development
              </span>
            </div>

            {/* Project Title */}
            <h3 
              style={{
                color: '#ffffff',
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '1rem'
              }}
            >
              Break A Leg
            </h3>

            {/* Project Description */}
            <p 
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '1rem',
                lineHeight: '1.6',
                margin: 0
              }}
            >
              Building a vibrant website that connects audiences with live theatre shows—making culture more accessible and engaging.
            </p>
          </div>

          {/* Project 2 - Black Friday by Intellect */}
          <div 
            style={{
              backgroundColor: '#111111',
              borderRadius: '1.5rem',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-8px)';
              const video = e.target.querySelector('video');
              if (video) video.play();
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              const video = e.target.querySelector('video');
              if (video) video.pause();
            }}
          >
            {/* Project Video */}
            <div 
              style={{
                borderRadius: '1rem',
                height: '300px',
                marginBottom: '2rem',
                overflow: 'hidden'
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              >
                <source src="/src/assets/Videos/tripnova.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Project Tags */}
            <div 
              style={{
                display: 'flex',
                gap: '0.5rem',
                marginBottom: '1.5rem'
              }}
            >
              <span 
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  padding: '0.5rem 1rem',
                  borderRadius: '1rem',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
              >
                UX/UI Design
              </span>
              <span 
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  padding: '0.5rem 1rem',
                  borderRadius: '1rem',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
              >
                Development
              </span>
            </div>

            {/* Project Title */}
            <h3 
              style={{
                color: '#ffffff',
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '1rem'
              }}
            >
              Black friday by Intellect
            </h3>

            {/* Project Description */}
            <p 
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '1rem',
                lineHeight: '1.6',
                margin: 0
              }}
            >
              Launching a bold campaign that drives engagement and sales—bringing exclusive Black Friday offers to the spotlight.
            </p>
          </div>

          {/* Project 3 - TechFlow */}
          <div 
            style={{
              backgroundColor: '#111111',
              borderRadius: '1.5rem',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-8px)';
              const video = e.target.querySelector('video');
              if (video) video.play();
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              const video = e.target.querySelector('video');
              if (video) video.pause();
            }}
          >
            {/* Project Video */}
            <div 
              style={{
                borderRadius: '1rem',
                height: '300px',
                marginBottom: '2rem',
                overflow: 'hidden'
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              >
                <source src="/src/assets/Videos/kansa.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Project Tags */}
            <div 
              style={{
                display: 'flex',
                gap: '0.5rem',
                marginBottom: '1.5rem'
              }}
            >
              <span 
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  padding: '0.5rem 1rem',
                  borderRadius: '1rem',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
              >
                UX/UI Design
              </span>
              <span 
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  padding: '0.5rem 1rem',
                  borderRadius: '1rem',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
              >
                Mobile Development
              </span>
            </div>

            {/* Project Title */}
            <h3 
              style={{
                color: '#ffffff',
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '1rem'
              }}
            >
              TechFlow
            </h3>

            {/* Project Description */}
            <p 
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '1rem',
                lineHeight: '1.6',
                margin: 0
              }}
            >
              Creating a seamless mobile experience for productivity workflows—streamlining task management and team collaboration.
            </p>
          </div>

          {/* Project 4 - EcoCart */}
          <div 
            style={{
              backgroundColor: '#111111',
              borderRadius: '1.5rem',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-8px)';
              const video = e.target.querySelector('video');
              if (video) video.play();
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              const video = e.target.querySelector('video');
              if (video) video.pause();
            }}
          >
            {/* Project Video */}
            <div 
              style={{
                borderRadius: '1rem',
                height: '300px',
                marginBottom: '2rem',
                overflow: 'hidden'
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              >
                <source src="/src/assets/Videos/recess.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Project Tags */}
            <div 
              style={{
                display: 'flex',
                gap: '0.5rem',
                marginBottom: '1.5rem'
              }}
            >
              <span 
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  padding: '0.5rem 1rem',
                  borderRadius: '1rem',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
              >
                E-commerce
              </span>
              <span 
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  padding: '0.5rem 1rem',
                  borderRadius: '1rem',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
              >
                Full Stack
              </span>
            </div>

            {/* Project Title */}
            <h3 
              style={{
                color: '#ffffff',
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '1rem'
              }}
            >
              EcoCart
            </h3>

            {/* Project Description */}
            <p 
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '1rem',
                lineHeight: '1.6',
                margin: 0
              }}
            >
              Building a sustainable shopping platform that connects eco-conscious consumers with green products and ethical brands.
            </p>
          </div>

          {/* Project 5 - DataViz Pro */}
          <div 
            style={{
              backgroundColor: '#111111',
              borderRadius: '1.5rem',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-8px)';
              const video = e.target.querySelector('video');
              if (video) video.play();
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              const video = e.target.querySelector('video');
              if (video) video.pause();
            }}
          >
            {/* Project Video */}
            <div 
              style={{
                borderRadius: '1rem',
                height: '300px',
                marginBottom: '2rem',
                overflow: 'hidden'
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              >
                <source src="/src/assets/Videos/scenweb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Project Tags */}
            <div 
              style={{
                display: 'flex',
                gap: '0.5rem',
                marginBottom: '1.5rem'
              }}
            >
              <span 
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  padding: '0.5rem 1rem',
                  borderRadius: '1rem',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
              >
                Data Visualization
              </span>
              <span 
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  padding: '0.5rem 1rem',
                  borderRadius: '1rem',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
              >
                React
              </span>
            </div>

            {/* Project Title */}
            <h3 
              style={{
                color: '#ffffff',
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '1rem'
              }}
            >
              DataViz Pro
            </h3>

            {/* Project Description */}
            <p 
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '1rem',
                lineHeight: '1.6',
                margin: 0
              }}
            >
              Designing intuitive data visualization tools that transform complex analytics into actionable business insights.
            </p>
          </div>

          {/* Project 6 - HealthHub */}
          <div 
            style={{
              backgroundColor: '#111111',
              borderRadius: '1.5rem',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-8px)';
              const video = e.target.querySelector('video');
              if (video) video.play();
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              const video = e.target.querySelector('video');
              if (video) video.pause();
            }}
          >
            {/* Project Video */}
            <div 
              style={{
                borderRadius: '1rem',
                height: '300px',
                marginBottom: '2rem',
                overflow: 'hidden'
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              >
                <source src="/src/assets/Videos/nanocart.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Project Tags */}
            <div 
              style={{
                display: 'flex',
                gap: '0.5rem',
                marginBottom: '1.5rem'
              }}
            >
              <span 
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  padding: '0.5rem 1rem',
                  borderRadius: '1rem',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
              >
                Healthcare
              </span>
              <span 
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  padding: '0.5rem 1rem',
                  borderRadius: '1rem',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
              >
                UI/UX
              </span>
            </div>

            {/* Project Title */}
            <h3 
              style={{
                color: '#ffffff',
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '1rem'
              }}
            >
              HealthHub
            </h3>

            {/* Project Description */}
            <p 
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '1rem',
                lineHeight: '1.6',
                margin: 0
              }}
            >
              Developing a comprehensive healthcare platform that connects patients with providers for seamless medical care coordination.
            </p>
          </div>
        </div>

        {/* Bottom Text */}
        <div 
          style={{
            textAlign: 'left',
            marginTop: '6rem',
            width: '100%',
            padding: '0 2rem'
          }}
        >
          <h2 
            style={{
              color: '#ffffff',
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              fontWeight: '400',
              lineHeight: '1.4',
              marginBottom: '3rem',
              width: '100%',
              maxWidth: 'none',
              textAlign: 'left'
            }}
          >
            In a world of digital noise, we create signal. Our work cuts through<br/>
            the chaos with strategic clarity and creative courage, transforming<br/>
            passive viewers into active participants in your brand's journey.
          </h2>
          
          {/* Call-to-Action Button */}
          <Button onClick={() => {
            document.getElementById('contact').scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }}>
            Start a project
          </Button>
        </div>
      </div>
    </section>

    {/* Services Section */}
    <section 
      id="services"
      style={{
        backgroundColor: '#000000',
        padding: '6rem 0',
        position: 'relative',
        zIndex: 10,
        width: '100vw',
        margin: 0,
        boxSizing: 'border-box'
      }}
    >
      <div 
        style={{
          maxWidth: 'min(90vw, 1400px)',
          margin: '0 auto',
          padding: '0 clamp(1rem, 4vw, 3rem)'
        }}
      >
        {/* Section Header */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
            flexWrap: 'wrap',
            gap: '2rem'
          }}
        >
          <h2 
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #00d4aa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: 'clamp(1.5rem, 3vw, 4rem)',
              fontWeight: '600',
              margin: 0
            }}
          >
            Our Services
          </h2>
          
          {/* Learn More Button */}
          <button 
            style={{
              backgroundColor: 'transparent',
              border: '1px solid #00d4aa',
              color: '#00d4aa',
              padding: '0.5rem 1.5rem',
              borderRadius: '1.5rem',
              fontSize: '0.9rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#00d4aa';
              e.target.style.color = '#000000';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#00d4aa';
            }}
          >
            Learn more
            <svg 
              style={{ width: '1rem', height: '1rem' }}
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

        {/* Services Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(80vw, 300px), 1fr))',
            gap: '1px',
            backgroundColor: '#333333'
          }}
        >
          {/* Product Design */}
          <div 
            style={{
              backgroundColor: '#111111',
              padding: '3rem 2rem',
              border: '1px solid #333333',
              position: 'relative',
              minHeight: '250px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div 
              style={{
                position: 'absolute',
                top: '1.5rem',
                left: '1.5rem',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: '2px solid #666666'
              }}
            />
            <h3 
              style={{
                color: '#ffffff',
                fontSize: '1.5rem',
                fontWeight: '500',
                margin: '0 0 1rem 0',
                marginTop: '2rem'
              }}
            >
              Product Design
            </h3>
          </div>

          {/* UX/UI Design */}
          <div 
            style={{
              backgroundColor: '#111111',
              padding: '3rem 2rem',
              border: '1px solid #333333',
              position: 'relative',
              minHeight: '250px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div 
              style={{
                position: 'absolute',
                top: '1.5rem',
                left: '1.5rem',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: '2px solid #666666'
              }}
            />
            <h3 
              style={{
                color: '#ffffff',
                fontSize: '1.5rem',
                fontWeight: '500',
                margin: '0 0 1rem 0',
                marginTop: '2rem'
              }}
            >
              UX/UI Design
            </h3>
          </div>

          {/* Mobile Applications */}
          <div 
            style={{
              backgroundColor: '#111111',
              padding: '3rem 2rem',
              border: '1px solid #333333',
              position: 'relative',
              minHeight: '250px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div 
              style={{
                position: 'absolute',
                top: '1.5rem',
                left: '1.5rem',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: '2px solid #666666'
              }}
            />
            <h3 
              style={{
                color: '#ffffff',
                fontSize: '1.5rem',
                fontWeight: '500',
                margin: '0 0 1rem 0',
                marginTop: '2rem'
              }}
            >
              Mobile Applications
            </h3>
          </div>

          {/* Development */}
          <div 
            style={{
              backgroundColor: '#111111',
              padding: '3rem 2rem',
              border: '1px solid #333333',
              position: 'relative',
              minHeight: '250px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div 
              style={{
                position: 'absolute',
                top: '1.5rem',
                left: '1.5rem',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: '2px solid #666666'
              }}
            />
            <h3 
              style={{
                color: '#ffffff',
                fontSize: '1.5rem',
                fontWeight: '500',
                margin: '0 0 1rem 0',
                marginTop: '2rem'
              }}
            >
              Development
            </h3>
          </div>

          {/* Video Editing */}
          <div 
            style={{
              backgroundColor: '#111111',
              padding: '3rem 2rem',
              border: '1px solid #333333',
              position: 'relative',
              minHeight: '250px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div 
              style={{
                position: 'absolute',
                top: '1.5rem',
                left: '1.5rem',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: '2px solid #666666'
              }}
            />
            <h3 
              style={{
                color: '#ffffff',
                fontSize: '1.5rem',
                fontWeight: '500',
                margin: '0 0 1rem 0',
                marginTop: '2rem'
              }}
            >
              Video Editing
            </h3>
          </div>

          {/* Additional Service Card (for grid completion) */}
          <div 
            style={{
              backgroundColor: '#111111',
              padding: '3rem 2rem',
              border: '1px solid #333333',
              position: 'relative',
              minHeight: '250px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div 
              style={{
                position: 'absolute',
                top: '1.5rem',
                left: '1.5rem',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: '2px solid #666666'
              }}
            />
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section 
      style={{
        backgroundColor: '#000000',
        padding: '6rem 0',
        position: 'relative',
        zIndex: 10,
        width: '100vw',
        margin: 0,
        boxSizing: 'border-box'
      }}
    >
      <div 
        style={{
          maxWidth: 'min(90vw, 1400px)',
          margin: '0 auto',
          padding: '0 clamp(1rem, 4vw, 3rem)'
        }}
      >
        {/* Section Header */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
            flexWrap: 'wrap',
            gap: '2rem'
          }}
        >
          <div>
            <h2 
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #00d4aa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '600',
                margin: '0 0 1rem 0'
              }}
            >
              The Aftermath of
            </h2>
            <h2 
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #00d4aa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '600',
                margin: 0
              }}
            >
              Awesome
            </h2>
          </div>
          
          {/* Clutch Review Badge */}
          <div 
            style={{
              textAlign: 'right',
              color: '#ffffff'
            }}
          >
            
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.5rem'
              }}
            >
              <div 
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  letterSpacing: '2px'
                }}
              >
                
              </div>
             
            </div>
            <div 
              style={{
                fontSize: '0.9rem',
                opacity: 0.7
              }}
            >
            
            </div>
          </div>
        </div>

        {/* Testimonials Horizontal Scroll */}
        <div 
          style={{
            overflowX: 'hidden',
            overflowY: 'hidden',
            whiteSpace: 'nowrap',
            paddingBottom: '1rem',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            position: 'relative'
          }}
          className="scrollbar-hide"
        >
          <div 
            style={{
              display: 'inline-flex',
              gap: '2rem',
              paddingRight: '2rem',
              animation: 'scrollLeft 30s linear infinite'
            }}
            className="auto-scroll-reviews"
          >
            {/* Testimonial 1 */}
            <div 
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 212, 170, 0.05) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.75rem',
                padding: '2rem',
                position: 'relative',
                minHeight: '280px',
                minWidth: '350px',
                whiteSpace: 'normal'
              }}
            >
              <div 
                style={{
                  display: 'flex',
                  gap: '2px',
                  marginBottom: '1.5rem'
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#ffffff', fontSize: '1.1rem' }}>★</span>
                ))}
              </div>
              <p 
                style={{
                  color: '#ffffff',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '2rem',
                  opacity: 0.9
                }}
              >
                Thanks to Luminarix Studio's efforts, the client was delighted with the outcome of the engagement. The team was cooperative, professional, and communicative in the workflow, and internal stakeholders were particularly impressed with the vendor's honesty and technical understanding.
              </p>
              <div>
                <div 
                  style={{
                    color: '#ffffff',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginBottom: '0.25rem'
                  }}
                >
                  Boris Begamov
                </div>
                <div 
                  style={{
                    color: '#00d4aa',
                    fontSize: '0.9rem'
                  }}
                >
                  Dunav Ultra
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div 
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 212, 170, 0.05) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.75rem',
                padding: '2rem',
                position: 'relative',
                minHeight: '280px',
                minWidth: '350px',
                whiteSpace: 'normal'
              }}
            >
              <div 
                style={{
                  display: 'flex',
                  gap: '2px',
                  marginBottom: '1.5rem'
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#ffffff', fontSize: '1.1rem' }}>★</span>
                ))}
              </div>
              <p 
                style={{
                  color: '#ffffff',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '2rem',
                  opacity: 0.9
                }}
              >
                Thanks to Luminarix Studio's efforts, the client was delighted with the outcome of the engagement. The team was cooperative, professional, and communicative in the workflow, and internal stakeholders were particularly impressed with the vendor's honesty and technical understanding.
              </p>
              <div>
                <div 
                  style={{
                    color: '#ffffff',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginBottom: '0.25rem'
                  }}
                >
                  Radoslav Carev
                </div>
                <div 
                  style={{
                    color: '#00d4aa',
                    fontSize: '0.9rem'
                  }}
                >
                  Burzi Podarac
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div 
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 212, 170, 0.05) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.75rem',
                padding: '2rem',
                position: 'relative',
                minHeight: '280px',
                minWidth: '350px',
                whiteSpace: 'normal'
              }}
            >
              <div 
                style={{
                  display: 'flex',
                  gap: '2px',
                  marginBottom: '1.5rem'
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#ffffff', fontSize: '1.1rem' }}>★</span>
                ))}
              </div>
              <p 
                style={{
                  color: '#ffffff',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '2rem',
                  opacity: 0.9
                }}
              >
                The game underwent a significant transformation, with improved performance and graphics highlighting the enhanced user experience. Luminarix Studio maintained a high level of commitment to the project and showed exceptional attention to detail.
              </p>
              <div>
                <div 
                  style={{
                    color: '#ffffff',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginBottom: '0.25rem'
                  }}
                >
                  Tsvetelin Tsonev
                </div>
                <div 
                  style={{
                    color: '#00d4aa',
                    fontSize: '0.9rem'
                  }}
                >
                  Eviden Bulgaria
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div 
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 212, 170, 0.05) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.75rem',
                padding: '2rem',
                position: 'relative',
                minHeight: '280px',
                minWidth: '350px',
                whiteSpace: 'normal'
              }}
            >
              <div 
                style={{
                  display: 'flex',
                  gap: '2px',
                  marginBottom: '1.5rem'
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#ffffff', fontSize: '1.1rem' }}>★</span>
                ))}
              </div>
              <p 
                style={{
                  color: '#ffffff',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '2rem',
                  opacity: 0.9
                }}
              >
                Luminarix Studio delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to user experience and technical excellence resulted in a 40% increase in conversion rates.
              </p>
              <div>
                <div 
                  style={{
                    color: '#ffffff',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginBottom: '0.25rem'
                  }}
                >
                  Maria Rodriguez
                </div>
                <div 
                  style={{
                    color: '#00d4aa',
                    fontSize: '0.9rem'
                  }}
                >
                  GreenTech Solutions
                </div>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div 
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 212, 170, 0.05) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.75rem',
                padding: '2rem',
                position: 'relative',
                minHeight: '280px',
                minWidth: '350px',
                whiteSpace: 'normal'
              }}
            >
              <div 
                style={{
                  display: 'flex',
                  gap: '2px',
                  marginBottom: '1.5rem'
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#ffffff', fontSize: '1.1rem' }}>★</span>
                ))}
              </div>
              <p 
                style={{
                  color: '#ffffff',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '2rem',
                  opacity: 0.9
                }}
              >
                Working with Luminarix Studio was a game-changer for our startup. They transformed our vision into a polished mobile app that users love. Their development process was transparent and collaborative.
              </p>
              <div>
                <div 
                  style={{
                    color: '#ffffff',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginBottom: '0.25rem'
                  }}
                >
                  Alex Chen
                </div>
                <div 
                  style={{
                    color: '#00d4aa',
                    fontSize: '0.9rem'
                  }}
                >
                  TaskFlow Inc
                </div>
              </div>
            </div>

            {/* Testimonial 6 */}
            <div 
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 212, 170, 0.05) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.75rem',
                padding: '2rem',
                position: 'relative',
                minHeight: '280px',
                minWidth: '350px',
                whiteSpace: 'normal'
              }}
            >
              <div 
                style={{
                  display: 'flex',
                  gap: '2px',
                  marginBottom: '1.5rem'
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#ffffff', fontSize: '1.1rem' }}>★</span>
                ))}
              </div>
              <p 
                style={{
                  color: '#ffffff',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '2rem',
                  opacity: 0.9
                }}
              >
                The team at Luminarix Studio brought our data visualization project to life with stunning clarity and intuitive design. Their expertise in React and data presentation is unmatched in the industry.
              </p>
              <div>
                <div 
                  style={{
                    color: '#ffffff',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginBottom: '0.25rem'
                  }}
                >
                  Sarah Johnson
                </div>
                <div 
                  style={{
                    color: '#00d4aa',
                    fontSize: '0.9rem'
                  }}
                >
                  DataInsight Corp
                </div>
              </div>
            </div>

            {/* Testimonial 7 */}
            <div 
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 212, 170, 0.05) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.75rem',
                padding: '2rem',
                position: 'relative',
                minHeight: '280px',
                minWidth: '350px',
                whiteSpace: 'normal'
              }}
            >
              <div 
                style={{
                  display: 'flex',
                  gap: '2px',
                  marginBottom: '1.5rem'
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#ffffff', fontSize: '1.1rem' }}>★</span>
                ))}
              </div>
              <p 
                style={{
                  color: '#ffffff',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '2rem',
                  opacity: 0.9
                }}
              >
                Luminarix Studio's healthcare platform design revolutionized how we connect with patients. Their understanding of both user needs and technical requirements created a seamless experience for everyone involved.
              </p>
              <div>
                <div 
                  style={{
                    color: '#ffffff',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginBottom: '0.25rem'
                  }}
                >
                  Dr. Michael Thompson
                </div>
                <div 
                  style={{
                    color: '#00d4aa',
                    fontSize: '0.9rem'
                  }}
                >
                  HealthConnect Medical
                </div>
              </div>
            </div>
            
            {/* Duplicate cards for seamless infinite scroll */}
            {/* Testimonial 1 - Duplicate */}
            <div 
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 212, 170, 0.05) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.75rem',
                padding: '2rem',
                position: 'relative',
                minHeight: '280px',
                minWidth: '350px',
                whiteSpace: 'normal'
              }}
            >
              <div 
                style={{
                  display: 'flex',
                  gap: '2px',
                  marginBottom: '1.5rem'
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#ffffff', fontSize: '1.1rem' }}>★</span>
                ))}
              </div>
              <p 
                style={{
                  color: '#ffffff',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '2rem',
                  opacity: 0.9
                }}
              >
                Thanks to Luminarix Studio's efforts, the client was delighted with the outcome of the engagement. The team was cooperative, professional, and communicative in the workflow, and internal stakeholders were particularly impressed with the vendor's honesty and technical understanding.
              </p>
              <div>
                <div 
                  style={{
                    color: '#ffffff',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginBottom: '0.25rem'
                  }}
                >
                  Boris Begamov
                </div>
                <div 
                  style={{
                    color: '#00d4aa',
                    fontSize: '0.9rem'
                  }}
                >
                  Dunav Ultra
                </div>
              </div>
            </div>

            {/* Testimonial 2 - Duplicate */}
            <div 
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 212, 170, 0.05) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.75rem',
                padding: '2rem',
                position: 'relative',
                minHeight: '280px',
                minWidth: '350px',
                whiteSpace: 'normal'
              }}
            >
              <div 
                style={{
                  display: 'flex',
                  gap: '2px',
                  marginBottom: '1.5rem'
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#ffffff', fontSize: '1.1rem' }}>★</span>
                ))}
              </div>
              <p 
                style={{
                  color: '#ffffff',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '2rem',
                  opacity: 0.9
                }}
              >
                Thanks to Luminarix Studio's efforts, the client was delighted with the outcome of the engagement. The team was cooperative, professional, and communicative in the workflow, and internal stakeholders were particularly impressed with the vendor's honesty and technical understanding.
              </p>
              <div>
                <div 
                  style={{
                    color: '#ffffff',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginBottom: '0.25rem'
                  }}
                >
                  Radoslav Carev
                </div>
                <div 
                  style={{
                    color: '#00d4aa',
                    fontSize: '0.9rem'
                  }}
                >
                  Burzi Podarac
                </div>
              </div>
            </div>

            {/* Testimonial 3 - Duplicate */}
            <div 
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 212, 170, 0.05) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.75rem',
                padding: '2rem',
                position: 'relative',
                minHeight: '280px',
                minWidth: '350px',
                whiteSpace: 'normal'
              }}
            >
              <div 
                style={{
                  display: 'flex',
                  gap: '2px',
                  marginBottom: '1.5rem'
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#ffffff', fontSize: '1.1rem' }}>★</span>
                ))}
              </div>
              <p 
                style={{
                  color: '#ffffff',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '2rem',
                  opacity: 0.9
                }}
              >
                The game underwent a significant transformation, with improved performance and graphics highlighting the enhanced user experience. Luminarix Studio maintained a high level of commitment to the project and showed exceptional attention to detail.
              </p>
              <div>
                <div 
                  style={{
                    color: '#ffffff',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginBottom: '0.25rem'
                  }}
                >
                  Tsvetelin Tsonev
                </div>
                <div 
                  style={{
                    color: '#00d4aa',
                    fontSize: '0.9rem'
                  }}
                >
                  Eviden Bulgaria
                </div>
              </div>
            </div>

            {/* Testimonial 4 - Duplicate */}
            <div 
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 212, 170, 0.05) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.75rem',
                padding: '2rem',
                position: 'relative',
                minHeight: '280px',
                minWidth: '350px',
                whiteSpace: 'normal'
              }}
            >
              <div 
                style={{
                  display: 'flex',
                  gap: '2px',
                  marginBottom: '1.5rem'
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#ffffff', fontSize: '1.1rem' }}>★</span>
                ))}
              </div>
              <p 
                style={{
                  color: '#ffffff',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '2rem',
                  opacity: 0.9
                }}
              >
                Luminarix Studio delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to user experience and technical excellence resulted in a 40% increase in conversion rates.
              </p>
              <div>
                <div 
                  style={{
                    color: '#ffffff',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginBottom: '0.25rem'
                  }}
                >
                  Maria Rodriguez
                </div>
                <div 
                  style={{
                    color: '#00d4aa',
                    fontSize: '0.9rem'
                  }}
                >
                  GreenTech Solutions
                </div>
              </div>
            </div>

            {/* Testimonial 5 - Duplicate */}
            <div 
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 212, 170, 0.05) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.75rem',
                padding: '2rem',
                position: 'relative',
                minHeight: '280px',
                minWidth: '350px',
                whiteSpace: 'normal'
              }}
            >
              <div 
                style={{
                  display: 'flex',
                  gap: '2px',
                  marginBottom: '1.5rem'
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#ffffff', fontSize: '1.1rem' }}>★</span>
                ))}
              </div>
              <p 
                style={{
                  color: '#ffffff',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '2rem',
                  opacity: 0.9
                }}
              >
                Working with Luminarix Studio was a game-changer for our startup. They transformed our vision into a polished mobile app that users love. Their development process was transparent and collaborative.
              </p>
              <div>
                <div 
                  style={{
                    color: '#ffffff',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginBottom: '0.25rem'
                  }}
                >
                  Alex Chen
                </div>
                <div 
                  style={{
                    color: '#00d4aa',
                    fontSize: '0.9rem'
                  }}
                >
                  TaskFlow Inc
                </div>
              </div>
            </div>

            {/* Testimonial 6 - Duplicate */}
            <div 
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 212, 170, 0.05) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.75rem',
                padding: '2rem',
                position: 'relative',
                minHeight: '280px',
                minWidth: '350px',
                whiteSpace: 'normal'
              }}
            >
              <div 
                style={{
                  display: 'flex',
                  gap: '2px',
                  marginBottom: '1.5rem'
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#ffffff', fontSize: '1.1rem' }}>★</span>
                ))}
              </div>
              <p 
                style={{
                  color: '#ffffff',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '2rem',
                  opacity: 0.9
                }}
              >
                The team at Luminarix Studio brought our data visualization project to life with stunning clarity and intuitive design. Their expertise in React and data presentation is unmatched in the industry.
              </p>
              <div>
                <div 
                  style={{
                    color: '#ffffff',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginBottom: '0.25rem'
                  }}
                >
                  Sarah Johnson
                </div>
                <div 
                  style={{
                    color: '#00d4aa',
                    fontSize: '0.9rem'
                  }}
                >
                  DataInsight Corp
                </div>
              </div>
            </div>

            {/* Testimonial 7 - Duplicate */}
            <div 
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 212, 170, 0.05) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.75rem',
                padding: '2rem',
                position: 'relative',
                minHeight: '280px',
                minWidth: '350px',
                whiteSpace: 'normal'
              }}
            >
              <div 
                style={{
                  display: 'flex',
                  gap: '2px',
                  marginBottom: '1.5rem'
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#ffffff', fontSize: '1.1rem' }}>★</span>
                ))}
              </div>
              <p 
                style={{
                  color: '#ffffff',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '2rem',
                  opacity: 0.9
                }}
              >
                Luminarix Studio's healthcare platform design revolutionized how we connect with patients. Their understanding of both user needs and technical requirements created a seamless experience for everyone involved.
              </p>
              <div>
                <div 
                  style={{
                    color: '#ffffff',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginBottom: '0.25rem'
                  }}
                >
                  Dr. Michael Thompson
                </div>
                <div 
                  style={{
                    color: '#00d4aa',
                    fontSize: '0.9rem'
                  }}
                >
                  HealthConnect Medical
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Pill Banner Section */}
    <section 
      style={{
        backgroundColor: '#000000',
        padding: '4rem 0',
        position: 'relative',
        zIndex: 10,
        width: '100vw',
        margin: 0,
        boxSizing: 'border-box'
      }}
    >

      <div 
        style={{
          maxWidth: 'min(90vw, 1400px)',
          margin: '0 auto',
          padding: '0 clamp(1rem, 4vw, 3rem)',
          position: 'relative',
          zIndex: 30
        }}
      >
        {/* Pill Banner with Scrolling Text */}
        <div 
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 'clamp(2rem, 4vw, 3rem)',
            padding: 'clamp(1.5rem, 3vw, 2rem) 0',
            margin: '0 auto',
            maxWidth: 'min(90vw, 800px)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Video Background Inside Pill */}
          <div style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            zIndex: -1,
            borderRadius: '3rem',
            overflow: 'hidden'
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
              <source src="/src/assets/Videos/one.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Subtle overlay for text readability */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.2)',
              zIndex: 1
            }}></div>
          </div>
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              whiteSpace: 'nowrap',
              animation: 'scrollText 20s linear infinite'
            }}
            className="scrolling-text"
          >
            <span 
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #00d4aa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                fontWeight: '600',
                letterSpacing: '0.1em',
                margin: '0 2rem'
              }}
            >
              LET'S COLLABORATE • LET'S COLLABORATE • LET'S COLLABORATE • LET'S COLLABORATE • LET'S COLLABORATE • LET'S COLLABORATE • LET'S COLLABORATE • LET'S COLLABORATE
            </span>
          </div>
        </div>

        {/* Contact Information */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '2rem',
            gap: '0.75rem'
          }}
        >
          {/* Labels Row */}
          <div 
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '6rem',
              width: '100%'
            }}
          >
            <div 
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: '500'
              }}
            >
              Start a project
            </div>
            <div 
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: '500'
              }}
            >
              Work with us
            </div>
          </div>

          {/* Email Fields Row */}
          <div 
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              width: '100%'
            }}
          >
            <div 
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.65rem',
                padding: '0.6rem 1rem',
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '0.6rem',
                fontFamily: 'monospace',
                minWidth: '180px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.borderColor = 'rgba(0, 212, 170, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
              onClick={() => {
                document.getElementById('contact').scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              hello@luminarix.studio
            </div>
            <div 
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '0.6rem 1rem',
                borderRadius: '0.75rem',
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '0.6rem',
                fontFamily: 'monospace',
                minWidth: '180px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.borderColor = 'rgba(0, 212, 255, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.target.style.background = 'rgba(255, 255, 255, 0.05)';
              }}
              onClick={() => {
                document.getElementById('contact').scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              hr@luminarix.studio
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <Contact />
    
    {/* Footer Section */}
    <Footer />
    </>
  );
};

export default Homescreen;
