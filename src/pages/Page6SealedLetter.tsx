import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, ChevronLeft, ChevronRight, Lock, Unlock } from 'lucide-react';
import { CuteTeddy } from '../components/CuteTeddy';
import { WashiTape, fireHeartConfetti, StampBadge } from '../components/Decorations';
import { playEnvelopeSound, playPopSound, playKissSound } from '../components/AudioEffects';
import { OpenWhenCards } from '../components/OpenWhenCards';

interface Page6Props {
  onNext: () => void;
  onPrev: () => void;
}

export const Page6SealedLetter: React.FC<Page6Props> = ({ onNext, onPrev }) => {
  const [isUnsealed, setIsUnsealed] = useState(false);
  const [reminded, setReminded] = useState(false);

  const handleUnseal = () => {
    playEnvelopeSound();
    fireHeartConfetti(0.5, 0.4);
    setIsUnsealed(true);
  };

  const handleRemindLoved = () => {
    playKissSound();
    fireHeartConfetti(0.5, 0.6);
    setReminded(true);
  };

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center py-6 px-4">
      {/* Top Banner */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 font-cute text-xs font-bold mb-2">
          <Sparkles className="w-3.5 h-3.5 text-pink-500" />
          <span>Chapter 6 of 7</span>
        </div>
        <h1 className="font-caveat text-4xl md:text-5xl font-bold text-pink-600">
          ♡ SEALED FOR MY BABYYY ♡
        </h1>
        <p className="font-cute text-xs md:text-sm font-bold tracking-wider uppercase text-pink-500 mt-1">
          OPEN WHEN YOU NEED A LITTLE LOVE 💗
        </p>
      </div>

      <div className="w-full max-w-2xl relative">
        <WashiTape color="lavender" className="absolute -top-4 left-8 z-20" rotate="-2deg" />
        <WashiTape color="pink" className="absolute -top-4 right-8 z-20" rotate="3deg" />

        <div className="paper-card rounded-3xl p-6 md:p-10 border-2 border-pink-200 shadow-2xl relative">
          {/* Header Tag & Handwritten note */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-pink-100">
            <div>
              <StampBadge text="COMFORT & REASSURANCE" icon="🧸" rotation="-1deg" />
              <h2 className="font-caveat text-3xl font-extrabold text-pink-700 mt-2">
                WHEN YOU FEEL INSECURE
              </h2>
            </div>
            <div className="bg-pink-50 px-3 py-1.5 rounded-2xl border border-pink-200 text-right">
              <p className="font-hand text-pink-600 text-sm md:text-base font-semibold">
                Open when your brain is being mean to you. 🧸
              </p>
            </div>
          </div>

          {!isUnsealed ? (
            /* Sealed Envelope Display */
            <div className="py-12 flex flex-col items-center justify-center text-center">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleUnseal}
                className="cursor-pointer relative"
              >
                <div className="w-72 h-48 bg-gradient-to-br from-pink-200 via-rose-200 to-pink-300 rounded-2xl border-2 border-pink-300 shadow-xl flex flex-col items-center justify-center relative overflow-hidden group">
                  <div
                    className="absolute top-0 left-0 right-0 h-24 bg-pink-300 border-b-2 border-pink-400 flex items-center justify-center"
                    style={{ clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)' }}
                  >
                    <div className="w-10 h-10 rounded-full bg-rose-500 shadow-lg border-2 border-white flex items-center justify-center text-white -mt-6">
                      <Heart className="w-5 h-5 fill-white animate-pulse" />
                    </div>
                  </div>

                  <div className="z-10 mt-12 text-center">
                    <p className="font-caveat text-2xl font-bold text-pink-900">
                      ♡ Sealed For Ishika ♡
                    </p>
                    <p className="font-cute text-xs text-pink-700 mt-0.5">
                      Touch the heart seal to open
                    </p>
                  </div>
                </div>
              </motion.div>

              <button
                onClick={handleUnseal}
                className="mt-6 px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-cute font-extrabold text-sm tracking-wide shadow-lg shadow-pink-200 flex items-center gap-2 transition active:scale-95"
              >
                <Unlock className="w-4 h-4" />
                <span>UNSEAL MY COMFORT LETTER 💌</span>
              </button>
            </div>
          ) : (
            /* Unsealed Full Letter */
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 font-hand text-xl md:text-2xl text-pink-950 leading-relaxed"
            >
              <div className="flex items-center gap-2 text-pink-600 font-caveat text-2xl md:text-3xl font-bold">
                <span>Hey, look at me for a second, pretty girl. 💗</span>
              </div>

              <p className="font-bold text-pink-800">
                You don&apos;t have to compare yourself with anyone, okay?
              </p>

              <p>
                I wish you could see some of the little things I notice about you every day. The way your kindness touches people, your sweet laugh, your heart, and all the little things that make you YOU.
              </p>

              <p>
                Tu mere liye duniya ki sabse pyaari aur special ladki hai,{' '}
                <span className="font-bold text-pink-600 bg-pink-100/80 px-1.5 rounded-md">meri jaan</span>. 🥹💕
              </p>

              <p>
                Mujhe tere alawa kisi aur ko dhoondhne ki zaroorat nahi hai. I&apos;m happy that I get to know you, care about you, laugh with you, and share these little moments with you.
              </p>

              <p className="text-pink-800">
                Please don&apos;t be so hard on yourself, babyyy. You don&apos;t have to look a certain way, act a certain way, or prove anything to anyone to deserve love and kindness.
              </p>

              <p>
                You are allowed to have bad days. You&apos;re allowed to feel unsure sometimes. But please remember that one difficult day or one insecure thought doesn&apos;t define you.
              </p>

              <p className="font-bold text-pink-700">
                I wish you could see yourself through the kindness you show other people.
              </p>

              <div className="py-2 text-center bg-pink-100/70 rounded-2xl border border-pink-200 my-2">
                <p className="font-caveat text-3xl md:text-4xl text-pink-600 font-extrabold tracking-wide">
                  YOU ARE MY LOVE, BABY. 🎀💗
                </p>
              </div>

              <p>
                And whenever your mind starts telling you unkind things about yourself, please take a breath and remember that you deserve the same love and patience that you give to others.
              </p>

              <p>
                I&apos;m here to listen, reassure you, and remind you of the good things I see in you. You never have to pretend that everything is okay with me.
              </p>

              <p className="font-bold text-pink-700 text-2xl md:text-3xl font-caveat">
                You&apos;re my cutie pie, and I love you for who you are.
              </p>

              <p className="font-script text-3xl text-rose-500 font-bold">
                Mwaahhhhh! 💋🫂
              </p>

              <p className="font-script text-2xl text-pink-600 font-bold text-right pt-2">
                Forever your silly little admirer. ♡
              </p>

              {/* Heart-Shaped Reassurance Button */}
              <div className="pt-6 border-t border-pink-200 text-center flex flex-col items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleRemindLoved}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white font-cute font-extrabold text-sm shadow-md shadow-pink-300 flex items-center gap-2 active:scale-95 transition"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>REMIND ME I&apos;M LOVED 💗</span>
                </motion.button>

                <AnimatePresence>
                  {reminded && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-pink-100 via-rose-100 to-pink-100 border-2 border-pink-300 text-center shadow-sm"
                    >
                      <p className="font-caveat text-2xl md:text-3xl text-pink-700 font-extrabold tracking-wide">
                        YOU ARE LOVED, ISHIKA. YOU ARE ENOUGH. TAKE A DEEP BREATH, BABYYY. 🫂🎀
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Teddy in the bottom */}
              <div className="flex justify-center pt-2">
                <CuteTeddy mood="heart" size={80} className="animate-float-slow" />
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Emergency Love Kit: Open When Cards */}
      <div className="w-full max-w-2xl">
        <OpenWhenCards />
      </div>

      {/* Navigation Buttons */}
      <div className="w-full max-w-2xl flex items-center justify-between gap-3 mt-6">
        <button
          onClick={onPrev}
          className="px-4 py-2.5 rounded-xl bg-white hover:bg-pink-50 text-pink-700 border border-pink-200 font-cute text-xs font-bold flex items-center gap-1 transition"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Chapter 5</span>
        </button>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onNext}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-cute text-sm font-bold shadow-md shadow-pink-200 flex items-center gap-1.5 transition"
        >
          <span>OUR FINAL NOTE & HUG</span>
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  );
};
