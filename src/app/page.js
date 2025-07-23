"use client";
import Head from 'next/head';
import Script from 'next/script';
import '../styles/globals.css';
import '../styles/flowers.css';
import '../styles/buttons.css';
import { useState, useEffect } from 'react';
import { Popup } from '../components/popup'; 
import { cardData, tagColors } from '../components/cardData';


const Card = ({ icon, title, description, tags, onClick }) => (
  <div 
    style={{
      border: '2px solid #0070f3',
      padding: '20px',
      position: 'relative',
      minHeight: '220px',
      width: '300px',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '8px',
      backgroundColor: 'white',
      boxShadow: '0 4px 8px rgba(0, 112, 243, 0.1)',
      cursor: 'pointer'
    }}
    onClick={onClick}
  >
    {/* Title row with icon */}
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', minHeight: '48px' }}>
      <div style={{ 
        width: '48px', 
        height: '48px',
        marginRight: '12px',
        backgroundImage: `url(${icon})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        flexShrink: 0
      }}></div>
      <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '600', lineHeight: '1.3' }}>{title}</h3>
    </div>

    {/* Description */}
    <div style={{ flexGrow: 1, marginBottom: '15px' }}>
      <p style={{ margin: 0, lineHeight: '1.5', fontSize: '1rem' }}>{description}</p>
    </div>

    {/* Tags and arrow */}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {tags.map((tag, index) => (
          <span key={index} style={{
            backgroundColor: tagColors[tag] || '#CCCCCC',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '12px',
            fontSize: '0.8rem',
            fontWeight: '500'
          }}>
            {tag}
          </span>
        ))}
      </div>
      <div style={{ 
        fontSize: '24px',
        textDecoration: 'none',
        color: '#0070f3',
        transition: 'transform 0.2s',
        ':hover': { transform: 'translateX(4px)' }
      }}>→</div>
    </div>
  </div>
);


function MainContent({ started, onStart }) {
  const [activeFilter, setActiveFilter] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

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

  // Get all unique tags from card data
  const allTags = [...new Set(cardData.flatMap(card => card.tags))];

  // Filter cards based on active filter
  const filteredCards = activeFilter 
    ? cardData.filter(card => card.tags.includes(activeFilter))
    : cardData;

  return (
    <div className="main-content" style={{ padding: '20px', color: 'black' }}>
      <Popup card={selectedCard} onClose={() => setSelectedCard(null)} />
      <p style={{ color: 'black', textAlign: 'left', marginBottom: '30px' }}>
        Hello, My name is Taise. I have created this portfolio to display my work and interests
      </p>
      
      <div style={{ display: 'flex',gap: '20px' , justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: "wrap"}}>
        <h2 style={{ color: 'black', textDecoration: 'underline', margin: 0 }}>
          Navigation
        </h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: "wrap" }}>
          <button 
            onClick={() => setActiveFilter(null)}
            style={{
              background: activeFilter === null ? 'black' : 'white',
              color: activeFilter === null ? 'white' : 'black',
              border: activeFilter === null ? "none" : '2px solid black',
              fontFamily: '"Press Start 2P", cursive',
              fontSize: '0.5rem',
              letterSpacing: '0.05em',
              padding: '8px 12px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              style={{
                background: activeFilter === tag ? tagColors[tag] : 'white',
                color: activeFilter === tag ? 'white' : 'black',
                border: activeFilter === tag ? "none": '2px solid black',
                fontFamily: '"Press Start 2P", cursive',
                fontSize: '0.5rem',
                letterSpacing: '0.01em',
                padding: '8px 12px',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '24px',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '24px',
        justifyItems: 'center',
        alignItems: 'start',
        transition: 'all 0.3s ease',
        textAlign: 'left'
      }}>
        {filteredCards.map((card, index) => (
          <Card 
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            tags={card.tags}
            onClick={() => setSelectedCard(card)}
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