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
    }, 4000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-40"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMessage}
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-3 rounded-lg shadow-lg max-w-xs"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="flex items-center gap-2"
            animate={reducedMotion ? {} : { scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xl" role="img" aria-label="Heart">💕</span>
            <p className="pixel-text text-sm font-medium">
              {messages[currentMessage]}
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default EmotionalSupport; 