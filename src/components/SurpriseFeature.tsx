import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface SurpriseFeatureProps {
  isActive: boolean;
  onClose: () => void;
}

const SurpriseFeature = ({ isActive, onClose }: SurpriseFeatureProps) => {
  const { t } = useTranslation();
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showHearts, setShowHearts] = useState(false);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        setCurrentPhase(1);
        setTimeout(() => {
          setCurrentPhase(2);
          setShowHearts(true);
          setTimeout(() => {
            setCurrentPhase(3);
            setTimeout(() => {
              onClose();
            }, 3000);
          }, 2000);
        }, 2000);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isActive, onClose]);

  const phases = [
    {
      title: t('A Special Surprise'),
      message: t('For the most amazing person in my life...'),
      emoji: '🎁'
    },
    {
      title: t('You Are Everything'),
      message: t('Every moment with you is a gift. You make my world complete.'),
      emoji: '💝'
    },
    {
      title: t('My Promise to You'),
      message: t('I promise to love you more each day, to be your strength when you need it, and to hold your hand through every adventure.'),
      emoji: '💍'
    },
    {
      title: t('Forever Yours'),
      message: t('I love you more than words can express. You are my everything. 💕'),
      emoji: '💕'
    }
  ];

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Background with animated gradient */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4)',
                'linear-gradient(45deg, #f093fb, #f5576c, #4facfe, #00f2fe)',
                'linear-gradient(45deg, #43e97b, #38f9d7, #fa709a, #fee140)',
                'linear-gradient(45deg, #a8edea, #fed6e3, #ffecd2, #fcb69f)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Floating hearts background */}
          {showHearts && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-2xl"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -100],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    delay: Math.random() * 2,
                  }}
                >
                  {['💕', '💖', '💝', '💗', '💓'][Math.floor(Math.random() * 5)]}
                </motion.div>
              ))}
            </div>
          )}

          {/* Main content */}
          <motion.div
            className="relative z-10 text-center max-w-2xl mx-auto p-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <motion.div
              key={currentPhase}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="pixel-card bg-white/90 backdrop-blur-md p-8 shadow-2xl border-4 border-pixel-purple"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-8xl mb-6"
              >
                {phases[currentPhase].emoji}
              </motion.div>

              <motion.h1
                className="pixel-title text-3xl md:text-4xl mb-6 text-pixel-purple"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(233, 30, 99, 0.5)",
                    "0 0 40px rgba(233, 30, 99, 0.8)",
                    "0 0 20px rgba(233, 30, 99, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {phases[currentPhase].title}
              </motion.h1>

              <motion.p
                className="pixel-text text-lg md:text-xl leading-relaxed text-gray-800"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {phases[currentPhase].message}
              </motion.p>

              {/* Progress indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {phases.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index <= currentPhase ? 'bg-pixel-pink' : 'bg-gray-300'
                    }`}
                    animate={index === currentPhase ? { scale: [1, 1.5, 1] } : {}}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SurpriseFeature; 