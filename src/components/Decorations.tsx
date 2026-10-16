import React from 'react';
import confetti from 'canvas-confetti';

export function fireHeartConfetti(x = 0.5, y = 0.5) {
  confetti({
    particleCount: 35,
    spread: 60,
    origin: { x, y },
    colors: ['#ff6584', '#ff8da1', '#ffb6c1', '#fbcfe8', '#fda4af', '#f43f5e'],
    shapes: ['circle'],
    ticks: 200,
    gravity: 0.8,
    scalar: 1.2,
  });
}

export function fireBigLoveCelebration() {
  const duration = 2.5 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#ff4081', '#ff80ab', '#f48fb1', '#f06292', '#ec407a'],
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#ff4081', '#ff80ab', '#f48fb1', '#f06292', '#ec407a'],
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

export const WashiTape: React.FC<{
  color?: 'pink' | 'lavender' | 'yellow' | 'mint';
  className?: string;
  rotate?: string;
}> = ({ color = 'pink', className = '', rotate = '-2deg' }) => {
  const colorMap = {
    pink: 'bg-[#ffb6c1]/80 border-b border-[#f472b6]/40',
    lavender: 'bg-[#e9d5ff]/80 border-b border-[#c084fc]/40',
    yellow: 'bg-[#fef08a]/80 border-b border-[#facc15]/40',
    mint: 'bg-[#bbf7d0]/80 border-b border-[#4ade80]/40',
  };

  return (
    <div
      className={`h-5 w-24 rounded-xs shadow-xs backdrop-blur-xs pointer-events-none select-none ${colorMap[color]} ${className}`}
      style={{
        transform: `rotate(${rotate})`,
        maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
    />
  );
};

export const FloatingBackgroundHearts: React.FC = () => {
  const hearts = [
    { left: '8%', delay: '0s', duration: '14s', size: 'text-xl', opacity: 'opacity-30' },
    { left: '22%', delay: '4s', duration: '18s', size: 'text-2xl', opacity: 'opacity-40' },
    { left: '38%', delay: '2s', duration: '15s', size: 'text-base', opacity: 'opacity-25' },
    { left: '62%', delay: '6s', duration: '17s', size: 'text-2xl', opacity: 'opacity-35' },
    { left: '78%', delay: '1s', duration: '13s', size: 'text-xl', opacity: 'opacity-40' },
    { left: '92%', delay: '5s', duration: '19s', size: 'text-lg', opacity: 'opacity-30' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {hearts.map((h, i) => (
        <span
          key={i}
          className={`fixed bottom-[-40px] text-pink-400 ${h.size} ${h.opacity}`}
          style={{
            left: h.left,
            animation: `floatUp ${h.duration} linear infinite`,
            animationDelay: h.delay,
          }}
        >
          {i % 2 === 0 ? '💗' : '🌸'}
        </span>
      ))}
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.45;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-110vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export const StampBadge: React.FC<{ text: string; icon?: string; rotation?: string }> = ({
  text,
  icon = '💌',
  rotation = '-3deg',
}) => {
  return (
    <div
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border-2 border-dashed border-pink-400 bg-pink-50 text-pink-700 font-cute text-xs font-bold uppercase tracking-wider shadow-xs select-none"
      style={{ transform: `rotate(${rotation})` }}
    >
      <span>{icon}</span>
      <span>{text}</span>
    </div>
  );
};
