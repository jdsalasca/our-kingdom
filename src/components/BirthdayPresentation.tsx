import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface BirthdayPresentationProps {
  onComplete: () => void;
}

const BirthdayPresentation = ({ onComplete }: BirthdayPresentationProps) => {
  const { t } = useTranslation();
  const [currentPhase, setCurrentPhase] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [showTheatre, setShowTheatre] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
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
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(console.warn);
    }
  }, [hasStarted]);

  const handleStart = () => {
    setHasStarted(true);
  };

  const handleNextPhase = () => {
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
      }, 3000);
    }
  };

  const handleSkip = () => {
    localStorage.setItem('initial_presentation_showed', 'true');
    onComplete();
  };

  // 26 beautiful phrases in Spanish for her 26th birthday
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
    "Tu amor es el regalo más hermoso que he recibido"
  ];

  if (!hasStarted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
        {/* Undertale-style background with floating hearts */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={reducedMotion ? {} : {
                y: [0, -50, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={reducedMotion ? {} : {
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              <img 
                src="/images/undertale/heart.png" 
                alt="Undertale Heart" 
                className="w-8 h-8"
              />
            </motion.div>
          ))}
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
          
          <h1 className="pixel-title text-4xl md:text-6xl text-yellow-300 mb-6">
            {t('Happy Birthday, My Love!')}
          </h1>
          
          <p className="pixel-text text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
            {t('Today you turn 26 and I want to celebrate every moment with you 💕')}
          </p>

          {/* Undertale-style message */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8 max-w-lg mx-auto">
            <p className="pixel-text text-lg text-yellow-300 mb-4">
              "Tu eres mi Undertale y con amor vamos a hacer que todo sea más hermoso y divertido"
            </p>
            <p className="pixel-text text-sm text-white">
              - Tu novio que te ama infinitamente 💕
            </p>
          </div>

          <motion.button
            onClick={handleStart}
            className="pixel-button bg-gradient-to-r from-pixel-purple to-pixel-pink text-white px-8 py-4 text-xl"
            whileHover={reducedMotion ? {} : { scale: 1.05, rotate: 2 }}
            whileTap={reducedMotion ? {} : { scale: 0.95 }}
            onMouseEnter={() => {
              const sound = new Audio('/music/undertale/buttons/undertale-select-sound.mp3');
              sound.volume = 0.3;
              sound.play().catch(console.warn);
            }}
          >
            <span className="flex items-center gap-3">
              <img src="/images/undertale/heart.png" alt="Heart" className="w-6 h-6" />
              {t('Start Special Celebration')}
              <img src="/images/undertale/heart.png" alt="Heart" className="w-6 h-6" />
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
            {t('Skip Presentation')}
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
        {/* Theatre curtains effect */}
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
          
          <h1 className="pixel-title text-4xl md:text-6xl text-yellow-300 mb-6">
            {t('Welcome to Our Kingdom!')}
          </h1>
          
          <p className="pixel-text text-xl text-white mb-8">
            {t('Your special music is starting... 💕')}
          </p>

          {/* Undertale characters floating */}
          <div className="flex justify-center gap-8 mb-8">
            <motion.img
              src="/images/undertale/papyrus.png"
              alt="Papyrus"
              className="w-16 h-16"
              animate={reducedMotion ? {} : { y: [0, -10, 0] }}
              transition={reducedMotion ? {} : { duration: 2, repeat: Infinity }}
            />
            <motion.img
              src="/images/undertale/sans.´png.png"
              alt="Sans"
              className="w-16 h-16"
              animate={reducedMotion ? {} : { y: [0, -10, 0] }}
              transition={reducedMotion ? {} : { duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.img
              src="/images/undertale/undertale_kid.png"
              alt="Undertale Kid"
              className="w-16 h-16"
              animate={reducedMotion ? {} : { y: [0, -10, 0] }}
              transition={reducedMotion ? {} : { duration: 2, repeat: Infinity, delay: 1 }}
            />
          </div>

          <motion.div
            animate={reducedMotion ? {} : { scale: [1, 1.1, 1] }}
            transition={reducedMotion ? {} : { duration: 2, repeat: Infinity }}
            className="text-2xl text-yellow-300"
          >
            {t('Open Magic Theatre')}
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Undertale-style background */}
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
              opacity: [0.4, 0.9, 0.4],
              scale: [1, 1.3, 1],
            }}
            transition={reducedMotion ? {} : {
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <img 
              src="/images/undertale/heart.png" 
              alt="Undertale Heart" 
              className="w-6 h-6"
            />
          </motion.div>
        ))}
      </div>

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
        
        <h2 className="pixel-title text-3xl md:text-4xl text-yellow-300 mb-8">
          {birthdayPhrases[currentPhase]}
        </h2>
        
        <div className="flex justify-center gap-4 mb-8">
          <motion.img
            src="/images/undertale/papyrus.png"
            alt="Papyrus"
            className="w-12 h-12"
            animate={reducedMotion ? {} : { rotate: [0, 5, -5, 0] }}
            transition={reducedMotion ? {} : { duration: 3, repeat: Infinity }}
          />
          <motion.img
            src="/images/undertale/sans.´png.png"
            alt="Sans"
            className="w-12 h-12"
            animate={reducedMotion ? {} : { rotate: [0, -5, 5, 0] }}
            transition={reducedMotion ? {} : { duration: 3, repeat: Infinity, delay: 1 }}
          />
          <motion.img
            src="/images/undertale/undertale_kid.png"
            alt="Undertale Kid"
            className="w-12 h-12"
            animate={reducedMotion ? {} : { rotate: [0, 3, -3, 0] }}
            transition={reducedMotion ? {} : { duration: 3, repeat: Infinity, delay: 2 }}
          />
        </div>

        <div className="flex justify-center items-center gap-4">
          <span className="pixel-text text-white text-lg">
            {currentPhase + 1} / {birthdayPhrases.length}
          </span>
          
          <motion.button
            onClick={handleNextPhase}
            className="pixel-button bg-gradient-to-r from-pixel-purple to-pixel-pink text-white px-6 py-3"
            whileHover={reducedMotion ? {} : { scale: 1.05 }}
            whileTap={reducedMotion ? {} : { scale: 0.95 }}
            onMouseEnter={() => {
              const sound = new Audio('/music/undertale/buttons/undertale-select-sound.mp3');
              sound.volume = 0.3;
              sound.play().catch(console.warn);
            }}
          >
            <span className="flex items-center gap-2">
              <img src="/images/undertale/heart.png" alt="Heart" className="w-5 h-5" />
              {t('Next')}
              <img src="/images/undertale/heart.png" alt="Heart" className="w-5 h-5" />
            </span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default BirthdayPresentation; 