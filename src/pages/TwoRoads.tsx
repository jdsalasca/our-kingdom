import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const TwoRoads = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [undertaleMessage, setUndertaleMessage] = useState<string>('');
  const [showCharacter, setShowCharacter] = useState<{ show: boolean; name: string; message: string }>({ show: false, name: '', message: '' });

  // Undertale-style journey messages - Cleaned up and unique
  const journeyMessages = [
    "* You feel determination flowing through you...",
    "* Your LOVE increases as you walk together!",
    "* Papyrus approves of this journey!",
    "* Sans says: 'heh, nice path you got there.'",
    "* You found: [Map of Love]",
    "* Your relationship level increased!",
    "* You unlocked: [Eternal Journey]",
    "* Asriel sends you both a hug!",
    "* You feel warm and fuzzy inside.",
    "* Your souls shine brighter together!",
  ];

  // Show random Undertale message
  const showRandomMessage = () => {
    const randomMessage = journeyMessages[Math.floor(Math.random() * journeyMessages.length)];
    setUndertaleMessage(randomMessage);
    setTimeout(() => setUndertaleMessage(''), 4000);
  };

  // Character pop-in
  const showCharacterPopIn = () => {
    const characters = [
      { name: 'Papyrus', message: 'NYEH HEH HEH! THIS JOURNEY IS VERY COOL!' },
      { name: 'Sans', message: 'heh, you two make a great team.' },
      { name: 'Asriel', message: 'Your love story is beautiful!' },
    ];
    const randomChar = characters[Math.floor(Math.random() * characters.length)];
    setShowCharacter({ show: true, name: randomChar.name, message: randomChar.message });
    setTimeout(() => setShowCharacter({ show: false, name: '', message: '' }), 3000);
  };

  // Play Undertale sound
  const playButtonSound = () => {
    const sound = new Audio('/music/undertale/buttons/undertale-select-sound.mp3');
    sound.volume = 0.3;
    sound.play().catch(() => {});
  };

  // Trigger random effects
  useEffect(() => {
    const messageInterval = setInterval(() => {
      if (Math.random() < 0.4) showRandomMessage();
    }, 6000);
    
    const characterInterval = setInterval(() => {
      if (Math.random() < 0.3) showCharacterPopIn();
    }, 10000);

    return () => {
      clearInterval(messageInterval);
      clearInterval(characterInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='min-h-screen relative'
    >
      {/* Undertale Toast Message */}
      {undertaleMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: -50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: -50, x: -50 }}
          className="fixed top-20 left-6 z-50 p-4 bg-yellow-400/90 text-black rounded-lg shadow-lg max-w-xs border-2 border-yellow-600"
        >
          <div className="flex items-center gap-2">
            <img src="/images/undertale/heart.png" alt="Heart" className="w-4 h-4" />
            <p className="pixel-text text-sm font-bold">{undertaleMessage}</p>
          </div>
        </motion.div>
      )}

      {/* Character Pop-in */}
      {showCharacter.show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: -100 }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white/95 rounded-lg p-6 shadow-2xl border-4 border-yellow-400"
        >
          <div className="text-center">
            <img 
              src={`/images/undertale/${showCharacter.name.toLowerCase()}.png`} 
              alt={showCharacter.name}
              className="w-16 h-16 mx-auto mb-3"
            />
            <p className="pixel-text text-lg text-yellow-800 font-bold">{showCharacter.name}</p>
            <p className="pixel-text text-sm text-gray-700 mt-2">{showCharacter.message}</p>
          </div>
        </motion.div>
      )}

      <div className='text-center mb-12'>
        <h1 className='pixel-title text-5xl md:text-7xl mb-6'>
           {t('Two Roads, One Destiny')} 
        </h1>
        <p className='pixel-subtitle text-xl mb-4'>
          {t('Our paths crossed and created something magical...')}
        </p>
        
        {/* Undertale-style stats */}
        <div className="flex justify-center gap-6 text-sm text-yellow-200 mb-6">
          <span>❤️ LOVE: ∞</span>
          <span>💎 DETERMINATION: MAX</span>
          <span>🛤️ JOURNEY LEVEL: 100</span>
        </div>

        {/* Interactive buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <motion.button
            onClick={showRandomMessage}
            className="pixel-button bg-yellow-400 text-black px-4 py-2 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={playButtonSound}
          >
            🎮 Random Message
          </motion.button>
          <motion.button
            onClick={showCharacterPopIn}
            className="pixel-button bg-purple-400 text-white px-4 py-2 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={playButtonSound}
          >
            👻 Character Pop-in
          </motion.button>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
        {/* Road 1 */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className='pixel-card bg-gradient-to-br from-pixel-green to-pixel-blue relative overflow-hidden'
        >
          {/* Floating hearts */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 3 }, (_, i) => (
              <motion.img
                key={i}
                src="/images/undertale/heart.png"
                alt="Heart"
                className="w-4 h-4 absolute"
                style={{
                  left: `${20 + i * 25}%`,
                  top: `${30 + i * 15}%`,
                }}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              />
            ))}
          </div>
          
          <div className="relative z-10">
            <h2 className='pixel-title text-2xl mb-4'>🛣️ {t('Your Road')}</h2>
            <div className='space-y-4'>
              <div className='pixel-text'>
                <p>🌟 {t('Your journey began with...')}</p>
                <p>💫 {t('Your dreams and aspirations...')}</p>
                <p>🎯 {t('Your unique path in life...')}</p>
                <p className="text-yellow-200 mt-4">* You feel determination flowing through you...</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Road 2 */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className='pixel-card bg-gradient-to-br from-pixel-purple to-pixel-pink relative overflow-hidden'
        >
          {/* Floating hearts */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 3 }, (_, i) => (
              <motion.img
                key={i}
                src="/images/undertale/heart.png"
                alt="Heart"
                className="w-4 h-4 absolute"
                style={{
                  right: `${20 + i * 25}%`,
                  top: `${30 + i * 15}%`,
                }}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              />
            ))}
          </div>
          
          <div className="relative z-10">
            <h2 className='pixel-title text-2xl mb-4'>🛣️ {t('My Road')}</h2>
            <div className='space-y-4'>
              <div className='pixel-text'>
                <p>🌟 {t('My journey began with...')}</p>
                <p>💫 {t('My dreams and aspirations...')}</p>
                <p>🎯 {t('My unique path in life...')}</p>
                <p className="text-yellow-200 mt-4">* Your LOVE increases as you walk together!</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Intersection */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className='text-center mt-12'
      >
        <div className='pixel-card bg-gradient-to-br from-pixel-yellow to-pixel-orange max-w-2xl mx-auto relative overflow-hidden'>
          {/* Floating hearts in intersection */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 5 }, (_, i) => (
              <motion.img
                key={i}
                src="/images/undertale/heart.png"
                alt="Heart"
                className="w-6 h-6 absolute"
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${20 + i * 10}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.3, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}
          </div>
          
          <div className="relative z-10">
            <h2 className='pixel-title text-3xl mb-6'>💕 {t('Where Our Roads Meet')}</h2>
            <p className='pixel-text text-lg mb-4'>
              {t('Here, in this magical intersection, our separate journeys became one beautiful adventure together. Every step we take now, we take hand in hand, building our own happy kingdom.')}
            </p>
            <p className="text-yellow-200 text-sm">
              * You feel your souls connecting... * Your DETERMINATION grows stronger together!
            </p>
          </div>
        </div>
      </motion.div>

      {/* Back Button */}
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.button
          onClick={() => navigate('/')}
          className="pixel-button px-8 py-4 text-lg"
          style={{
            background: 'linear-gradient(135deg, #4a7c59 0%, #f4d03f 100%)'
          }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={playButtonSound}
        >
          <span className="flex items-center gap-2">
            <img src="/images/undertale/heart.png" alt="Heart" className="w-5 h-5" />
            ← {t('Back to Our Kingdom')}
            <img src="/images/undertale/heart.png" alt="Heart" className="w-5 h-5" />
          </span>
        </motion.button>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="fixed top-10 right-10 text-4xl opacity-20 pointer-events-none"
      >
        🛤️
      </motion.div>
    </motion.div>
  );
};

export default TwoRoads;
