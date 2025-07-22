import ReactPlayer from 'react-player';

export const tagColors = {
    design: '#FF6B6B',
    product: '#4ECDC4',
    engineering: '#45B7D1',
    ai: '#A37AFC',
    interests: '#FFA07A',
    sports: '#98D8C8'
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
            <p>
                 Below you will find a quick demo of the Rhythm app.
            </p>
            <div style={{
                position: 'relative',
                overflow: 'auto',

                margin: '20px 0',
                borderRadius: '8px',
                backgroundColor: '#000'
              }}>
             <video controls preload="none" autoPlay style = {{
                // Set the video to fill the container
                width: '100%',
             }}>
                <source src="/assets/pixel-icons/rhythm/Product Demo.mp4" type="video/mp4" />
                </video>
            </div>
            <p>
              <a 
                href="/assets/pixel-icons/rhythm/241118_Rhythm Pitch Deck.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#0066cc', textDecoration: 'underline' }}
              >
                View Pitch Deck
              </a>
            </p>
          </div>
        )
      },
    {
      icon: '/assets/pixel-icons/product.png',
      title: 'CannabisAI',
      description: 'First ever predictive AI model for medical cannabis.',
      tags: ['product', "ai", 'engineering'],
      date: 'Jan 2025 - March 2025',
      content: 'CannabisAI was a groundbreaking project that developed the first predictive AI model for medical cannabis. This innovative solution aimed to enhance patient care by providing personalized recommendations based on individual health data and preferences. The project involved extensive research, data analysis, and collaboration with healthcare professionals to ensure accuracy and reliability.',
    },
    {
      icon: '/assets/pixel-icons/code.png',
      title: 'Rag Tool for legal research',
      description: 'Coding projects and technical work',
      link: "https://github.com/taise-sosina",
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