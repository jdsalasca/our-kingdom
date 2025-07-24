import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface Song {
  id: string;
  title: string;
  artist: string;
  file: string;
  emoji: string;
}

interface MusicPlayerProps {
  autoPlay?: boolean;
}

const MusicPlayer = ({ autoPlay = true }: MusicPlayerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const location = useLocation();

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Dynamic song list with emotional support messages
  const songs: Song[] = [
    {
      id: '1',
      title: 'Die With A Smile',
      artist: 'Lady Gaga, Bruno Mars',
      file: '/music/Lady Gaga, Bruno Mars - Die With A Smile.mp3',
      emoji: '🎵'
    },
    {
      id: '2',
      title: 'Treasure',
      artist: 'Bruno Mars',
      file: '/music/Treasure - Bruno Mars HQ (Audio).mp3',
      emoji: '💎'
    },
    {
      id: '3',
      title: 'Corazón',
      artist: 'Auténticos Decadentes',
      file: '/music/Corazón -Autenticos decadentes.mp3',
      emoji: '❤️'
    },
    {
      id: '4',
      title: 'Es Por Ti',
      artist: 'Juan',
      file: '/music/Es Por Ti - Juan.mp3',
      emoji: '🌹'
    }
  ];

  const currentSong = songs[currentSongIndex];

  // Enhanced error handling
  const handleAudioError = useCallback((error: string) => {
    setError(error);
    setIsLoading(false);
    setIsPlaying(false);
    console.warn('Audio error:', error);
  }, []);

  // Safe audio play function
  const safePlay = useCallback(async () => {
    if (!audioRef.current) return false;
    
    try {
      setIsLoading(true);
      setError(null);
      await audioRef.current.play();
      setIsPlaying(true);
      setIsLoading(false);
      return true;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to play audio';
      handleAudioError(errorMessage);
      return false;
    }
  }, [handleAudioError]);

  const togglePlay = useCallback(async () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await safePlay();
      }
    }
  }, [isPlaying, safePlay]);

  const nextSong = useCallback(() => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    setError(null);
    
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        safePlay();
      }
    }
  }, [currentSongIndex, songs.length, isPlaying, safePlay]);

  const prevSong = useCallback(() => {
    const prevIndex = currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1;
    setCurrentSongIndex(prevIndex);
    setError(null);
    
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        safePlay();
      }
    }
  }, [currentSongIndex, songs.length, isPlaying, safePlay]);

  const handleSongEnd = useCallback(() => {
    nextSong();
  }, [nextSong]);

  // Auto-play music when on Dashboard (main page) and autoPlay is enabled
  useEffect(() => {
    const playMusic = async () => {
      if (audioRef.current && !isPlaying && autoPlay && location.pathname === '/') {
        audioRef.current.volume = volume;
        await safePlay();
      }
    };
    
    const timeout = setTimeout(playMusic, 2000);
    return () => clearTimeout(timeout);
  }, [location.pathname, autoPlay, volume, isPlaying, safePlay]);

  // Update volume when it changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Enhanced visibility change handling
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (audioRef.current && isPlaying && !document.hidden) {
        safePlay();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isPlaying, safePlay]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []);

  return (
    <>
      {/* Floating Music Button with Accessibility */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={reducedMotion ? {} : { type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="pixel-button bg-gradient-to-r from-pixel-purple to-pixel-pink text-white p-4 rounded-full shadow-lg hover:shadow-xl relative"
          whileHover={reducedMotion ? {} : { scale: 1.1, rotate: 5 }}
          whileTap={reducedMotion ? {} : { scale: 0.9 }}
          aria-label={isOpen ? "Close music player" : "Open music player"}
          aria-expanded={isOpen}
        >
          <span className="text-2xl" aria-hidden="true">🎵</span>
          {isPlaying && (
            <motion.span
              className="absolute -top-2 -right-2 text-pixel-yellow text-xl animate-pulse"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={reducedMotion ? {} : { opacity: [0.7, 1, 0.7], scale: [1, 1.2, 1] }}
              transition={reducedMotion ? {} : { duration: 1, repeat: Infinity }}
            >
              <span role="img" aria-label="Music Playing">🎶</span>
            </motion.span>
          )}
          {isLoading && (
            <motion.div
              className="absolute -top-2 -right-2 text-pixel-blue text-xl"
              animate={reducedMotion ? {} : { rotate: 360 }}
              transition={reducedMotion ? {} : { duration: 1, repeat: Infinity, ease: "linear" }}
            >
              ⏳
            </motion.div>
          )}
        </motion.button>
      </motion.div>

      {/* Music Player Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-20 right-6 z-40"
            role="dialog"
            aria-label="Music player"
          >
            <div className="music-player-card p-6 max-w-sm">
              {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  <p className="pixel-text text-sm">
                    💕 Don't worry! Music will be available soon. You can still enjoy our magical world together.
                  </p>
                </div>
              )}
              
              <div className="text-center mb-4">
                <div className="text-4xl mb-2" aria-hidden="true">{currentSong.emoji}</div>
                <h3 className="pixel-title text-lg">{currentSong.title}</h3>
                <p className="pixel-text text-sm opacity-80">{currentSong.artist}</p>
              </div>

              {/* Volume Control */}
              <div className="mb-4">
                <label className="pixel-text text-sm block mb-2" htmlFor="volume-control">
                  Volume
                </label>
                <input
                  id="volume-control"
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="w-full h-2 bg-pixel-purple rounded-lg appearance-none cursor-pointer"
                  aria-label="Volume control"
                />
              </div>

              {/* Audio Element - Always present, never unmounted */}
              <audio
                ref={audioRef}
                src={currentSong.file}
                onEnded={handleSongEnd}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onError={() => handleAudioError('Failed to load audio file')}
                preload="auto"
              />

              {/* Controls */}
              <div className="music-controls mb-4">
                <motion.button
                  onClick={prevSong}
                  className="music-button bg-pixel-purple hover:bg-pixel-pink"
                  whileHover={reducedMotion ? {} : { scale: 1.1 }}
                  whileTap={reducedMotion ? {} : { scale: 0.9 }}
                  aria-label="Previous song"
                >
                  ⏮️
                </motion.button>
                
                <motion.button
                  onClick={togglePlay}
                  className="music-button bg-pixel-green hover:bg-pixel-yellow text-xl"
                  whileHover={reducedMotion ? {} : { scale: 1.1 }}
                  whileTap={reducedMotion ? {} : { scale: 0.9 }}
                  aria-label={isPlaying ? "Pause music" : "Play music"}
                  disabled={isLoading}
                >
                  {isLoading ? '⏳' : isPlaying ? '⏸️' : '▶️'}
                </motion.button>
                
                <motion.button
                  onClick={nextSong}
                  className="music-button bg-pixel-purple hover:bg-pixel-pink"
                  whileHover={reducedMotion ? {} : { scale: 1.1 }}
                  whileTap={reducedMotion ? {} : { scale: 0.9 }}
                  aria-label="Next song"
                >
                  ⏭️
                </motion.button>
              </div>

              {/* Song List */}
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {songs.map((song, index) => (
                  <motion.button
                    key={song.id}
                    onClick={() => {
                      setCurrentSongIndex(index);
                      setError(null);
                      if (audioRef.current) {
                        audioRef.current.load();
                        if (isPlaying) {
                          safePlay();
                        }
                      }
                    }}
                    className={`w-full text-left p-2 rounded pixel-text text-sm transition-colors ${
                      index === currentSongIndex
                        ? 'bg-pixel-yellow text-pixel-purple'
                        : 'hover:bg-pixel-purple/20'
                    }`}
                    whileHover={reducedMotion ? {} : { x: 5 }}
                    aria-label={`Play ${song.title} by ${song.artist}`}
                    aria-current={index === currentSongIndex ? "true" : "false"}
                  >
                    <span className="mr-2" aria-hidden="true">{song.emoji}</span>
                    {song.title}
                  </motion.button>
                ))}
              </div>

              {/* Emotional Support Message */}
              <div className="mt-4 p-3 bg-pink-100 border border-pink-300 rounded">
                <p className="pixel-text text-xs text-pink-800">
                  💕 Music has the power to heal hearts and bring us closer together. You are loved.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MusicPlayer; 