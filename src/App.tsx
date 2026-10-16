import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { FloatingBackgroundHearts } from './components/Decorations';
import { FloatingMusicPlayer } from './components/FloatingMusicPlayer';
import { Page1CutieOpening } from './pages/Page1CutieOpening';
import { Page2CutiePieOpened } from './pages/Page2CutiePieOpened';
import { Page3OurStory } from './pages/Page3OurStory';
import { Page4CutieLetter } from './pages/Page4CutieLetter';
import { Page5PocketNotes } from './pages/Page5PocketNotes';
import { Page6SealedLetter } from './pages/Page6SealedLetter';
import { Page7FinalNote } from './pages/Page7FinalNote';

export default function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 7;

  // Scroll to top smoothly on page transition
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === 'ArrowRight' && currentPage < totalPages) {
        setCurrentPage((p) => p + 1);
      } else if (e.key === 'ArrowLeft' && currentPage > 1) {
        setCurrentPage((p) => p - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, totalPages]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF5F8] text-[#5c3a4d] flex flex-col relative font-cute selection:bg-pink-200 selection:text-pink-900">
      {/* Background Floating Hearts */}
      <FloatingBackgroundHearts />

      {/* Main Navigation Header */}
      <Navigation
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {/* Main Chapter Content Container */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-3 sm:px-6 relative z-10 py-4">
        {currentPage === 1 && (
          <Page1CutieOpening onNext={() => setCurrentPage(2)} />
        )}
        {currentPage === 2 && (
          <Page2CutiePieOpened
            onNext={() => setCurrentPage(3)}
            onPrev={() => setCurrentPage(1)}
          />
        )}
        {currentPage === 3 && (
          <Page3OurStory
            onNext={() => setCurrentPage(4)}
            onPrev={() => setCurrentPage(2)}
          />
        )}
        {currentPage === 4 && (
          <Page4CutieLetter
            onNext={() => setCurrentPage(5)}
            onPrev={() => setCurrentPage(3)}
          />
        )}
        {currentPage === 5 && (
          <Page5PocketNotes
            onNext={() => setCurrentPage(6)}
            onPrev={() => setCurrentPage(4)}
          />
        )}
        {currentPage === 6 && (
          <Page6SealedLetter
            onNext={() => setCurrentPage(7)}
            onPrev={() => setCurrentPage(5)}
          />
        )}
        {currentPage === 7 && (
          <Page7FinalNote
            onRestart={() => setCurrentPage(1)}
            onPrev={() => setCurrentPage(6)}
          />
        )}
      </main>

      {/* Floating Music Player */}
      <FloatingMusicPlayer />

      {/* Subtle Bottom Watermark */}
      <footer className="relative z-10 py-4 text-center text-xs font-cute text-pink-400/80">
        <p>Made with all my heart for Ishika ♡ • 2026</p>
      </footer>
    </div>
  );
}
