import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, ChevronLeft, ChevronRight, Bookmark, Check } from 'lucide-react';
import { WashiTape, fireHeartConfetti, StampBadge } from '../components/Decorations';
import { playKissSound, playPopSound } from '../components/AudioEffects';

interface Page4Props {
  onNext: () => void;
  onPrev: () => void;
}

export const Page4CutieLetter: React.FC<Page4Props> = ({ onNext, onPrev }) => {
  const [isFolded, setIsFolded] = useState(false);
  const [kissSent, setKissSent] = useState(false);

  const toggleFold = () => {
    playPopSound();
    setIsFolded(!isFolded);
  };

  const handleSendKiss = () => {
    playKissSound();
    fireHeartConfetti(0.5, 0.4);
    setKissSent(true);
    setTimeout(() => setKissSent(false), 3000);
  };

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center py-6 px-4">
      {/* Decorative Washi Tapes at Corners */}
      <div className="relative w-full max-w-2xl">
        <WashiTape color="pink" className="absolute -top-5 left-4 z-20" rotate="-5deg" />
        <WashiTape color="lavender" className="absolute -top-5 right-4 z-20" rotate="4deg" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-[#fffdf5] rounded-3xl p-6 md:p-10 border-2 border-pink-200/90 shadow-2xl relative overflow-hidden paper-card"
      >
        {/* Lined paper texture background overlay */}
        <div className="absolute inset-0 bg-repeat opacity-40 pointer-events-none lined-paper" />

        {/* Top Header of the Letter */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b-2 border-dashed border-pink-200">
          <div>
            <StampBadge text="LOVE LETTER" icon="💌" rotation="-2deg" />
            <h1 className="font-caveat text-3xl md:text-4xl font-extrabold text-pink-600 mt-2">
              CUTIE LETTER FOR YOU 🎀
            </h1>
            <p className="font-hand text-xl text-pink-700 font-semibold">
              Babyyy, listen... 💗
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleFold}
              className="px-3 py-1.5 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-700 font-cute text-xs font-bold transition flex items-center gap-1 shadow-2xs"
            >
              <Bookmark className="w-3.5 h-3.5 text-pink-500" />
              <span>{isFolded ? 'Unfold Letter 📜' : 'Fold Letter 💌'}</span>
            </button>
            <button
              onClick={handleSendKiss}
              className="px-3 py-1.5 rounded-full bg-rose-500 hover:bg-rose-600 text-white font-cute text-xs font-bold transition flex items-center gap-1 shadow-2xs active:scale-95"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Send a Kiss 💋</span>
            </button>
          </div>
        </div>

        {/* Kiss confirmation message pop */}
        <AnimatePresence>
          {kissSent && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="mb-4 p-3 bg-pink-100/90 border border-pink-300 rounded-xl text-center font-caveat text-xl text-pink-700 font-bold"
            >
              Mwaahhh! Softest kiss placed right on Ishika&apos;s cheek! 💋🌸
            </motion.div>
          )}
        </AnimatePresence>

        {/* Letter Body */}
        <AnimatePresence mode="wait">
          {isFolded ? (
            <motion.div
              key="folded"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="py-12 text-center flex flex-col items-center justify-center relative z-10"
            >
              <div className="w-48 h-32 bg-pink-200 rounded-2xl border-2 border-pink-400 shadow-md flex items-center justify-center relative rotate-2">
                <div className="w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center text-xl shadow-md border-2 border-white">
                  💌
                </div>
              </div>
              <p className="font-caveat text-2xl text-pink-700 font-bold mt-4">
                Sealed with all my love for Ishika ♡
              </p>
              <button
                onClick={toggleFold}
                className="mt-3 px-4 py-2 bg-pink-500 text-white rounded-xl font-cute text-xs font-bold shadow-md hover:bg-pink-600 transition"
              >
                Tap to Unfold and Read
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="unfolded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative z-10 font-hand text-xl md:text-2xl text-pink-950 leading-relaxed space-y-4"
            >
              <p className="font-caveat text-2xl md:text-3xl font-bold text-pink-600">
                Babyyy, listen...
              </p>

              <p>
                Mujhe nahi pata tu mere liye kitna zyada sochti hai, but I love you{' '}
                <span className="font-bold text-rose-500 bg-pink-100/70 px-1 rounded">bohottttt saaraaa</span>. Shayad tu imagine bhi nahi kar sakti ki tu mere liye kitni special hai.
              </p>

              <p>
                Me tujhse <span className="font-bold text-pink-600">bohottt zyada pyaar karta hoon</span>,{' '}
                <span className="font-bold text-pink-600 bg-pink-100/80 px-1.5 rounded-md">meri jaan</span>. 💗
              </p>

              <p>
                Mera din kaisa bhi ho, tujhse baat karke sab thoda better lagne lagta hai. Mood kitna bhi kharab ho, teri cutie baatein somehow mere face pe smile le hi aati hain.
              </p>

              <p>
                Aur jab tu apni koi cutie photo ya video Snapchat pe bhejti hai na, I get so happy just seeing you. 🥹🎀
              </p>

              <p>
                Kabhi-kabhi humare paas baat karne ke liye zyada topics bhi nahi hote, but phir bhi humari baatein itni funny aur special ho jaati hain. Sach mein yaar, tujhse baat karke bohot accha lagta hai.
              </p>

              <p>
                <span className="font-bold text-pink-600">Mera baccha</span>, I want you to always feel comfortable being yourself around me. Koi dikhawa karne ki zaroorat nahi hai. Har waqt perfectly baat karna bhi zaroori nahi hai. Tujhe jaisa feel hota hai, tu waisa hi bata sakti hai.
              </p>

              <p>
                <span className="font-bold text-pink-600">My cutie pie</span>, you don&apos;t need to be perfect. Tu jaisi bhi hai, bohot pyaari hai, and I love you for who you are. Log kya kehte hain, usse teri worth decide nahi hoti. 💗
              </p>

              <p>
                Mujhe pata hai ki main bhi koi perfect insaan nahi hoon. Kabhi-kabhi mujhse galtiyan ho jaati hain, main kuch ajeeb keh deta hoon, ya kabhi cheezein samajhne mein mujhse galti ho jaati hai.
              </p>

              <p>
                But my feelings for you are genuine, and I want to keep learning how to understand you better.
              </p>

              <p>
                Mujhe filmon wale bade-bade vaadon ya dikhave ki zaroorat nahi hai. Mujhe bas tere saath apni everyday life ke little moments chahiye.
              </p>

              <p className="font-semibold text-pink-800">
                Saath mein hasna, ek-doosre ko pareshaan karna, random baatein karna, silly jokes pe hasna, aur chhoti-chhoti memories banana. 🧸💕
              </p>

              <p>
                I want our relationship to be a place where we can both be ourselves, feel respected, talk honestly, and make each other feel safe.
              </p>

              <div className="pt-2 text-center">
                <p className="font-caveat text-3xl md:text-4xl text-rose-500 font-extrabold tracking-wide">
                  I LOVE YOUUU, MY BACCHAAA! 💋🎀
                </p>
                <p className="font-script text-2xl text-pink-600 font-bold mt-1">
                  Yours, always and idiotically in love. ♡
                </p>
              </div>

              <div className="p-3 bg-pink-100/60 rounded-xl border border-pink-200 text-pink-800 font-cute text-sm md:text-base font-medium">
                <span className="font-bold text-pink-600">P.S.</span> Drink water and give yourself a little hug for me right now, okay? 🫂💗
              </div>

              {/* Signature */}
              <div className="pt-4 flex flex-col items-end">
                <p className="font-script text-2xl md:text-3xl text-pink-700 font-bold">
                  Made with all my love, just for my Ishika. ♡
                </p>
                <div className="flex items-center gap-1 text-xs text-pink-400 font-cute mt-1">
                  <span>Forever & Always</span>
                  <span>🎀</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Corner Sticker */}
        <div className="absolute bottom-3 left-4 opacity-70 select-none">
          <span className="text-2xl">🧸</span>
        </div>
      </motion.div>

      {/* Navigation Buttons */}
      <div className="w-full max-w-2xl flex items-center justify-between gap-3 mt-6">
        <button
          onClick={onPrev}
          className="px-4 py-2.5 rounded-xl bg-white hover:bg-pink-50 text-pink-700 border border-pink-200 font-cute text-xs font-bold flex items-center gap-1 transition"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Chapter 3</span>
        </button>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onNext}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-cute text-sm font-bold shadow-md shadow-pink-200 flex items-center gap-1.5 transition"
        >
          <span>POCKET NOTES & SURPRISES</span>
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  );
};
