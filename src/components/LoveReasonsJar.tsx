import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, Shuffle } from 'lucide-react';
import { playPopSound, playKissSound } from './AudioEffects';
import { fireHeartConfetti } from './Decorations';

const loveReasons = [
  "The adorable way your eyes crinkle when you laugh so hard.",
  "How you make my worst days feel 100 times lighter just by talking to me.",
  "Your cutie voice notes and random Snapchat photos that make my heart skip a beat.",
  "Because you are my safest place in this whole world.",
  "The way you genuinely care for people around you with a soft heart.",
  "How cute you look when you get slightly grumpy or sleepy.",
  "Because I don't have to pretend or be perfect around you.",
  "How silly and cheesy we can be together without feeling embarrassed.",
  "The way your name 'Ishika' feels so sweet to say: mera pyaara baccha.",
  "Even when we have nothing to talk about, being in your presence is peaceful.",
  "Your sweet laugh that cures all my anxiety.",
  "How you make ordinary everyday moments feel so magical.",
  "Because you choose me, and I choose you, unconditionally.",
  "The way you listen to my random nonsense with so much patience.",
  "Because you are the prettiest girl I've ever laid my eyes on.",
  "Your kindness, softness, and the warmth you bring into my life.",
  "Because thinking about you always brings an unprovoked smile to my face.",
  "The fact that my future wife is the cutest human alive.",
  "How you make me want to be a better person every single day.",
  "Because loving you is the easiest, most natural thing I've ever done.",
  "Your cute little hands and how perfectly they would fit in mine.",
  "The way you say 'babyyy' that melts my whole heart.",
  "How safe and valued you make me feel.",
  "Because you are my best friend and my favorite soulmate.",
  "The little jokes only you and I understand.",
  "Because even in a room full of art, I would still stare at you.",
  "How passionate you get about the little things you love.",
  "Because no matter how tough the world gets, you give me peace.",
  "The sweet forehead kisses I can't wait to give you everyday.",
  "Because you are uniquely, irreplaceable, beautifully YOU.",
  "How you never make me feel like I have to hide my feelings.",
  "The way you make my heart beat like a silly teenager.",
  "Because you're my cutie pie, today, tomorrow, and forever.",
  "How you make me smile even through text messages.",
  "Because our story is my absolute favorite story in existence.",
  "The cute way you try to annoy me (especially my hair!).",
  "Because my heart chose you without asking my brain, and it was right.",
  "Your gentle reassurance whenever I doubt myself.",
  "How proud I feel to call you my girlfriend.",
  "Because dreaming about our future together is my favorite pastime.",
  "The sweetness in your words when you check on me.",
  "Because you make love feel so comfortable and so gentle.",
  "Your infectious energy when something makes you super happy.",
  "Because you're the first person I want to tell good news to.",
  "And the first person I want comfort from when things go wrong.",
  "Because you give me butterflies even after all this time.",
  "How effortlessly you stole my heart and kept it safe.",
  "Because you are my home, Ishika.",
  "The way you look at me and make me feel like the luckiest boy alive.",
  "Because I love you... bohot bohot bohot saara, meri jaan! 💗"
];

export const LoveReasonsJar: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pulledCount, setPulledCount] = useState(1);

  const handlePullNext = () => {
    playPopSound();
    playKissSound();
    fireHeartConfetti(0.5, 0.4);
    const nextIdx = (currentIndex + 1) % loveReasons.length;
    setCurrentIndex(nextIdx);
    setPulledCount((c) => c + 1);
  };

  return (
    <div className="paper-card rounded-3xl p-6 border-2 border-pink-200 shadow-md relative my-6 text-center">
      <div className="flex items-center justify-between mb-3">
        <span className="font-cute font-extrabold text-[11px] uppercase tracking-wider text-pink-700 bg-pink-100 px-2.5 py-1 rounded-full">
          Love Jar ✨
        </span>
        <span className="font-script text-pink-500 font-bold text-base">
          50 Reasons Why I Love You
        </span>
      </div>

      <h3 className="font-caveat text-3xl font-extrabold text-pink-600 mb-1">
        Pull A Reason From My Heart 🍯💗
      </h3>
      <p className="font-hand text-pink-800 text-base mb-4">
        Tap the jar to reveal another reason why you mean the world to me
      </p>

      {/* Jar & Reason Display */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        onClick={handlePullNext}
        className="cursor-pointer bg-gradient-to-b from-[#fff5f8] to-[#ffe8ef] rounded-2xl p-6 border-2 border-dashed border-pink-300 relative shadow-sm min-h-[140px] flex flex-col justify-center items-center group"
      >
        <span className="text-3xl mb-1 group-hover:scale-125 transition duration-300">
          💌
        </span>

        <span className="font-cute text-[11px] font-bold text-pink-500 uppercase tracking-widest mb-1">
          Reason #{currentIndex + 1} of {loveReasons.length}
        </span>

        <AnimatePresence mode="wait">
          <motion.p
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="font-hand text-xl md:text-2xl text-pink-950 font-bold max-w-md leading-relaxed"
          >
            &ldquo;{loveReasons[currentIndex]}&rdquo;
          </motion.p>
        </AnimatePresence>
      </motion.div>

      <div className="mt-4 flex items-center justify-center gap-2">
        <button
          onClick={handlePullNext}
          className="px-5 py-2.5 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-cute text-xs font-bold shadow-md shadow-pink-200 flex items-center gap-1.5 transition active:scale-95"
        >
          <Shuffle className="w-3.5 h-3.5" />
          <span>PULL ANOTHER REASON ✨</span>
        </button>
      </div>
      <p className="font-cute text-[11px] text-pink-400 mt-2">
        (Pulled {pulledCount} reasons so far with infinite love)
      </p>
    </div>
  );
};
