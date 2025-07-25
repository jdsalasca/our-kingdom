import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const [currentGame, setCurrentGame] = useState<string | null>(null);
  const [memoryCards, setMemoryCards] = useState<MemoryCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [memoryScore, setMemoryScore] = useState(0);
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [showQuizResult, setShowQuizResult] = useState(false);

  // Enhanced quiz questions in Spanish
  const [quizQuestions] = useState<QuizQuestion[]>([
    {
      question: '¿Cuál es tu color favorito?',
      options: ['Rosa', 'Azul', 'Púrpura', 'Verde'],
      correctAnswer: 0
    },
    {
      question: '¿Cuál es tu comida favorita?',
      options: ['Pizza', 'Sushi', 'Tacos', 'Pasta'],
      correctAnswer: 1
    },
    {
      question: '¿Cuál es tu sueño de vacaciones?',
      options: ['Playa', 'Montañas', 'Ciudad', 'Bosque'],
      correctAnswer: 2
    },
    {
      question: '¿Qué personaje de Undertale te gusta más?',
      options: ['Sans', 'Papyrus', 'Asriel', 'Frisk'],
      correctAnswer: 0
    },
    {
      question: '¿Qué te gusta más de Terraria?',
      options: ['Construir', 'Explorar', 'Combatir', 'Pescar'],
      correctAnswer: 0
    }
  ]);

  const games = [
    {
      id: 'memory',
      name: 'Memoria del Amor',
      emoji: '🧠',
      description: '¡Encuentra las parejas de nuestros momentos especiales! * Tu LOVE aumenta con cada coincidencia.',
      color: 'from-pixel-green to-pixel-blue',
    },
    {
      id: 'puzzle',
      name: 'Rompecabezas del Amor',
      emoji: '🧩',
      description: '¡Resuelve puzzles juntos y desbloquea nuestros recuerdos! * Tu DETERMINACIÓN crece.',
      color: 'from-pixel-purple to-pixel-pink',
    },
    {
      id: 'adventure',
      name: 'Nuestra Aventura',
      emoji: '🗺️',
      description: '¡Ve en una aventura pixelada a través de nuestro reino! * Explora como en Terraria.',
      color: 'from-pixel-yellow to-pixel-orange',
    },
    {
      id: 'quiz',
      name: 'Quiz del Amor',
      emoji: '💝',
      description: '¡Pon a prueba qué tan bien nos conocemos! * Como Sans, pero con más amor.',
      color: 'from-pixel-red to-pixel-pink',
    },
    {
      id: 'undertale',
      name: 'Aventura Undertale',
      emoji: '💙',
      description: '¡Explora nuestra amistad y amor a través de temas de Undertale! * Tu alma brilla más fuerte.',
      color: 'from-pixel-blue to-pixel-purple',
    },
    {
      id: 'terraria',
      name: 'Construcción Terraria',
      emoji: '⛏️',
      description: '¡Construye nuestro mundo perfecto juntos, bloque a bloque! * Como construir un castillo de amor.',
      color: 'from-pixel-green to-pixel-brown',
    },
  ];

  // Initialize Memory Game
  useEffect(() => {
    if (currentGame === 'memory') {
      const emojis = ['💙', '💛', '💖', '💎', '⭐', '🌸', '🎮', '🏰', '⛏️', '🎯', '🏆', '💕'];
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

  // Play Undertale sound effect
  const playSound = () => {
    const sound = new Audio('/music/undertale/buttons/undertale-select-sound.mp3');
    sound.volume = 0.3;
    sound.play().catch(() => {});
  };

  const handleMemoryCardClick = (cardId: number) => {
    if (flippedCards.length === 2 || memoryCards[cardId].isFlipped || memoryCards[cardId].isMatched) {
      return;
    }

    playSound();
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
        <h2 className="pixel-title text-2xl mb-4">Memoria del Amor</h2>
        <p className="pixel-text mb-4">Puntuación: {memoryScore} * Tu LOVE aumenta con cada coincidencia</p>
        <motion.button
          onClick={() => setCurrentGame(null)}
          className="pixel-button bg-pixel-red hover:bg-pixel-orange mb-4"
          onMouseEnter={playSound}
        >
          Volver a los Juegos
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
            <h2 className="pixel-title text-2xl mb-6">Quiz del Amor</h2>
            <p className="pixel-text mb-4">
              Pregunta {currentQuizQuestion + 1} / {quizQuestions.length} * Como Sans, pero con más amor
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
                    onMouseEnter={playSound}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <h2 className="pixel-title text-2xl mb-6">¡Quiz Completado!</h2>
            <div className="text-4xl mb-4">
              {quizScore === quizQuestions.length ? '🎉' : '💕'}
            </div>
            <p className="pixel-text mb-4">
              Tu puntuación: {quizScore} / {quizQuestions.length} * Tu DETERMINACIÓN crece
            </p>
            <motion.button
              onClick={resetQuiz}
              className="pixel-button bg-pixel-green hover:bg-pixel-yellow mr-4"
              onMouseEnter={playSound}
            >
              Jugar de Nuevo
            </motion.button>
            <motion.button
              onClick={() => setCurrentGame(null)}
              className="pixel-button bg-pixel-red hover:bg-pixel-orange"
              onMouseEnter={playSound}
            >
              Volver a los Juegos
            </motion.button>
          </>
        )}
      </div>
    </motion.div>
  );

  const renderUndertaleGame = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="pixel-card bg-gradient-to-br from-pixel-blue to-pixel-purple max-w-2xl mx-auto"
    >
      <div className="text-center">
        <h2 className="pixel-title text-2xl mb-6">Aventura Undertale</h2>
        <div className="text-6xl mb-4">💙</div>
        <p className="pixel-text mb-6">
          En Undertale, cada decisión importa. Juntos hemos elegido el camino del amor y la amistad. * Tu alma brilla más fuerte.
        </p>
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between p-3 bg-white/20 rounded">
            <span className="pixel-text">❤️ LOVE</span>
            <span className="pixel-text text-pink-300">∞</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-white/20 rounded">
            <span className="pixel-text">💙 AMISTAD</span>
            <span className="pixel-text text-blue-300">∞</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-white/20 rounded">
            <span className="pixel-text">🌟 DETERMINACIÓN</span>
            <span className="pixel-text text-yellow-300">∞</span>
          </div>
        </div>
        <motion.button
          onClick={() => setCurrentGame(null)}
          className="pixel-button bg-pixel-purple hover:bg-pixel-pink"
          onMouseEnter={playSound}
        >
          Volver a los Juegos
        </motion.button>
      </div>
    </motion.div>
  );

  const renderTerrariaGame = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="pixel-card bg-gradient-to-br from-pixel-green to-pixel-brown max-w-2xl mx-auto"
    >
      <div className="text-center">
        <h2 className="pixel-title text-2xl mb-6">Construcción Terraria</h2>
        <div className="text-6xl mb-4">⛏️</div>
        <p className="pixel-text mb-6">
          Como en Terraria, construimos nuestro mundo perfecto juntos, ladrillo a ladrillo. * Como construir un castillo de amor.
        </p>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-3 bg-white/20 rounded">
            <div className="text-2xl mb-2">🏠</div>
            <div className="pixel-text text-sm">Nuestro Hogar</div>
          </div>
          <div className="text-center p-3 bg-white/20 rounded">
            <div className="text-2xl mb-2">💕</div>
            <div className="pixel-text text-sm">Nuestro Amor</div>
          </div>
          <div className="text-center p-3 bg-white/20 rounded">
            <div className="text-2xl mb-2">👑</div>
            <div className="pixel-text text-sm">Nuestro Reino</div>
          </div>
        </div>
        <motion.button
          onClick={() => setCurrentGame(null)}
          className="pixel-button bg-pixel-green hover:bg-pixel-yellow"
          onMouseEnter={playSound}
        >
          Volver a los Juegos
        </motion.button>
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
          🎮 Nuestro Juego 🎮
        </motion.h1>
        <motion.p 
          className='pixel-subtitle text-lg sm:text-xl'
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ¡Vamos a divertirnos juntos en nuestro paraíso pixelado! * Tu DETERMINACIÓN aumenta.
        </motion.p>
      </div>

      {/* Games Grid */}
      {!currentGame && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12 px-4'>
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
        {currentGame === 'undertale' && renderUndertaleGame()}
        {currentGame === 'terraria' && renderTerrariaGame()}
        {currentGame && !['memory', 'quiz', 'undertale', 'terraria'].includes(currentGame) && (
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
                onMouseEnter={playSound}
              >
                Iniciar Juego
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='pixel-button bg-pixel-red hover:bg-pixel-orange'
                onClick={() => setCurrentGame(null)}
                onMouseEnter={playSound}
              >
                Volver a los Juegos
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back Button */}
      {!currentGame && (
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            onClick={() => navigate('/')}
            className="pixel-button px-8 py-4 text-lg"
            style={{
              background: 'linear-gradient(135deg, #4a7c59 0%, #f4d03f 100%)'
            }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={playSound}
          >
            <span className="flex items-center gap-2">
              <img src="/images/undertale/heart.png" alt="Heart" className="w-5 h-5" />
              ← Volver a Nuestro Reino
              <img src="/images/undertale/heart.png" alt="Heart" className="w-5 h-5" />
            </span>
          </motion.button>
        </motion.div>
      )}

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
