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
import { useState, useEffect, useRef } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [showBirthdayPresentation, setShowBirthdayPresentation] = useState(false);
  const [presentationComplete, setPresentationComplete] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [globalMusicStarted, setGlobalMusicStarted] = useState(false);
  const [globalMusicPlaying, setGlobalMusicPlaying] = useState(false);
  const [showMusicPrompt, setShowMusicPrompt] = useState(true);
  const globalAudioRef = useRef<HTMLAudioElement>(null);

  // Undertale Button Modal State
  type UndertaleActionType = 'Fight' | 'Act' | 'Item' | 'Mercy';
  const [undertaleModal, setUndertaleModal] = useState<{ open: boolean; type: UndertaleActionType | null }>({ open: false, type: null });
  const [floatingMessage, setFloatingMessage] = useState<{ show: boolean; message: string; position: { x: number; y: number } }>({ show: false, message: '', position: { x: 0, y: 0 } });

  // Enhanced Undertale button actions with better Spanish messages
  const undertaleActions = {
    Fight: {
      title: "Luchar",
      message: "* Te sientes DETERMINADO! Tu amor te hace más fuerte! 💪",
      color: "bg-red-500",
      img: '/images/undertale/heart.png'
    },
    Act: {
      title: "Actuar", 
      message: "* Le das un abrazo. Tu amor es más fuerte que cualquier batalla! 💕",
      color: "bg-blue-500",
      img: '/images/undertale/papyrus.png'
    },
    Item: {
      title: "Objeto",
      message: "* Usas: [Cristal de Amor] ❤️ Tu amor te cura completamente!",
      color: "bg-green-500",
      img: '/images/undertale/asriel.png'
    },
    Mercy: {
      title: "Misericordia",
      message: "* El amor siempre gana. Juntos son invencibles! ✨",
      color: "bg-purple-500",
      img: '/images/undertale/heart.png'
    }
  };

  // Cleaned up floating messages - unique and diverse
  const floatingMessages = [
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

  // NEW APPROACH: Simple and reliable music start
  const startMusic = async () => {
    if (globalMusicStarted) return;

    try {
      if (globalAudioRef.current) {
        globalAudioRef.current.volume = 0.4;
        await globalAudioRef.current.play();
        setGlobalMusicStarted(true);
        setGlobalMusicPlaying(true);
        setShowMusicPrompt(false);
        console.log('🎵 Music started successfully!');
      }
    } catch (error) {
      console.log('❌ Could not start music:', error);
    }
  };

  // Enhanced user interaction detection - ANY interaction starts music
  useEffect(() => {
    const handleUserInteraction = () => {
      if (!userInteracted) {
        setUserInteracted(true);
        console.log('👆 User interaction detected!');
        
        // Start music immediately on ANY interaction
        startMusic();
      }
    };

    // Listen for ANY user interaction
    const events = [
      'click', 'touchstart', 'keydown', 'mousedown', 'scroll', 'wheel',
      'pointerdown', 'pointerup', 'pointermove', 'gesturestart', 'gesturechange',
      'gestureend', 'touchmove', 'touchend', 'mouseenter', 'mouseleave',
      'focus', 'blur', 'input', 'change', 'submit', 'dragstart', 'drop'
    ];

    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { passive: true, once: false });
    });

    // Also detect any DOM changes
    const observer = new MutationObserver(() => {
      handleUserInteraction();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
      observer.disconnect();
    };
  }, [userInteracted]);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
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
  const floatingElements = Array.from({ length: isMobile ? 8 : 12 }, (_, i) => ({
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
        {/* Global Background Music */}
        <audio
          ref={globalAudioRef}
          src="/music/undertale/once_upon_a_time.mp3"
          loop={true}
          preload="auto"
          onPlay={() => setGlobalMusicPlaying(true)}
          onPause={() => setGlobalMusicPlaying(false)}
          onEnded={() => setGlobalMusicPlaying(false)}
        />

        {/* PROMINENT MUSIC PROMPT - NEW FEATURE */}
        {showMusicPrompt && !globalMusicStarted && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-yellow-400 border-4 border-yellow-600 rounded-lg p-4 shadow-2xl max-w-md mx-4"
            style={{ touchAction: 'manipulation' }}
          >
            <div className="text-center">
              <div className="text-4xl mb-2 animate-pulse">🎵</div>
              <h3 className="pixel-title text-lg text-black mb-2">
                ¡Toca cualquier parte para activar la música!
              </h3>
              <p className="pixel-text text-sm text-black mb-3">
                La música hará que nuestro reino sea más mágico 💕
              </p>
              <motion.button
                onClick={() => {
                  startMusic();
                  playButtonSound();
                }}
                className="pixel-button bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ touchAction: 'manipulation' }}
              >
                🎵 Activar Música
              </motion.button>
            </div>
          </motion.div>
        )}

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
        
        {/* Enhanced Navigation with mobile responsiveness */}
        <nav className="pixel-border bg-[#232336] backdrop-blur-md sticky top-0 z-30 shadow-2xl border-4 border-yellow-400" role="navigation" aria-label="Main navigation">
          <div className="max-w-6xl mx-auto px-4 py-4 md:py-5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-2 md:mb-0"
              >
                <motion.h1 
                  className={`pixel-title flex items-center gap-2 text-yellow-300 drop-shadow-lg ${
                    isMobile ? 'text-lg' : 'text-lg md:text-xl lg:text-2xl'
                  }`}
                  whileHover={reducedMotion ? {} : { scale: 1.05 }}
                >
                  <img src="/pixel-art-icon-heart_682225-16.avif" alt="Pixel Heart" className={`inline-block align-middle ${isMobile ? 'w-6 h-6' : 'w-8 h-8'}`} />
                  Nuestro Reino Feliz
                  <img src="/pixel-art-icon-heart_682225-16.avif" alt="Pixel Heart" className={`inline-block align-middle ${isMobile ? 'w-6 h-6' : 'w-8 h-8'}`} />
                </motion.h1>
              </motion.div>
              
              {/* Mobile menu button */}
              {isMobile && (
                <button
                  onClick={() => setNavOpen(!navOpen)}
                  className="pixel-button border-2 border-yellow-400 p-2"
                  aria-label="Toggle navigation menu"
                  onMouseEnter={playButtonSound}
                >
                  <span className="text-lg">☰</span>
                </button>
              )}
              
              {/* Desktop navigation */}
              {!isMobile && (
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
              )}
            </div>
            
            {/* Mobile navigation menu */}
            {isMobile && navOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 space-y-2"
              >
                <Link to="/" className="pixel-button border-2 border-yellow-400 w-full text-center" role="menuitem" aria-label="Ir al Dashboard"
                  onClick={() => setNavOpen(false)}
                  onMouseEnter={playButtonSound}
                >
                  <span className="flex items-center justify-center gap-2">
                    <img src="/images/undertale/heart.png" alt="Heart" className="w-5 h-5" />
                    Dashboard
                  </span>
                </Link>
                <Link to="/two-roads" className="pixel-button border-2 border-yellow-400 w-full text-center" role="menuitem" aria-label="Explorar nuestro viaje"
                  onClick={() => setNavOpen(false)}
                  onMouseEnter={playButtonSound}
                >
                  <span className="flex items-center justify-center gap-2">
                    <img src="/images/undertale/heart.png" alt="Heart" className="w-5 h-5" />
                    Dos Caminos
                  </span>
                </Link>
                <Link to="/our-play" className="pixel-button border-2 border-yellow-400 w-full text-center" role="menuitem" aria-label="Jugar juntos"
                  onClick={() => setNavOpen(false)}
                  onMouseEnter={playButtonSound}
                >
                  <span className="flex items-center justify-center gap-2">
                    <img src="/images/undertale/heart.png" alt="Heart" className="w-5 h-5" />
                    Nuestro Juego
                  </span>
                </Link>
                <Link to="/gallery" className="pixel-button border-2 border-yellow-400 w-full text-center" role="menuitem" aria-label="Ver nuestros recuerdos"
                  onClick={() => setNavOpen(false)}
                  onMouseEnter={playButtonSound}
                >
                  <span className="flex items-center justify-center gap-2">
                    <img src="/images/undertale/heart.png" alt="Heart" className="w-5 h-5" />
                    Galería
                  </span>
                </Link>
                <Link to="/about-us" className="pixel-button border-2 border-yellow-400 w-full text-center" role="menuitem" aria-label="Conocer nuestra historia"
                  onClick={() => setNavOpen(false)}
                  onMouseEnter={playButtonSound}
                >
                  <span className="flex items-center justify-center gap-2">
                    <img src="/images/undertale/heart.png" alt="Heart" className="w-5 h-5" />
                    Sobre Nosotros
                  </span>
                </Link>
              </motion.div>
            )}
          </div>
        </nav>

        {/* Main Content with Skip Link */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-pixel-purple text-white px-4 py-2 rounded z-50">
          Saltar al contenido principal
        </a>
        
        <main id="main-content" className={`max-w-6xl mx-auto px-4 py-4 md:py-8 relative z-20 ${isMobile ? 'pb-20' : ''}`}>
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

        {/* Enhanced Footer with mobile responsiveness */}
        <footer className="pixel-border bg-white/80 backdrop-blur-sm mt-8 md:mt-12 relative z-20 border-4 border-yellow-400" role="contentinfo">
          <div className="max-w-6xl mx-auto px-4 py-4 md:py-6 text-center">
            <motion.p 
              className={`pixel-text ${isMobile ? 'text-sm' : 'text-sm md:text-base'}`}
              animate={reducedMotion ? {} : { opacity: [0.7, 1, 0.7] }}
              transition={reducedMotion ? {} : { duration: 3, repeat: Infinity }}
            >
              Hecho con 💕 para nuestro reino feliz juntos
            </motion.p>
            <p className={`pixel-text opacity-80 ${isMobile ? 'text-xs' : 'text-xs mt-2'}`}>
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

        {/* Music Player with Global Music State */}
        <MusicPlayer 
          globalMusicPlaying={globalMusicPlaying}
          globalMusicStarted={globalMusicStarted}
          onGlobalMusicToggle={(playing) => {
            if (globalAudioRef.current) {
              if (playing) {
                globalAudioRef.current.play();
              } else {
                globalAudioRef.current.pause();
              }
            }
          }}
        />
        
        {/* Emotional Support */}
        <EmotionalSupport />

        {/* Enhanced Floating Undertale Button Group with mobile positioning */}
        <div className={`fixed z-50 flex flex-col gap-2 ${isMobile ? 'bottom-20 right-4' : 'bottom-6 right-6'}`}>
          {(['Fight', 'Act', 'Item', 'Mercy'] as UndertaleActionType[]).map((type) => (
            <motion.button
              key={type}
              className={`pixel-button bg-black/80 border-2 border-yellow-400 text-yellow-200 flex items-center gap-2 hover:bg-yellow-600/80 hover:text-white transition-all shadow-lg ${
                isMobile ? 'px-3 py-2 text-xs' : 'px-4 py-2 mb-1'
              }`}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => { setUndertaleModal({ open: true, type: type as UndertaleActionType }); playButtonSound(); }}
              onMouseEnter={playButtonSound}
              aria-label={type}
              style={{ touchAction: 'manipulation' }}
            >
              <img src="/images/undertale/heart.png" alt="Heart" className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'}`} />
              <span className={`font-bold tracking-widest ${isMobile ? 'text-xs' : 'text-sm'}`}>{type}</span>
            </motion.button>
          ))}
        </div>
        
        {/* Enhanced Undertale Modal with mobile responsiveness */}
        <AnimatePresence>
          {undertaleModal.open && undertaleModal.type && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className={`bg-white/90 rounded-lg shadow-2xl text-center border-4 border-yellow-400 relative ${
                  isMobile ? 'p-6 max-w-xs w-full' : 'p-8 max-w-xs'
                }`}
                initial={{ scale: 0.8, y: 40 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 40 }}
                transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              >
                <img src={undertaleActions[undertaleModal.type].img} alt={undertaleModal.type} className={`mx-auto mb-4 ${isMobile ? 'w-12 h-12' : 'w-16 h-16'}`} />
                <p className={`pixel-text text-yellow-800 mb-4 ${isMobile ? 'text-base' : 'text-lg'}`}>{undertaleActions[undertaleModal.type].message}</p>
                <button
                  className="pixel-button bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition border-2 border-yellow-600"
                  onClick={() => { setUndertaleModal({ open: false, type: null }); playButtonSound(); }}
                  autoFocus
                  style={{ touchAction: 'manipulation' }}
                >
                  OK
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced Floating Undertale Message with mobile responsiveness */}
        {floatingMessage.show && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={`bg-white/90 rounded-lg shadow-2xl text-center border-4 border-yellow-400 relative ${
                isMobile ? 'p-4 max-w-sm w-full' : 'p-6 max-w-sm'
              }`}
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
              <p className={`pixel-text text-yellow-800 mb-4 ${isMobile ? 'text-base' : 'text-lg'}`}>{floatingMessage.message}</p>
              <button
                className="pixel-button bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition border-2 border-yellow-600"
                onClick={() => setFloatingMessage({ show: false, message: '', position: { x: 0, y: 0 } })}
                autoFocus
                style={{ touchAction: 'manipulation' }}
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
