import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BirthdayPresentationProps {
  onComplete: () => void;
}

const BirthdayPresentation = ({ onComplete }: BirthdayPresentationProps) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showUndertaleModal, setShowUndertaleModal] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [audioStarted, setAudioStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Enhanced birthday phrases with more emotional Spanish content
  const birthdayPhrases = [
    "¡Feliz cumpleaños, mi amor! 🎂",
    "Hoy es tu día especial ✨",
    "26 años de pura belleza 🌟",
    "Eres mi Undertale más preciado 💕",
    "Juntos hemos derrotado el boss de la soledad ⚔️",
    "Tu amor es mi Life Crystal más brillante ❤️",
    "Has construido el castillo más hermoso en mi corazón 🏰",
    "Eres mi Diamond of Love más valioso 💎",
    "Contigo he encontrado mi Treasure más preciado 💰",
    "Tu amor es mi Golden Fish más especial 🐟",
    "Juntos plantamos árboles de amor en Terraria 🌳",
    "Eres mi Home más cálido y seguro 🏠",
    "Tu amor es mi Fallen Down más hermoso 🍂",
    "Juntos creamos nuestro Once Upon a Time ✨",
    "Eres mi Corazón más latiente 💓",
    "Tu amor es mi Es Por Ti más sincero 🌹",
    "Juntos somos más fuertes que cualquier boss ⚔️",
    "Eres mi Die With A Smile más verdadero 😊",
    "Tu amor es mi Treasure más valioso 💎",
    "Juntos hemos pescado el amor más dorado 🎣",
    "Eres mi Castle of Love más hermoso 🏰",
    "Tu amor es mi Diamond más brillante 💎",
    "Juntos hemos minado el amor más puro ⛏️",
    "Eres mi Golden Fish más preciado 🐟",
    "Tu amor es mi Home más cálido 🏠",
    "Juntos hemos elaborado la poción del amor más fuerte 🧪",
    "Eres mi Life Crystal más brillante ❤️",
    "Tu amor es mi Treasure más valioso 💰",
    "Juntos hemos derrotado todos los bosses del amor ⚔️"
  ];

  // Undertale-style messages
  const undertaleMessages = [
    "* Tu amor me hace sentir DETERMINADO 💕",
    "* Papyrus dice: 'NYEH HEH HEH! ¡Este cumpleaños es muy cool!'",
    "* Sans dice: 'heh, feliz cumpleaños, chica.'",
    "* Asriel envía un abrazo virtual de cumpleaños 💙",
    "* Has encontrado: [Cristal de Amor] ❤️",
    "* Tu nivel de relación aumentó! ⬆️",
    "* Has desbloqueado: [Felicidad Eterna] ✨",
    "* Te sientes cálido y feliz por dentro 🌟",
    "* Tu alma brilla más fuerte! 💫",
    "* Has derrotado: [Boss de la Soledad] ⚔️",
    "* Has construido: [Castillo del Amor] 🏰",
    "* Has pescado: [Pez Dorado del Amor] 🐟",
    "* Has plantado: [Árbol del Amor] 🌳",
    "* Has minado: [Diamante del Amor] 💎",
    "* Has elaborado: [Poción de Amor] 🧪",
    "* Tu eres mi Undertale y con amor vamos a hacer que todo sea más hermoso 💕",
    "* I love you deeply, mi amor eterno 💖",
    "* Juntos somos más fuertes que cualquier boss ⚔️",
    "* Tu amor es mi Life Crystal más brillante ❤️",
    "* Contigo he derrotado el boss de la soledad 🛡️",
    "* Eres mi Diamond of Love más preciado 💎",
    "* Juntos plantamos árboles de amor en Terraria 🌳",
    "* Tu amor es mi Golden Fish más preciado 🐟",
    "* Eres mi Castle of Love más hermoso 🏰",
    "* Contigo he encontrado mi Treasure más valioso 💰",
    "* Tu amor es mi Home más cálido 🏠",
    "* Eres mi Fallen Down más hermoso 🍂",
    "* Juntos creamos nuestro Once Upon a Time ✨"
  ];

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Start background music
  useEffect(() => {
    const startBackgroundMusic = async () => {
      if (audioRef.current && !audioStarted) {
        try {
          audioRef.current.volume = 0.3;
          await audioRef.current.play();
          setAudioStarted(true);
          console.log('Background music started for birthday presentation');
        } catch (error) {
          console.log('Could not autoplay background music:', error);
        }
      }
    };

    // Try to start music immediately
    startBackgroundMusic();

    // Also try after user interaction
    const handleUserInteraction = () => {
      if (!audioStarted) {
        startBackgroundMusic();
      }
    };

    const events = ['click', 'touchstart', 'keydown', 'mousedown'];
    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
    };
  }, [audioStarted]);

  // Play Undertale button sound
  const playButtonSound = () => {
    const sound = new Audio('/music/undertale/buttons/undertale-select-sound.mp3');
    sound.volume = 0.3;
    sound.play().catch(() => {});
  };

  // Phase progression
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentPhase < birthdayPhrases.length - 1) {
        setCurrentPhase(currentPhase + 1);
      } else {
        setShowUndertaleModal(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentPhase, birthdayPhrases.length]);

  // Handle modal completion
  const handleModalComplete = () => {
    setShowUndertaleModal(false);
    setTimeout(() => {
      onComplete();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pixel-green via-pixel-blue to-pixel-purple flex items-center justify-center relative overflow-hidden">
      {/* Background Music */}
      <audio
        ref={audioRef}
        src="/music/undertale/once_upon_a_time.mp3"
        loop={true}
        preload="auto"
      />

      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={reducedMotion ? {} : {
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={reducedMotion ? {} : {
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <span className="text-2xl">💕</span>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <motion.div
            animate={reducedMotion ? {} : { rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="text-6xl mb-4"
          >
            👑
          </motion.div>
          <h1 className="pixel-title text-3xl md:text-4xl text-yellow-300 mb-4 undertale-text-glow">
            ¡Feliz Cumpleaños!
          </h1>
          <p className="pixel-text text-white text-lg md:text-xl mb-8">
            Mi amor, hoy es tu día especial 💕
          </p>
        </motion.div>

        {/* Birthday Phrases */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhase}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="bg-white/90 backdrop-blur-sm rounded-lg p-6 md:p-8 border-4 border-yellow-400 undertale-border-glow max-w-2xl mx-auto"
          >
            <motion.p
              className="pixel-text text-xl md:text-2xl text-purple-800 mb-4"
              animate={reducedMotion ? {} : { scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {birthdayPhrases[currentPhase]}
            </motion.p>
            
            <motion.div
              className="flex justify-center items-center gap-4"
              animate={reducedMotion ? {} : { scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <span className="text-3xl animate-heart-beat">💕</span>
              <span className="text-3xl animate-heart-beat">🎂</span>
              <span className="text-3xl animate-heart-beat">✨</span>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Indicator */}
        <motion.div
          className="mt-8 flex justify-center items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {birthdayPhrases.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full border-2 border-yellow-400 ${
                index <= currentPhase ? 'bg-yellow-400' : 'bg-transparent'
              }`}
              animate={index === currentPhase ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            />
          ))}
        </motion.div>
      </div>

      {/* Undertale Modal */}
      <AnimatePresence>
        {showUndertaleModal && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white/90 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-w-md text-center border-4 border-yellow-400 relative"
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 40 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            >
              <motion.div
                animate={reducedMotion ? {} : { rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="text-6xl mb-6"
              >
                🎮
              </motion.div>
              
              <h2 className="pixel-title text-2xl text-yellow-600 mb-4 undertale-text-glow">
                ¡Undertale Style!
              </h2>
              
              <motion.p
                className="pixel-text text-lg text-purple-800 mb-6"
                animate={reducedMotion ? {} : { opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {undertaleMessages[Math.floor(Math.random() * undertaleMessages.length)]}
              </motion.p>
              
              <motion.button
                className="pixel-button bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition border-2 border-yellow-600 text-lg"
                onClick={() => {
                  handleModalComplete();
                  playButtonSound();
                }}
                whileHover={reducedMotion ? {} : { scale: 1.05 }}
                whileTap={reducedMotion ? {} : { scale: 0.95 }}
                autoFocus
                style={{ touchAction: 'manipulation' }}
              >
                <span className="flex items-center gap-2">
                  <span className="animate-heart-beat">💕</span>
                  Continuar
                  <span className="animate-heart-beat">💕</span>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BirthdayPresentation; 