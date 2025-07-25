import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import {
  Character,
  Heart,
  Star,
  Tree,
  Flower,
  Castle,
  FloatingElements,
} from '../components/Sprites';
import LoveLetter from '../components/LoveLetter';
import SurpriseFeature from '../components/SurpriseFeature';

const Dashboard = () => {
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [showSpecialCard, setShowSpecialCard] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate = useNavigate();

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Update time for dynamic greetings
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const handleButtonHover = () => {
    const sound = new Audio('/music/undertale/buttons/undertale-select-sound.mp3');
    sound.volume = 0.3;
    sound.play().catch(console.warn);
  };

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
      id: 'gallery',
      title: t('Our Gallery'),
      description: t('Beautiful memories captured in our pixel-art kingdom!'),
      buttonText: t('View Memories →'),
      color: 'from-pixel-purple to-pixel-pink',
      glow: 'glow-blue',
      emoji: '📸',
      icon1: <Heart size='small' className='mr-2' />,
      icon2: <Heart size='small' className='ml-2' />,
    },
    {
      id: 'about-us',
      title: t('About Us'),
      description: t('Learn more about our story and the love that built this kingdom!'),
      buttonText: t('Our Story →'),
      color: 'from-pixel-red to-pixel-orange',
      glow: 'glow-purple',
      emoji: '💕',
      icon1: <Castle className='mr-2' />,
      icon2: <Castle className='ml-2' />,
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-20"
    >
      {/* Welcome Section with Undertale Style */}
      <motion.div
        variants={itemVariants}
        className="text-center mb-8 md:mb-12"
      >
        <motion.div
          animate={reducedMotion ? {} : { rotate: [0, 360] }}
          transition={reducedMotion ? {} : { duration: 10, repeat: Infinity, ease: "linear" }}
          className="text-6xl mb-4"
        >
          👑
        </motion.div>
        
        <h1 className="pixel-title text-3xl md:text-5xl text-yellow-300 mb-4">
          {getGreeting()}, {t('my love! Welcome to our magical pixel world together! 💕')}
        </h1>
        
        {/* Undertale-style message */}
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8 max-w-2xl mx-auto">
          <p className="pixel-text text-lg text-yellow-300 mb-4">
            "Tu eres mi Undertale y con amor vamos a hacer que todo sea más hermoso y divertido"
          </p>
          <p className="pixel-text text-sm text-white">
            - Tu novio que te ama infinitamente 💕
          </p>
        </div>

        {/* Undertale characters floating */}
        <div className="flex justify-center gap-6 mb-8">
          <motion.img
            src="/images/undertale/papyrus.png"
            alt="Papyrus"
            className="w-16 h-16"
            animate={reducedMotion ? {} : { y: [0, -10, 0] }}
            transition={reducedMotion ? {} : { duration: 2, repeat: Infinity }}
          />
          <motion.img
            src="/images/undertale/sans.´png.png"
            alt="Sans"
            className="w-16 h-16"
            animate={reducedMotion ? {} : { y: [0, -10, 0] }}
            transition={reducedMotion ? {} : { duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <motion.img
            src="/images/undertale/undertale_kid.png"
            alt="Undertale Kid"
            className="w-16 h-16"
            animate={reducedMotion ? {} : { y: [0, -10, 0] }}
            transition={reducedMotion ? {} : { duration: 2, repeat: Infinity, delay: 1 }}
          />
        </div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            variants={itemVariants}
            className="pixel-card"
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="text-center p-6">
              <motion.div
                animate={reducedMotion ? {} : { scale: [1, 1.1, 1] }}
                transition={reducedMotion ? {} : { duration: 2, repeat: Infinity }}
                className="text-4xl mb-4"
              >
                {card.emoji}
              </motion.div>
              <h2 className="pixel-title text-2xl md:text-3xl text-yellow-300 mb-4">
                {card.title}
              </h2>
              <p className="pixel-text text-white/90 mb-6">
                {card.description}
              </p>
              <Link 
                to={`/${card.id}`}
                className={`pixel-button bg-gradient-to-r ${card.color}`}
                onMouseEnter={handleButtonHover}
              >
                <span className="flex items-center gap-2">
                  <img src="/images/undertale/heart.png" alt="Heart" className="w-5 h-5" />
                  {card.buttonText}
                  <img src="/images/undertale/heart.png" alt="Heart" className="w-5 h-5" />
                </span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Special Undertale Message */}
      <motion.div
        variants={itemVariants}
        className="mt-12 p-6 bg-gradient-to-r from-pixel-purple/20 to-pixel-pink/20 rounded-lg border border-pixel-purple/30"
      >
        <div className="text-center">
          <h3 className="pixel-title text-2xl text-yellow-300 mb-4">
            🎮 Undertale Love Message 🎮
          </h3>
          <p className="pixel-text text-white/90 mb-4">
            "Como en Undertale, cada decisión que tomamos juntos nos acerca más. 
            Tu amor es mi DETERMINACIÓN para hacer que todo sea perfecto. 
            Juntos construimos nuestro propio reino de felicidad, ladrillo a ladrillo, 
            como en Terraria, pero con mucho más amor y risas."
          </p>
          <p className="pixel-text text-sm text-yellow-300">
            - Tu novio que te ama más que Sans ama los chistes malos 💕
          </p>
        </div>
      </motion.div>

      {/* Floating Hearts Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={reducedMotion ? {} : {
              y: [0, -40, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={reducedMotion ? {} : {
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <img 
              src="/images/undertale/heart.png" 
              alt="Undertale Heart" 
              className="w-6 h-6"
            />
          </motion.div>
        ))}
      </div>

      {/* Floating Elements */}
      <FloatingElements />

      {/* Special Features */}
      <motion.div variants={itemVariants} className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <LoveLetter onOpen={() => setShowSpecialCard(true)} />
          <SurpriseFeature onOpen={() => setShowSurprise(true)} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
