import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface SupportMessage {
  id: number;
  message: string;
  emoji: string;
  color: string;
}

const EmotionalSupport = () => {
  const { t } = useTranslation();
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const supportMessages: SupportMessage[] = [
    {
      id: 1,
      message: t('You are loved'),
      emoji: '💕',
      color: 'text-pink-300'
    },
    {
      id: 2,
      message: t('You are strong'),
      emoji: '💪',
      color: 'text-blue-300'
    },
    {
      id: 3,
      message: t('You are never alone'),
      emoji: '🤗',
      color: 'text-purple-300'
    },
    {
      id: 4,
      message: t('Together we are invincible'),
      emoji: '👑',
      color: 'text-yellow-300'
    },
    {
      id: 5,
      message: t('Your love lights up my world'),
      emoji: '✨',
      color: 'text-green-300'
    },
    {
      id: 6,
      message: t('I am here for you always'),
      emoji: '💖',
      color: 'text-red-300'
    }
  ];

  useEffect(() => {
    // Show support message every 30 seconds
    const interval = setInterval(() => {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 5000); // Hide after 5 seconds
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Rotate through messages
    const messageInterval = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % supportMessages.length);
    }, 6000);

    return () => clearInterval(messageInterval);
  }, [supportMessages.length]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50"
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={`pixel-card bg-gradient-to-br from-pixel-purple to-pixel-pink p-4 shadow-2xl border-2 border-white/20 backdrop-blur-md max-w-sm`}
        animate={{
          boxShadow: [
            "0 0 20px rgba(233, 30, 99, 0.3)",
            "0 0 40px rgba(233, 30, 99, 0.6)",
            "0 0 20px rgba(233, 30, 99, 0.3)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="text-2xl"
          >
            {supportMessages[currentMessage].emoji}
          </motion.div>
          <div>
            <p className={`pixel-text text-sm ${supportMessages[currentMessage].color} font-bold`}>
              {supportMessages[currentMessage].message}
            </p>
            <p className="pixel-text text-xs text-white/70 mt-1">
              {t('Remember: You are stronger than you know, more loved than you can imagine, and never alone in this journey.')}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EmotionalSupport; 