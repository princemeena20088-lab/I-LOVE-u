import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { CuteTeddy } from '../components/CuteTeddy';
import { WashiTape, fireHeartConfetti, StampBadge } from '../components/Decorations';
import { playPopSound, playKissSound, playEnvelopeSound } from '../components/AudioEffects';
import { LoveCounter } from '../components/LoveCounter';

interface Page3Props {
  onNext: () => void;
  onPrev: () => void;
}

export const Page3OurStory: React.FC<Page3Props> = ({ onNext, onPrev }) => {
  const [activeTab, setActiveTab] = useState<1 | 2 | 3>(1);
  const [revealedPromise, setRevealedPromise] = useState(false);
  const [hugSent, setHugSent] = useState(false);

  const switchTab = (tab: 1 | 2 | 3) => {
    playPopSound();
    setActiveTab(tab);
  };

  const handleRevealPromise = () => {
    playEnvelopeSound();
    fireHeartConfetti(0.5, 0.7);
    setRevealedPromise(!revealedPromise);
  };

  const handleSendWarmHug = () => {
    playKissSound();
    fireHeartConfetti(0.5, 0.5);
    setHugSent(true);
    setTimeout(() => setHugSent(false), 3000);
  };

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center py-6 px-4">
      {/* Top Header */}
      <div className="text-center mb-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 font-cute text-xs font-bold mb-2">
          <Sparkles className="w-3.5 h-3.5 text-pink-500" />
          <span>Chapter 3 of 7</span>
        </div>
        <h1 className="font-caveat text-4xl md:text-5xl font-bold text-pink-600">
          Our Little Story 🧸💗
        </h1>
        <p className="font-hand text-lg text-pink-800/80">
          Three little chapters written with so much love for Ishika
        </p>
      </div>

      {/* Live Love Time Counter */}
      <div className="w-full max-w-xl">
        <LoveCounter />
      </div>

      {/* Chapter Tabs */}
      <div className="w-full max-w-xl flex items-center justify-center gap-2 mb-4">
        {[
          { id: 1 as const, title: '1. Cutie Pie 🎀', icon: '🎀' },
          { id: 2 as const, title: '2. Mera Baccha 🧸', icon: '🧸' },
          { id: 3 as const, title: '3. Future Wife 💍', icon: '💍' },
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => switchTab(tab.id)}
              className={`flex-1 py-2 px-2 sm:px-4 rounded-2xl font-cute text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs ${
                isActive
                  ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-md shadow-pink-200 scale-102 border-2 border-white'
                  : 'bg-white/80 hover:bg-pink-100 text-pink-700 border border-pink-200'
              }`}
            >
              <span>{tab.icon}</span>
              <span className="hidden xs:inline">{tab.title}</span>
              <span className="xs:hidden">Part {tab.id}</span>
            </button>
          );
        })}
      </div>

      {/* Main Chapter Content Container */}
      <div className="w-full max-w-xl relative">
        <WashiTape
          color={activeTab === 1 ? 'pink' : activeTab === 2 ? 'yellow' : 'lavender'}
          className="absolute -top-4 left-8 z-10"
        />

        <AnimatePresence mode="wait">
          {activeTab === 1 && (
            <motion.div
              key="chapter-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="paper-card rounded-3xl p-6 md:p-8 border-2 border-pink-200 shadow-xl relative"
            >
              <div className="flex items-center justify-between mb-4">
                <StampBadge text="CHAPTER 1" icon="🎀" rotation="-2deg" />
                <span className="font-script text-pink-400 font-bold text-lg">My Favourite Person</span>
              </div>

              <div className="bg-[#fffcf7] rounded-2xl p-5 border border-pink-200/60 shadow-inner">
                <div className="font-caveat text-2xl md:text-3xl text-pink-950 leading-relaxed space-y-3">
                  <p className="text-pink-600 font-bold text-3xl">
                    Cutie pieee, 💗
                  </p>
                  <p className="font-hand text-xl md:text-2xl">
                    We started talking so normally... and honestly, I never thought things would become this special.
                  </p>
                  <p className="font-hand text-xl md:text-2xl text-pink-600 font-bold">
                    Thank you, Ishika. 🥹💕
                  </p>
                  <p className="font-hand text-xl md:text-2xl">
                    You became someone so important to me without me even realizing when it happened.
                  </p>
                  <p className="font-bold text-2xl md:text-3xl text-pink-700">
                    You are my favourite person. :)
                  </p>
                  <div className="my-2 py-1.5 px-3 bg-pink-100/70 rounded-xl text-center font-bold text-pink-600 text-2xl">
                    &gt;.&lt; I LOVE YOU SOOOO MUCHHHHH &gt;.&lt;
                  </div>
                  <p className="font-hand text-xl md:text-2xl">
                    Ab meri life ka sabse safe place aur person tu hi hai,{' '}
                    <span className="text-pink-600 font-bold bg-pink-100 px-1 rounded">mera baccha</span>.
                  </p>
                  <p className="font-hand text-xl md:text-2xl">
                    I love you more than I can properly explain.
                  </p>
                  <p className="font-script text-3xl text-rose-500 font-bold">
                    Mwaahhhhh! 💋
                  </p>
                  <p className="font-caveat text-3xl text-pink-600 font-extrabold flex items-center gap-2">
                    <span>My future wife...</span>
                    <span>🎀💍</span>
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between pt-4 border-t border-pink-100">
                  <CuteTeddy mood="heart" size={90} className="animate-float-slow" />
                  <button
                    onClick={() => switchTab(2)}
                    className="px-4 py-2 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-cute text-xs font-bold flex items-center gap-1 shadow-sm transition active:scale-95"
                  >
                    <span>Read Part 2</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 2 && (
            <motion.div
              key="chapter-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="paper-card rounded-3xl p-6 md:p-8 border-2 border-pink-200 shadow-xl relative"
            >
              <div className="flex items-center justify-between mb-4">
                <StampBadge text="CHAPTER 2" icon="🧸" rotation="1deg" />
                <span className="font-script text-pink-400 font-bold text-lg">My Everything</span>
              </div>

              <div className="bg-[#fffcf7] rounded-2xl p-5 border border-pink-200/60 shadow-inner">
                <div className="font-caveat text-2xl md:text-3xl text-pink-950 leading-relaxed space-y-3">
                  <p className="text-pink-600 font-bold text-3xl">
                    Ishikaaa, mera pyaara sa bacchaaa! 💗
                  </p>
                  <p className="font-hand text-xl md:text-2xl">
                    Tu meri jaan hai, <span className="text-pink-600 font-bold">my everything</span>.
                  </p>
                  <p className="font-hand text-xl md:text-2xl">
                    Tere liye kuch bhi karun, kam hi lagta hai. Mann karta hai bas teri care karta rahun, tujhe hamesha acche se rakhun, aur teri face pe woh cute si smile bani rahe.
                  </p>
                  <p className="font-hand text-xl md:text-2xl text-pink-800">
                    You deserve so much love, softness, happiness, and little reasons to smile every day.
                  </p>
                  <p className="font-hand text-xl md:text-2xl">
                    I just want you to feel loved, babyyy.
                  </p>
                  <div className="text-center py-2">
                    <p className="font-caveat text-2xl text-pink-700 font-bold">
                      I LOVE YOUUUU...
                    </p>
                    <p className="font-caveat text-4xl text-rose-500 font-extrabold tracking-wide animate-pulse-gentle">
                      BOHOT SAARAAAAA! 😭💗
                    </p>
                  </div>
                  <p className="font-script text-3xl text-rose-500 font-bold">
                    Mwaahhh! 🫶🏻💋
                  </p>
                </div>

                {/* Warm hug interactive sticker */}
                <div className="mt-5 p-4 rounded-2xl bg-pink-100/70 border border-pink-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <CuteTeddy mood="open_arms" size={75} />
                    <div>
                      <p className="font-cute font-bold text-sm text-pink-900">
                        Sending you a warm hug sticker!
                      </p>
                      <p className="font-caveat text-base text-pink-600">
                        {hugSent ? 'Hug wrapped tightly around you! 🫂💕' : 'Tap to receive a warm hug from babyyy'}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleSendWarmHug}
                    className="px-4 py-2 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-cute text-xs font-bold transition shadow-xs active:scale-95 flex items-center gap-1.5"
                  >
                    <span>{hugSent ? 'HUG DELIVERED! 🫂' : 'RECEIVE HUG 🫂'}</span>
                  </button>
                </div>

                <div className="mt-5 flex items-center justify-between pt-3 border-t border-pink-100">
                  <button
                    onClick={() => switchTab(1)}
                    className="px-3 py-1.5 rounded-xl bg-pink-100 text-pink-700 font-cute text-xs font-bold flex items-center gap-1"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Part 1</span>
                  </button>
                  <button
                    onClick={() => switchTab(3)}
                    className="px-4 py-2 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-cute text-xs font-bold flex items-center gap-1 shadow-sm transition active:scale-95"
                  >
                    <span>Read Part 3</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 3 && (
            <motion.div
              key="chapter-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="paper-card rounded-3xl p-6 md:p-8 border-2 border-pink-200 shadow-xl relative"
            >
              <div className="flex items-center justify-between mb-4">
                <StampBadge text="CHAPTER 3" icon="💍" rotation="-1deg" />
                <span className="font-script text-pink-500 font-bold text-lg">My Future Wife 🎀</span>
              </div>

              <div className="bg-[#fffcf7] rounded-2xl p-5 border border-pink-200/60 shadow-inner">
                <div className="font-caveat text-2xl md:text-3xl text-pink-950 leading-relaxed space-y-3">
                  <p className="text-pink-600 font-bold text-3xl">
                    Ishikaaa, sunn na, mera bacchaaa. 🎀💗
                  </p>
                  <p className="font-hand text-xl md:text-2xl text-pink-800 font-semibold">
                    Please don&apos;t overthink unnecessary things, okay?
                  </p>
                  <p className="font-hand text-xl md:text-2xl">
                    I want you to know that I&apos;m here for you, and I care about you so much. I choose you,{' '}
                    <span className="text-pink-600 font-bold bg-pink-100 px-1 rounded">meri jaan</span>. I don&apos;t need anyone else to make this feel special.
                  </p>
                  <p className="font-hand text-xl md:text-2xl">
                    You never have to compete with anyone for my attention or feel like you aren&apos;t enough. I trust you so much, and I want us to keep building something beautiful with honesty, love, and understanding.
                  </p>
                  <p className="font-hand text-xl md:text-2xl">
                    Tere liye main har mushkil mein tere saath khada rehna chahta hoon. We can talk through things, understand each other, and face problems together.
                  </p>
                  <p className="font-caveat text-2xl md:text-3xl text-pink-600 font-bold">
                    Tu meri jaan hai, babyyy. 🥹💕
                  </p>
                  <p className="font-hand text-xl md:text-2xl">
                    And someday, when we talk about our dreams and the future we want to build, I hope we remember how this little love story started.
                  </p>
                  <p className="font-caveat text-3xl text-pink-600 font-bold">
                    Meri future wifeee! 💍🎀
                  </p>
                  <p className="font-script text-3xl text-rose-500 font-bold">
                    Mwaahhhhh! 💋🧸
                  </p>
                  <p className="font-caveat text-3xl text-pink-600 font-extrabold">
                    I LOVE YOU, MY CUTIE PIE.
                  </p>
                </div>

                {/* Tiny Promise Envelope Reveal */}
                <div className="mt-6 pt-4 border-t border-pink-200">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleRevealPromise}
                    className="cursor-pointer bg-gradient-to-r from-pink-100 to-rose-100 hover:from-pink-200 hover:to-rose-200 p-4 rounded-2xl border-2 border-dashed border-pink-300 text-center transition"
                  >
                    <div className="flex items-center justify-center gap-2 font-caveat text-2xl font-bold text-pink-700">
                      <span>A tiny promise from me to you</span>
                      <span>💌</span>
                    </div>

                    <AnimatePresence>
                      {revealedPromise ? (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 pt-3 border-t border-pink-200 font-hand text-xl md:text-2xl text-pink-900 font-bold leading-relaxed"
                        >
                          &ldquo;I&apos;ll keep choosing kindness, honesty, and us. One little moment at a time. 💗&rdquo;
                        </motion.div>
                      ) : (
                        <p className="text-xs font-cute text-pink-500 mt-1">
                          (Tap to unseal this promise)
                        </p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Navigation for Page 3 */}
      <div className="w-full max-w-xl flex items-center justify-between gap-3 mt-6">
        <button
          onClick={onPrev}
          className="px-4 py-2.5 rounded-xl bg-white hover:bg-pink-50 text-pink-700 border border-pink-200 font-cute text-xs font-bold flex items-center gap-1 transition"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onNext}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-cute text-sm font-bold shadow-md shadow-pink-200 flex items-center gap-1.5 transition"
        >
          <span>READ CHAPTER 4</span>
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  );
};
