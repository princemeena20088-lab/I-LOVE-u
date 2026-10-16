import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, ChevronLeft, ChevronRight, Phone, Droplets } from 'lucide-react';
import { CuteTeddy } from '../components/CuteTeddy';
import { WashiTape, fireHeartConfetti, StampBadge } from '../components/Decorations';
import { playPopSound, playKissSound, playEnvelopeSound } from '../components/AudioEffects';
import { LoveReasonsJar } from '../components/LoveReasonsJar';

interface Page5Props {
  onNext: () => void;
  onPrev: () => void;
}

export const Page5PocketNotes: React.FC<Page5Props> = ({ onNext, onPrev }) => {
  // Section A states
  const [affectionModal, setAffectionModal] = useState<'hug' | 'kiss' | 'bite' | null>(null);
  const [affectionCounts, setAffectionCounts] = useState({ hug: 0, kiss: 0, bite: 0 });

  // Section B Pocket Notes states
  const [openNotes, setOpenNotes] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
  });

  // Section C Tiny Kiss state
  const [foreheadKissDelivered, setForeheadKissDelivered] = useState(false);

  // Section D Hydration state
  const [waterDrunk, setWaterDrunk] = useState(false);

  // Handlers
  const triggerAffection = (type: 'hug' | 'kiss' | 'bite') => {
    playKissSound();
    fireHeartConfetti(0.5, 0.4);
    setAffectionCounts((prev) => ({ ...prev, [type]: prev[type] + 1 }));
    setAffectionModal(type);
  };

  const toggleNote = (id: number) => {
    playEnvelopeSound();
    setOpenNotes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleForeheadKiss = () => {
    playKissSound();
    fireHeartConfetti(0.5, 0.6);
    setForeheadKissDelivered(true);
  };

  const handleDrinkWater = () => {
    playPopSound();
    fireHeartConfetti(0.5, 0.7);
    setWaterDrunk(true);
  };

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center py-6 px-4">
      {/* Top Banner */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 font-cute text-xs font-bold mb-2">
          <Sparkles className="w-3.5 h-3.5 text-pink-500" />
          <span>Chapter 5 of 7</span>
        </div>
        <h1 className="font-caveat text-4xl md:text-5xl font-bold text-pink-600">
          Pocket Notes & Cute Surprises 💌🧸
        </h1>
        <p className="font-hand text-lg text-pink-800">
          A little stationery desk filled with affection buttons, secrets & silly reminders
        </p>
      </div>

      <div className="w-full max-w-2xl space-y-8">
        {/* ======================================================== */}
        {/* SECTION A — LITTLE AFFECTION BUTTONS                     */}
        {/* ======================================================== */}
        <div className="paper-card rounded-3xl p-6 border-2 border-pink-200 shadow-lg relative">
          <WashiTape color="pink" className="absolute -top-3 left-6" rotate="-3deg" />
          <div className="flex items-center justify-between mb-3">
            <span className="font-cute font-extrabold text-xs uppercase tracking-wider text-pink-700 bg-pink-100 px-2.5 py-1 rounded-full">
              Section A 🎀
            </span>
            <span className="font-script text-pink-400 font-bold text-base">Affection Buttons</span>
          </div>

          <p className="font-caveat text-2xl text-pink-900 font-bold mb-4 text-center">
            Tap whenever you need instant love from me! 💗
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Button 1: HUG ME */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => triggerAffection('hug')}
              className="p-4 rounded-2xl bg-gradient-to-br from-pink-100 to-rose-200 hover:from-pink-200 hover:to-rose-300 border-2 border-pink-300 text-pink-800 font-cute font-extrabold text-sm shadow-xs flex flex-col items-center justify-center gap-1.5 transition"
            >
              <span className="text-2xl">🫂</span>
              <span>HUG ME 🫂</span>
              <span className="text-[11px] text-pink-600 font-semibold bg-white/70 px-2 py-0.5 rounded-full">
                {affectionCounts.hug} hugs
              </span>
            </motion.button>

            {/* Button 2: KISS ME */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => triggerAffection('kiss')}
              className="p-4 rounded-2xl bg-gradient-to-br from-rose-100 to-pink-200 hover:from-rose-200 hover:to-pink-300 border-2 border-pink-300 text-rose-800 font-cute font-extrabold text-sm shadow-xs flex flex-col items-center justify-center gap-1.5 transition"
            >
              <span className="text-2xl">💋</span>
              <span>KISS ME 💋</span>
              <span className="text-[11px] text-rose-600 font-semibold bg-white/70 px-2 py-0.5 rounded-full">
                {affectionCounts.kiss} kisses
              </span>
            </motion.button>

            {/* Button 3: LOVE BITE? */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => triggerAffection('bite')}
              className="p-4 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-200 hover:from-purple-200 hover:to-pink-300 border-2 border-pink-300 text-purple-900 font-cute font-extrabold text-sm shadow-xs flex flex-col items-center justify-center gap-1.5 transition"
            >
              <span className="text-2xl">🧸</span>
              <span>LOVE BITE? 🧸💗</span>
              <span className="text-[11px] text-purple-600 font-semibold bg-white/70 px-2 py-0.5 rounded-full">
                {affectionCounts.bite} playful bites
              </span>
            </motion.button>
          </div>

          {/* Affection Animation Popover / Feedback */}
          <AnimatePresence>
            {affectionModal && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 p-4 rounded-2xl bg-white border-2 border-pink-300 shadow-md text-center flex flex-col items-center relative"
              >
                <button
                  onClick={() => setAffectionModal(null)}
                  className="absolute top-2 right-3 text-pink-400 hover:text-pink-600 text-sm font-bold"
                >
                  ✕
                </button>

                {affectionModal === 'hug' && (
                  <>
                    <CuteTeddy mood="open_arms" size={90} className="animate-float-slow" />
                    <p className="font-caveat text-2xl text-pink-700 font-bold mt-1">
                      *Teddy opens arms and holds Ishika tight!* 🫂💕
                    </p>
                    <p className="font-hand text-pink-900 text-lg">
                      Mera pyaara sa baccha, here is a big, warm hug just for you!
                    </p>
                  </>
                )}

                {affectionModal === 'kiss' && (
                  <>
                    <div className="text-5xl animate-bounce my-1">💋✨</div>
                    <p className="font-script text-3xl text-rose-500 font-bold">
                      Mwaahhh! 💋💋💋
                    </p>
                    <p className="font-hand text-pink-900 text-lg">
                      100 sweet kisses delivered straight to your cheeks, meri jaan!
                    </p>
                  </>
                )}

                {affectionModal === 'bite' && (
                  <>
                    <CuteTeddy mood="blushing" size={90} className="animate-float-slow" />
                    <p className="font-caveat text-2xl text-purple-700 font-bold mt-1">
                      Hehe, you little troublemaker! 😭💗
                    </p>
                    <p className="font-hand text-pink-900 text-lg">
                      *Gently pinching your cheeks instead* You are way too cute to handle!
                    </p>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ======================================================== */}
        {/* SECTION B — POCKET NOTES JAR                              */}
        {/* ======================================================== */}
        <div className="paper-card rounded-3xl p-6 border-2 border-pink-200 shadow-lg relative">
          <WashiTape color="lavender" className="absolute -top-3 right-6" rotate="2deg" />

          <div className="text-center mb-5">
            <span className="font-cute font-extrabold text-xs uppercase tracking-wider text-pink-700 bg-pink-100 px-2.5 py-1 rounded-full">
              Section B 💌
            </span>
            <h2 className="font-caveat text-3xl md:text-4xl font-bold text-pink-600 mt-2">
              PULL A NOTE FROM MY POCKET 🎀
            </h2>
            <p className="font-hand text-lg text-pink-800">
              Three little notes, just for you, babyyy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Note 1 */}
            <div className="flex flex-col">
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => toggleNote(1)}
                className={`p-4 rounded-2xl border-2 cursor-pointer transition-all min-h-[170px] flex flex-col justify-between ${
                  openNotes[1]
                    ? 'bg-[#fff5f7] border-pink-400 shadow-md'
                    : 'bg-pink-100/80 border-dashed border-pink-300 hover:bg-pink-100 shadow-xs text-center items-center justify-center'
                }`}
              >
                {openNotes[1] ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-cute font-bold text-pink-500">Note 1 💌</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleNote(1);
                        }}
                        className="text-pink-400 hover:text-pink-600 text-xs font-bold"
                      >
                        ✕ Close
                      </button>
                    </div>
                    <p className="font-caveat text-xl text-pink-600 font-bold">
                      I LOVE YOU, BACCHAAA! 😭💗
                    </p>
                    <p className="font-hand text-base text-pink-900 leading-snug">
                      A little reminder that you&apos;re so special to me.
                    </p>
                    <p className="font-script text-xl text-rose-500 font-bold">
                      Mwaahhhh! 💋
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-1.5 py-2">
                    <span className="text-3xl animate-bounce">💌</span>
                    <span className="font-caveat text-xl font-bold text-pink-700">TAP TAP 💌</span>
                    <span className="font-cute text-xs text-pink-600">Open your tiny surprise!</span>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Note 2 */}
            <div className="flex flex-col">
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => toggleNote(2)}
                className={`p-4 rounded-2xl border-2 cursor-pointer transition-all min-h-[170px] flex flex-col justify-between ${
                  openNotes[2]
                    ? 'bg-[#fff5f7] border-pink-400 shadow-md'
                    : 'bg-pink-100/80 border-dashed border-pink-300 hover:bg-pink-100 shadow-xs text-center items-center justify-center'
                }`}
              >
                {openNotes[2] ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-cute font-bold text-pink-500">Note 2 🫂</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleNote(2);
                        }}
                        className="text-pink-400 hover:text-pink-600 text-xs font-bold"
                      >
                        ✕ Close
                      </button>
                    </div>
                    <p className="font-caveat text-lg text-pink-700 font-bold">
                      Akela lage toh main hoon na, babyyy. 🫂💕
                    </p>
                    <p className="font-hand text-sm text-pink-900 leading-snug">
                      Kabhi sad feel ho ya bas kisi se baat karne ka mann kare, call kar dena. You don&apos;t have to keep everything to yourself.
                    </p>
                    <p className="font-caveat text-base text-pink-600 font-bold">
                      Main yahin hoon, mera baccha. 💗
                    </p>
                    <a
                      href="tel:9057780565"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-pink-500 text-white font-cute text-[11px] font-bold shadow-2xs hover:bg-pink-600"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Call My Boy 📞</span>
                    </a>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-1.5 py-2">
                    <span className="text-3xl animate-bounce">💌</span>
                    <span className="font-caveat text-xl font-bold text-pink-700">TAP TAP 💌</span>
                    <span className="font-cute text-xs text-pink-600">Open your tiny surprise!</span>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Note 3 */}
            <div className="flex flex-col">
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => toggleNote(3)}
                className={`p-4 rounded-2xl border-2 cursor-pointer transition-all min-h-[170px] flex flex-col justify-between ${
                  openNotes[3]
                    ? 'bg-[#fff5f7] border-pink-400 shadow-md'
                    : 'bg-pink-100/80 border-dashed border-pink-300 hover:bg-pink-100 shadow-xs text-center items-center justify-center'
                }`}
              >
                {openNotes[3] ? (
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-cute font-bold text-pink-500">Note 3 🎀💀</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleNote(3);
                        }}
                        className="text-pink-400 hover:text-pink-600 text-xs font-bold"
                      >
                        ✕ Close
                      </button>
                    </div>
                    <p className="font-caveat text-base text-pink-700 font-bold">
                      Ab tu meri girlfriend hai toh tera mujh par poora haq hai, cutie pieee! 😭🎀
                    </p>
                    <p className="font-hand text-xs text-pink-900">
                      Apni baat jataya kar, jo feel hota hai woh bataya kar. I&apos;ll listen, and I&apos;ll do my best to understand you.
                    </p>
                    <p className="font-cute text-xs text-rose-600 font-bold bg-pink-100/80 p-1 rounded">
                      Bas ek request hai, babyyy... Mere hair ko chhod de pleaseeee 😭💀 Unke peeche mat pada kar, meri jaan! HAHAHAHA.
                    </p>
                    <p className="font-caveat text-base text-pink-600 font-bold">
                      I LOVE YOUUU! 🧸💕
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-1.5 py-2">
                    <span className="text-3xl animate-bounce">💌</span>
                    <span className="font-caveat text-xl font-bold text-pink-700">TAP TAP 💌</span>
                    <span className="font-cute text-xs text-pink-600">Open your tiny surprise!</span>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>

        {/* 50 Reasons Why I Love Ishika Jar */}
        <LoveReasonsJar />

        {/* ======================================================== */}
        {/* SECTION C & D — ONE TINY KISS & HYDRATION REMINDER        */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Section C — One Tiny Kiss */}
          <div className="paper-card rounded-3xl p-5 border-2 border-pink-200 shadow-md relative flex flex-col justify-between">
            <div>
              <span className="font-cute font-extrabold text-[11px] uppercase tracking-wider text-pink-700 bg-pink-100 px-2.5 py-0.5 rounded-full">
                Section C 💋
              </span>
              <h3 className="font-caveat text-2xl font-bold text-pink-600 mt-2">
                One Tiny Kiss 💋
              </h3>
              <p className="font-hand text-lg text-pink-900 mt-1">
                Mwaahhh! One tiny kiss right on your forehead. 💋🎀
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-pink-100 flex flex-col items-center">
              {foreheadKissDelivered ? (
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="font-caveat text-lg text-rose-600 font-bold text-center"
                >
                  Forehead kiss successfully delivered to my cutie pie! 💗✨
                </motion.div>
              ) : (
                <button
                  onClick={handleForeheadKiss}
                  className="w-full py-2.5 px-4 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-cute text-xs font-bold shadow-xs active:scale-95 transition"
                >
                  RECEIVE FOREHEAD KISS 💋
                </button>
              )}
            </div>
          </div>

          {/* Section D — Paani Pi Le, Sukki Haddi */}
          <div className="paper-card rounded-3xl p-5 border-2 border-pink-200 shadow-md relative flex flex-col justify-between">
            <div>
              <span className="font-cute font-extrabold text-[11px] uppercase tracking-wider text-sky-700 bg-sky-100 px-2.5 py-0.5 rounded-full">
                Section D 💧
              </span>
              <div className="flex items-center gap-2 mt-2">
                <CuteTeddy mood="water" size={55} />
                <h3 className="font-caveat text-2xl font-bold text-pink-700 leading-tight">
                  PAANI PI LE, SUKKI HADIIII! 😭💧
                </h3>
              </div>
              <div className="font-hand text-base text-pink-900 mt-2 space-y-1">
                <p className="font-bold text-pink-600">FASSS FASSSSS, BABYYYY!</p>
                <p>Go drink some water, meri jaan. No excuses, cutie pie! 🧸💗</p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-pink-100 flex flex-col items-center">
              {waterDrunk ? (
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="font-caveat text-xl text-pink-600 font-extrabold text-center flex items-center gap-2"
                >
                  <Droplets className="w-5 h-5 text-sky-500 fill-sky-300" />
                  <span>GOOD GIRLLLL! 🎀💗</span>
                </motion.div>
              ) : (
                <button
                  onClick={handleDrinkWater}
                  className="w-full py-2.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-cute text-xs font-bold shadow-xs active:scale-95 transition flex items-center justify-center gap-1.5"
                >
                  <Droplets className="w-4 h-4" />
                  <span>OKAYYY, I&apos;LL DRINK WATER 💧</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="w-full max-w-2xl flex items-center justify-between gap-3 mt-8">
        <button
          onClick={onPrev}
          className="px-4 py-2.5 rounded-xl bg-white hover:bg-pink-50 text-pink-700 border border-pink-200 font-cute text-xs font-bold flex items-center gap-1 transition"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Chapter 4</span>
        </button>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onNext}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-cute text-sm font-bold shadow-md shadow-pink-200 flex items-center gap-1.5 transition"
        >
          <span>SEALED FOR MY BABYYY</span>
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  );
};
