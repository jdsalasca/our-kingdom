import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Song {
  id: string;
  title: string;
  artist: string;
  file: string;
  emoji: string;
  description: string;
}

interface MusicPlayerProps {
  autoPlay?: boolean;
}

const MusicPlayer = ({ autoPlay = true }: MusicPlayerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(() => {
    const savedVolume = localStorage.getItem('music-volume');
    return savedVolume ? parseFloat(savedVolume) : 0.4;
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Enhanced song list with emotional Spanish messages
  const songs: Song[] = [
    {
      id: '1',
      title: 'Once Upon a Time',
      artist: 'Undertale',
      file: '/music/undertale/once_upon_a_time.mp3',
      emoji: '🎮',
      description: 'La música que nos transporta a nuestro mundo mágico'
    },
    {
      id: '2',
      title: 'Fallen Down',
      artist: 'Undertale',
      file: '/music/undertale/fallen_down.mp3',
      emoji: '🍂',
      description: 'Como las hojas que caen, nuestro amor crece más fuerte'
    },
    {
      id: '3',
      title: 'Home',
      artist: 'Undertale',
      file: '/music/undertale/home.mp3',
      emoji: '🏠',
      description: 'Tú eres mi hogar, mi lugar seguro'
    },
    {
      id: '4',
      title: 'Die With A Smile',
      artist: 'Lady Gaga, Bruno Mars',
      file: '/music/Lady Gaga, Bruno Mars - Die With A Smile.mp3',
      emoji: '🎵',
      description: 'Contigo quiero morir sonriendo, mi amor'
    },
    {
      id: '5',
      title: 'Treasure',
      artist: 'Bruno Mars',
      file: '/music/Treasure - Bruno Mars HQ (Audio).mp3',
      emoji: '💎',
      description: 'Eres mi tesoro más preciado'
    },
    {
      id: '6',
      title: 'Corazón',
      artist: 'Auténticos Decadentes',
      file: '/music/Corazón -Autenticos decadentes.mp3',
      emoji: '❤️',
      description: 'Tu corazón es el latido de mi vida'
    },
    {
      id: '7',
      title: 'Es Por Ti',
      artist: 'Juan',
      file: '/music/Es Por Ti - Juan.mp3',
      emoji: '🌹',
      description: 'Todo lo que hago es por ti, mi amor'
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

  // Improved autoplay with user interaction detection
  useEffect(() => {
    const handleUserInteraction = () => {
      setUserInteracted(true);
    };

    const events = ['click', 'touchstart', 'keydown', 'mousedown'];
    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
    };
  }, []);

  // Safe audio play function with better autoplay handling
  const safePlay = useCallback(async () => {
    if (!audioRef.current) return false;
    
    try {
      setIsLoading(true);
      setError(null);
      
      // Set volume before playing
      audioRef.current.volume = volume;
      
      // Try to play
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        await playPromise;
        setIsPlaying(true);
        setIsLoading(false);
        setHasAutoPlayed(true);
        return true;
      }
      
      setIsLoading(false);
      return false;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to play audio';
      handleAudioError(errorMessage);
      return false;
    }
  }, [volume, handleAudioError]);

  // Enhanced autoplay logic
  useEffect(() => {
    const playMusic = async () => {
      if (audioRef.current && !isPlaying && autoPlay && !hasAutoPlayed && userInteracted) {
        const success = await safePlay();
        if (success) {
          setHasAutoPlayed(true);
        }
      }
    };
    
    // Try to play after user interaction
    if (userInteracted) {
      playMusic();
    }
  }, [autoPlay, isPlaying, safePlay, hasAutoPlayed, userInteracted]);

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

  // Update volume when it changes and save to localStorage
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
    localStorage.setItem('music-volume', volume.toString());
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

  // Play Undertale button sound
  const playButtonSound = () => {
    const sound = new Audio('/music/undertale/buttons/undertale-select-sound.mp3');
    sound.volume = 0.3;
    sound.play().catch(() => {});
  };

  return (
    <>
      {/* Enhanced Floating Music Button with Undertale styling */}
      <motion.div
        className="fixed bottom-6 left-6 z-50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={reducedMotion ? {} : { type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={() => {
            setIsOpen(!isOpen);
            playButtonSound();
          }}
          className="pixel-button bg-gradient-to-r from-pixel-purple to-pixel-pink text-white p-4 rounded-full shadow-lg hover:shadow-xl relative border-4 border-yellow-400"
          whileHover={reducedMotion ? {} : { scale: 1.1, rotate: 5 }}
          whileTap={reducedMotion ? {} : { scale: 0.9 }}
          aria-label={isOpen ? 'Cerrar Reproductor de Música' : 'Abrir Reproductor de Música'}
          aria-expanded={isOpen}
          onMouseEnter={playButtonSound}
        >
          <span className="text-2xl" aria-hidden="true">🎵</span>
          {isPlaying && (
            <motion.span
              className="absolute -top-2 -right-2 text-pixel-yellow text-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={reducedMotion ? {} : { opacity: [0.7, 1, 0.7], scale: [1, 1.2, 1] }}
              transition={reducedMotion ? {} : { duration: 1, repeat: Infinity }}
            >
              <span role="img" aria-label="Música Reproduciéndose">🎶</span>
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

      {/* Enhanced Music Player Panel with Undertale styling */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-20 left-6 z-40"
            role="dialog"
            aria-label="Reproductor de Música"
          >
            <div className="music-player-card p-6 max-w-sm border-4 border-yellow-400 bg-gradient-to-br from-purple-900 to-pink-800">
              {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  <p className="pixel-text text-sm">
                    💕 ¡No te preocupes! La música estará disponible pronto. Puedes seguir disfrutando de nuestro mundo mágico juntos.
                  </p>
                </div>
              )}
              
              <div className="text-center mb-4">
                <div className="text-4xl mb-2" aria-hidden="true">{currentSong.emoji}</div>
                <h3 className="pixel-title text-lg text-yellow-300">{currentSong.title}</h3>
                <p className="pixel-text text-sm opacity-80 text-white">{currentSong.artist}</p>
                <p className="pixel-text text-xs opacity-70 text-white mt-2">{currentSong.description}</p>
              </div>

              {/* Enhanced Volume Control */}
              <div className="mb-4">
                <label className="pixel-text text-sm block mb-2 text-yellow-300" htmlFor="volume-control">
                  Volumen
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
                  aria-label="Control de volumen"
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

              {/* Enhanced Controls with Undertale styling */}
              <div className="music-controls mb-4">
                <motion.button
                  onClick={() => {
                    prevSong();
                    playButtonSound();
                  }}
                  className="music-button bg-pixel-purple hover:bg-pixel-pink border-2 border-yellow-400"
                  whileHover={reducedMotion ? {} : { scale: 1.1 }}
                  whileTap={reducedMotion ? {} : { scale: 0.9 }}
                  aria-label="Canción Anterior"
                  onMouseEnter={playButtonSound}
                >
                  ⏮️
                </motion.button>
                
                <motion.button
                  onClick={() => {
                    togglePlay();
                    playButtonSound();
                  }}
                  className="music-button bg-pixel-green hover:bg-pixel-yellow text-xl border-2 border-yellow-400"
                  whileHover={reducedMotion ? {} : { scale: 1.1 }}
                  whileTap={reducedMotion ? {} : { scale: 0.9 }}
                  aria-label={isPlaying ? 'Pausar Música' : 'Reproducir Música'}
                  disabled={isLoading}
                  onMouseEnter={playButtonSound}
                >
                  {isLoading ? '⏳' : isPlaying ? '⏸️' : '▶️'}
                </motion.button>
                
                <motion.button
                  onClick={() => {
                    nextSong();
                    playButtonSound();
                  }}
                  className="music-button bg-pixel-purple hover:bg-pixel-pink border-2 border-yellow-400"
                  whileHover={reducedMotion ? {} : { scale: 1.1 }}
                  whileTap={reducedMotion ? {} : { scale: 0.9 }}
                  aria-label="Siguiente Canción"
                  onMouseEnter={playButtonSound}
                >
                  ⏭️
                </motion.button>
              </div>

              {/* Enhanced Song List with Undertale styling */}
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
                      playButtonSound();
                    }}
                    className={`w-full text-left p-2 rounded pixel-text text-sm transition-colors border-2 ${
                      index === currentSongIndex
                        ? 'bg-pixel-yellow text-pixel-purple border-yellow-400'
                        : 'hover:bg-pixel-purple/20 border-transparent hover:border-yellow-400 text-white'
                    }`}
                    whileHover={reducedMotion ? {} : { x: 5 }}
                    aria-label={`Reproducir ${song.title} de ${song.artist}`}
                    aria-current={index === currentSongIndex ? "true" : "false"}
                    onMouseEnter={playButtonSound}
                  >
                    <span className="mr-2" aria-hidden="true">{song.emoji}</span>
                    {song.title}
                  </motion.button>
                ))}
              </div>

              {/* Enhanced Emotional Support Message */}
              <div className="mt-4 p-3 bg-pink-100 border border-pink-300 rounded border-2 border-yellow-400">
                <p className="pixel-text text-xs text-pink-800">
                  💕 La música tiene el poder de sanar corazones y acercarnos más. Eres amada y especial.
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