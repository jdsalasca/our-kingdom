import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Star, Flower } from './components/Sprites';
import Dashboard from './pages/Dashboard';
import TwoRoads from './pages/TwoRoads';
import OurPlay from './pages/OurPlay';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-pixel-green via-pixel-blue to-pixel-purple bg-pixel-pattern">
        {/* TAILWIND TEST BANNER */}
        <div className="pixel-border bg-pixel-green text-white text-center py-2 pixel-title tracking-widest shadow-lg">
          Tailwind is <span className="text-pixel-yellow">WORKING!</span> 🎉
        </div>
        {/* Navigation */}
        <nav className="pixel-border bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 md:mb-0"
              >
                <h1 className="pixel-title flex items-center gap-2">
                  <span className="text-2xl">👑</span>
                  Our Happy Kingdom
                  <span className="text-2xl">👑</span>
                </h1>
              </motion.div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/" className="pixel-button group">
                  <span className="flex items-center gap-2">
                    <span className="text-lg">🏠</span>
                    Dashboard
                  </span>
                </Link>
                <Link to="/two-roads" className="pixel-button group">
                  <span className="flex items-center gap-2">
                    <span className="text-lg">🛤️</span>
                    Two Roads
                  </span>
                </Link>
                <Link to="/our-play" className="pixel-button group">
                  <span className="flex items-center gap-2">
                    <span className="text-lg">🎮</span>
                    Our Play
                  </span>
                </Link>
                <Link to="/about-us" className="pixel-button group">
                  <span className="flex items-center gap-2">
                    <span className="text-lg">💕</span>
                    About Us
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 py-8">
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
                <Flower color={["pink", "yellow", "purple", "red"][i % 4] as any} />
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <footer className="pixel-border bg-white/80 backdrop-blur-sm mt-12">
          <div className="max-w-6xl mx-auto px-4 py-6 text-center">
            <p className="pixel-text text-sm">
              Made with 💕 for our happy kingdom together
            </p>
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
      </div>
    </Router>
  );
}

export default App;
