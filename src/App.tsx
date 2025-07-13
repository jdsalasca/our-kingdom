import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Star, Flower } from './components/Sprites';
import Dashboard from './pages/Dashboard';
import TwoRoads from './pages/TwoRoads';
import OurPlay from './pages/OurPlay';
import AboutUs from './pages/AboutUs';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const { t } = useTranslation();
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-pixel-green via-pixel-blue to-pixel-purple bg-pixel-pattern">
        {/* TAILWIND TEST BANNER */}
        <motion.div 
          className="pixel-border bg-pixel-green text-white text-center py-2 pixel-title tracking-widest shadow-lg"
          animate={{ 
            boxShadow: [
              "0 4px 8px rgba(0,0,0,0.3)",
              "0 8px 16px rgba(0,0,0,0.4)",
              "0 4px 8px rgba(0,0,0,0.3)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Tailwind is <span className="text-pixel-yellow">WORKING!</span> 🎉
        </motion.div>
        
        {/* Enhanced Navigation */}
        <nav className="pixel-border bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-3 md:py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-2 md:mb-0"
              >
                <motion.h1 
                  className="pixel-title flex items-center gap-2 text-lg md:text-xl lg:text-2xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.span 
                    className="text-xl md:text-2xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    👑
                  </motion.span>
                  {t('Our Happy Kingdom')}
                  <motion.span 
                    className="text-xl md:text-2xl"
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                  >
                    👑
                  </motion.span>
                </motion.h1>
              </motion.div>
              
              <div className="flex flex-wrap gap-2 md:gap-4 justify-center items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link to="/" className="pixel-button group text-sm md:text-base">
                    <span className="flex items-center gap-1 md:gap-2">
                      <span className="text-base md:text-lg">🏠</span>
                      <span className="hidden sm:inline">{t('Dashboard')}</span>
                    </span>
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link to="/two-roads" className="pixel-button group text-sm md:text-base">
                    <span className="flex items-center gap-1 md:gap-2">
                      <span className="text-base md:text-lg">🛤️</span>
                      <span className="hidden sm:inline">{t('Two Roads')}</span>
                    </span>
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link to="/our-play" className="pixel-button group text-sm md:text-base">
                    <span className="flex items-center gap-1 md:gap-2">
                      <span className="text-base md:text-lg">🎮</span>
                      <span className="hidden sm:inline">{t('Our Play')}</span>
                    </span>
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link to="/about-us" className="pixel-button group text-sm md:text-base">
                    <span className="flex items-center gap-1 md:gap-2">
                      <span className="text-base md:text-lg">💕</span>
                      <span className="hidden sm:inline">{t('About Us')}</span>
                    </span>
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <LanguageSwitcher />
                </motion.div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 py-4 md:py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/two-roads" element={<TwoRoads />} />
            <Route path="/our-play" element={<OurPlay />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </main>

        {/* Enhanced Floating Hearts Background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
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

        {/* Enhanced Footer */}
        <footer className="pixel-border bg-white/80 backdrop-blur-sm mt-8 md:mt-12">
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
