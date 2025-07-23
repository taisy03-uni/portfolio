import ReactPlayer from 'react-player';
import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export const tagColors = {
    design: '#FF6B6B',
    product: '#4ECDC4',
    engineering: '#45B7D1',
    ai: '#A37AFC',
    interests: '#FFA07A',
    sports: '#98D8C8'
  };

  export const contentStyles = {
    paragraph: {
      fontFamily: 'Arial, sans-serif',
      textAlign: 'left',
      lineHeight: '1.6',
      margin: '0 0 16px 0'
    },
    videoContainer: {
      position: 'relative',
      overflow: 'auto',
      margin: '20px 0',
      borderRadius: '8px',
      backgroundColor: '#000'
    },
    video: {
      width: '100%'
    },
    link: {
      color: '#0066cc',
      textDecoration: 'underline'
    }
  };

  export const ImageGrid = ({ imagePaths }) => {
    const flattenedPaths = imagePaths.flat();
    
    const styles = {
      imageGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '12px',
        margin: '20px 0'
      },
      gridImage: {
        width: '100%',
        height: '100px',
        objectFit: 'contain',
        imageRendering: 'pixelated',
        borderRadius: '4px',
        border: '1px solid #eaeaea',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'pointer',
        ':hover': {
          transform: 'scale(2)',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          zIndex: 1
        }
      }
    };
  
    return (
      <div style={styles.imageGrid}>
        {flattenedPaths.map((path) => (
          <img
            key={path}
            src={path}
            alt=""
            style={styles.gridImage}
            loading="lazy"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(2)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
              e.currentTarget.style.zIndex = '1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.zIndex = '0';
            }}
          />
        ))}
      </div>
    );
  };
export const cardData = [
    {icon: '/assets/pixel-icons/rhythm/rhythm.png',
        title: 'Rhythm',
        description: 'Interactive Figma Design of a Cycle-Syncing Exercise App',
        tags: ['design'],
        date: 'September 2024',
        // Change content to be a component instead of HTML string
        ContentComponent: () => (
            <div>
              <p style={contentStyles.paragraph}>
                Rhythm is a cycle-syncing app that helps women do the right type of exercise 
                at the right time of their cycle. The app uses data from the user to provide 
                personalized exercise recommendations, helping them optimize their workouts 
                based on their menstrual cycle. 
                Below is a demo that I created in Figma to get feedback on the initial idea:
              </p>
              
              <div style={contentStyles.videoContainer}>
                <video 
                  controls 
                  preload="none" 
                  autoPlay 
                  style={contentStyles.video}
                >
                  <source src="/assets/pixel-icons/rhythm/Product Demo.mp4" type="video/mp4" />
                </video>
              </div>
              
              <p style={contentStyles.paragraph}>
                After Initial Market Research, there was not a lot of interest in the app, 
                so we decided to stop the idea. Below was the pitch deck we used to show 
                the value proposition. Although this project did not go very far, it was 
                a great experience on how you can validate an idea quickly before investing 
                too much time and resources into it. 
              </p>
              
              <p> 
                <a 
                  href="/assets/pixel-icons/rhythm/241118_Rhythm Pitch Deck.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={contentStyles.link}
                >
                  View Pitch Deck
                </a>
              </p>
            </div>
          )
        },
    {
      icon: '/assets/pixel-icons/cannabisAI/cannabisai.png',
      title: 'CannabisAI',
      description: 'First ever predictive AI model for medical cannabis.',
      tags: ['product', "ai", 'engineering'],
      date: 'Jan 2025 - March 2025',
      content: 'CannabisAI was a groundbreaking project that developed the first predictive AI model for medical cannabis.',
      ContentComponent: () => {
        const cannabisAIImages = [
            '/assets/pixel-icons/cannabisAI/intial/1.png',
            '/assets/pixel-icons/cannabisAI/intial/2.png',
            '/assets/pixel-icons/cannabisAI/intial/3.png',
            '/assets/pixel-icons/cannabisAI/intial/4.png',
            '/assets/pixel-icons/cannabisAI/intial/5.png',
            '/assets/pixel-icons/cannabisAI/intial/6.png',
            '/assets/pixel-icons/cannabisAI/intial/7.png',
            '/assets/pixel-icons/cannabisAI/intial/8.png',
            '/assets/pixel-icons/cannabisAI/intial/9.png',
            '/assets/pixel-icons/cannabisAI/intial/10.png',
            '/assets/pixel-icons/cannabisAI/intial/11.png'
          ];
        
        return (
        <div>
            <p style={contentStyles.paragraph}>
                CannabisAI was created as a group project at Imperial College London during my Master's. 
                In a group of 5 we worked with CuraLeaf, one of the largest medical cannabis companies in the UK, 
                to develop the first ever predictive AI model front-end for medical cannabis. Using their dataset of over 60,000 patients,
                we trained an RNN model to take in EQ-5D-5L scores (a standardized measure of health-related quality of life), past prescriptions and patient data to predict future scores.
                We then created a front-end in CSS, JS and HTML that would run locally in your browser (to account for data privacy) and packaged it to sit as a desktop app. 

            </p>
            <p>
                Demo
            </p>
            <div style={contentStyles.videoContainer}>
                <video 
                  controls 
                  preload="none" 
                  autoPlay 
                  style={contentStyles.video}
                >
                  <source src="/assets/pixel-icons/cannabisAI/cannabisdemo.mp4" type="video/mp4" />
                </video>
              </div>
            <p>
                Initial Designs
            </p>
            <ImageGrid imagePaths={cannabisAIImages} />

        </div>
      )}
    },
    {
      icon: '/assets/pixel-icons/code.png',
      title: 'Rag Tool for legal research',
      description: 'Coding projects and technical work',
      data: "May 2025 - Present",
      tags: ['engineering', 'ai'],
      content: 'For my Masters thesis I am working on a RAG tool for calse law research. This tool is designed to streamline the process of legal research by utilizing advanced AI techniques to analyze and retrieve relevant case law efficiently. The project involves developing algorithms that can understand legal language, context, and nuances, making it easier for legal professionals to access pertinent information quickly.',
    },
    {
      icon: '/assets/pixel-icons/ai.png',
      title: 'Whatsapp Clone',
      description: 'AI-powered WhatsApp clone with advanced features',
      tags: ['ai', 'engineering'],
      content: 'In the Process'
    },
    {
      icon: '/assets/pixel-icons/interests.png',
      title: 'Mt Ararat',
      description: 'Hiking the tallest mountain in Turkey',
      tags: ['interests', 'sports'],
      data: "Sep 2024",
      content: 'I had the incredible opportunity to hike Mt. Ararat, the tallest mountain in Turkey. This challenging trek not only tested my physical endurance but also offered breathtaking views and a deep connection with nature. The experience was both exhilarating and humbling, as I stood at the summit, surrounded by the majestic beauty of the landscape. Standing at 5,137 meters (16,854 feet), Mt. Ararat is not only the highest peak in Turkey but also a site of significant historical and cultural importance. The hike was a blend of adventure and spirituality, as I reflected on the legends surrounding this iconic mountain, including its association with Noah\'s Ark. The journey to the summit was arduous, requiring careful planning and preparation, but the sense of accomplishment upon reaching the top was unparalleled.',
    },
    {
      icon: '/assets/pixel-icons/sports.png',
      title: 'Sports',
      description: 'My athletic activities and sports',
      tags: ['sports', 'interests'],
      date: 'Jun 2023',
      content: 'Rowing W2 team'
    }
  ];