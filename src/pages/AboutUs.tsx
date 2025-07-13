import { motion } from 'framer-motion';

const AboutUs = () => {
  const milestones = [
    {
      date: 'First Meeting',
      emoji: '👀',
      description: 'The moment our eyes first met...',
    },
    {
      date: 'First Date',
      emoji: '💕',
      description: 'Our magical first date together...',
    },
    {
      date: 'First Kiss',
      emoji: '💋',
      description: 'A moment that changed everything...',
    },
    {
      date: 'Moving In',
      emoji: '🏠',
      description: 'Building our home together...',
    },
    {
      date: 'Future Dreams',
      emoji: '🌟',
      description: 'All the adventures yet to come...',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='min-h-screen'
    >
      <div className='text-center mb-12'>
        <h1 className='pixel-title text-5xl md:text-7xl mb-6'>
          💕 About Us 💕
        </h1>
        <p className='pixel-subtitle text-xl'>Our love story in pixels...</p>
      </div>

      {/* Our Story */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className='pixel-card bg-gradient-to-br from-pixel-pink to-pixel-purple mb-12'
      >
        <h2 className='pixel-title text-3xl mb-6 text-center'>Our Story</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div>
            <h3 className='pixel-title text-xl mb-4'>👑 You</h3>
            <p className='pixel-text'>
              You are the most amazing person I've ever met. Your smile lights
              up my world, your laugh is my favorite sound, and your love makes
              every day feel like a fairy tale. You bring out the best in me and
              make me want to be better every day.
            </p>
          </div>
          <div>
            <h3 className='pixel-title text-xl mb-4'>👑 Me</h3>
            <p className='pixel-text'>
              I promise to love you with all my heart, to be your biggest
              supporter, your best friend, and your partner in all of life's
              adventures. Together, we can conquer anything and build the most
              beautiful kingdom.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Milestones */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className='mb-12'
      >
        <h2 className='pixel-title text-3xl mb-8 text-center'>Our Journey</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.date}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className='pixel-card bg-gradient-to-br from-pixel-green to-pixel-blue text-center'
            >
              <div className='text-4xl mb-4'>{milestone.emoji}</div>
              <h3 className='pixel-title text-lg mb-2'>{milestone.date}</h3>
              <p className='pixel-text'>{milestone.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Love Stats */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className='pixel-card bg-gradient-to-br from-pixel-yellow to-pixel-orange text-center'
      >
        <h2 className='pixel-title text-3xl mb-6'>Our Love Stats</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          <div>
            <div className='text-4xl mb-2'>💕</div>
            <div className='pixel-title text-xl'>Infinite</div>
            <div className='pixel-text'>Love</div>
          </div>
          <div>
            <div className='text-4xl mb-2'>🌟</div>
            <div className='pixel-title text-xl'>Endless</div>
            <div className='pixel-text'>Adventures</div>
          </div>
          <div>
            <div className='text-4xl mb-2'>🎮</div>
            <div className='pixel-title text-xl'>Countless</div>
            <div className='pixel-text'>Laughs</div>
          </div>
          <div>
            <div className='text-4xl mb-2'>🏰</div>
            <div className='pixel-title text-xl'>Forever</div>
            <div className='pixel-text'>Together</div>
          </div>
        </div>
      </motion.div>

      {/* Floating Hearts */}
      <div className='fixed inset-0 pointer-events-none'>
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute text-pixel-pink text-2xl'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            💕
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AboutUs;
