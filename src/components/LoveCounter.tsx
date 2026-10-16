import React, { useState, useEffect } from 'react';
import { Heart, Calendar, Edit3, Check } from 'lucide-react';
import { playPopSound } from './AudioEffects';

export const LoveCounter: React.FC = () => {
  // Official relationship start date: 13 October 2026
  const [startDateStr, setStartDateStr] = useState<string>(() => {
    const saved = localStorage.getItem('ishika_love_start_date');
    if (saved && saved.startsWith('2026-10-13')) return saved;
    return '2026-10-13T00:00:00';
  });
  const [isEditing, setIsEditing] = useState(false);
  const [tempDate, setTempDate] = useState('2026-10-13');

  const [timeTogether, setTimeTogether] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const start = new Date(startDateStr).getTime();
      const now = new Date().getTime();
      const difference = Math.max(0, now - start);

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeTogether({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [startDateStr]);

  const handleSaveDate = () => {
    const newDateStr = `${tempDate}T00:00:00`;
    setStartDateStr(newDateStr);
    localStorage.setItem('ishika_love_start_date', newDateStr);
    setIsEditing(false);
    playPopSound();
  };

  return (
    <div className="paper-card rounded-3xl p-5 border-2 border-pink-200/90 shadow-md relative overflow-hidden my-4 text-center">
      {/* Decorative Washi Tape */}
      <div className="w-20 h-4 bg-pink-200/70 rounded-xs absolute -top-2 left-1/2 -translate-x-1/2 -rotate-1 pointer-events-none shadow-2xs" />

      <div className="flex items-center justify-between mb-2">
        <span className="font-cute font-extrabold text-[11px] uppercase tracking-wider text-pink-700 bg-pink-100 px-2.5 py-0.5 rounded-full flex items-center gap-1">
          <Heart className="w-3 h-3 fill-pink-500 text-pink-500 animate-pulse" />
          <span>Our Love Journey</span>
        </span>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-pink-400 hover:text-pink-600 text-xs font-cute flex items-center gap-1 transition"
          title="Change our special date"
        >
          <Edit3 className="w-3 h-3" />
          <span>{isEditing ? 'Cancel' : 'Set Date'}</span>
        </button>
      </div>

      <h3 className="font-caveat text-2xl md:text-3xl font-extrabold text-pink-700 mb-1">
        Loving My Ishika For... ⏳💗
      </h3>

      {isEditing && (
        <div className="my-3 p-3 bg-pink-50 rounded-2xl border border-pink-200 flex flex-wrap items-center justify-center gap-2">
          <Calendar className="w-4 h-4 text-pink-500" />
          <span className="font-cute text-xs font-bold text-pink-800">Our Date:</span>
          <input
            type="date"
            value={tempDate}
            onChange={(e) => setTempDate(e.target.value)}
            className="px-2 py-1 bg-white border border-pink-300 rounded-lg text-xs font-cute text-pink-800"
          />
          <button
            onClick={handleSaveDate}
            className="px-3 py-1 bg-pink-500 hover:bg-pink-600 text-white font-cute text-xs font-bold rounded-lg flex items-center gap-1 shadow-2xs"
          >
            <Check className="w-3 h-3" />
            <span>Save</span>
          </button>
        </div>
      )}

      {/* Live Counter Units */}
      <div className="grid grid-cols-4 gap-2 my-3 max-w-sm mx-auto">
        <div className="bg-gradient-to-b from-pink-50 to-pink-100/80 rounded-2xl p-2.5 border border-pink-200 shadow-2xs">
          <span className="font-caveat text-2xl md:text-3xl font-bold text-pink-600 block leading-none">
            {timeTogether.days}
          </span>
          <span className="font-cute text-[10px] md:text-xs font-extrabold text-pink-800/80 uppercase">
            Days
          </span>
        </div>
        <div className="bg-gradient-to-b from-pink-50 to-pink-100/80 rounded-2xl p-2.5 border border-pink-200 shadow-2xs">
          <span className="font-caveat text-2xl md:text-3xl font-bold text-pink-600 block leading-none">
            {timeTogether.hours}
          </span>
          <span className="font-cute text-[10px] md:text-xs font-extrabold text-pink-800/80 uppercase">
            Hours
          </span>
        </div>
        <div className="bg-gradient-to-b from-pink-50 to-pink-100/80 rounded-2xl p-2.5 border border-pink-200 shadow-2xs">
          <span className="font-caveat text-2xl md:text-3xl font-bold text-pink-600 block leading-none">
            {timeTogether.minutes}
          </span>
          <span className="font-cute text-[10px] md:text-xs font-extrabold text-pink-800/80 uppercase">
            Mins
          </span>
        </div>
        <div className="bg-gradient-to-b from-rose-50 to-rose-100/80 rounded-2xl p-2.5 border border-rose-200 shadow-2xs">
          <span className="font-caveat text-2xl md:text-3xl font-bold text-rose-500 block leading-none animate-pulse">
            {timeTogether.seconds}
          </span>
          <span className="font-cute text-[10px] md:text-xs font-extrabold text-rose-700/80 uppercase">
            Secs
          </span>
        </div>
      </div>

      <p className="font-script text-base md:text-lg text-pink-600 font-bold">
        ...and falling for you more with every single heartbeat. ♡
      </p>
    </div>
  );
};
