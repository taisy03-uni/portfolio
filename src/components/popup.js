"use client";
import { useState } from 'react';
import { tagColors } from './cardData';

export const Popup = ({ card, onClose }) => {
  if (!card) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      overflowY: 'auto'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '30px',
        maxWidth: '900px',
        width: '100%',
        position: 'relative',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
      }}>
        {/* Close button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '15px',
            left: '15px',
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
          paddingRight: '30px' // To account for close button
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
          <div style={{ flex: 2 }}>
            <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: '1.6' }}>
              {card.longDescription || card.description}
            </p>
          </div>
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

        {/* Content area for images/videos/text */}
        <div style={{
          borderTop: '1px solid #eee',
          paddingTop: '20px'
        }}>
          {card.content ? (
            <div dangerouslySetInnerHTML={{ __html: card.content }} />
          ) : (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '300px',
              backgroundColor: '#f9f9f9',
              borderRadius: '4px'
            }}>
              <p style={{ color: '#999' }}>Additional content would appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};