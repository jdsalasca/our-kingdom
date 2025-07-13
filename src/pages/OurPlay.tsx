import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface MemoryCard {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

const OurPlay = () => {
  const { t } = useTranslation();
  const [currentGame, setCurrentGame] = useState<string | null>(null);
  const [memoryCards, setMemoryCards] = useState<MemoryCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [memoryScore, setMemoryScore] = useState(0);
  const [quizQuestions] = useState<QuizQuestion[]>([
    {
      question: t('What is your favorite color?'),
      options: [t('Pink'), t('Blue'), t('Purple'), t('Green')],
      correctAnswer: 0
    },
    {
      question: t('What is your favorite food?'),
      options: [t('Pizza'), t('Sushi'), t('Tacos'), t('Pasta')],
      correctAnswer: 1
    },
    {
      question: t('What is your dream vacation?'),
      options: [t('Beach'), t('Mountains'), t('City'), t('Forest')],
      correctAnswer: 2
    }
  ]);
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [showQuizResult, setShowQuizResult] = useState(false);

  const games = [
    {
      id: 'memory',
      name: t('Memory Match'),
      emoji: '🧠',
      description: t('Find matching pairs of our special moments!'),
      color: 'from-pixel-green to-pixel-blue',
    },
    {
      id: 'puzzle',
      name: t('Love Puzzle'),
      emoji: '🧩',
      description: t('Solve puzzles together and unlock our memories!'),
      color: 'from-pixel-purple to-pixel-pink',
    },
    {
      id: 'adventure',
      name: t('Our Adventure'),
      emoji: '🗺️',
      description: t('Go on a pixel adventure through our kingdom!'),
      color: 'from-pixel-yellow to-pixel-orange',
    },
    {
      id: 'quiz',
      name: t('Love Quiz'),
      emoji: '💝',
      description: t('Test how well we know each other!'),
      color: 'from-pixel-red to-pixel-pink',
    },
  ];

  // Initialize Memory Game
  useEffect(() => {
    if (currentGame === 'memory') {
      const emojis = ['💕', '🌟', '🎮', '🏰', '🌸', '⭐', '🎵', '💎'];
      const cards = [...emojis, ...emojis].map((emoji, index) => ({
        id: index,
        emoji,
        isFlipped: false,
        isMatched: false,
      }));
      // Shuffle cards
      for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
      }
      setMemoryCards(cards);
      setFlippedCards([]);
      setMemoryScore(0);
    }
  }, [currentGame]);

  const handleMemoryCardClick = (cardId: number) => {
    if (flippedCards.length === 2 || memoryCards[cardId].isFlipped || memoryCards[cardId].isMatched) {
      return;
    }

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [first, second] = newFlippedCards;
      if (memoryCards[first].emoji === memoryCards[second].emoji) {
        // Match found
        setMemoryCards(prev => prev.map(card => 
          card.id === first || card.id === second 
            ? { ...card, isMatched: true }
            : card
        ));
        setMemoryScore(prev => prev + 10);
        setFlippedCards([]);
      } else {
        // No match
        setTimeout(() => {
          setMemoryCards(prev => prev.map(card => 
            card.id === first || card.id === second 
              ? { ...card, isFlipped: false }
              : card
          ));
          setFlippedCards([]);
        }, 1000);
      }
    } else {
      setMemoryCards(prev => prev.map(card => 
        card.id === cardId ? { ...card, isFlipped: true } : card
      ));
    }
  };

  const handleQuizAnswer = (selectedAnswer: number) => {
    if (selectedAnswer === quizQuestions[currentQuizQuestion].correctAnswer) {
      setQuizScore(prev => prev + 1);
    }
    
    if (currentQuizQuestion < quizQuestions.length - 1) {
      setCurrentQuizQuestion(prev => prev + 1);
    } else {
      setShowQuizResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuizQuestion(0);
    setQuizScore(0);
    setShowQuizResult(false);
  };

  const renderMemoryGame = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="pixel-card bg-gradient-to-br from-pixel-green to-pixel-blue max-w-4xl mx-auto"
    >
      <div className="text-center mb-6">
        <h2 className="pixel-title text-2xl mb-4">{t('Memory Match')}</h2>
        <p className="pixel-text mb-4">{t('Score')}: {memoryScore}</p>
        <motion.button
          onClick={() => setCurrentGame(null)}
          className="pixel-button bg-pixel-red hover:bg-pixel-orange mb-4"
        >
          {t('Back to Games')}
        </motion.button>
      </div>
      
      <div className="grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-4">
        {memoryCards.map((card) => (
          <motion.button
            key={card.id}
            onClick={() => handleMemoryCardClick(card.id)}
            className={`memory-card text-2xl md:text-3xl ${
              card.isMatched 
                ? 'matched' 
                : card.isFlipped 
                  ? 'flipped' 
                  : 'unflipped'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={card.isMatched}
          >
            {card.isFlipped || card.isMatched ? card.emoji : '❓'}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );

  const renderQuizGame = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="pixel-card bg-gradient-to-br from-pixel-red to-pixel-pink max-w-2xl mx-auto"
    >
      <div className="text-center">
        {!showQuizResult ? (
          <>
            <h2 className="pixel-title text-2xl mb-6">{t('Love Quiz')}</h2>
            <p className="pixel-text mb-4">
              {t('Question')} {currentQuizQuestion + 1} / {quizQuestions.length}
            </p>
            <div className="mb-6">
              <h3 className="pixel-title text-lg mb-4">
                {quizQuestions[currentQuizQuestion].question}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {quizQuestions[currentQuizQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleQuizAnswer(index)}
                    className="quiz-option"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <h2 className="pixel-title text-2xl mb-6">{t('Quiz Complete!')}</h2>
            <div className="text-4xl mb-4">
              {quizScore === quizQuestions.length ? '🎉' : '💕'}
            </div>
            <p className="pixel-text mb-4">
              {t('Your Score')}: {quizScore} / {quizQuestions.length}
            </p>
            <motion.button
              onClick={resetQuiz}
              className="pixel-button bg-pixel-green hover:bg-pixel-yellow mr-4"
            >
              {t('Play Again')}
            </motion.button>
            <motion.button
              onClick={() => setCurrentGame(null)}
              className="pixel-button bg-pixel-red hover:bg-pixel-orange"
            >
              {t('Back to Games')}
            </motion.button>
          </>
        )}
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='min-h-screen'
    >
      <div className='text-center mb-8 md:mb-12'>
        <motion.h1 
          className='pixel-title text-4xl sm:text-5xl md:text-7xl mb-4 md:mb-6'
          animate={{ 
            textShadow: [
              "0 0 20px rgba(255,255,255,0.5)",
              "0 0 40px rgba(255,255,255,0.8)",
              "0 0 20px rgba(255,255,255,0.5)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🎮 {t('Our Play')} 🎮
        </motion.h1>
        <motion.p 
          className='pixel-subtitle text-lg sm:text-xl'
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {t("Let's have fun together in our pixel paradise!")}
        </motion.p>
      </div>

      {/* Games Grid */}
      {!currentGame && (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12 px-4'>
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`pixel-card bg-gradient-to-br ${game.color} cursor-pointer hover:scale-105 transition-transform duration-300`}
              onClick={() => setCurrentGame(game.id)}
              whileHover={{ y: -5 }}
            >
              <div className='text-center p-6'>
                <motion.div 
                  className='text-6xl mb-4'
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {game.emoji}
                </motion.div>
                <h3 className='pixel-title text-xl mb-4'>{game.name}</h3>
                <p className='pixel-text'>{game.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Selected Game Display */}
      <AnimatePresence mode="wait">
        {currentGame === 'memory' && renderMemoryGame()}
        {currentGame === 'quiz' && renderQuizGame()}
        {currentGame && currentGame !== 'memory' && currentGame !== 'quiz' && (
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
                {t('Start Game')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='pixel-button bg-pixel-red hover:bg-pixel-orange'
                onClick={() => setCurrentGame(null)}
              >
                {t('Back to Games')}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Floating Game Elements */}
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
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'linear',
          }}
          className='absolute top-1/2 left-10 text-2xl'
        >
          ⭐
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OurPlay;
