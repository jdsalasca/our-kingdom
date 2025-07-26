import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star, Flower } from './components/Sprites';
import Dashboard from './pages/Dashboard';
import TwoRoads from './pages/TwoRoads';
import OurPlay from './pages/OurPlay';
import AboutUs from './pages/AboutUs';
import Gallery from './components/Gallery';
import MusicPlayer from './components/MusicPlayer';
import EmotionalSupport from './components/EmotionalSupport';
import BirthdayPresentation from './components/BirthdayPresentation';
import { useState, useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [showBirthdayPresentation, setShowBirthdayPresentation] = useState(false);
  const [presentationComplete, setPresentationComplete] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  // Undertale Button Modal State
  type UndertaleActionType = 'Fight' | 'Act' | 'Item' | 'Mercy';
  const [undertaleModal, setUndertaleModal] = useState<{ open: boolean; type: UndertaleActionType | null }>({ open: false, type: null });
  const [floatingMessage, setFloatingMessage] = useState<{ show: boolean; message: string; position: { x: number; y: number } }>({ show: false, message: '', position: { x: 0, y: 0 } });

  // Enhanced Undertale button actions with better Spanish messages
  const undertaleActions = {
    Fight: {
      message: '¡Nunca lucharía contra ti, solo te amaría! ❤️',
      img: '/images/undertale/heart.png',
    },
    Act: {
      message: 'Le cuentas un chiste. ¡Se ríe! *Sientes que tu amor aumenta.*',
      img: '/images/undertale/papyrus.png',
    },
    Item: {
      message: '¡Usas una Poción de Amor! *Tu corazón se calienta más.*',
      img: '/images/undertale/asriel.png',
    },
    Mercy: {
      message: '¿Misericordia? ¡Siempre! Siempre te perdonaré y te amaré. 💛',
      img: '/images/undertale/heart.png',
    },
  };

  // Enhanced Undertale-style floating messages in Spanish
  const floatingMessages = [
    "* Tu amor me hace sentir DETERMINADO 💕",
    "* Papyrus dice: 'NYEH HEH HEH! ¡Este amor es muy cool!'",
    "* Sans dice: 'heh, el amor es genial, chica.'",
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
    "* Juntos creamos nuestro Once Upon a Time ✨",
  ];

  // Show random floating message
  const showFloatingMessage = () => {
    const randomMessage = floatingMessages[Math.floor(Math.random() * floatingMessages.length)];
    const randomX = Math.random() * (window.innerWidth - 300);
    const randomY = Math.random() * (window.innerHeight - 100);
    
    setFloatingMessage({ 
      show: true, 
      message: randomMessage, 
      position: { x: randomX, y: randomY } 
    });
    
    setTimeout(() => setFloatingMessage({ show: false, message: '', position: { x: 0, y: 0 } }), 4000);
  };

  // Trigger floating messages periodically
  useEffect(() => {
    const messageInterval = setInterval(() => {
      if (Math.random() < 0.3 && presentationComplete) {
        showFloatingMessage();
      }
    }, 15000);

    return () => clearInterval(messageInterval);
  }, [presentationComplete]);

  // Play Undertale button sound
  const playButtonSound = () => {
    const sound = new Audio('/music/undertale/buttons/undertale-select-sound.mp3');
    sound.volume = 0.3;
    sound.play().catch(() => {});
  };

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Check if birthday presentation has been shown
  useEffect(() => {
    const hasShownPresentation = localStorage.getItem('initial_presentation_showed') === 'true';
    if (!hasShownPresentation) {
      setShowBirthdayPresentation(true);
    } else {
      setPresentationComplete(true);
    }
  }, []);

  // Handle user interaction for autoplay
  useEffect(() => {
    const handleUserInteraction = () => {
      setUserInteracted(true);
    };

    const events = ['click', 'touchstart', 'keydown'];
    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
    };
  }, []);

  // Simulate loading for better UX
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Handle birthday presentation completion
  const handlePresentationComplete = () => {
    setShowBirthdayPresentation(false);
    setPresentationComplete(true);
  };

  // Optimized floating elements - reduced from 25 to 12 for better performance
  const floatingElements = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 3,
    duration: 4 + Math.random() * 2,
  }));

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pixel-green via-pixel-blue to-pixel-purple flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="text-6xl mb-4"
          >
            👑
          </motion.div>
          <h1 className="pixel-title text-2xl text-yellow-300 mb-4">
            Nuestro Reino Feliz
          </h1>
          <p className="pixel-text text-white">
            Cargando tu mundo mágico... 💕
          </p>
        </motion.div>
      </div>
    );
  }

  // Show birthday presentation if not complete
  if (showBirthdayPresentation) {
    return <BirthdayPresentation onComplete={handlePresentationComplete} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-pixel-green via-pixel-blue to-pixel-purple bg-pixel-pattern relative">
        {/* Optimized Floating Hearts Background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
          {floatingElements.map((element) => (
            <motion.div
              key={element.id}
              className="absolute"
              style={{
                left: element.left,
                top: element.top,
              }}
              animate={reducedMotion ? {} : {
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={reducedMotion ? {} : {
                duration: element.duration,
                repeat: Infinity,
                delay: element.delay,
              }}
            >
              {element.id % 3 === 0 ? (
                <Heart size={element.id % 2 === 0 ? "small" : "medium"} />
              ) : element.id % 3 === 1 ? (
                <Star />
              ) : (
                <Flower color={["pink", "yellow", "purple", "red"][element.id % 4] as "pink" | "yellow" | "purple" | "red"} />
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Background Overlay for Contrast */}
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" aria-hidden="true" />
        
        {/* Enhanced Navigation with Better Accessibility and Undertale styling */}
        <nav className="pixel-border bg-[#232336] backdrop-blur-md sticky top-0 z-30 shadow-2xl border-4 border-yellow-400" role="navigation" aria-label="Main navigation">
          <div className="max-w-6xl mx-auto px-4 py-4 md:py-5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-2 md:mb-0"
              >
                <motion.h1 
                  className="pixel-title flex items-center gap-2 text-lg md:text-xl lg:text-2xl text-[#f4d03f] drop-shadow-lg"
                  whileHover={reducedMotion ? {} : { scale: 1.05 }}
                >
                  <img src="/pixel-art-icon-heart_682225-16.avif" alt="Pixel Heart" className="inline-block w-8 h-8 align-middle" />
                  Nuestro Reino Feliz
                  <img src="/pixel-art-icon-heart_682225-16.avif" alt="Pixel Heart" className="inline-block w-8 h-8 align-middle" />
                </motion.h1>
              </motion.div>
              
              <div className="flex flex-wrap gap-3 md:gap-6 justify-center items-center" role="menubar">
                <Link to="/" className="pixel-button border-2 border-yellow-400" role="menuitem" aria-label="Ir al Dashboard"
                  onMouseEnter={playButtonSound}
                >
                  <span className="flex items-center gap-2">
                    <img src="/images/undertale/heart.png" alt="Heart" className="w-5 h-5" />
                    <span className="hidden sm:inline">Dashboard</span>
                  </span>
                </Link>
                <Link to="/two-roads" className="pixel-button border-2 border-yellow-400" role="menuitem" aria-label="Explorar nuestro viaje"
                  onMouseEnter={playButtonSound}
                >
                  <span className="flex items-center gap-2">
                    <img src="/images/undertale/heart.png" alt="Heart" className="w-5 h-5" />
                    <span className="hidden sm:inline">Dos Caminos</span>
                  </span>
                </Link>
                <Link to="/our-play" className="pixel-button border-2 border-yellow-400" role="menuitem" aria-label="Jugar juntos"
                  onMouseEnter={playButtonSound}
                >
                  <span className="flex items-center gap-2">
                    <img src="/images/undertale/heart.png" alt="Heart" className="w-5 h-5" />
                    <span className="hidden sm:inline">Nuestro Juego</span>
                  </span>
                </Link>
                <Link to="/gallery" className="pixel-button border-2 border-yellow-400" role="menuitem" aria-label="Ver nuestros recuerdos"
                  onMouseEnter={playButtonSound}
                >
                  <span className="flex items-center gap-2">
                    <img src="/images/undertale/heart.png" alt="Heart" className="w-5 h-5" />
                    <span className="hidden sm:inline">Galería</span>
                  </span>
                </Link>
                <Link to="/about-us" className="pixel-button border-2 border-yellow-400" role="menuitem" aria-label="Conocer nuestra historia"
                  onMouseEnter={playButtonSound}
                >
                  <span className="flex items-center gap-2">
                    <img src="/images/undertale/heart.png" alt="Heart" className="w-5 h-5" />
                    <span className="hidden sm:inline">Sobre Nosotros</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content with Skip Link */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-pixel-purple text-white px-4 py-2 rounded z-50">
          Saltar al contenido principal
        </a>
        
        <main id="main-content" className="max-w-6xl mx-auto px-4 py-4 md:py-8 relative z-20">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/two-roads" element={<TwoRoads />} />
              <Route path="/our-play" element={<OurPlay />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Routes>
          </AnimatePresence>
        </main>

        {/* Enhanced Footer with Emotional Support and Undertale styling */}
        <footer className="pixel-border bg-white/80 backdrop-blur-sm mt-8 md:mt-12 relative z-20 border-4 border-yellow-400" role="contentinfo">
          <div className="max-w-6xl mx-auto px-4 py-4 md:py-6 text-center">
            <motion.p 
              className="pixel-text text-sm md:text-base"
              animate={reducedMotion ? {} : { opacity: [0.7, 1, 0.7] }}
              transition={reducedMotion ? {} : { duration: 3, repeat: Infinity }}
            >
              Hecho con 💕 para nuestro reino feliz juntos
            </motion.p>
            <p className="pixel-text text-xs mt-2 opacity-80">
              Recuerda: Eres amada, eres fuerte, y nunca estás sola. 💕
            </p>
            <div className="flex justify-center items-center gap-4 mt-4">
              <motion.div
                animate={reducedMotion ? {} : { rotate: [0, 360] }}
                transition={reducedMotion ? {} : { duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Star />
              </motion.div>
              <motion.div
                animate={reducedMotion ? {} : { scale: [1, 1.2, 1] }}
                transition={reducedMotion ? {} : { duration: 2, repeat: Infinity }}
              >
                <Heart size="small" />
              </motion.div>
              <motion.div
                animate={reducedMotion ? {} : { rotate: [0, -360] }}
                transition={reducedMotion ? {} : { duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Flower color="pink" />
              </motion.div>
            </div>
          </div>
        </footer>

        {/* Music Player with Auto-play */}
        <MusicPlayer autoPlay={presentationComplete && userInteracted} />
        
        {/* Emotional Support */}
        <EmotionalSupport />

        {/* Enhanced Floating Undertale Button Group */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
          {(['Fight', 'Act', 'Item', 'Mercy'] as UndertaleActionType[]).map((type) => (
            <motion.button
              key={type}
              className="pixel-button bg-black/80 border-2 border-yellow-400 text-yellow-200 flex items-center gap-2 px-4 py-2 mb-1 hover:bg-yellow-600/80 hover:text-white transition-all shadow-lg"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => { setUndertaleModal({ open: true, type: type as UndertaleActionType }); playButtonSound(); }}
              onMouseEnter={playButtonSound}
              aria-label={type}
            >
              <img src="/images/undertale/heart.png" alt="Heart" className="w-4 h-4" />
              <span className="font-bold tracking-widest text-sm">{type}</span>
            </motion.button>
          ))}
        </div>
        
        {/* Enhanced Undertale Modal */}
        <AnimatePresence>
          {undertaleModal.open && undertaleModal.type && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white/90 rounded-lg shadow-2xl p-8 max-w-xs text-center border-4 border-yellow-400 relative"
                initial={{ scale: 0.8, y: 40 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 40 }}
                transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              >
                <img src={undertaleActions[undertaleModal.type].img} alt={undertaleModal.type} className="mx-auto w-16 h-16 mb-4" />
                <p className="pixel-text text-lg text-yellow-800 mb-4">{undertaleActions[undertaleModal.type].message}</p>
                <button
                  className="pixel-button bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition border-2 border-yellow-600"
                  onClick={() => { setUndertaleModal({ open: false, type: null }); playButtonSound(); }}
                  autoFocus
                >
                  OK
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced Floating Undertale Message */}
        {floatingMessage.show && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white/90 rounded-lg shadow-2xl p-6 max-w-sm text-center border-4 border-yellow-400 relative"
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 40 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              style={{
                position: 'absolute',
                top: floatingMessage.position.y,
                left: floatingMessage.position.x,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <p className="pixel-text text-lg text-yellow-800 mb-4">{floatingMessage.message}</p>
              <button
                className="pixel-button bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition border-2 border-yellow-600"
                onClick={() => setFloatingMessage({ show: false, message: '', position: { x: 0, y: 0 } })}
                autoFocus
              >
                OK
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </Router>
  );
}

export default App;
