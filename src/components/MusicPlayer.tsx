import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface Song {
  id: string;
  title: string;
  artist: string;
  file: string;
  emoji: string;
}

const MusicPlayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3); // Lower volume for background music
  const audioRef = useRef<HTMLAudioElement>(null);
  const location = useLocation();

  // Dynamic song list - automatically includes all songs from the music folder
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

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch(() => {
          // Autoplay blocked by browser, do nothing
        });
        setIsPlaying(true);
      }
    }
  };

  const nextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    // Don't reset isPlaying state - let the audio element handle it
    if (audioRef.current) {
      audioRef.current.load();
      // If it was playing before, continue playing
      if (isPlaying) {
        audioRef.current.play().catch(() => {
          // Autoplay blocked by browser, do nothing
        });
      }
    }
  };

  const prevSong = () => {
    const prevIndex = currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1;
    setCurrentSongIndex(prevIndex);
    // Don't reset isPlaying state - let the audio element handle it
    if (audioRef.current) {
      audioRef.current.load();
      // If it was playing before, continue playing
      if (isPlaying) {
        audioRef.current.play().catch(() => {
          // Autoplay blocked by browser, do nothing
        });
      }
    }
  };

  const handleSongEnd = () => {
    nextSong();
  };

  // Auto-play music 3 seconds after page load or navigation (faster for better UX)
  useEffect(() => {
    const playMusic = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.volume = volume;
        audioRef.current.play().catch(() => {
          // Autoplay blocked by browser, do nothing
        });
        setIsPlaying(true);
      }
    };
    const timeout = setTimeout(playMusic, 3000);
    return () => clearTimeout(timeout);
  }, [location, volume]);

  // Update volume when it changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Ensure audio continues playing when component visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (audioRef.current && isPlaying && !document.hidden) {
        // Resume playing when page becomes visible again
        audioRef.current.play().catch(() => {
          // Autoplay blocked by browser, do nothing
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isPlaying]);

  return (
    <>
      {/* Floating Music Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="pixel-button bg-gradient-to-r from-pixel-purple to-pixel-pink text-white p-4 rounded-full shadow-lg hover:shadow-xl relative"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-2xl">🎵</span>
          {isPlaying && (
            <motion.span
              className="absolute -top-2 -right-2 text-pixel-yellow text-xl animate-pulse"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <span role="img" aria-label="Music Playing">🎶</span>
            </motion.span>
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
          >
            <div className="music-player-card p-6 max-w-sm">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{currentSong.emoji}</div>
                <h3 className="pixel-title text-lg">{currentSong.title}</h3>
                <p className="pixel-text text-sm opacity-80">{currentSong.artist}</p>
              </div>

              {/* Volume Control */}
              <div className="mb-4">
                <label className="pixel-text text-sm block mb-2">Volume</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="w-full h-2 bg-pixel-purple rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Audio Element - Always present, never unmounted */}
              <audio
                ref={audioRef}
                src={currentSong.file}
                onEnded={handleSongEnd}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                preload="auto"
              />

              {/* Controls */}
              <div className="music-controls mb-4">
                <motion.button
                  onClick={prevSong}
                  className="music-button bg-pixel-purple hover:bg-pixel-pink"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ⏮️
                </motion.button>
                
                <motion.button
                  onClick={togglePlay}
                  className="music-button bg-pixel-green hover:bg-pixel-yellow text-xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isPlaying ? '⏸️' : '▶️'}
                </motion.button>
                
                <motion.button
                  onClick={nextSong}
                  className="music-button bg-pixel-purple hover:bg-pixel-pink"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
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
                      // Don't reset isPlaying state - let the audio element handle it
                      if (audioRef.current) {
                        audioRef.current.load();
                        // If it was playing before, continue playing
                        if (isPlaying) {
                          audioRef.current.play().catch(() => {
                            // Autoplay blocked by browser, do nothing
                          });
                        }
                      }
                    }}
                    className={`w-full text-left p-2 rounded pixel-text text-sm transition-colors ${
                      index === currentSongIndex
                        ? 'bg-pixel-yellow text-pixel-purple'
                        : 'hover:bg-pixel-purple/20'
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    <span className="mr-2">{song.emoji}</span>
                    {song.title}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MusicPlayer; 