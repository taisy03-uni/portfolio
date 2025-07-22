"use client";
import Head from 'next/head';
import Script from 'next/script';
import '../styles/globals.css';
import '../styles/flowers.css';
import '../styles/buttons.css';
import { useState, useEffect } from 'react';

const Card = ({ icon, title, description }) => (
  <div style={{
    border: '2px solid #0070f3',
    padding: '15px',
    position: 'relative',
    minHeight: '150px'
  }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ 
        width: '40px', 
        height: '40px', 
        marginRight: '10px',
        imageRendering: 'pixelated',
        backgroundImage: `url(${icon})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}></div>
      <h3 style={{ margin: 0 }}>{title}</h3>
    </div>
    <p style={{ marginTop: '10px' }}>{description}</p>
    <div style={{ 
      position: 'absolute', 
      bottom: '10px', 
      right: '10px',
      fontSize: '20px'
    }}>→</div>
  </div>
);

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
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px'
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