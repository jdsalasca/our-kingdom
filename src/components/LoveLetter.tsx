import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface LoveLetterProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoveLetter = ({ isOpen, onClose }: LoveLetterProps) => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);

  const letterPages = [
    {
      title: t('My Dearest Love'),
      content: t('Mi amor, cada día que paso contigo es como una nueva aventura en nuestro propio reino de píxeles.'),
      emoji: '💌'
    },
    {
      title: t('Our Adventure Together'),
      content: t('Como en Undertale, cada decisión que tomamos juntos nos acerca más, y como en Terraria, construimos nuestro mundo perfecto ladrillo a ladrillo.'),
      emoji: '🎮'
    },
    {
      title: t('Your Strength'),
      content: t('En estos momentos difíciles, quiero que sepas que eres increíblemente fuerte. Tu amor y tu luz iluminan mi mundo cada día.'),
      emoji: '💪'
    },
    {
      title: t('Forever Together'),
      content: t('Juntos somos invencibles. Te amo infinitamente y estoy aquí para ti, siempre. 💕'),
      emoji: '💕'
    }
  ];

  const nextPage = () => {
    if (currentPage < letterPages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      onClose();
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="pixel-card bg-gradient-to-br from-pixel-yellow to-pixel-pink max-w-lg mx-auto text-center relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="absolute top-2 right-2 pixel-button flex items-center justify-center p-2" 
              onClick={onClose}
              aria-label="Close letter"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="16" height="16" fill="#fff" stroke="#000" strokeWidth="2"/>
                <rect x="5" y="5" width="10" height="2" fill="#e91e63" transform="rotate(45 10 10)" />
                <rect x="5" y="5" width="10" height="2" fill="#e91e63" transform="rotate(-45 10 10)" />
              </svg>
            </button>
            
            {/* Letter Content */}
            <div className="p-8">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-6xl mb-4"
                >
                  {letterPages[currentPage].emoji}
                </motion.div>
                
                <h2 className="pixel-title text-2xl mb-4 text-pixel-purple">
                  {letterPages[currentPage].title}
                </h2>
                
                <p className="pixel-text text-lg leading-relaxed">
                  {letterPages[currentPage].content}
                </p>
              </motion.div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-6">
                <motion.button
                  onClick={prevPage}
                  className={`pixel-button px-4 py-2 ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={currentPage === 0}
                  whileHover={currentPage > 0 ? { scale: 1.05 } : {}}
                  whileTap={currentPage > 0 ? { scale: 0.95 } : {}}
                >
                  ← {t('Previous')}
                </motion.button>
                
                <span className="pixel-text text-sm">
                  {currentPage + 1} / {letterPages.length}
                </span>
                
                <motion.button
                  onClick={nextPage}
                  className="pixel-button px-4 py-2 bg-pixel-purple hover:bg-pixel-pink"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {currentPage === letterPages.length - 1 ? t('Close') : t('Next')} →
                </motion.button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 text-2xl">💕</div>
            <div className="absolute bottom-4 right-4 text-2xl">💖</div>
            <div className="absolute top-1/2 left-2 text-xl">✨</div>
            <div className="absolute top-1/2 right-2 text-xl">🌟</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoveLetter; 