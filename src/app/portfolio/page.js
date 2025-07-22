"use client";
import Head from 'next/head';
import Script from 'next/script';
import '../../styles/globals.css';
import '../../styles/flowers.css';
import '../../styles/buttons.css';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [showVariantA, setShowVariantA] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Update dimensions on resize and initially
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowVariantA(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleStartClick = () => {
    setIsAnimating(true);
    setShowTransition(true);
    
    // Navigate after animation completes (adjust timing to match your animation)
    setTimeout(() => {
      // router.push('/portfolio'); // Uncomment when you have routing setup
    }, 2000); // Match this with your animation duration
  };

  return (
    <>
      <main>
        <div style={{ position: 'relative', zIndex: 10}}>
          <h1>Taise Sosina</h1>
          <p style={{ textAlign: 'center'}}>Welcome to my portfolio</p>
          <div>
            <button 
              className="start-button" 
              id="startBtn"
              onClick={handleStartClick}
              disabled={isAnimating}
            >
              {isAnimating ? 'Loading...' : 'Start'}
            </button>
          </div>

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
        </div>
      </main>
    </>
  );
}