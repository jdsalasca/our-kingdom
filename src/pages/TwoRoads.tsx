import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const TwoRoads = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='min-h-screen'
    >
      <div className='text-center mb-12'>
        <h1 className='pixel-title text-5xl md:text-7xl mb-6'>
          🛤️ {t('Two Roads, One Destiny')} 🛤️
        </h1>
        <p className='pixel-subtitle text-xl'>
          {t('Our paths crossed and created something magical...')}
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
        {/* Road 1 */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className='pixel-card bg-gradient-to-br from-pixel-green to-pixel-blue'
        >
          <h2 className='pixel-title text-2xl mb-4'>🛣️ {t('Your Road')}</h2>
          <div className='space-y-4'>
            <div className='pixel-text'>
              <p>🌟 {t('Your journey began with...')}</p>
              <p>💫 {t('Your dreams and aspirations...')}</p>
              <p>🎯 {t('Your unique path in life...')}</p>
            </div>
          </div>
        </motion.div>

        {/* Road 2 */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className='pixel-card bg-gradient-to-br from-pixel-purple to-pixel-pink'
        >
          <h2 className='pixel-title text-2xl mb-4'>🛣️ {t('My Road')}</h2>
          <div className='space-y-4'>
            <div className='pixel-text'>
              <p>🌟 {t('My journey began with...')}</p>
              <p>💫 {t('My dreams and aspirations...')}</p>
              <p>🎯 {t('My unique path in life...')}</p>
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
        <div className='pixel-card bg-gradient-to-br from-pixel-yellow to-pixel-orange max-w-2xl mx-auto'>
          <h2 className='pixel-title text-3xl mb-6'>💕 {t('Where Our Roads Meet')}</h2>
          <p className='pixel-text text-lg'>
            {t('Here, in this magical intersection, our separate journeys became one beautiful adventure together. Every step we take now, we take hand in hand, building our own happy kingdom.')}
          </p>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className='fixed top-10 right-10 text-3xl pointer-events-none'
      >
        🛤️
      </motion.div>
    </motion.div>
  );
};

export default TwoRoads;
