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
        longDescription: 'A collection of my design work...',
        date: 'September 2024',
        // Change content to be a component instead of HTML string
        ContentComponent: () => (
          <div>
            <ReactPlayer
              //url="/assets/pixel-icons/rhythm/Product Demo.mp4" 
              url="https://www.youtube.com/watch?v=pzBi1nwDn8U&ab_channel=MrBeast"
              controls
              width="100%"
              height="auto"
              style={{ maxWidth: '100%', borderRadius: '4px', marginBottom: '15px' }}
            />
            <p>Detailed description of design process and outcomes.</p>
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
      title: 'Product Management',
      description: 'Product strategy and development',
      link: "https://www.linkedin.com/in/taisiya-s-28a405235/",
      tags: ['product'],
      longDescription: 'A collection of my design work including UI/UX projects, graphic designs, and visual concepts. This includes both personal projects and professional work.',
      date: 'Jun 2023',
      content: ''
    },
    {
      icon: '/assets/pixel-icons/code.png',
      title: 'Software Engineering',
      description: 'Coding projects and technical work',
      link: "https://github.com/taise-sosina",
      tags: ['engineering'],
      longDescription: 'A collection of my design work including UI/UX projects, graphic designs, and visual concepts. This includes both personal projects and professional work.',
      date: 'Jun 2023',
      content: '<div><img src="/sample-design.jpg" style="max-width:100%;border-radius:4px;margin-bottom:15px;"><p>Detailed description of design process and outcomes.</p></div>'
    },
    {
      icon: '/assets/pixel-icons/ai.png',
      title: 'AI Automations',
      description: 'AI-powered solutions and automations',
      link: "https://github.com/taise-sosina",
      tags: ['ai', 'engineering'],
      longDescription: 'A collection of my design work including UI/UX projects, graphic designs, and visual concepts. This includes both personal projects and professional work.',
      date: 'Jun 2023',
      content: '<div><img src="/sample-design.jpg" style="max-width:100%;border-radius:4px;margin-bottom:15px;"><p>Detailed description of design process and outcomes.</p></div>'
    },
    {
      icon: '/assets/pixel-icons/interests.png',
      title: 'Interests',
      description: 'My hobbies and personal interests',
      link: "https://github.com/taise-sosina",
      tags: ['interests'],
      longDescription: 'A collection of my design work including UI/UX projects, graphic designs, and visual concepts. This includes both personal projects and professional work.',
      date: 'Jun 2023',
      content: '<div><img src="/sample-design.jpg" style="max-width:100%;border-radius:4px;margin-bottom:15px;"><p>Detailed description of design process and outcomes.</p></div>'
    },
    {
      icon: '/assets/pixel-icons/sports.png',
      title: 'Sports',
      description: 'My athletic activities and sports',
      link: "https://github.com/taise-sosina",
      tags: ['sports', 'interests'],
      longDescription: 'A collection of my design work including UI/UX projects, graphic designs, and visual concepts. This includes both personal projects and professional work.',
      date: 'Jun 2023',
      content: '<div><img src="/sample-design.jpg" style="max-width:100%;border-radius:4px;margin-bottom:15px;"><p>Detailed description of design process and outcomes.</p></div>'
    }
  ];