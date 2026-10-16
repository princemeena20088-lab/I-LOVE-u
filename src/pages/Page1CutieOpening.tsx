import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, Music2, Volume2 } from 'lucide-react';
import { CuteTeddy } from '../components/CuteTeddy';
import { fireHeartConfetti, WashiTape } from '../components/Decorations';
import { playEnvelopeSound, playPopSound, songPlayer } from '../components/AudioEffects';

interface Page1Props {
  onNext: () => void;
}

export const Page1CutieOpening: React.FC<Page1Props> = ({ onNext }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlayingSong, setIsPlayingSong] = useState(false);

  useEffect(() => {
    return songPlayer.subscribe((playing) => setIsPlayingSong(playing));
  }, []);

  const handleOpenEnvelope = () => {
    if (!isOpen) {
      playEnvelopeSound();
      fireHeartConfetti(0.5, 0.4);
      setIsOpen(true);
      // Play the requested song on tapping "Tap here, my love"
      songPlayer.play();
    } else {
      // Toggle song playback if envelope is already open
      songPlayer.toggle();
    }
  };

  const handleProceed = () => {
    playPopSound();
    fireHeartConfetti(0.5, 0.5);
    // Ensure song is playing as she journeys forward
    songPlayer.play();
    onNext();
  };

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center py-6 px-4">
      {/* Decorative Washi Tapes */}
      <div className="relative w-full max-w-md">
        <WashiTape color="pink" className="absolute -top-6 left-6" rotate="-3deg" />
        <WashiTape color="lavender" className="absolute -top-6 right-6" rotate="3deg" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="paper-card w-full max-w-md rounded-3xl p-6 md:p-8 text-center border-2 border-pink-200 shadow-xl relative overflow-hidden"
      >
        {/* Floating background decorative badges */}
        <div className="absolute top-3 right-4 font-script text-pink-400 text-sm select-none">
          for Ishika ♡
        </div>

        {/* Header Tags */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-100 text-pink-600 font-cute text-xs font-bold tracking-wide uppercase mb-3 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-pink-500" />
          <span>A Little Corner Just For You</span>
          <span>🎀</span>
        </div>

        {/* Main Title */}
        <h1 className="font-caveat text-5xl md:text-6xl font-bold text-pink-600 tracking-tight mb-1 drop-shadow-xs">
          ISHIKA <span className="inline-block animate-bounce">💗</span>
        </h1>

        <p className="font-hand text-2xl md:text-3xl text-pink-800 font-semibold mb-2">
          Heyyy, my cutie pie! 🎀
        </p>

        <p className="font-cute text-sm md:text-base text-pink-900/80 mb-6 leading-relaxed max-w-xs mx-auto">
          Made this little corner of the internet just for you, <span className="font-bold text-pink-600">meri jaan</span>.
        </p>

        {/* Interactive Envelope / Box */}
        <div className="my-4 flex flex-col items-center">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleOpenEnvelope}
            className="cursor-pointer relative group"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') handleOpenEnvelope();
            }}
            aria-label="Tap to open love envelope"
          >
            {/* Outer envelope container */}
            <div className="w-64 h-48 bg-gradient-to-b from-[#ffd3df] to-[#ffb6c7] rounded-2xl shadow-lg border-2 border-pink-300 relative flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-pink-300/60">
              {/* Envelope flap / folds */}
              <div
                className={`absolute top-0 left-0 right-0 h-24 bg-[#ffc1d3] border-b-2 border-pink-300 transition-all duration-500 origin-top flex items-center justify-center ${
                  isOpen ? '-rotate-180 opacity-20' : 'rotate-0'
                }`}
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                }}
              >
                {!isOpen && (
                  <div className="w-8 h-8 rounded-full bg-pink-500 border-2 border-white shadow-md flex items-center justify-center text-white text-xs -mt-6">
                    <Heart className="w-4 h-4 fill-white" />
                  </div>
                )}
              </div>

              {/* Revealed letter & Teddy when opened */}
              <AnimatePresence>
                {isOpen ? (
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.6 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', damping: 15 }}
                    className="flex flex-col items-center z-10"
                  >
                    <CuteTeddy mood="heart" size={110} className="animate-float-slow" />
                    <span className="font-hand text-pink-700 text-lg font-bold -mt-2">
                      Surprise, Cutie! 🌸
                    </span>
                  </motion.div>
                ) : (
                  <div className="text-center z-10 flex flex-col items-center gap-1.5">
                    <span className="text-3xl animate-bounce">💌</span>
                    <span className="font-caveat text-xl font-bold text-pink-700 bg-white/70 px-3 py-0.5 rounded-full shadow-2xs">
                      Tap here, my love 💌
                    </span>
                  </div>
                )}
              </AnimatePresence>

              {/* Sparkle corners */}
              <div className="absolute top-2 left-2 text-pink-400 text-xs">✨</div>
              <div className="absolute bottom-2 right-2 text-pink-400 text-xs">✨</div>
            </div>
          </motion.div>

          <p className="font-caveat text-xl text-pink-700 font-bold mt-4">
            Open your little surprise, babyyy 🧸💕
          </p>

          {/* Now Playing Song Indicator */}
          {isPlayingSong && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-3 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100/90 border border-pink-300 text-pink-700 font-cute text-xs font-bold shadow-xs"
            >
              <Music2 className="w-3.5 h-3.5 text-pink-600 animate-spin" />
              <span>Playing Our Song: Alfaaz ♫ 💗</span>
              <span className="flex items-center gap-0.5">
                <span className="w-1 h-3 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1 h-4 bg-rose-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </span>
            </motion.div>
          )}
        </div>

        {/* Glowing Pink Action Button */}
        <div className="mt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleProceed}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 hover:from-pink-500 hover:to-rose-500 text-white font-cute font-extrabold text-base tracking-wider uppercase shadow-lg shadow-pink-300/50 hover:shadow-pink-400/70 border border-white/40 transition active:scale-95 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5 fill-white/80" />
            <span>OPEN MY LETTER</span>
            <span>🎀</span>
          </motion.button>
        </div>

        {/* Cute footer note */}
        <p className="mt-4 text-xs font-cute text-pink-400 italic">
          ♫ Music starts when you tap the envelope or open the letter!
        </p>
      </motion.div>
    </div>
  );
};
