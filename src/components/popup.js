"use client";
import { useEffect, useRef } from 'react';
import { tagColors } from './cardData';
import ReactPlayer from 'react-player';

export const Popup = ({ card, onClose }) => {
  const contentRef = useRef(null);
  const videoRefs = useRef([]);

  // Handle video elements when popup opens/closes
  useEffect(() => {
    if (!card || !contentRef.current) return;

    // Find all video elements and configure them
    videoRefs.current = Array.from(contentRef.current.querySelectorAll('video'));
    
    videoRefs.current.forEach(video => {
      video.setAttribute('preload', 'none');
      video.setAttribute('playsinline', '');
      video.muted = true; // Helps with autoplay restrictions
    });

    return () => {
      // Clean up videos when popup closes
      videoRefs.current.forEach(video => {
        if (video) {
          video.pause();
          video.currentTime = 0;
          video.removeAttribute('src');
          video.load();
        }
      });
      videoRefs.current = [];
    };
  }, [card]);

  if (!card) return null;

  return (
    <div 
      className="popup-overlay"
      onClick={(e) => {
        // Close when clicking outside content
        if (e.target === e.currentTarget) onClose();
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', //the whole popup is centered
        padding: '20px',
        overflowY: 'auto'
      }}
    >
      <div 
        className="popup-content"
        style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '30px',
          maxWidth: '900px',
          width: '100%',
          position: 'relative',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
        }}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: '#333'
          }}
        >
          ×
        </button>

        {/* Header with title and date */}
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
          paddingRight: '30px'
        }}>
          <h2 style={{ margin: 0, fontSize: '1.8rem' }}>{card.title}</h2>
          {card.date && (
            <span style={{
              backgroundColor: '#f0f0f0',
              padding: '5px 10px',
              borderRadius: '4px',
              fontSize: '0.9rem'
            }}>
              {card.date}
            </span>
          )}
        </div>

        {/* Description and tags row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '30px',
          gap: '20px'
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {card.tags.map((tag, index) => (
                <span key={index} style={{
                  backgroundColor: tagColors[tag] || '#CCCCCC',
                  color: 'white',
                  padding: '6px 12px',
                  borderRadius: '12px',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content area */}
        <div style={{
          borderTop: '1px solid #eee',
          paddingTop: '20px',
          textAlign: "left",
          fontFamily: 'Arial, sans-serif',
        }}>
          {card.ContentComponent ? (
            // Render as component
            <card.ContentComponent />
          ) : card.content ? (
            // Render as HTML
            <div 
              ref={contentRef}
              dangerouslySetInnerHTML={{ __html: card.content }}
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            // Fallback content
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '300px',
              backgroundColor: '#f9f9f9',
              borderRadius: '4px',
              textAlign: "left",
              fontFamily: 'Arial, sans-serif',

            }}>
              <p style={{ color: '#999' }}>Additional content would appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};