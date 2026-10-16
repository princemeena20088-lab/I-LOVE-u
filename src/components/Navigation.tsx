import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, BookOpen, ChevronLeft, ChevronRight, Home, Sparkles, Heart, Music } from 'lucide-react';
import { songPlayer, playPopSound } from './AudioEffects';

interface NavigationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const chapterTitles = [
  'The Cutie Opening 🎀',
  'A Little Surprise 😭💗',
  'Our Little Story 🧸',
  'A Letter From My Heart 💌',
  'Pocket Notes & Cute Buttons 🧸',
  'Sealed for My Babyyy 💌',
  'Our Final Note & Hug 🫂💗',
];

export const Navigation: React.FC<NavigationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    return songPlayer.subscribe((playing) => {
      setIsPlayingMusic(playing);
    });
  }, []);

  const toggleMusic = () => {
    playPopSound();
    songPlayer.toggle();
  };

  const handleSelectPage = (page: number) => {
    playPopSound();
    onPageChange(page);
    setIsMenuOpen(false);
  };

  const progressPercent = ((currentPage) / totalPages) * 100;

  return (
    <>
      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 bg-[#FFF5F8]/90 backdrop-blur-md border-b border-pink-200/70 px-4 py-2.5 shadow-xs transition-all">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-2">
          {/* Left: Home / Chapter indicator */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleSelectPage(1)}
              title="Back to Beginning"
              className="p-1.5 rounded-full text-pink-600 hover:text-pink-700 hover:bg-pink-100 transition active:scale-95"
              aria-label="Home"
            >
              <Home className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-1.5 text-xs font-cute font-bold text-pink-700 bg-pink-100/80 hover:bg-pink-200/80 px-2.5 py-1 rounded-full border border-pink-300/60 transition active:scale-95 shadow-2xs"
            >
              <BookOpen className="w-3.5 h-3.5 text-pink-500" />
              <span>Chapter {currentPage} of {totalPages}</span>
              <span className="text-[10px] text-pink-400">▼</span>
            </button>
          </div>

          {/* Center: Title / Ribbon on desktop */}
          <div className="hidden sm:flex items-center gap-1 text-sm font-caveat text-pink-800 font-bold truncate max-w-[200px] md:max-w-xs">
            <span>{chapterTitles[currentPage - 1]}</span>
          </div>

          {/* Right: Music toggle + Next/Prev Mini controls */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={toggleMusic}
              className={`p-1.5 rounded-full transition active:scale-90 flex items-center gap-1.5 text-xs px-2.5 py-1 font-cute ${
                isPlayingMusic
                  ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-xs animate-pulse-gentle'
                  : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
              }`}
              title={isPlayingMusic ? 'Pause Our Song (Alfaaz)' : 'Play Our Song (Alfaaz)'}
              aria-label="Toggle song playback"
            >
              {isPlayingMusic ? <Music className="w-3.5 h-3.5 animate-spin" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span className="text-[11px] font-bold hidden xs:inline">
                {isPlayingMusic ? 'Our Song ♫' : 'Play Song ♫'}
              </span>
            </button>

            {/* Prev button */}
            <button
              disabled={currentPage <= 1}
              onClick={() => handleSelectPage(currentPage - 1)}
              className="p-1.5 rounded-full text-pink-600 hover:bg-pink-100 disabled:opacity-30 disabled:hover:bg-transparent transition active:scale-90"
              title="Previous Chapter"
              aria-label="Previous Chapter"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Next button */}
            <button
              disabled={currentPage >= totalPages}
              onClick={() => handleSelectPage(currentPage + 1)}
              className="p-1.5 rounded-full text-pink-600 hover:bg-pink-100 disabled:opacity-30 disabled:hover:bg-transparent transition active:scale-90"
              title="Next Chapter"
              aria-label="Next Chapter"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Delicate Progress Line */}
        <div className="max-w-3xl mx-auto mt-2 h-1 bg-pink-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-pink-300 via-rose-400 to-pink-500 transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </header>

      {/* Chapters Dropdown Modal / Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/30 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="bg-[#fffdfa] border-2 border-pink-300 rounded-3xl p-5 max-w-sm w-full shadow-2xl relative paper-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cute pin / washi tape */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-pink-200/90 rounded-xs shadow-xs rotate-1" />

            <div className="flex items-center justify-between pb-3 border-b border-pink-100">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-pink-500" />
                <h3 className="font-caveat text-xl font-bold text-pink-900">Chapters for Ishika 🎀</h3>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-pink-400 hover:text-pink-600 p-1 text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <div className="mt-3 space-y-1.5 max-h-[60vh] overflow-y-auto pr-1">
              {chapterTitles.map((title, idx) => {
                const pageNum = idx + 1;
                const isActive = pageNum === currentPage;
                return (
                  <button
                    key={pageNum}
                    onClick={() => handleSelectPage(pageNum)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl font-cute text-sm transition flex items-center justify-between ${
                      isActive
                        ? 'bg-pink-400 text-white font-bold shadow-xs'
                        : 'hover:bg-pink-50 text-pink-900 font-medium'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${isActive ? 'bg-white text-pink-600 font-bold' : 'bg-pink-100 text-pink-600'}`}>
                        {pageNum}
                      </span>
                      <span>{title}</span>
                    </span>
                    {isActive && <Heart className="w-4 h-4 fill-white" />}
                  </button>
                );
              })}
            </div>

            <p className="mt-4 text-center font-caveat text-pink-400 text-sm">
              Take your time and read every little surprise, babyyy 💗
            </p>
          </div>
        </div>
      )}
    </>
  );
};
