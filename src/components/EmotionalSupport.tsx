import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const EmotionalSupport = () => {
  const { t } = useTranslation();
  const [currentMessage, setCurrentMessage] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Enhanced emotional support messages
  const messages = [
    t('You are loved'),
    t('You are strong'),
    t('You are never alone'),
    t('Together we are invincible'),
    t('Your love lights up my world'),
    t('I am here for you always'),
    t('You are beautiful'),
    t('You are amazing'),
    t('You are perfect'),
    t('You are my everything'),
    t('You make me happy'),
    t('You are my dream come true'),
    t('You are my soulmate'),
    t('You are my best friend'),
    t('You are my partner'),
    t('You are my love'),
    t('You are my life'),
    t('You are my future'),
    t('You are my past'),
    t('You are my present'),
    t('You are my yesterday'),
    t('You are my today'),
    t('You are my tomorrow'),
    t('You are my always'),
    t('You are my forever'),
    t('You are my never'),
    t('You are my sometimes'),
    t('You are my rarely'),
    t('You are my often'),
    t('You are my seldom'),
    t('You are my frequently'),
    t('You are my constantly'),
    t('You are my continuously'),
    t('You are my perpetually'),
    t('You are my eternally'),
  ];

  // Rotate through messages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 5000); // Change message every 5 seconds

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMessage}
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-pixel-pink to-pixel-purple text-white px-6 py-3 rounded-full shadow-lg border-2 border-white"
        >
          <motion.div
            className="flex items-center gap-2"
            animate={reducedMotion ? {} : { scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xl">💕</span>
            <span className="pixel-text text-sm font-medium whitespace-nowrap">
              {messages[currentMessage]}
            </span>
            <span className="text-xl">💕</span>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default EmotionalSupport; 