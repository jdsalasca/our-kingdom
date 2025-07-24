import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface BirthdayPresentationProps {
  onComplete: () => void;
}

const BirthdayPresentation = ({ onComplete }: BirthdayPresentationProps) => {
  const { t } = useTranslation();
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showTheatre, setShowTheatre] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // 26 beautiful, emotional phrases in Spanish for her 26th birthday
  const birthdayPhrases = [
    "Eres la luz que ilumina cada uno de mis días, mi amor",
    "Tu sonrisa es el regalo más hermoso que la vida me ha dado",
    "Cada momento contigo es una nueva aventura de amor infinito",
    "Tu corazón es el lugar más cálido donde he encontrado refugio",
    "Eres la melodía que hace que mi vida sea música perfecta",
    "Tu amor es la fuerza que me hace ser mejor cada día",
    "Juntos hemos construido un reino de felicidad y amor eterno",
    "Eres mi compañera perfecta en esta hermosa aventura llamada vida",
    "Tu presencia hace que cada día sea especial y único",
    "Eres la razón por la que creo en el amor verdadero",
    "Contigo he descubierto que el amor es infinito y eterno",
    "Tu amor me hace sentir que puedo conquistar el mundo entero",
    "Eres mi sueño hecho realidad, mi felicidad completa",
    "Cada día que paso contigo es un regalo del universo",
    "Tu amor es la magia que hace que todo sea posible",
    "Eres mi inspiración, mi motivación, mi todo",
    "Contigo he encontrado el significado verdadero del amor",
    "Tu corazón es el lugar donde quiero vivir para siempre",
    "Eres la persona que hace que mi vida sea perfecta",
    "Tu amor es el tesoro más valioso que he encontrado",
    "Cada momento contigo es un nuevo capítulo de felicidad",
    "Eres mi compañera de vida, mi amor eterno",
    "Tu presencia hace que cada día sea una celebración",
    "Eres la razón por la que mi corazón late con alegría",
    "Contigo he descubierto que el amor es la respuesta a todo",
    "Tu amor es el regalo más hermoso que he recibido",
    "Eres mi todo, mi presente, mi futuro, mi eternidad"
  ];

  const handleStart = () => {
    setHasStarted(true);
    setCurrentPhase(1);
  };

  const handleNextPhase = () => {
    if (currentPhase < birthdayPhrases.length) {
      setCurrentPhase(currentPhase + 1);
    } else {
      setShowTheatre(true);
      setTimeout(() => {
        setIsComplete(true);
        // Save to localStorage that presentation has been shown
        localStorage.setItem('initial_presentation_showed', 'true');
        setTimeout(() => {
          onComplete();
        }, 3000);
      }, 4000);
    }
  };

  const handleSkip = () => {
    localStorage.setItem('initial_presentation_showed', 'true');
    onComplete();
  };

  return (
    <AnimatePresence mode="wait">
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Theatre Opening Effect */}
          {showTheatre && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <div className="relative w-full h-full">
                {/* Theatre Curtains */}
                <motion.div
                  className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-b from-red-800 to-red-600"
                  initial={{ x: 0 }}
                  animate={{ x: "-100%" }}
                  transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-red-800 to-red-600"
                  initial={{ x: 0 }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                />
                
                {/* Stage Light Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-yellow-200 via-yellow-100 to-transparent opacity-0"
                  animate={{ opacity: [0, 0.4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
                
                {/* Final Message */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.5, duration: 1.5 }}
                >
                  <div className="text-center text-white">
                    <motion.h1
                      className="pixel-title text-4xl md:text-6xl mb-6"
                      animate={reducedMotion ? {} : { scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      🎉 ¡Bienvenida a Nuestro Reino! 🎉
                    </motion.h1>
                    <motion.p
                      className="pixel-text text-xl md:text-2xl mb-4"
                      animate={reducedMotion ? {} : { opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Tu música especial está comenzando... 💕
                    </motion.p>
                    <motion.div
                      className="text-4xl"
                      animate={reducedMotion ? {} : { rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      🎵
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Birthday Presentation */}
          {!showTheatre && (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Background with floating hearts */}
              <div className="absolute inset-0 overflow-hidden">
                {Array.from({ length: 30 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-pink-400 text-2xl"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={reducedMotion ? {} : {
                      y: [0, -40, 0],
                      opacity: [0.3, 0.9, 0.3],
                      rotate: [0, 180, 360],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 4 + Math.random() * 3,
                      repeat: Infinity,
                      delay: Math.random() * 3,
                    }}
                  >
                    ❤️
                  </motion.div>
                ))}
              </div>

              {/* Main Content */}
              <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
                {!hasStarted ? (
                  // Initial screen
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <motion.div
                      className="text-8xl mb-8"
                      animate={reducedMotion ? {} : { rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      🎂
                    </motion.div>
                    <motion.h1
                      className="pixel-title text-4xl md:text-6xl mb-6 text-white"
                      animate={reducedMotion ? {} : { y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ¡Feliz Cumpleaños, Mi Amor! 🎉
                    </motion.h1>
                    <motion.p
                      className="pixel-text text-xl md:text-2xl mb-8 text-white/90"
                      animate={reducedMotion ? {} : { opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Hoy cumples 26 años y quiero celebrar cada momento contigo 💕
                    </motion.p>
                    <motion.button
                      onClick={handleStart}
                      className="pixel-button px-8 py-4 text-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                      whileHover={reducedMotion ? {} : { scale: 1.05 }}
                      whileTap={reducedMotion ? {} : { scale: 0.95 }}
                    >
                      🎉 Comenzar Celebración Especial 🎉
                    </motion.button>
                    <motion.button
                      onClick={handleSkip}
                      className="block mx-auto mt-4 text-white/70 hover:text-white transition-colors"
                      whileHover={reducedMotion ? {} : { scale: 1.05 }}
                    >
                      {t('Skip Presentation')}
                    </motion.button>
                  </motion.div>
                ) : (
                  // Phrase display
                  <motion.div
                    key={currentPhase}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                  >
                    <motion.div
                      className="text-6xl mb-8"
                      animate={reducedMotion ? {} : { scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      💕
                    </motion.div>
                    <motion.h2
                      className="pixel-title text-2xl md:text-4xl mb-8 text-white leading-relaxed"
                      animate={reducedMotion ? {} : { opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {birthdayPhrases[currentPhase - 1]}
                    </motion.h2>
                    <motion.div
                      className="text-white/60 mb-8"
                      animate={reducedMotion ? {} : { opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {currentPhase} de {birthdayPhrases.length}
                    </motion.div>
                    <motion.button
                      onClick={handleNextPhase}
                      className="pixel-button px-6 py-3 text-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                      whileHover={reducedMotion ? {} : { scale: 1.05 }}
                      whileTap={reducedMotion ? {} : { scale: 0.95 }}
                    >
                      {currentPhase === birthdayPhrases.length ? '🎭 Abrir Teatro Mágico 🎭' : '💝 Siguiente 💝'}
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BirthdayPresentation; 