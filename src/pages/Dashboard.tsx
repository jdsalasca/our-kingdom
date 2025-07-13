import { motion } from 'framer-motion';
import {
  Character,
  Heart,
  Star,
  Tree,
  Flower,
  Castle,
  FloatingElements,
} from '../components/Sprites';

const Dashboard = () => {
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

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      className='min-h-screen bg-pixel-pattern'
    >
      {/* Hero Section */}
      <motion.div
        variants={itemVariants}
        className='text-center mb-12 relative'
      >
        <div className='absolute inset-0 flex justify-center items-center pointer-events-none'>
          <Castle className='opacity-20 scale-150' />
        </div>
        <h1 className='pixel-title text-6xl md:text-8xl mb-6 relative z-10'>
          👑 Our Happy Kingdom 👑
        </h1>
        <p className='pixel-subtitle text-xl md:text-2xl relative z-10'>
          Welcome to our magical pixel world together! 💕
        </p>

        {/* Character Sprites */}
        <div className='flex justify-center items-center gap-8 mt-8 relative z-10'>
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Character type='player1' direction='right' />
          </motion.div>
          <Heart size='large' />
          <motion.div
            animate={{ x: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            <Character type='player2' direction='left' />
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* Two Roads Card */}
        <motion.div
          variants={itemVariants}
          className='pixel-card bg-gradient-to-br from-pixel-green to-pixel-blue hover:scale-105 transition-transform duration-300 glow-green'
        >
          <div className='text-center'>
            <div className='flex justify-center items-center mb-4'>
              <Tree type='normal' className='mr-2' />
              <span className='text-4xl'>🛤️</span>
              <Tree type='fruit' className='ml-2' />
            </div>
            <h3 className='pixel-title text-xl mb-4'>Two Roads, One Destiny</h3>
            <p className='pixel-text mb-4'>
              Explore the paths that brought us together and the adventures that
              await us!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='pixel-button bg-pixel-purple hover:bg-pixel-pink'
            >
              Start Journey →
            </motion.button>
          </div>
        </motion.div>

        {/* Our Play Card */}
        <motion.div
          variants={itemVariants}
          className='pixel-card bg-gradient-to-br from-pixel-yellow to-pixel-orange hover:scale-105 transition-transform duration-300 glow-pink'
        >
          <div className='text-center'>
            <div className='flex justify-center items-center mb-4'>
              <Star className='mr-2' />
              <span className='text-4xl'>🎮</span>
              <Star className='ml-2' />
            </div>
            <h3 className='pixel-title text-xl mb-4'>Our Play</h3>
            <p className='pixel-text mb-4'>
              Fun games and activities we can enjoy together in our pixel
              paradise!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='pixel-button bg-pixel-orange hover:bg-pixel-yellow'
            >
              Let's Play! →
            </motion.button>
          </div>
        </motion.div>

        {/* About Us Card */}
        <motion.div
          variants={itemVariants}
          className='pixel-card bg-gradient-to-br from-pixel-pink to-pixel-purple hover:scale-105 transition-transform duration-300 glow-blue'
        >
          <div className='text-center'>
            <div className='flex justify-center items-center mb-4'>
              <Flower color='pink' className='mr-2' />
              <span className='text-4xl'>💕</span>
              <Flower color='purple' className='ml-2' />
            </div>
            <h3 className='pixel-title text-xl mb-4'>About Us</h3>
            <p className='pixel-text mb-4'>
              Learn more about our story and the love that built this kingdom!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='pixel-button bg-pixel-pink hover:bg-pixel-purple'
            >
              Our Story →
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className='mt-12 grid grid-cols-2 md:grid-cols-4 gap-4'>
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className='flex justify-center'
        >
          <Flower color='yellow' />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className='flex justify-center'
        >
          <Tree type='fruit' />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='flex justify-center'
        >
          <Star />
        </motion.div>
        <motion.div
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className='flex justify-center'
        >
          <Flower color='red' />
        </motion.div>
      </div>

      {/* Floating Elements */}
      <FloatingElements />
    </motion.div>
  );
};

export default Dashboard;
