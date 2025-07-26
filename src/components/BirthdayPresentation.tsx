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
  const [showMusicButton, setShowMusicButton] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Beautiful birthday phrases - Selected 26 unique and meaningful for 26th birthday
  const birthdayPhrases = [
    "Eres la melodía que hace que mi vida sea música",
    "Tu amor es mi Undertale más preciado 💕",
    "Eres mi Life Crystal más brillante ❤️",
    "Has construido el castillo más hermoso en mi corazón 🏰",
    "Contigo he encontrado mi Treasure más preciado 💰",
    "Tu amor es mi Golden Fish más especial 🐟",
    "Juntos plantamos árboles de amor en Terraria 🌳",
    "Juntos creamos nuestro Once Upon a Time ✨",
    "Eres mi Corazón más latiente 💓",
    "Tu amor es mi Es Por Ti más sincero 🌹",
    "Juntos somos más fuertes que cualquier boss ⚔️",
    "Eres mi Die With A Smile más verdadero 😊",
    "Juntos hemos pescado el amor más dorado 🎣",
    "Eres mi Castle of Love más hermoso 🏰",
    "Tu amor es mi Diamond más brillante 💎",
    "Juntos hemos minado el amor más puro ⛏️",
    "Eres mi Golden Fish más preciado 🐟",
    "Tu amor es mi Home más cálido 🏠",
    "Juntos hemos elaborado la poción del amor más fuerte 🧪",
    "Eres mi Life Crystal más brillante ❤️",
    "Tu amor es mi Treasure más valioso 💰",
    "Juntos hemos derrotado todos los bosses ⚔️",
    "Tu amor es mi Diamond of Love más valioso 💎",
    "Eres mi Home más cálido y seguro 🏠",
    "Tu amor es mi Fallen Down más hermoso 🍂",
    "Tu eres mi Undertale y con amor vamos a hacer que todo sea más hermoso 💕"
  ];

  // Undertale-style messages - Cleaned up and unique
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
    "* Has construido: [Castillo del Amor] 🏰",
    "* Has pescado: [Pez Dorado del Amor] 🐟",
    "* Has plantado: [Árbol del Amor] 🌳",
    "* Has minado: [Diamante del Amor] 💎",
    "* Has elaborado: [Poción de Amor] 🧪",
    "* I love you deeply, mi amor eterno 💖",
    "* Juntos somos más fuertes que cualquier boss ⚔️",
    "* Tu amor es mi Life Crystal más brillante ❤️",
    "* Eres mi Diamond of Love más preciado 💎",
    "* Juntos plantamos árboles de amor en Terraria 🌳",
    "* Tu amor es mi Golden Fish más preciado 🐟",
    "* Eres mi Castle of Love más hermoso 🏰",
    "* Contigo he encontrado mi Treasure más valioso 💰",
    "* Tu amor es mi Home más cálido 🏠",
    "* Juntos creamos nuestro Once Upon a Time ✨",
    "* Eres mi lugar feliz y siempre estaré para ti con DETERMINACIÓN 💕"
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
  const startBackgroundMusic = async () => {
    if (audioRef.current && !audioStarted) {
      try {
        audioRef.current.volume = 0.3;
        await audioRef.current.play();
        setAudioStarted(true);
        setShowMusicButton(false);
        console.log('Background music started for birthday presentation');
      } catch (error) {
        console.log('Could not autoplay background music:', error);
      }
    }
  };

  // Handle user interaction for music
  useEffect(() => {
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

  // Handle modal completion
  const handleModalComplete = () => {
    setShowUndertaleModal(false);
    setTimeout(() => {
      onComplete();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background Music */}
      <audio
        ref={audioRef}
        src="/music/undertale/once_upon_a_time.mp3"
        loop={true}
        preload="auto"
      />

      {/* Floating Hearts Background - Like in the image */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large hearts like in the image */}
        <motion.div
          className="absolute top-20 left-20 text-4xl"
          animate={reducedMotion ? {} : { scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          💕
        </motion.div>
        <motion.div
          className="absolute top-16 left-32 text-4xl"
          animate={reducedMotion ? {} : { scale: [1.2, 1, 1.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        >
          💕
        </motion.div>
        
        {/* Small hearts scattered around */}
        <motion.div className="absolute top-4 left-4 text-xl">❤️</motion.div>
        <motion.div className="absolute top-4 right-4 text-xl">❤️</motion.div>
        <motion.div className="absolute top-1/2 left-4 text-xl">❤️</motion.div>
        <motion.div className="absolute top-1/2 right-4 text-xl">❤️</motion.div>
        <motion.div className="absolute bottom-4 right-4 text-xl">❤️</motion.div>
      </div>

      {/* Main Content - Like in the image */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        {/* Central Glowing Text - Like in the image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhase}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <motion.h1
              className="pixel-title text-3xl md:text-4xl lg:text-5xl text-yellow-300 mb-6 undertale-text-glow leading-tight"
              animate={reducedMotion ? {} : { scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {birthdayPhrases[currentPhase]}
            </motion.h1>
          </motion.div>
        </AnimatePresence>

        {/* Undertale Characters - Like in the image */}
        <motion.div
          className="flex justify-center items-center gap-4 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <img src="/images/undertale/papyrus.png" alt="Papyrus" className="w-12 h-12 md:w-16 md:h-16" />
          <img src="/images/undertale/sans.´png.png" alt="Sans" className="w-12 h-12 md:w-16 md:h-16" />
          <img src="/images/undertale/undertale_kid.png" alt="Frisk" className="w-12 h-12 md:w-16 md:h-16" />
          <img src="/images/undertale/dog.png" alt="Dog" className="w-12 h-12 md:w-16 md:h-16" />
          <img src="/images/undertale/asriel.png" alt="Asriel" className="w-12 h-12 md:w-16 md:h-16" />
        </motion.div>

        {/* Progress Indicator - Like in the image */}
        <motion.div
          className="flex justify-center items-center gap-4 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="pixel-text text-white text-lg">
            {currentPhase + 1} / {birthdayPhrases.length}
          </span>
        </motion.div>

        {/* Next Button - Like in the image */}
        <motion.button
          className="pixel-button bg-yellow-400 text-black px-8 py-3 rounded-lg hover:bg-yellow-500 transition border-4 border-yellow-600 text-lg font-bold undertale-border-glow"
          onClick={() => {
            if (currentPhase < birthdayPhrases.length - 1) {
              setCurrentPhase(currentPhase + 1);
            } else {
              setShowUndertaleModal(true);
            }
            playButtonSound();
          }}
          whileHover={reducedMotion ? {} : { scale: 1.05 }}
          whileTap={reducedMotion ? {} : { scale: 0.95 }}
          style={{ touchAction: 'manipulation' }}
        >
          Siguiente
        </motion.button>
      </div>

      {/* Music Button - NEW FEATURE */}
      {showMusicButton && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed top-4 right-4 z-50"
        >
          <motion.button
            onClick={() => {
              startBackgroundMusic();
              playButtonSound();
            }}
            className="pixel-button bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition border-2 border-pink-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ touchAction: 'manipulation' }}
          >
            🎵 Activar Música
          </motion.button>
        </motion.div>
      )}

      {/* Music Status Indicator */}
      {audioStarted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed top-4 left-4 z-50"
        >
          <div className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-bold">
            🎵 Música Activada
          </div>
        </motion.div>
      )}

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