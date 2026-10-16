import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, ChevronLeft, RotateCcw, Phone, MessageCircle } from 'lucide-react';
import { CuteTeddy } from '../components/CuteTeddy';
import { WashiTape, fireBigLoveCelebration, fireHeartConfetti, StampBadge } from '../components/Decorations';
import { playKissSound, playPopSound } from '../components/AudioEffects';
import { LoveContract } from '../components/LoveContract';

interface Page7Props {
  onRestart: () => void;
  onPrev: () => void;
}

export const Page7FinalNote: React.FC<Page7Props> = ({ onRestart, onPrev }) => {
  const [hugGiven, setHugGiven] = useState(false);
  const [activeReaction, setActiveReaction] = useState<'hug' | 'kiss' | 'love' | null>(null);
  const [hugCount, setHugCount] = useState(0);

  const handleGiveHug = () => {
    playKissSound();
    fireBigLoveCelebration();
    setHugGiven(true);
    setActiveReaction('hug');
    setHugCount((c) => c + 1);
  };

  const handleReaction = (type: 'hug' | 'kiss' | 'love') => {
    playKissSound();
    fireHeartConfetti(0.5, 0.6);
    setActiveReaction(type);
    if (type === 'hug') setHugCount((c) => c + 1);
  };

  const handleRestart = () => {
    playPopSound();
    onRestart();
  };

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center py-6 px-4">
      {/* Top Banner */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 font-cute text-xs font-bold mb-2">
          <Sparkles className="w-3.5 h-3.5 text-pink-500" />
          <span>Chapter 7 of 7 — Final Note 💌</span>
        </div>
        <h1 className="font-caveat text-4xl md:text-5xl font-bold text-pink-600">
          Okay, one last thing... 💗
        </h1>
        <p className="font-script text-xl text-pink-400 font-bold">
          Just between you and me. 🎀
        </p>
      </div>

      <div className="w-full max-w-2xl space-y-8">
        {/* Main Final Letter */}
        <div className="paper-card rounded-3xl p-6 md:p-10 border-2 border-pink-200 shadow-2xl relative">
          <WashiTape color="pink" className="absolute -top-4 left-6" rotate="-3deg" />
          <WashiTape color="lavender" className="absolute -top-4 right-6" rotate="3deg" />

          <div className="flex items-center justify-between pb-3 mb-4 border-b border-pink-100">
            <StampBadge text="FROM MY HEART" icon="💌" rotation="-1deg" />
            <span className="font-script text-pink-400 font-bold text-lg">Always Yours ♡</span>
          </div>

          <div className="space-y-4 font-hand text-xl md:text-2xl text-pink-950 leading-relaxed">
            <p className="font-caveat text-2xl md:text-3xl font-bold text-pink-700">
              Anywayyy, I think I&apos;ve talked enough now, hehe. 😭💗
            </p>

            <p>
              I just wanted to make you a little something that you can come back to whenever you miss me or need a lil smile. Doesn&apos;t matter if it&apos;s 2 PM or 3 AM, I just hope this little website makes you feel loved, even on days when we&apos;re not together.
            </p>

            <p>
              I know it&apos;s not something big or anything, but I actually put my heart into making this for you. I just wanted you to have something that reminds you of how much you mean to me, even if I can&apos;t always find the right words to say it.
            </p>

            <div className="p-3 bg-pink-100/70 rounded-2xl border border-pink-200 text-center font-bold text-pink-600 font-caveat text-2xl">
              And if you&apos;re smiling right now, then yayyyy, mission accomplished, babyyy! 🎀😭💗
            </div>

            <p>
              Thank you for being you, for listening to my random nonsense, laughing at my stupid jokes, and just being someone I can be this cheesy with.
            </p>

            <p>
              Okayyy, enough of my yapping now before I get even more embarrassing. 😭💗
            </p>

            <p className="font-bold text-pink-800">
              Come hereee, you still owe me attention and a million hugs.
            </p>

            <p className="font-script text-3xl text-rose-500 font-bold">
              Mwaahhhh, love youuuuu! 🫶🏻💕
            </p>

            <div className="pt-2 border-t border-pink-200/60">
              <p className="font-caveat text-2xl font-bold text-pink-700">
                And babyyy, ek baat aur...
              </p>
              <p className="mt-1">
                Agar kabhi tera mood kharab ho, tu sad feel kare, ya bas kisi se baat karne ka mann kare, toh mujhe call kar lena, okay? You don&apos;t have to wait for a special reason.
              </p>
              <p className="mt-2">
                Main teri baat sunne ki poori koshish karunga. Chahe tujhe advice chahiye ho, comfort chahiye ho, ya bas koi chahiye ho jo teri random baatein sune, you can reach out to me.
              </p>

              {/* Direct call shortcut */}
              <div className="my-3 flex flex-wrap gap-2">
                <a
                  href="tel:9057780565"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-cute text-xs font-bold shadow-xs transition"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call: 9057780565 📞</span>
                </a>
                <a
                  href="https://wa.me/919057780565"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-cute text-xs font-bold shadow-xs transition"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Mera Baccha 💬</span>
                </a>
              </div>

              <p className="font-caveat text-2xl text-pink-600 font-bold mt-2">
                Okay, mera baccha?
              </p>
              <p className="font-script text-3xl text-rose-500 font-bold">
                Mwaahhhhh! 💋💗
              </p>
              <p className="font-caveat text-3xl md:text-4xl text-pink-600 font-extrabold tracking-wide mt-2">
                I LOVE YOU SOOO MUCHHH, MY CUTIE PIE. 🎀🧸
              </p>
            </div>

            <div className="pt-4 flex flex-col items-end">
              <p className="font-script text-2xl md:text-3xl text-pink-700 font-bold">
                Made with love, for Ishika. ♡
              </p>
            </div>
          </div>
        </div>

        {/* Official Boyfriend & Girlfriend Love Agreement */}
        <LoveContract />

        {/* ======================================================== */}
        {/* FINAL INTERACTIVE HUG SECTION — COME HERE, BABYYY! 🫂💗  */}
        {/* ======================================================== */}
        <div className="paper-card rounded-3xl p-6 md:p-8 border-2 border-pink-300 shadow-2xl relative text-center overflow-hidden">
          <div className="absolute top-2 right-3 text-pink-300 text-xl select-none">✨</div>
          <div className="absolute top-2 left-3 text-pink-300 text-xl select-none">🌸</div>

          <h2 className="font-caveat text-3xl md:text-4xl font-extrabold text-pink-600 mb-1">
            COME HERE, BABYYY! 🧸💗
          </h2>
          <p className="font-cute text-xs md:text-sm font-bold tracking-widest uppercase text-pink-500 mb-6">
            ONE LAST HUG BEFORE YOU GO...
          </p>

          {!hugGiven ? (
            <div className="flex flex-col items-center">
              <CuteTeddy mood="open_arms" size={130} className="animate-float-slow mb-4" />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGiveHug}
                className="py-4 px-8 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-600 text-white font-cute font-extrabold text-base tracking-wider uppercase shadow-xl shadow-pink-300 border-2 border-white/40 active:scale-95 transition"
              >
                GIVE ME A HUG 🫂
              </motion.button>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center space-y-4"
            >
              {/* Two cute teddies hugging */}
              <CuteTeddy mood="hugging" size={120} className="my-2" />

              <div className="p-4 bg-gradient-to-r from-pink-100 via-rose-100 to-pink-100 rounded-2xl border border-pink-300 w-full max-w-lg">
                <p className="font-caveat text-2xl md:text-3xl text-pink-700 font-extrabold">
                  COME HEREEEE, MERA BACCHAAA! 🫂💗
                </p>
                <p className="font-caveat text-3xl md:text-4xl text-rose-500 font-extrabold my-1 animate-pulse-gentle">
                  BIGGGGG HUG FOR YOUUU!
                </p>
                <p className="font-script text-2xl text-pink-600 font-bold">
                  Mwaahhhh! 💋🎀
                </p>
                <p className="font-caveat text-2xl text-pink-800 font-extrabold mt-1">
                  I LOVE YOUUU, MY ISHIKA.
                </p>
              </div>

              {/* Three repeatable reaction buttons */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => handleReaction('hug')}
                  className="px-4 py-2 rounded-xl bg-pink-100 hover:bg-pink-200 text-pink-700 font-cute text-xs font-bold border border-pink-300 shadow-2xs transition"
                >
                  ONE MORE HUG 🫂 ({hugCount})
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => handleReaction('kiss')}
                  className="px-4 py-2 rounded-xl bg-rose-100 hover:bg-rose-200 text-rose-700 font-cute text-xs font-bold border border-rose-300 shadow-2xs transition"
                >
                  ANOTHER KISS 💋
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => handleReaction('love')}
                  className="px-4 py-2 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-700 font-cute text-xs font-bold border border-purple-300 shadow-2xs transition"
                >
                  I LOVE YOU TOO 💗
                </motion.button>
              </div>

              {/* Dynamic message popup based on reaction */}
              <AnimatePresence>
                {activeReaction === 'kiss' && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="font-caveat text-xl text-rose-600 font-bold"
                  >
                    Mwaahhh! Unlimited kisses reserved only for you, babyyy! 💋✨
                  </motion.p>
                )}
                {activeReaction === 'love' && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="font-caveat text-xl text-pink-600 font-bold"
                  >
                    Awww, Ishika loves me too! You just made my entire day! 🥹💗
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Sweet Footer */}
          <div className="mt-8 pt-6 border-t border-pink-200/80 text-center space-y-1">
            <p className="font-hand text-pink-800 text-lg">
              End of the website, but never the end of my little love notes. 💌
            </p>
            <p className="font-script text-xl text-pink-500 font-bold">
              Made with ♡, just for my cutie pie Ishika. 🎀
            </p>

            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRestart}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-cute text-xs font-extrabold uppercase tracking-wider shadow-md shadow-pink-200 flex items-center gap-1.5 mx-auto transition"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>START AGAIN 💗</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="w-full max-w-2xl flex items-center justify-between gap-3 mt-6">
        <button
          onClick={onPrev}
          className="px-4 py-2.5 rounded-xl bg-white hover:bg-pink-50 text-pink-700 border border-pink-200 font-cute text-xs font-bold flex items-center gap-1 transition"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Chapter 6</span>
        </button>

        <span className="font-cute text-xs text-pink-400">
          Chapter 7 of 7 🎀
        </span>
      </div>
    </div>
  );
};
