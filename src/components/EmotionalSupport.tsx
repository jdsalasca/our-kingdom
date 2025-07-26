import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EmotionalSupport = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [showPapyrus, setShowPapyrus] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Enhanced emotional support messages in Spanish with Undertale/Terraria references
  const messages = [
    'Eres mi DETERMINACIÓN 💕',
    'Tu amor es mi LOVE infinito ❤️',
    'Juntos somos invencibles ⚔️',
    'Tu sonrisa ilumina mi mundo 🌟',
    'Siempre estaré aquí para ti 🛡️',
    'Eres mi tesoro más preciado 💎',
    'Tu amor me hace mejor cada día 🌱',
    'Eres mi sueño hecho realidad ✨',
    'Contigo todo es posible 🎮',
    'Tu corazón es mi hogar 🏠',
    'Eres mi compañera perfecta 👑',
    'Tu amor es mi fuerza 💪',
    'Juntos construimos nuestro reino 🏰',
    'Eres mi inspiración diaria 🌅',
    'Tu presencia hace todo especial 🌈',
    'Eres la razón de mi felicidad 😊',
    'Contigo he encontrado el amor verdadero 💖',
    'Tu corazón es donde quiero vivir 💝',
    'Eres la persona que hace mi vida perfecta 🎯',
    'Tu amor es el regalo más hermoso 🎁',
    'Cada momento contigo es mágico 🔮',
    'Eres mi compañera de vida eterna 💫',
    'Tu presencia hace cada día una celebración 🎉',
    'Eres la razón por la que mi corazón late con alegría 💓',
    'Contigo he descubierto que el amor es la respuesta 🌟',
    'Tu amor es el regalo más hermoso que he recibido 💝',
    'Eres mi Undertale y mi Terraria 💎',
    'Juntos somos más fuertes que cualquier boss ⚔️',
    'Tu amor es mi Life Crystal ❤️',
    'Eres mi Heart Crystal eterno 💖',
    'Contigo he derrotado la soledad 🛡️',
    'Tu amor es mi Love Potion más poderosa 🧪',
    'Eres mi Diamond of Love 💎',
    'Juntos plantamos árboles de amor 🌳',
    'Tu amor es mi Golden Fish más preciado 🐟',
    'Eres mi Castle of Love más hermoso 🏰',
    'Contigo he encontrado mi Treasure más valioso 💰',
    'Tu amor es mi Home más cálido 🏠',
    'Eres mi Fallen Down más hermoso 🍂',
    'Juntos creamos nuestro Once Upon a Time ✨',
    'Tu eres mi Undertale y con amor vamos a hacer que todo sea más hermoso y divertido 💕',
    'I love you deeply, mi amor eterno 💖',
    'Tu amor es mi DETERMINACIÓN más fuerte 💪',
    'Eres mi LOVE infinito y mi felicidad eterna ❤️',
  ];

  // Rotate through messages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [messages.length]);

  // Show Papyrus randomly
  useEffect(() => {
    const papyrusInterval = setInterval(() => {
      if (Math.random() < 0.3) {
        setShowPapyrus(true);
        setTimeout(() => setShowPapyrus(false), 3000);
      }
    }, 10000);

    return () => clearInterval(papyrusInterval);
  }, []);

  // Play Undertale sound on interaction
  const playUndertaleSound = () => {
    const sound = new Audio('/music/undertale/buttons/undertale-select-sound.mp3');
    sound.volume = 0.3;
    sound.play().catch(() => {});
  };

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-40"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      onClick={playUndertaleSound}
    >
      {/* Papyrus background - shows randomly */}
      <AnimatePresence>
        {showPapyrus && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            aria-hidden="true"
          >
            <img
              src="/images/undertale/papyrus.png"
              alt="Papyrus (background)"
              className="w-24 h-24 md:w-32 md:h-32 opacity-30 blur-[1px] drop-shadow-lg"
              style={{ filter: 'brightness(1.1) saturate(1.1)' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Asriel faded background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
        <img
          src="/images/undertale/asriel.png"
          alt="Asriel (background)"
          className="w-32 h-32 md:w-40 md:h-40 opacity-20 blur-[2px] drop-shadow-lg animate-float-asriel"
          style={{ filter: 'brightness(1.2) saturate(1.2)' }}
        />
      </div>

      {/* Floating Undertale hearts */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {Array.from({ length: 3 }, (_, i) => (
          <motion.img
            key={i}
            src={i % 2 === 0 ? "/images/undertale/heart.png" : "/images/undertale/red_heart.png"}
            alt="Undertale Heart"
            className="w-5 h-5 absolute"
            style={{
              left: `${20 + i * 25}%`,
              bottom: `${10 + i * 15}%`,
            }}
            animate={{
              y: [0, -8, 0],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{ 
              duration: 3 + i * 0.5, 
              repeat: Infinity, 
              delay: i * 0.5 
            }}
          />
        ))}
      </div>

      {/* Floating Sans and Dog characters - reduced and simplified */}
      <div className="absolute inset-0 pointer-events-none z-15">
        <motion.img
          src="/images/undertale/sans.´png.png"
          alt="Sans"
          className="w-8 h-8 absolute opacity-30"
          style={{
            left: '75%',
            bottom: '60%',
          }}
          animate={{
            y: [0, -5, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.img
          src="/images/undertale/dog.png"
          alt="Dog"
          className="w-6 h-6 absolute opacity-40"
          style={{
            left: '80%',
            bottom: '30%',
          }}
          animate={{
            y: [0, -3, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Message card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMessage}
          className="relative bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-3 rounded-lg shadow-lg max-w-xs z-20 cursor-pointer hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="flex items-center gap-2"
            animate={reducedMotion ? {} : { scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.img
              src="/images/undertale/heart.png"
              alt="Heart"
              className="w-5 h-5"
              animate={reducedMotion ? {} : { rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <p className="pixel-text text-sm font-medium">
              {messages[currentMessage]}
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default EmotionalSupport; 