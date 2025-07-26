import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Heart,
  Star,
  Tree,
  Castle,
  FloatingElements,
} from '../components/Sprites';
import LoveLetter from '../components/LoveLetter';
import SurpriseFeature from '../components/SurpriseFeature';
import { AnimatePresence } from 'framer-motion';

const Dashboard = () => {
  const { t } = useTranslation();
  const [reducedMotion, setReducedMotion] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [undertaleToast, setUndertaleToast] = useState<{ show: boolean; message: string; type: string }>({ show: false, message: '', type: '' });
  const [characterPopIn, setCharacterPopIn] = useState<{ show: boolean; character: string; message: string }>({ show: false, character: '', message: '' });
  const [showLoveLetter, setShowLoveLetter] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);

  // Undertale-style random messages - Cleaned up and unique
  const undertaleMessages = [
    "* You feel your heart beating faster...",
    "* Papyrus is watching you with spaghetti.",
    "* Sans tells a joke. You laugh!",
    "* You have acquired: [Love Sword]",
    "* Life Crystal used: +20 ❤️",
    "* Your LOVE increases!",
    "* You feel your DETERMINATION growing stronger.",
    "* Asriel sends you a hug!",
    "* You found a Terraria chest! Contains: [Infinite Love]",
    "* Your relationship level increased!",
    "* You unlocked: [Eternal Happiness]",
    "* Papyrus says: 'NYEH HEH HEH! You're doing great!'",
    "* Sans says: 'heh, love is pretty cool, kid.'",
    "* You feel warm and fuzzy inside.",
    "* Your soul shines brighter!",
  ];

  const terrariaReferences = [
    "* You crafted: [Love Potion]",
    "* You found: [Heart Crystal]",
    "* Your health increased by 20!",
    "* You defeated: [Loneliness Boss]",
    "* You built: [Love Castle]",
    "* You mined: [Diamond of Love]",
    "* You planted: [Love Tree]",
    "* You fished: [Golden Love Fish]",
  ];

  // Show random Undertale message
  const showRandomMessage = () => {
    const messages = [...undertaleMessages, ...terrariaReferences];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const messageType = undertaleMessages.includes(randomMessage) ? 'undertale' : 'terraria';
    
    setUndertaleToast({ show: true, message: randomMessage, type: messageType });
    setTimeout(() => setUndertaleToast({ show: false, message: '', type: '' }), 4000);
  };

  // Character pop-in effect
  const showCharacterPopIn = () => {
    const characters = [
      { name: 'Papyrus', message: 'NYEH HEH HEH! I APPROVE OF THIS LOVE!', img: '/images/undertale/papyrus.png' },
      { name: 'Sans', message: 'heh, you two are pretty cool.', img: '/images/undertale/sans.´png.png' },
      { name: 'Asriel', message: 'Your love makes me so happy!', img: '/images/undertale/asriel.png' },
    ];
    const randomChar = characters[Math.floor(Math.random() * characters.length)];
    
    setCharacterPopIn({ show: true, character: randomChar.name, message: randomChar.message });
    setTimeout(() => setCharacterPopIn({ show: false, character: '', message: '' }), 3000);
  };

  // Trigger random effects periodically
  useEffect(() => {
    const messageInterval = setInterval(() => {
      if (Math.random() < 0.3) showRandomMessage();
    }, 8000);
    
    const characterInterval = setInterval(() => {
      if (Math.random() < 0.2) showCharacterPopIn();
    }, 12000);

    return () => {
      clearInterval(messageInterval);
      clearInterval(characterInterval);
    };
  }, []);

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

  // Enhanced button hover with Undertale effects
  const handleButtonHover = () => {
    const sound = new Audio('/music/undertale/buttons/undertale-select-sound.mp3');
    sound.volume = 0.3;
    sound.play().catch(console.warn);
    
    // Random chance to show message
    if (Math.random() < 0.4) showRandomMessage();
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
        
        {/* Undertale Toast Messages */}
        <AnimatePresence>
          {undertaleToast.show && (
            <motion.div
              initial={{ opacity: 0, y: 50, x: -50 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: -50, x: -50 }}
              className={`fixed top-20 left-6 z-50 p-4 rounded-lg shadow-lg max-w-xs ${
                undertaleToast.type === 'undertale' 
                  ? 'bg-yellow-400/90 text-black border-2 border-yellow-600' 
                  : 'bg-green-400/90 text-black border-2 border-green-600'
              }`}
            >
              <div className="flex items-center gap-2">
                <img src="/images/undertale/heart.png" alt="Heart" className="w-4 h-4" />
                <p className="pixel-text text-sm font-bold">{undertaleToast.message}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Character Pop-in */}
        <AnimatePresence>
          {characterPopIn.show && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: -100 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white/95 rounded-lg p-6 shadow-2xl border-4 border-yellow-400"
            >
              <div className="text-center">
                <img 
                  src={`/images/undertale/${characterPopIn.character.toLowerCase()}.png`} 
                  alt={characterPopIn.character}
                  className="w-16 h-16 mx-auto mb-3"
                />
                <p className="pixel-text text-lg text-yellow-800 font-bold">{characterPopIn.character}</p>
                <p className="pixel-text text-sm text-gray-700 mt-2">{characterPopIn.message}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced Undertale-style message */}
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8 max-w-2xl mx-auto border-2 border-yellow-400/50">
          <p className="pixel-text text-lg text-yellow-300 mb-4">
            "Tu eres mi Undertale y con amor vamos a hacer que todo sea más hermoso y divertido"
          </p>
          <p className="pixel-text text-sm text-white mb-4">
            - Tu novio que te ama infinitamente 💕
          </p>
          <div className="flex justify-center gap-4 text-sm text-yellow-200">
            <span>❤️ LOVE: ∞</span>
            <span>💎 DETERMINATION: MAX</span>
            <span>🏰 TERRARIA BEES: 0</span>
          </div>
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
        {cards.map((card) => (
          <motion.div
            key={card.id}
            variants={itemVariants}
            className="pixel-card"
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

      {/* Enhanced Special Undertale Message */}
      <motion.div
        variants={itemVariants}
        className="mt-12 p-6 bg-gradient-to-r from-pixel-purple/20 to-pixel-pink/20 rounded-lg border border-pixel-purple/30 relative overflow-hidden"
      >
        {/* Floating hearts in background */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 5 }, (_, i) => (
            <motion.img
              key={i}
              src="/images/undertale/heart.png"
              alt="Heart"
              className="w-4 h-4 absolute"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            />
          ))}
        </div>
        
        <div className="text-center relative z-10">
          <h3 className="pixel-title text-2xl text-yellow-300 mb-4">
            🎮 Undertale Love Message 🎮
          </h3>
          <p className="pixel-text text-white/90 mb-4">
            "Como en Undertale, cada decisión que tomamos juntos nos acerca más. 
            Tu amor es mi DETERMINACIÓN para hacer que todo sea perfecto. 
            Juntos construimos nuestro propio reino de felicidad, ladrillo a ladrillo, 
            como en Terraria, pero con mucho más amor y risas."
          </p>
          <p className="pixel-text text-sm text-yellow-300 mb-4">
            - Tu novio que te ama más que Sans ama los chistes malos 💕
          </p>
          
          {/* Interactive buttons */}
          <div className="flex justify-center gap-4 mt-4">
            <motion.button
              onClick={showRandomMessage}
              className="pixel-button bg-yellow-400 text-black px-4 py-2 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={handleButtonHover}
            >
              🎮 Random Message
            </motion.button>
            <motion.button
              onClick={showCharacterPopIn}
              className="pixel-button bg-purple-400 text-white px-4 py-2 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={handleButtonHover}
            >
              👻 Character Pop-in
            </motion.button>
          </div>
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
          <LoveLetter isOpen={showLoveLetter} onClose={() => setShowLoveLetter(false)} />
          <SurpriseFeature isActive={showSurprise} onClose={() => setShowSurprise(false)} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
