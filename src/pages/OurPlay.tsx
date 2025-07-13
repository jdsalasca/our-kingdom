import { motion } from 'framer-motion';
import { useState } from 'react';

const OurPlay = () => {
  const [currentGame, setCurrentGame] = useState<string | null>(null);

  const games = [
    {
      id: 'memory',
      name: 'Memory Match',
      emoji: '🧠',
      description: 'Find matching pairs of our special moments!',
      color: 'from-pixel-green to-pixel-blue',
    },
    {
      id: 'puzzle',
      name: 'Love Puzzle',
      emoji: '🧩',
      description: 'Solve puzzles together and unlock our memories!',
      color: 'from-pixel-purple to-pixel-pink',
    },
    {
      id: 'adventure',
      name: 'Our Adventure',
      emoji: '🗺️',
      description: 'Go on a pixel adventure through our kingdom!',
      color: 'from-pixel-yellow to-pixel-orange',
    },
    {
      id: 'quiz',
      name: 'Love Quiz',
      emoji: '💝',
      description: 'Test how well we know each other!',
      color: 'from-pixel-red to-pixel-pink',
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
          🎮 Our Play 🎮
        </h1>
        <p className='pixel-subtitle text-xl'>
          Let's have fun together in our pixel paradise!
        </p>
      </div>

      {/* Games Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
        {games.map((game, index) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`pixel-card bg-gradient-to-br ${game.color} cursor-pointer hover:scale-105 transition-transform duration-300`}
            onClick={() => setCurrentGame(game.id)}
          >
            <div className='text-center'>
              <div className='text-6xl mb-4'>{game.emoji}</div>
              <h3 className='pixel-title text-xl mb-4'>{game.name}</h3>
              <p className='pixel-text'>{game.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Selected Game Display */}
      {currentGame && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className='pixel-card bg-gradient-to-br from-pixel-green to-pixel-blue max-w-2xl mx-auto'
        >
          <div className='text-center'>
            <h2 className='pixel-title text-2xl mb-4'>
              {games.find(g => g.id === currentGame)?.name}
            </h2>
            <div className='text-8xl mb-6'>
              {games.find(g => g.id === currentGame)?.emoji}
            </div>
            <p className='pixel-text mb-6'>
              {games.find(g => g.id === currentGame)?.description}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='pixel-button bg-pixel-purple hover:bg-pixel-pink mr-4'
            >
              Start Game
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='pixel-button bg-pixel-red hover:bg-pixel-orange'
              onClick={() => setCurrentGame(null)}
            >
              Back to Games
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Floating Game Elements */}
      <div className='fixed inset-0 pointer-events-none'>
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className='absolute top-20 left-20 text-4xl'
        >
          🎲
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className='absolute bottom-20 right-20 text-3xl'
        >
          🎯
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OurPlay;
