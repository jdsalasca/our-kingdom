import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Star, Flower } from './components/Sprites';
import Dashboard from './pages/Dashboard';
import TwoRoads from './pages/TwoRoads';
import OurPlay from './pages/OurPlay';
import AboutUs from './pages/AboutUs';
import Gallery from './components/Gallery';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const { t } = useTranslation();
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-pixel-green via-pixel-blue to-pixel-purple bg-pixel-pattern relative">
        {/* Enhanced Floating Hearts Background - Always behind all content */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            >
              {i % 3 === 0 ? (
                <Heart size={i % 2 === 0 ? "small" : "medium"} />
              ) : i % 3 === 1 ? (
                <Star />
              ) : (
                <Flower color={["pink", "yellow", "purple", "red"][i % 4] as "pink" | "yellow" | "purple" | "red"} />
              )}
            </motion.div>
          ))}
        </div>
        {/* Background Overlay for Contrast */}
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
        {/* TAILWIND TEST BANNER */}
        <motion.div 
          className="pixel-border bg-pixel-green text-white text-center py-2 pixel-title tracking-widest shadow-lg relative z-20"
          animate={{ 
            boxShadow: [
              "0 4px 8px rgba(0,0,0,0.3)",
              "0 8px 16px rgba(0,0,0,0.4)",
              "0 4px 8px rgba(0,0,0,0.3)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
        </motion.div>
        {/* Enhanced Navigation */}
        <nav className="pixel-border bg-[#232336] backdrop-blur-md sticky top-0 z-30 shadow-2xl">
          <div className="max-w-6xl mx-auto px-4 py-4 md:py-5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-2 md:mb-0"
              >
                <motion.h1 
                  className="pixel-title flex items-center gap-2 text-lg md:text-xl lg:text-2xl text-[#f4d03f] drop-shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <img src="/pixel-art-icon-heart_682225-16.avif" alt="Pixel Heart" className="inline-block w-8 h-8 align-middle" />
                  {t('Our Happy Kingdom')}
                  <img src="/pixel-art-icon-heart_682225-16.avif" alt="Pixel Heart" className="inline-block w-8 h-8 align-middle" />
                </motion.h1>
              </motion.div>
              
              <div className="flex flex-wrap gap-3 md:gap-6 justify-center items-center">
                <Link to="/" className="pixel-button">
                  <span className="flex items-center gap-2">
                    <span className="text-base md:text-lg">🏠</span>
                    <span className="hidden sm:inline">{t('Dashboard')}</span>
                  </span>
                </Link>
                <Link to="/two-roads" className="pixel-button">
                  <span className="flex items-center gap-2">
                    <span className="text-base md:text-lg">🛤️</span>
                    <span className="hidden sm:inline">{t('Two Roads')}</span>
                  </span>
                </Link>
                <Link to="/our-play" className="pixel-button">
                  <span className="flex items-center gap-2">
                    <span className="text-base md:text-lg">🎮</span>
                    <span className="hidden sm:inline">{t('Our Play')}</span>
                  </span>
                </Link>
                <Link to="/gallery" className="pixel-button">
                  <span className="flex items-center gap-2">
                    <span className="text-base md:text-lg">📸</span>
                    <span className="hidden sm:inline">{t('Gallery')}</span>
                  </span>
                </Link>
                <Link to="/about-us" className="pixel-button">
                  <span className="flex items-center gap-2">
                    <span className="text-base md:text-lg">💕</span>
                    <span className="hidden sm:inline">{t('About Us')}</span>
                  </span>
                </Link>
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 py-4 md:py-8 relative z-20">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/two-roads" element={<TwoRoads />} />
            <Route path="/our-play" element={<OurPlay />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </main>

        {/* Enhanced Footer */}
        <footer className="pixel-border bg-white/80 backdrop-blur-sm mt-8 md:mt-12 relative z-20">
          <div className="max-w-6xl mx-auto px-4 py-4 md:py-6 text-center">
            <motion.p 
              className="pixel-text text-sm md:text-base"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {t('Made with 💕 for our happy kingdom together')}
            </motion.p>
            <div className="flex justify-center items-center gap-4 mt-4">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Star />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart size="small" />
              </motion.div>
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
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
