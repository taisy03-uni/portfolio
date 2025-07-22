"use client";
import Head from 'next/head';
import Script from 'next/script';
import '../styles/globals.css';
import '../styles/flowers.css';
import '../styles/buttons.css';
import { useState, useEffect } from 'react';

const Card = ({ icon, title, description, link }) => (
  <div style={{
    border: '2px solid #0070f3',
    padding: '20px',
    position: 'relative',
    minHeight: '200px', // Increased from 150px
    width: '300px', // Fixed width for consistency
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '8px', // Softened corners
    backgroundColor: 'white', // Better contrast
    boxShadow: '0 4px 8px rgba(0, 112, 243, 0.1)' // Subtle depth
  }}>
    {/* Title row with icon */}
    <div style={{ 
      display: 'flex', 
      alignItems: 'center',
      marginBottom: '15px',
      minHeight: '48px' // Slightly larger than icon
    }}>
      <div style={{ 
        width: '48px', // Increased from 42px
        height: '48px',
        marginRight: '12px',
        imageRendering: 'pixelated',
        backgroundImage: `url(${icon})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        flexShrink: 0
      }}></div>
      <h3 style={{ 
        margin: 0,
        fontSize: '1.2rem', // Slightly larger
        fontWeight: '600',
        lineHeight: '1.3'
      }}>{title}</h3>
    </div>

    {/* Description - now fully visible */}
    <div style={{
      flexGrow: 1,
      marginBottom: '15px',
      overflow: 'visible' // Changed from hidden
    }}>
      <p style={{
        margin: 0,
        lineHeight: '1.5',
        fontSize: '1rem'
      }}>{description}</p>
    </div>

    {/* Arrow link */}
    <div style={{ 
      textAlign: 'right',
      marginTop: 'auto'
    }}>
      <a href={link} style={{ 
        display: 'inline-block',
        fontSize: '24px', // Slightly larger arrow
        textDecoration: 'none',
        color: '#0070f3', // Matching border color
        transition: 'transform 0.2s',
        ':hover': {
          transform: 'translateX(4px)'
        }
      }}>→</a>
    </div>
  </div>
)

const cardData = [
  {
    icon: '/assets/pixel-icons/design.png',
    title: 'Designs',
    description: 'My design projects and visual concepts'
  },
  {
    icon: '/assets/pixel-icons/product.png',
    title: 'Product Management',
    description: 'Product strategy and development'
  },
  {
    icon: '/assets/pixel-icons/code.png',
    title: 'Software Engineering',
    description: 'Coding projects and technical work'
  },
  {
    icon: '/assets/pixel-icons/ai.png',
    title: 'AI Automations',
    description: 'AI-powered solutions and automations'
  },
  {
    icon: '/assets/pixel-icons/interests.png',
    title: 'Interests',
    description: 'My hobbies and personal interests'
  },
  {
    icon: '/assets/pixel-icons/sports.png',
    title: 'Sports',
    description: 'My athletic activities and sports'
  }
];

function MainContent({ started, onStart }) {
  if (!started) {
    return (
      <>
        <p style={{ textAlign: 'center', color: 'white' }}>
          Welcome to my portfolio
        </p>
        <div className="container">
          <button className="start-button" id="startBtn" onClick={onStart}>
            Start
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="main-content" style={{ padding: '20px', color: 'black' }}>
      <p style={{ color: 'black', textAlign: 'left', marginBottom: '30px' }}>
        Hello, My name is Taise. I have created this portfolio to display my work and interests
      </p>
      
      <h2 style={{ 
        color: 'black',   
        textDecoration: 'underline', 
        marginBottom: '20px'
      }}>
        Navigation
      </h2>
      
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', // Wider minimum column width
      gap: '24px', // Increased gap for better spacing
      width: '100%', // Full width of container
      maxWidth: '1200px', // Wider maximum width
      margin: '0 auto',
      padding: '24px',
      justifyItems: 'center', // Center cards horizontally
      alignItems: 'start', // Align cards to top
      transition: 'all 0.3s ease' // Smooth resizing
    }}>
        {cardData.map((card, index) => (
          <Card 
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}
export default function Home() {
  const [showVariantA, setShowVariantA] = useState(true);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowVariantA(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleStart = () => {
    setStarted(true);
  };

  return (
    <>
      <header style={{ backgroundColor: 'black', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
        <h1>Taise Sosina</h1>
        <nav>
          {started && (
            <div className="header-links">
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 10px' }}>CV</a>
              <a href="https://www.linkedin.com/in/taisiya-s-28a405235/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 10px' }}>LinkedIn</a>
              <a href="mailto:t.k.sosina@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 10px' }}>Email</a>
            </div>
          )}
        </nav>
      </header>
      <main style={{ backgroundColor: started ? 'hsl(49, 100%, 98%)' : 'transparent',minHeight: '100vh', padding: "20px" }}>
        <MainContent started={started} onStart={handleStart} />
      </main>

      {/* Footer with 6 flower images */}
      <footer className='footer'>
        <div className="flower-images">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <img 
              key={num} 
              src={`/assets/flowers/flower${num}${showVariantA ? 'a' : 'b'}.png`} 
              alt={`Flower ${num}`}
            />
          ))}
        </div>
      </footer>
    </>
  );
}