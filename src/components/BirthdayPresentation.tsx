import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BirthdayPresentationProps {
  onComplete: () => void;
}

const BirthdayPresentation = ({ onComplete }: BirthdayPresentationProps) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [showTheatre, setShowTheatre] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [showUndertaleMessage, setShowUndertaleMessage] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Start Undertale music when presentation begins
  useEffect(() => {
    if (hasStarted && audioRef.current) {
      audioRef.current.volume = 0.25;
      audioRef.current.loop = true;
      audioRef.current.play().then(() => {
        console.log('🎵 Undertale music started for birthday presentation!');
      }).catch(console.warn);
    }
  }, [hasStarted]);

  // Show Undertale message periodically
  useEffect(() => {
    if (hasStarted && !showTheatre) {
      const messageInterval = setInterval(() => {
        if (Math.random() < 0.3) {
          setShowUndertaleMessage(true);
          setTimeout(() => setShowUndertaleMessage(false), 3000);
        }
      }, 8000);

      return () => clearInterval(messageInterval);
    }
  }, [hasStarted, showTheatre]);

  const handleStart = () => {
    setHasStarted(true);
    // Play Undertale button sound
    const sound = new Audio('/music/undertale/buttons/undertale-select-sound.mp3');
    sound.volume = 0.4;
    sound.play().catch(console.warn);
  };

  const handleNextPhase = () => {
    // Play Undertale button sound
    const sound = new Audio('/music/undertale/buttons/undertale-select-sound.mp3');
    sound.volume = 0.3;
    sound.play().catch(console.warn);

    if (currentPhase < birthdayPhrases.length - 1) {
      setCurrentPhase(currentPhase + 1);
    } else {
      // Play theatre opening sound
      const theatreSound = new Audio('/music/undertale/buttons/undertale-select-sound.mp3');
      theatreSound.volume = 0.5;
      theatreSound.play().catch(console.warn);
      
      setShowTheatre(true);
      setTimeout(() => {
        localStorage.setItem('initial_presentation_showed', 'true');
        onComplete();
      }, 4000);
    }
  };

  const handleSkip = () => {
    localStorage.setItem('initial_presentation_showed', 'true');
    onComplete();
  };

  // Enhanced 30 beautiful phrases in Spanish for her 26th birthday with Undertale/Terraria references
  const birthdayPhrases = [
    "Eres la luz que ilumina cada uno de mis días",
    "Tu sonrisa es el regalo más hermoso que la vida me ha dado",
    "Cada momento contigo es una nueva aventura de amor",
    "Tu corazón es el lugar más cálido donde he encontrado refugio",
    "Eres la melodía que hace que mi vida sea música",
    "Tu amor es la fuerza que me hace ser mejor cada día",
    "Juntos hemos construido un reino de felicidad y amor",
    "Eres mi compañera perfecta en esta hermosa aventura llamada vida",
    "Tu presencia hace que cada día sea especial y único",
    "Eres la razón por la que creo en el amor verdadero",
    "Contigo he descubierto que el amor es infinito y eterno",
    "Tu amor me hace sentir que puedo conquistar el mundo",
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
    "Tu eres mi Undertale y mi Terraria, mi todo 💕",
    "I love you deeply, mi amor eterno 💖",
    "Tu amor es mi DETERMINACIÓN más fuerte 💪",
    "Eres mi LOVE infinito y mi felicidad eterna ❤️",
    "Juntos somos más fuertes que cualquier boss ⚔️",
    "Tu amor es mi Life Crystal más brillante ❤️",
    "Contigo he derrotado el boss de la soledad 🛡️",
    "Eres mi Diamond of Love más preciado 💎",
    "Juntos plantamos árboles de amor en Terraria 🌳",
    "Tu amor es mi Golden Fish más preciado 🐟",
    "Eres mi Castle of Love más hermoso 🏰",
    "Contigo he encontrado mi Treasure más valioso 💰",
    "Tu amor es mi Home más cálido 🏠",
    "Eres mi Fallen Down más hermoso 🍂",
    "Juntos creamos nuestro Once Upon a Time ✨"
  ];

  // Enhanced Undertale-style floating messages in Spanish
  const undertaleMessages = [
    "* Papyrus dice: NYEH HEH HEH! ¡Este cumpleaños es muy cool! 💙",
    "* Sans dice: 'heh, el amor es genial, chica.' 💛",
    "* Asriel envía un abrazo virtual 💙",
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
    "* Tu eres mi Undertale y con amor vamos a hacer que todo sea más hermoso y divertido 💕",
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
    "* Juntos creamos nuestro Once Upon a Time ✨",
  ];

  if (!hasStarted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
        {/* Enhanced Undertale-style background with floating hearts and characters */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={reducedMotion ? {} : {
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={reducedMotion ? {} : {
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              <img 
                src={i % 2 === 0 ? "/images/undertale/heart.png" : "/images/undertale/red_heart.png"}
                alt="Undertale Heart" 
                className="w-8 h-8"
              />
            </motion.div>
          ))}
        </div>

        {/* Floating Undertale characters - simplified */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.img
            src="/images/undertale/papyrus.png"
            alt="Papyrus"
            className="absolute w-16 h-16 opacity-50"
            style={{ left: '10%', top: '20%' }}
            animate={reducedMotion ? {} : { y: [0, -8, 0] }}
            transition={reducedMotion ? {} : { duration: 4, repeat: Infinity }}
          />
          <motion.img
            src="/images/undertale/sans.´png.png"
            alt="Sans"
            className="absolute w-16 h-16 opacity-50"
            style={{ right: '15%', top: '30%' }}
            animate={reducedMotion ? {} : { y: [0, -6, 0] }}
            transition={reducedMotion ? {} : { duration: 3, repeat: Infinity, delay: 1 }}
          />
          <motion.img
            src="/images/undertale/asriel.png"
            alt="Asriel"
            className="absolute w-14 h-14 opacity-40"
            style={{ right: '25%', bottom: '20%' }}
            animate={reducedMotion ? {} : { y: [0, -8, 0] }}
            transition={reducedMotion ? {} : { duration: 5, repeat: Infinity, delay: 0.5 }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center z-10"
        >
          <motion.div
            animate={reducedMotion ? {} : { rotate: [0, 360] }}
            transition={reducedMotion ? {} : { duration: 10, repeat: Infinity, ease: "linear" }}
            className="text-8xl mb-8"
          >
            👑
          </motion.div>
          
          <h1 className="pixel-title text-4xl md:text-6xl text-yellow-300 mb-6 undertale-text-glow">
            ¡Feliz Cumpleaños, Mi Amor!
          </h1>
          
          <p className="pixel-text text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
            Hoy cumples 26 años y quiero celebrar cada momento contigo 💕
          </p>

          {/* Enhanced Undertale-style message */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8 max-w-lg mx-auto undertale-border-glow border-4 border-yellow-400">
            <p className="pixel-text text-lg text-yellow-300 mb-4">
              "Tu eres mi Undertale y con amor vamos a hacer que todo sea más hermoso y divertido"
            </p>
            <p className="pixel-text text-sm text-white">
              - Tu novio que te ama infinitamente 💕
            </p>
          </div>

          <motion.button
            onClick={handleStart}
            className="pixel-button bg-gradient-to-r from-pixel-purple to-pixel-pink text-white px-8 py-4 text-xl border-4 border-yellow-400"
            whileHover={reducedMotion ? {} : { scale: 1.05, rotate: 2 }}
            whileTap={reducedMotion ? {} : { scale: 0.95 }}
            onMouseEnter={() => {
              const sound = new Audio('/music/undertale/buttons/undertale-select-sound.mp3');
              sound.volume = 0.3;
              sound.play().catch(console.warn);
            }}
          >
            <span className="flex items-center gap-3">
              <img src="/images/undertale/heart.png" alt="Heart" className="w-6 h-6 animate-heart-beat" />
              Iniciar Celebración Especial
              <img src="/images/undertale/heart.png" alt="Heart" className="w-6 h-6 animate-heart-beat" />
            </span>
          </motion.button>

          <motion.button
            onClick={handleSkip}
            className="block mx-auto mt-6 text-white/70 hover:text-white transition-colors"
            onMouseEnter={() => {
              const sound = new Audio('/music/undertale/buttons/undertale-select-sound.mp3');
              sound.volume = 0.2;
              sound.play().catch(console.warn);
            }}
          >
            Saltar Presentación
          </motion.button>
        </motion.div>

        {/* Undertale music */}
        <audio ref={audioRef} src="/music/undertale/once_upon_a_time.mp3" preload="auto" />
      </div>
    );
  }

  if (showTheatre) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
        {/* Enhanced theatre curtains effect */}
        <motion.div
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-b from-red-900 to-red-700 z-20"
        />
        
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-t from-red-900 to-red-700 z-20"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-center z-30"
        >
          <motion.div
            animate={reducedMotion ? {} : { rotate: [0, 360] }}
            transition={reducedMotion ? {} : { duration: 8, repeat: Infinity, ease: "linear" }}
            className="text-8xl mb-6"
          >
            👑
          </motion.div>
          
          <h1 className="pixel-title text-4xl md:text-6xl text-yellow-300 mb-6 undertale-text-glow">
            ¡Bienvenida a Nuestro Reino!
          </h1>
          
          <p className="pixel-text text-xl text-white mb-8">
            Tu música especial está comenzando... 💕
          </p>

          {/* Enhanced Undertale characters floating */}
          <div className="flex justify-center gap-8 mb-8">
            <motion.img
              src="/images/undertale/papyrus.png"
              alt="Papyrus"
              className="w-16 h-16"
              animate={reducedMotion ? {} : { y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
              transition={reducedMotion ? {} : { duration: 2, repeat: Infinity }}
            />
            <motion.img
              src="/images/undertale/sans.´png.png"
              alt="Sans"
              className="w-16 h-16"
              animate={reducedMotion ? {} : { y: [0, -10, 0], rotate: [0, -3, 3, 0] }}
              transition={reducedMotion ? {} : { duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.img
              src="/images/undertale/undertale_kid.png"
              alt="Undertale Kid"
              className="w-16 h-16"
              animate={reducedMotion ? {} : { y: [0, -10, 0], scale: [1, 1.1, 1] }}
              transition={reducedMotion ? {} : { duration: 2, repeat: Infinity, delay: 1 }}
            />
            <motion.img
              src="/images/undertale/dog.png"
              alt="Dog"
              className="w-14 h-14"
              animate={reducedMotion ? {} : { y: [0, -8, 0], rotate: [0, 10, -10, 0] }}
              transition={reducedMotion ? {} : { duration: 1.5, repeat: Infinity, delay: 1.5 }}
            />
            <motion.img
              src="/images/undertale/asriel.png"
              alt="Asriel"
              className="w-16 h-16"
              animate={reducedMotion ? {} : { y: [0, -12, 0], scale: [1, 1.05, 1] }}
              transition={reducedMotion ? {} : { duration: 3, repeat: Infinity, delay: 0.8 }}
            />
          </div>

          <motion.div
            animate={reducedMotion ? {} : { scale: [1, 1.1, 1] }}
            transition={reducedMotion ? {} : { duration: 2, repeat: Infinity }}
            className="text-2xl text-yellow-300 undertale-text-glow"
          >
            Abrir Teatro Mágico
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Undertale-style background */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={reducedMotion ? {} : {
              y: [0, -20, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={reducedMotion ? {} : {
              duration: 5 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <img 
              src={i % 2 === 0 ? "/images/undertale/heart.png" : "/images/undertale/red_heart.png"}
              alt="Undertale Heart" 
              className="w-6 h-6"
            />
          </motion.div>
        ))}
      </div>

      {/* Floating Undertale message */}
      <AnimatePresence>
        {showUndertaleMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-1/4 left-1/2 transform -translate-x-1/2 z-20"
          >
            <div className="bg-white/90 rounded-lg shadow-2xl p-4 max-w-sm text-center border-4 border-yellow-400">
              <p className="pixel-text text-lg text-yellow-800">
                {undertaleMessages[Math.floor(Math.random() * undertaleMessages.length)]}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        key={currentPhase}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-4xl mx-auto px-4"
      >
        <motion.div
          animate={reducedMotion ? {} : { scale: [1, 1.1, 1] }}
          transition={reducedMotion ? {} : { duration: 2, repeat: Infinity }}
          className="text-6xl mb-8"
        >
          💕
        </motion.div>
        
        <h2 className="pixel-title text-3xl md:text-4xl text-yellow-300 mb-8 undertale-text-glow">
          {birthdayPhrases[currentPhase]}
        </h2>
        
        <div className="flex justify-center gap-4 mb-8">
          <motion.img
            src="/images/undertale/papyrus.png"
            alt="Papyrus"
            className="w-12 h-12"
            animate={reducedMotion ? {} : { rotate: [0, 5, -5, 0], y: [0, -5, 0] }}
            transition={reducedMotion ? {} : { duration: 3, repeat: Infinity }}
          />
          <motion.img
            src="/images/undertale/sans.´png.png"
            alt="Sans"
            className="w-12 h-12"
            animate={reducedMotion ? {} : { rotate: [0, -5, 5, 0], y: [0, -3, 0] }}
            transition={reducedMotion ? {} : { duration: 3, repeat: Infinity, delay: 1 }}
          />
          <motion.img
            src="/images/undertale/undertale_kid.png"
            alt="Undertale Kid"
            className="w-12 h-12"
            animate={reducedMotion ? {} : { rotate: [0, 3, -3, 0], y: [0, -4, 0] }}
            transition={reducedMotion ? {} : { duration: 3, repeat: Infinity, delay: 2 }}
          />
          <motion.img
            src="/images/undertale/dog.png"
            alt="Dog"
            className="w-10 h-10"
            animate={reducedMotion ? {} : { rotate: [0, 10, -10, 0], y: [0, -2, 0] }}
            transition={reducedMotion ? {} : { duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <motion.img
            src="/images/undertale/asriel.png"
            alt="Asriel"
            className="w-12 h-12"
            animate={reducedMotion ? {} : { scale: [1, 1.1, 1], y: [0, -6, 0] }}
            transition={reducedMotion ? {} : { duration: 4, repeat: Infinity, delay: 1.5 }}
          />
        </div>

        <div className="flex justify-center items-center gap-4">
          <span className="pixel-text text-white text-lg">
            {currentPhase + 1} / {birthdayPhrases.length}
          </span>
          
          <motion.button
            onClick={handleNextPhase}
            className="pixel-button bg-gradient-to-r from-pixel-purple to-pixel-pink text-white px-6 py-3 border-4 border-yellow-400"
            whileHover={reducedMotion ? {} : { scale: 1.05 }}
            whileTap={reducedMotion ? {} : { scale: 0.95 }}
            onMouseEnter={() => {
              const sound = new Audio('/music/undertale/buttons/undertale-select-sound.mp3');
              sound.volume = 0.3;
              sound.play().catch(console.warn);
            }}
          >
            <span className="flex items-center gap-2">
              <img src="/images/undertale/heart.png" alt="Heart" className="w-5 h-5 animate-heart-beat" />
              Siguiente
              <img src="/images/undertale/heart.png" alt="Heart" className="w-5 h-5 animate-heart-beat" />
            </span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default BirthdayPresentation; 