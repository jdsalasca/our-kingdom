import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const audioRef = useRef<HTMLAudioElement>(null);

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
    }
  ];

  const currentSong = songs[currentSongIndex];

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.load();
    }
  };

  const prevSong = () => {
    const prevIndex = currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1;
    setCurrentSongIndex(prevIndex);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.load();
    }
  };

  const handleSongEnd = () => {
    nextSong();
  };

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
          className="pixel-button bg-gradient-to-r from-pixel-purple to-pixel-pink text-white p-4 rounded-full shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-2xl">🎵</span>
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

              {/* Audio Element */}
              <audio
                ref={audioRef}
                src={currentSong.file}
                onEnded={handleSongEnd}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
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
                      setIsPlaying(false);
                      if (audioRef.current) {
                        audioRef.current.load();
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