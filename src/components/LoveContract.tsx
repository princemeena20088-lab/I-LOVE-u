import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scroll, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { playKissSound } from './AudioEffects';
import { fireBigLoveCelebration } from './Decorations';

export const LoveContract: React.FC = () => {
  const [isSigned, setIsSigned] = useState(() => {
    return localStorage.getItem('ishika_contract_signed') === 'true';
  });

  const handleSignContract = () => {
    playKissSound();
    fireBigLoveCelebration();
    setIsSigned(true);
    localStorage.setItem('ishika_contract_signed', 'true');
  };

  return (
    <div className="paper-card rounded-3xl p-6 md:p-8 border-2 border-pink-300 shadow-xl relative my-6 text-left overflow-hidden">
      {/* Top Ribbon */}
      <div className="flex items-center justify-between pb-3 border-b border-pink-200">
        <div className="flex items-center gap-2">
          <Scroll className="w-5 h-5 text-pink-600" />
          <span className="font-cute font-extrabold text-xs uppercase tracking-wider text-pink-700 bg-pink-100 px-3 py-1 rounded-full">
            OFFICIAL LOVE AGREEMENT 📜
          </span>
        </div>
        <span className="font-script text-pink-500 font-bold text-lg">Lifetime Validity</span>
      </div>

      <div className="my-4 text-center">
        <h3 className="font-caveat text-3xl md:text-4xl font-extrabold text-pink-600">
          The Cutie Love Contract 🎀
        </h3>
        <p className="font-hand text-pink-800 text-lg">
          Between: <strong>Boyfriend</strong> & <strong>Ishika (Mera Baccha)</strong>
        </p>
      </div>

      {/* Contract Clauses */}
      <div className="bg-[#fff9fa] rounded-2xl p-4 md:p-6 border border-pink-200 font-hand text-xl md:text-2xl text-pink-950 space-y-4 leading-relaxed">
        <div className="flex items-center gap-3 p-3 bg-pink-50/80 rounded-2xl border border-pink-200 shadow-2xs">
          <span className="text-2xl flex-shrink-0">🫂</span>
          <div>
            <span className="font-cute text-xs uppercase font-extrabold text-pink-600 block">
              Contract 1 • Vaada 1
            </span>
            <p className="font-bold text-pink-900 text-xl md:text-2xl">
              Main hamesha tere saath rahunga. 🫂💗
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-rose-50/80 rounded-2xl border border-rose-200 shadow-2xs">
          <span className="text-2xl flex-shrink-0">💍</span>
          <div>
            <span className="font-cute text-xs uppercase font-extrabold text-rose-600 block">
              Contract 2 • Vaada 2
            </span>
            <p className="font-bold text-rose-900 text-xl md:text-2xl">
              Terse hi shaadi karunga. 💍🎀
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl border border-pink-300 shadow-2xs">
          <span className="text-2xl flex-shrink-0">👑</span>
          <div>
            <span className="font-cute text-xs uppercase font-extrabold text-pink-700 block">
              Contract 3 • Vaada 3
            </span>
            <p className="font-extrabold text-pink-600 text-2xl md:text-3xl font-caveat">
              Tu meri aaj se wifeee hai! 👑♡
            </p>
          </div>
        </div>
      </div>

      {/* Signature Section */}
      <div className="mt-6 pt-4 border-t border-pink-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-cute text-xs text-pink-600 font-bold uppercase tracking-wider">
            Party A Signature:
          </p>
          <p className="font-script text-2xl text-pink-700 font-bold">
            Forever Your Silly Boy ♡
          </p>
        </div>

        <div className="text-center sm:text-right">
          <p className="font-cute text-xs text-pink-600 font-bold uppercase tracking-wider mb-1">
            Party B Signature:
          </p>

          <AnimatePresence mode="wait">
            {isSigned ? (
              <motion.div
                initial={{ scale: 0.5, rotate: -10 }}
                animate={{ scale: 1, rotate: -2 }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-rose-50 border-2 border-rose-400 text-rose-600 shadow-sm"
              >
                <ShieldCheck className="w-5 h-5 text-rose-500" />
                <span className="font-caveat text-xl font-bold">
                  SEALED BY ISHIKA 🐾🎀
                </span>
              </motion.div>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSignContract}
                className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-cute text-xs font-bold shadow-md shadow-pink-200 flex items-center gap-2 active:scale-95 transition"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>TAP TO STAMP FINGERPRINT 🐾</span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
