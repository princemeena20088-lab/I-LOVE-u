import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';
import { CuteTeddy } from '../components/CuteTeddy';
import { WashiTape, fireHeartConfetti, StampBadge } from '../components/Decorations';
import { playKissSound, playPopSound } from '../components/AudioEffects';

interface Page2Props {
  onNext: () => void;
  onPrev: () => void;
}

interface KissMark {
  id: number;
  x: number;
  y: number;
  rotation: number;
}

export const Page2CutiePieOpened: React.FC<Page2Props> = ({ onNext }) => {
  const [kissMarks, setKissMarks] = useState<KissMark[]>([]);
  const [kissCount, setKissCount] = useState(0);

  const handleSendKiss = (e: React.MouseEvent<HTMLButtonElement>) => {
    playKissSound();
    fireHeartConfetti(0.5, 0.6);
    setKissCount((prev) => prev + 1);

    const rect = e.currentTarget.getBoundingClientRect();
    const newKiss: KissMark = {
      id: Date.now() + Math.random(),
      x: rect.left + rect.width / 2 + (Math.random() * 120 - 60),
      y: rect.top - 20 - Math.random() * 50,
      rotation: Math.random() * 40 - 20,
    };
    setKissMarks((prev) => [...prev.slice(-10), newKiss]);
  };

  const handleNextPage = () => {
    playPopSound();
    onNext();
  };

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center py-6 px-4">
      {/* Decorative Washi Tapes */}
      <div className="relative w-full max-w-lg">
        <WashiTape color="lavender" className="absolute -top-5 left-8" rotate="-4deg" />
        <WashiTape color="pink" className="absolute -top-5 right-8" rotate="2deg" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="paper-card w-full max-w-lg rounded-3xl p-6 md:p-8 border-2 border-pink-200 shadow-xl relative"
      >
        {/* Top Stamp & Label */}
        <div className="flex items-center justify-between mb-4">
          <StampBadge text="SPECIAL DELIVERY" icon="💌" rotation="-2deg" />
          <div className="flex items-center gap-1 font-script text-pink-500 font-bold text-lg">
            <span>Chapter 2</span>
            <span>🧸</span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-6">
          <span className="inline-block px-3 py-1 bg-pink-100 rounded-full font-cute text-xs font-bold text-pink-600 mb-2">
            Surprise Unlocked! ✨
          </span>
          <h1 className="font-caveat text-4xl md:text-5xl font-bold text-pink-600">
            CUTIE PIEEEE 🎀
          </h1>
        </div>

        {/* Scrapbook handwritten note card */}
        <div className="bg-[#fff9fa] rounded-2xl p-5 md:p-6 border border-pink-200/80 shadow-inner relative overflow-hidden mb-6">
          <div className="font-caveat text-2xl md:text-3xl text-pink-900 leading-relaxed space-y-4">
            <p className="font-bold text-pink-600 text-3xl">
              BABYYYY, YOU ACTUALLY OPENED ITTT! 😭💗
            </p>

            <p className="font-script text-2xl text-rose-500 font-bold tracking-wide">
              Mwaahhhhh! 💋💋
            </p>

            <p className="text-xl md:text-2xl text-pink-950 font-hand leading-relaxed">
              I was trying to make something a little special for you this time, and I really hope you like it,{' '}
              <span className="text-pink-600 font-bold bg-pink-100/80 px-1 rounded">my cutie pie</span>.
            </p>

            <p className="text-xl md:text-2xl text-pink-950 font-hand leading-relaxed">
              It&apos;s a tiny little website, but there&apos;s a whole lot of love hidden in it. Every little page has something I wanted to tell you, every silly button has a little surprise, and everything here was made while thinking about you.
            </p>

            <p className="text-xl md:text-2xl text-pink-950 font-hand leading-relaxed">
              So take your time, <span className="text-pink-600 font-bold bg-pink-100/80 px-1 rounded">meri jaan</span>. Explore everything, tap all the cute things, and don&apos;t you dare skip the little surprises! 🎀
            </p>

            <div className="pt-2">
              <p className="text-pink-700 font-bold text-2xl">
                Ready, babyyy?
              </p>
              <p className="text-rose-500 font-extrabold text-3xl">
                Let&apos;s gooo! 🧸💗
              </p>
            </div>
          </div>

          {/* Teddy in the corner */}
          <div className="mt-4 flex justify-end">
            <CuteTeddy mood="waving" size={85} className="animate-float-slow" />
          </div>
        </div>

        {/* Cute Kiss Interaction Section */}
        <div className="bg-pink-50/70 rounded-2xl p-4 border border-pink-200/60 text-center mb-6">
          <p className="font-hand text-pink-800 text-lg mb-2 font-bold">
            Tap to collect kisses from your boyfriend! 💋
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
              onClick={handleSendKiss}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-cute font-bold text-sm shadow-md shadow-pink-200 flex items-center gap-2 active:scale-95 transition"
            >
              <span>SEND A KISS 💋</span>
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                {kissCount > 0 ? `${kissCount} Mwaahs!` : 'Tap me!'}
              </span>
            </motion.button>
          </div>
          {kissCount > 0 && (
            <p className="font-caveat text-pink-600 text-lg font-bold mt-2 animate-bounce">
              Mwaahhh! Ishika got {kissCount} kisses! 💋✨
            </p>
          )}
        </div>

        {/* Floating kisses spawned */}
        <AnimatePresence>
          {kissMarks.map((k) => (
            <motion.div
              key={k.id}
              initial={{ opacity: 1, scale: 0.5, y: 0 }}
              animate={{ opacity: 0, scale: 1.6, y: -60 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="fixed pointer-events-none z-50 text-2xl"
              style={{
                left: k.x,
                top: k.y,
                transform: `rotate(${k.rotation}deg)`,
              }}
            >
              💋
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Navigation Action to Page 3 */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleNextPage}
          className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-600 text-white font-cute font-extrabold text-base tracking-wide uppercase shadow-lg shadow-pink-300/50 flex items-center justify-center gap-2 group transition"
        >
          <span>LET&apos;S OPEN OUR STORY</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
        </motion.button>
      </motion.div>
    </div>
  );
};
