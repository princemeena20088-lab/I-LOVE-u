import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, Play, Pause, Heart } from 'lucide-react';
import { songPlayer, playPopSound } from './AudioEffects';

export const FloatingMusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    return songPlayer.subscribe((playing) => {
      setIsPlaying(playing);
    });
  }, []);

  const handleToggle = () => {
    playPopSound();
    void songPlayer.toggle();
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 select-none">
      <AnimatePresence>
        {!isMinimized && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-2 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-xl border-2 border-pink-300 flex items-center gap-3 pr-4 paper-card max-w-[270px]"
          >
            <div
              onClick={handleToggle}
              className={`w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-rose-400 flex items-center justify-center text-white cursor-pointer shadow-md shadow-pink-200 flex-shrink-0 ${isPlaying ? 'animate-spin' : ''}`}
              style={{ animationDuration: '4s' }}
              title={isPlaying ? 'Click to pause' : 'Click to play'}
            >
              <Heart className="w-5 h-5 fill-white" />
            </div>

            <div className="flex-1 min-w-0" onClick={handleToggle}>
              <div className="flex items-center gap-1">
                <span className="font-cute text-[10px] uppercase font-bold text-pink-500 tracking-wider">
                  Our Song
                </span>
                <span className="text-xs">🎵</span>
              </div>
              <p className="font-caveat text-base font-bold text-pink-900 truncate">
                Alfaaz ♫ (Tu Taareyan Ton)
              </p>
            </div>

            <button
              onClick={handleToggle}
              className="p-2 rounded-xl bg-pink-100 hover:bg-pink-200 text-pink-700 transition active:scale-90"
              title={isPlaying ? 'Pause song' : 'Play song'}
              aria-label={isPlaying ? 'Pause song' : 'Play song'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 fill-pink-700" /> : <Play className="w-3.5 h-3.5 fill-pink-700" />}
            </button>

            <label
              className="p-1.5 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-600 transition cursor-pointer active:scale-90"
              title="Select custom audio file from your device"
            >
              <span className="text-xs">📁</span>
              <input
                type="file"
                accept="audio/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    songPlayer.loadCustomFile(file);
                  }
                }}
              />
            </label>

            <button
              onClick={() => setIsMinimized(true)}
              className="text-pink-300 hover:text-pink-500 text-xs font-bold"
              title="Minimize player"
              aria-label="Minimize player"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {isMinimized && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMinimized(false)}
          className={`w-11 h-11 rounded-full bg-gradient-to-tr from-pink-500 to-rose-400 text-white flex items-center justify-center shadow-lg border-2 border-white ${isPlaying ? 'animate-spin' : ''}`}
          style={{ animationDuration: '4s' }}
          title="Open Song Player"
          aria-label="Open Song Player"
        >
          <Music className="w-5 h-5" />
        </motion.button>
      )}
    </div>
  );
};
