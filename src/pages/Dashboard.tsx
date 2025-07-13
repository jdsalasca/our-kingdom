import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Character,
  Heart,
  Star,
  Tree,
  Flower,
  Castle,
  FloatingElements,
} from '../components/Sprites';

const Dashboard = () => {
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cards = [
    {
      id: 'two-roads',
      title: t('Two Roads, One Destiny'),
      description: t('Explore the paths that brought us together and the adventures that await us!'),
      buttonText: t('Start Journey →'),
      color: 'from-pixel-green to-pixel-blue',
      glow: 'glow-green',
      emoji: '🛤️',
      icon1: <Tree type='normal' className='mr-2' />,
      icon2: <Tree type='fruit' className='ml-2' />,
    },
    {
      id: 'our-play',
      title: t('Our Play'),
      description: t('Fun games and activities we can enjoy together in our pixel paradise!'),
      buttonText: t("Let's Play! →"),
      color: 'from-pixel-yellow to-pixel-orange',
      glow: 'glow-pink',
      emoji: '🎮',
      icon1: <Star className='mr-2' />,
      icon2: <Star className='ml-2' />,
    },
    {
      id: 'about-us',
      title: t('About Us'),
      description: t('Learn more about our story and the love that built this kingdom!'),
      buttonText: t('Our Story →'),
      color: 'from-pixel-pink to-pixel-purple',
      glow: 'glow-blue',
      emoji: '💕',
      icon1: <Flower color='pink' className='mr-2' />,
      icon2: <Flower color='purple' className='ml-2' />,
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      className='min-h-screen bg-pixel-pattern'
    >
      {/* Hero Section */}
      <motion.div
        variants={itemVariants}
        className='text-center mb-8 md:mb-12 relative'
      >
        <div className='absolute inset-0 flex justify-center items-center pointer-events-none'>
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Castle className='opacity-20 scale-150' />
          </motion.div>
        </div>
        <motion.h1 
          className='pixel-title text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-4 md:mb-6 relative z-10'
          animate={{ 
            textShadow: [
              "0 0 20px rgba(255,255,255,0.5)",
              "0 0 40px rgba(255,255,255,0.8)",
              "0 0 20px rgba(255,255,255,0.5)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          👑 {t('Our Happy Kingdom')} 👑
        </motion.h1>
        <motion.p 
          className='pixel-subtitle text-lg sm:text-xl md:text-2xl relative z-10'
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {t('Welcome to our magical pixel world together! 💕')}
        </motion.p>

        {/* Character Sprites */}
        <div className='flex justify-center items-center gap-4 md:gap-8 mt-6 md:mt-8 relative z-10'>
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="transform hover:scale-110 transition-transform"
          >
            <Character type='player1' direction='right' />
          </motion.div>
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Heart size='large' />
          </motion.div>
          <motion.div
            animate={{ x: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="transform hover:scale-110 transition-transform"
          >
            <Character type='player2' direction='left' />
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4'>
        {cards.map((card) => (
          <motion.div
            key={card.id}
            variants={itemVariants}
            className={`pixel-card bg-gradient-to-br ${card.color} cursor-pointer transition-all duration-300 ${card.glow} ${
              hoveredCard === card.id ? 'scale-105 shadow-2xl' : 'hover:scale-105'
            }`}
            onHoverStart={() => setHoveredCard(card.id)}
            onHoverEnd={() => setHoveredCard(null)}
            whileHover={{ 
              y: -5,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}
          >
            <div className='text-center p-4 md:p-6'>
              <motion.div 
                className='flex justify-center items-center mb-4'
                animate={hoveredCard === card.id ? { scale: 1.2 } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {card.icon1}
                <span className='text-3xl md:text-4xl mx-2'>{card.emoji}</span>
                {card.icon2}
              </motion.div>
              <h3 className='pixel-title text-lg md:text-xl mb-3 md:mb-4'>{card.title}</h3>
              <p className='pixel-text mb-4 md:mb-6 text-sm md:text-base'>{card.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='pixel-button bg-pixel-purple hover:bg-pixel-pink text-sm md:text-base px-4 py-2'
              >
                {card.buttonText}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Enhanced Decorative Elements */}
      <div className='mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 px-4'>
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className='flex justify-center'
        >
          <Flower color='yellow' />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className='flex justify-center'
        >
          <Tree type='fruit' />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='flex justify-center'
        >
          <Star />
        </motion.div>
        <motion.div
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className='flex justify-center'
        >
          <Flower color='red' />
        </motion.div>
      </div>

      {/* Floating Elements */}
      <FloatingElements />
    </motion.div>
  );
};

export default Dashboard;
