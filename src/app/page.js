"use client";
// src/app/page.js
import Head from 'next/head';
import Script from 'next/script';
import '../styles/globals.css';
import '../styles/fonts.css';
import '../styles/buttons.css';
import { useState, useEffect } from 'react';


export default function Home() {
  const [showVariantA, setShowVariantA] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowVariantA(prev => !prev);
    }, 500); // 300ms = 0.3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <Head>
        <title>Taise Sosina</title>
        <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet" />
      </Head>
      
      <main>
        <h1>Taise Sosina</h1>
        <p style={{ textAlign: 'center' }}>Welcome to my portfolio</p>
        <div className="container">
          <button className="start-button" id="startBtn">Start</button>
        </div>

        {/* Pixel Overlay */}
        <div id="pixelOverlay"></div>

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
      </main>
    </>
  );
}