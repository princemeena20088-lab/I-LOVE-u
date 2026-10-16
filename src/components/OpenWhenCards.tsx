import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, HeartCrack, Sparkles, Coffee, Heart, Check, X } from 'lucide-react';
import { playEnvelopeSound, playKissSound } from './AudioEffects';
import { fireHeartConfetti } from './Decorations';

interface OpenWhenCard {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  icon: React.ReactNode;
  bgGradient: string;
  message: string;
  sweetNote: string;
}

const cards: OpenWhenCard[] = [
  {
    id: 'sleep',
    title: 'When you can’t sleep at 3 AM',
    subtitle: 'For sleepless nights & overthinking',
    emoji: '🌙',
    icon: <Moon className="w-4 h-4 text-purple-500" />,
    bgGradient: 'from-purple-100 to-pink-100 border-purple-200',
    message:
      'Mera baccha, close your eyes and take three slow, deep breaths. Whatever is running through your pretty head right now, you don’t have to figure it out tonight. It can wait until tomorrow. Imagine my arms wrapped around you, keeping you warm, safe, and protected. I’m right here with you, always. Sleep peacefully, my cutie pie.',
    sweetNote: 'Goodnight meri jaan, sweet dreams of us. 💤💗',
  },
  {
    id: 'angry',
    title: 'When you’re angry at me',
    subtitle: 'When I did something silly',
    emoji: '🥺',
    icon: <HeartCrack className="w-4 h-4 text-rose-500" />,
    bgGradient: 'from-rose-100 to-pink-100 border-rose-200',
    message:
      'Babyyy, I’m so sorry if I made you upset or said something stupid without realizing. Please don’t keep it bottled inside. Come here, scold me, pinch me (bas hair chhod ke!), but please don’t stay mad at your boy for too long. You know my heart belongs only to you, and I’ll always do my best to understand you better.',
    sweetNote: 'I love you so much, forgive your silly admirer? 🥺🫂',
  },
  {
    id: 'cramps',
    title: 'When you have cramps / bad mood',
    subtitle: 'For painful days & low energy',
    emoji: '🍫',
    icon: <Coffee className="w-4 h-4 text-amber-500" />,
    bgGradient: 'from-amber-50 to-pink-100 border-amber-200',
    message:
      'Awww mera pyaara sa bacchaaa! 😭🫂 Put on your softest oversized clothes, grab a warm blanket, and lie down comfortably. Drink warm water, eat your favorite snacks, and don’t lift a single finger today. You’re allowed to be grumpy and sleepy. I wish I was there to give you gentle tummy rubs and pamper you nonstop.',
    sweetNote: 'Sending 10,000 warm virtual hugs & chocolates! 🍫🧸',
  },
  {
    id: 'miss',
    title: 'When you miss my hugs',
    subtitle: 'When distance feels too long',
    emoji: '🫂',
    icon: <Heart className="w-4 h-4 text-pink-500 fill-pink-300" />,
    bgGradient: 'from-pink-100 to-rose-100 border-pink-200',
    message:
      'Cross your arms around yourself and squeeze tight right now... that’s a real hug sent straight from my chest to yours! No matter how far we are or how busy the day gets, you are always the first and last person on my mind. You are my safest place, Ishika, and nobody will ever take your place in my arms.',
    sweetNote: 'Come hereee, my future wife! Mwaahhhh! 💋💍',
  },
];

export const OpenWhenCards: React.FC = () => {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const handleOpen = (id: string) => {
    playEnvelopeSound();
    fireHeartConfetti(0.5, 0.4);
    setActiveCardId(id);
  };

  const activeCard = cards.find((c) => c.id === activeCardId);

  return (
    <div className="paper-card rounded-3xl p-6 border-2 border-pink-200 shadow-lg relative my-6">
      <div className="flex items-center justify-between mb-3">
        <span className="font-cute font-extrabold text-[11px] uppercase tracking-wider text-pink-700 bg-pink-100 px-2.5 py-1 rounded-full">
          Emergency Love Kit 💌
        </span>
        <span className="font-script text-pink-400 font-bold text-base">For Every Mood</span>
      </div>

      <h3 className="font-caveat text-3xl font-extrabold text-pink-600 text-center mb-1">
        “Open When...” Care Envelopes 🎀
      </h3>
      <p className="font-hand text-center text-pink-800 text-base mb-5">
        Four little emergency envelopes sealed just for your heart
      </p>

      {/* Grid of 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {cards.map((card) => (
          <motion.button
            key={card.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleOpen(card.id)}
            className={`p-4 rounded-2xl border-2 text-left bg-gradient-to-br ${card.bgGradient} shadow-xs hover:shadow-md transition flex items-start gap-3 relative group`}
          >
            <span className="text-2xl p-2 bg-white/80 rounded-xl shadow-2xs group-hover:scale-110 transition">
              {card.emoji}
            </span>
            <div className="flex-1 min-w-0">
              <h4 className="font-caveat text-xl font-bold text-pink-900 leading-tight">
                {card.title}
              </h4>
              <p className="font-cute text-xs text-pink-700/80 mt-0.5 truncate">
                {card.subtitle}
              </p>
              <span className="inline-block font-cute text-[10px] font-bold text-pink-500 mt-1 uppercase tracking-wider">
                Tap to unseal 💌
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Card Content Modal / Popover */}
      <AnimatePresence>
        {activeCard && (
          <div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
            onClick={() => setActiveCardId(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#fffdf8] paper-card rounded-3xl p-6 max-w-md w-full border-2 border-pink-300 shadow-2xl relative"
            >
              <button
                onClick={() => setActiveCardId(null)}
                className="absolute top-4 right-4 text-pink-400 hover:text-pink-600 p-1 font-bold"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">{activeCard.emoji}</span>
                <div>
                  <h4 className="font-caveat text-2xl font-bold text-pink-800 leading-none">
                    {activeCard.title}
                  </h4>
                  <span className="font-cute text-xs text-pink-500 font-bold">
                    For my cutie pie Ishika ♡
                  </span>
                </div>
              </div>

              <div className="bg-[#fff9fb] p-4 rounded-2xl border border-pink-200 font-hand text-xl text-pink-950 leading-relaxed space-y-3">
                <p>{activeCard.message}</p>
                <p className="font-caveat text-2xl text-rose-500 font-extrabold text-right">
                  {activeCard.sweetNote}
                </p>
              </div>

              <button
                onClick={() => {
                  playKissSound();
                  setActiveCardId(null);
                }}
                className="w-full mt-4 py-2.5 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-cute text-xs font-bold transition shadow-xs"
              >
                FOLD AND KEEP IN MY HEART 💗
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
