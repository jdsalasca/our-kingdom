import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star, Flower } from './components/Sprites';
import Dashboard from './pages/Dashboard';
import TwoRoads from './pages/TwoRoads';
import OurPlay from './pages/OurPlay';
import AboutUs from './pages/AboutUs';
import Gallery from './components/Gallery';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';
import MusicPlayer from './components/MusicPlayer';
import { useState, useEffect } from 'react';

function App() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Simulate loading for better UX
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

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
            {t('Our Happy Kingdom')}
          </h1>
          <p className="pixel-text text-white">
            Loading your magical world... 💕
          </p>
        </motion.div>
      </div>
    );
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
        
        {/* Enhanced Navigation with Better Accessibility */}
        <nav className="pixel-border bg-[#232336] backdrop-blur-md sticky top-0 z-30 shadow-2xl" role="navigation" aria-label="Main navigation">
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
                  {t('Our Happy Kingdom')}
                  <img src="/pixel-art-icon-heart_682225-16.avif" alt="Pixel Heart" className="inline-block w-8 h-8 align-middle" />
                </motion.h1>
              </motion.div>
              
              <div className="flex flex-wrap gap-3 md:gap-6 justify-center items-center" role="menubar">
                <Link to="/" className="pixel-button" role="menuitem" aria-label="Go to Dashboard">
                  <span className="flex items-center gap-2">
                    <span className="text-base md:text-lg" aria-hidden="true">🏠</span>
                    <span className="hidden sm:inline">{t('Dashboard')}</span>
                  </span>
                </Link>
                <Link to="/two-roads" className="pixel-button" role="menuitem" aria-label="Explore our journey">
                  <span className="flex items-center gap-2">
                    <span className="text-base md:text-lg" aria-hidden="true">🛤️</span>
                    <span className="hidden sm:inline">{t('Two Roads')}</span>
                  </span>
                </Link>
                <Link to="/our-play" className="pixel-button" role="menuitem" aria-label="Play games together">
                  <span className="flex items-center gap-2">
                    <span className="text-base md:text-lg" aria-hidden="true">🎮</span>
                    <span className="hidden sm:inline">{t('Our Play')}</span>
                  </span>
                </Link>
                <Link to="/gallery" className="pixel-button" role="menuitem" aria-label="View our memories">
                  <span className="flex items-center gap-2">
                    <span className="text-base md:text-lg" aria-hidden="true">📸</span>
                    <span className="hidden sm:inline">{t('Gallery')}</span>
                  </span>
                </Link>
                <Link to="/about-us" className="pixel-button" role="menuitem" aria-label="Learn about our story">
                  <span className="flex items-center gap-2">
                    <span className="text-base md:text-lg" aria-hidden="true">💕</span>
                    <span className="hidden sm:inline">{t('About Us')}</span>
                  </span>
                </Link>
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content with Skip Link */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-pixel-purple text-white px-4 py-2 rounded z-50">
          Skip to main content
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

        {/* Enhanced Footer with Emotional Support */}
        <footer className="pixel-border bg-white/80 backdrop-blur-sm mt-8 md:mt-12 relative z-20" role="contentinfo">
          <div className="max-w-6xl mx-auto px-4 py-4 md:py-6 text-center">
            <motion.p 
              className="pixel-text text-sm md:text-base"
              animate={reducedMotion ? {} : { opacity: [0.7, 1, 0.7] }}
              transition={reducedMotion ? {} : { duration: 3, repeat: Infinity }}
            >
              {t('Made with 💕 for our happy kingdom together')}
            </motion.p>
            <p className="pixel-text text-xs mt-2 opacity-80">
              Remember: You are loved, you are strong, and you are never alone. 💕
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

        {/* Music Player */}
        <MusicPlayer />
      </div>
    </Router>
  );
}

export default App;
