import ReactPlayer from 'react-player';
import React from 'react';
import ImageGallery from 'react-image-gallery';
import Image from 'next/image';
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
          <Image
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
                CannabisAI was created as a group project at Imperial College London during my Masters. 
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
            <p style={contentStyles.paragraph}>
            Through out the whole process we were able to work with clinicians to get their feedback and most usefull features and design changes. 
            Hence why the intial designs look so different from the final version. We were also able to do two rounds of usability testing. 
            You can see some more in-depth information on the whole project in the pdf below. 
            </p>
            <a 
                  href="/assets/pixel-icons/cannabisAI/slides.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={contentStyles.link}
                >
                  View Presentation
                </a>
        </div>
      )}
    },
    {
      icon: '/assets/pixel-icons/code.png',
      title: 'Legal Research Helper',
      description: 'RAG tool for case law retreival using UK case law data',
      data: "May 2025 - Present",
      tags: ['engineering', 'ai'],
      ContentComponent: () => (
        <div>
          <p style={contentStyles.paragraph}>
            I am currently working on my Master&aposs thesis project, which involves creating a Retrieval-Augmented Generation (RAG) tool for legal research.
            I have obtained a licence from the National Archives to use the UK case law data, which consists of over 60,000 cases. I am using Pinecone and OpenAI to build this tool.
            Additionally, I am developing a front-end using Typescript and Next.js to allow users to interact with the tool and retrieve relevant case law information. 
          </p>
        </div>
      )
    },
    {
        icon: '/assets/pixel-icons/interests.png',
        title: 'Mt Ararat',
        description: 'Hiking the tallest mountain in Turkey',
        tags: ['interests', 'sports'],
        data: "Sep 2024",
        content: 'I had the incredible opportunity to hike Mt. Ararat, standing at  5,137 meters (16,854 feet), as the tallest mountain in Turkey. This challenging track not only tested my physical endurance but also offered breathtaking views and a deep connection with nature. It is also a site of significant historical and cultural importance with many legeands claiming it to be the resting place of Noah\'s Ark.'
      },
    {
        icon: '/assets/pixel-icons/ai.png',
        title: 'Whatsapp Clone',
        description: 'AI-powered WhatsApp digital assitant',
        tags: ['ai', 'engineering'],
        ContentComponent: () => (
            <div>
            <p style={contentStyles.paragraph}>
            I built an automated WhatsApp responder using WhatsApp Web and OpenAI&aposs API. First, 
            I exported my complete chat history as JSON and used it to fine-tune a GPT-3.5 model so it would mimic my writing style. 
            I also processed these conversations to extract structured data about my contacts, categorising relationships (friends, family, colleagues), 
            noting important details about them, and documenting their preferences. 
            The system works through a Chrome extension that monitors incoming messages using real-time DOM observation. 
            When a new message arrives, it gets saved to a local database alongside previous conversations. 
            Every few messages, a background process analyzes the conversation thread to update what it knows about that contact. 
            This context then gets combined with the current message to generate personalized responses through the OpenAI API, 
            while maintaining natural pacing with rate-limiting to avoid flooding the chat. 
            Some manual curation was needed to filter out repetitive patterns during the training phase.
            </p>    
            </div>
        )
    }
  ];