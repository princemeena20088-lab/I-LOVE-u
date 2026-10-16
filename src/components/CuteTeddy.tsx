import React from 'react';

interface TeddyProps {
  mood?: 'heart' | 'open_arms' | 'blushing' | 'hugging' | 'water' | 'peeking' | 'waving';
  className?: string;
  size?: number;
}

export const CuteTeddy: React.FC<TeddyProps> = ({ mood = 'heart', className = '', size = 120 }) => {
  if (mood === 'hugging') {
    return (
      <svg
        width={size * 1.3}
        height={size}
        viewBox="0 0 160 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block drop-shadow-md select-none ${className}`}
      >
        {/* Left Teddy (Boy) */}
        <ellipse cx="60" cy="85" rx="32" ry="28" fill="#d49b6a" stroke="#87532d" strokeWidth="2.5" />
        <ellipse cx="60" cy="88" rx="20" ry="18" fill="#fce5cd" />
        {/* Left Teddy Ears */}
        <circle cx="34" cy="42" r="14" fill="#d49b6a" stroke="#87532d" strokeWidth="2.5" />
        <circle cx="34" cy="42" r="7" fill="#f4b2b0" />
        <circle cx="78" cy="40" r="13" fill="#d49b6a" stroke="#87532d" strokeWidth="2.5" />
        <circle cx="78" cy="40" r="6" fill="#f4b2b0" />
        {/* Left Teddy Head */}
        <circle cx="56" cy="56" r="28" fill="#d49b6a" stroke="#87532d" strokeWidth="2.5" />
        <ellipse cx="56" cy="62" rx="14" ry="10" fill="#fce5cd" />
        <ellipse cx="56" cy="58" rx="4.5" ry="3" fill="#4a2e1b" />
        <path d="M56 61v4m-3.5 1c1 1.5 2.5 1.5 3.5 0 1 1.5 2.5 1.5 3.5 0" stroke="#4a2e1b" strokeWidth="2" strokeLinecap="round" />
        {/* Happy closed eyes */}
        <path d="M44 52c2-3 6-3 8 0" stroke="#4a2e1b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M60 52c2-3 6-3 8 0" stroke="#4a2e1b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Blushing cheeks */}
        <ellipse cx="43" cy="59" rx="5" ry="3.5" fill="#ff7690" opacity="0.75" />
        <ellipse cx="69" cy="59" rx="5" ry="3.5" fill="#ff7690" opacity="0.75" />

        {/* Right Teddy (Girl with Bow) */}
        <ellipse cx="100" cy="85" rx="32" ry="28" fill="#e8b98b" stroke="#87532d" strokeWidth="2.5" />
        <ellipse cx="100" cy="88" rx="20" ry="18" fill="#fff1df" />
        {/* Right Teddy Ears */}
        <circle cx="82" cy="40" r="13" fill="#e8b98b" stroke="#87532d" strokeWidth="2.5" />
        <circle cx="82" cy="40" r="6" fill="#fbcfe8" />
        <circle cx="126" cy="42" r="14" fill="#e8b98b" stroke="#87532d" strokeWidth="2.5" />
        <circle cx="126" cy="42" r="7" fill="#fbcfe8" />
        {/* Cute Bow on girl teddy */}
        <g transform="translate(118, 32)">
          <path d="M-6 -4c4 4 4 8 0 12l-6-6z" fill="#f43f5e" />
          <path d="M6 -4c-4 4-4 8 0 12l6-6z" fill="#f43f5e" />
          <circle cx="0" cy="2" r="3.5" fill="#fda4af" />
        </g>
        {/* Right Teddy Head */}
        <circle cx="104" cy="56" r="28" fill="#e8b98b" stroke="#87532d" strokeWidth="2.5" />
        <ellipse cx="104" cy="62" rx="14" ry="10" fill="#fff1df" />
        <ellipse cx="104" cy="58" rx="4.5" ry="3" fill="#4a2e1b" />
        <path d="M104 61v4m-3.5 1c1 1.5 2.5 1.5 3.5 0 1 1.5 2.5 1.5 3.5 0" stroke="#4a2e1b" strokeWidth="2" strokeLinecap="round" />
        {/* Happy closed eyes */}
        <path d="M92 52c2-3 6-3 8 0" stroke="#4a2e1b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M108 52c2-3 6-3 8 0" stroke="#4a2e1b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Cheeks */}
        <ellipse cx="91" cy="59" rx="5" ry="3.5" fill="#ff7690" opacity="0.75" />
        <ellipse cx="117" cy="59" rx="5" ry="3.5" fill="#ff7690" opacity="0.75" />

        {/* Hugging Arms Wrapping Each Other */}
        <path d="M65 78c12 5 28 5 42 -4" stroke="#d49b6a" strokeWidth="12" strokeLinecap="round" fill="none" />
        <path d="M95 78c-12 5 -28 5 -42 -4" stroke="#e8b98b" strokeWidth="11" strokeLinecap="round" fill="none" />

        {/* Big Glowy Heart Above */}
        <path
          d="M80 20c-5-8-15-7-18-1-4 7 3 13 18 22 15-9 22-15 18-22-3-6-13-7-18 1z"
          fill="#ff4081"
          stroke="#fff"
          strokeWidth="2"
        />
        {/* Floating Mini Hearts */}
        <path d="M46 18c-2-3-6-3-7 0-2 3 1 6 7 10 6-4 9-7 7-10-1-3-5-3-7 0z" fill="#f43f5e" opacity="0.85" />
        <path d="M116 16c-2-3-6-3-7 0-2 3 1 6 7 10 6-4 9-7 7-10-1-3-5-3-7 0z" fill="#f43f5e" opacity="0.85" />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block drop-shadow-md select-none ${className}`}
    >
      {/* Ears */}
      <circle cx="28" cy="30" r="15" fill="#d49b6a" stroke="#87532d" strokeWidth="2.5" />
      <circle cx="28" cy="30" r="8" fill="#fbcfe8" />
      <circle cx="92" cy="30" r="15" fill="#d49b6a" stroke="#87532d" strokeWidth="2.5" />
      <circle cx="92" cy="30" r="8" fill="#fbcfe8" />

      {/* Cute Head Bow (for girl mood or cute charm) */}
      <g transform="translate(82, 20)">
        <path d="M-6 -4c4 4 4 8 0 12l-6-6z" fill="#ff4081" />
        <path d="M6 -4c-4 4-4 8 0 12l6-6z" fill="#ff4081" />
        <circle cx="0" cy="2" r="3" fill="#ffe4e6" />
      </g>

      {/* Feet */}
      <ellipse cx="38" cy="106" rx="14" ry="10" fill="#d49b6a" stroke="#87532d" strokeWidth="2" />
      <ellipse cx="38" cy="106" rx="8" ry="6" fill="#fce5cd" />
      <ellipse cx="82" cy="106" rx="14" ry="10" fill="#d49b6a" stroke="#87532d" strokeWidth="2" />
      <ellipse cx="82" cy="106" rx="8" ry="6" fill="#fce5cd" />

      {/* Body */}
      <ellipse cx="60" cy="80" rx="34" ry="30" fill="#d49b6a" stroke="#87532d" strokeWidth="2.5" />
      <ellipse cx="60" cy="82" rx="22" ry="20" fill="#fce5cd" />

      {/* Head */}
      <circle cx="60" cy="50" r="32" fill="#d49b6a" stroke="#87532d" strokeWidth="2.5" />

      {/* Snout */}
      <ellipse cx="60" cy="58" rx="15" ry="12" fill="#fce5cd" />
      <ellipse cx="60" cy="53" rx="5" ry="3.5" fill="#4a2e1b" />
      <path d="M60 56.5v4.5m-3.5 1.5c1 1.5 2.5 1.5 3.5 0 1 1.5 2.5 1.5 3.5 0" stroke="#4a2e1b" strokeWidth="2" strokeLinecap="round" />

      {/* Eyes & Expressions */}
      {mood === 'blushing' ? (
        <>
          {/* Shy closed curved eyes */}
          <path d="M46 45c2-3 7-3 9 0" stroke="#4a2e1b" strokeWidth="2.8" strokeLinecap="round" fill="none" />
          <path d="M65 45c2-3 7-3 9 0" stroke="#4a2e1b" strokeWidth="2.8" strokeLinecap="round" fill="none" />
          {/* Intense Rosy Cheeks */}
          <ellipse cx="44" cy="56" rx="7" ry="5" fill="#ff4081" opacity="0.85" />
          <ellipse cx="76" cy="56" rx="7" ry="5" fill="#ff4081" opacity="0.85" />
          {/* Paws covering cheeks shyly */}
          <circle cx="42" cy="62" r="9" fill="#d49b6a" stroke="#87532d" strokeWidth="2" />
          <circle cx="78" cy="62" r="9" fill="#d49b6a" stroke="#87532d" strokeWidth="2" />
        </>
      ) : mood === 'open_arms' ? (
        <>
          {/* Big happy sparkly eyes */}
          <circle cx="48" cy="46" r="4.5" fill="#4a2e1b" />
          <circle cx="46.5" cy="44.5" r="1.8" fill="#fff" />
          <circle cx="72" cy="46" r="4.5" fill="#4a2e1b" />
          <circle cx="70.5" cy="44.5" r="1.8" fill="#fff" />
          {/* Cheeks */}
          <ellipse cx="44" cy="55" rx="6" ry="4" fill="#ff7690" opacity="0.8" />
          <ellipse cx="76" cy="55" rx="6" ry="4" fill="#ff7690" opacity="0.8" />
          {/* Open Arms outstretched */}
          <path d="M30 75C12 70 8 60 12 50c3-8 12-6 16 2l12 18" fill="#d49b6a" stroke="#87532d" strokeWidth="2" strokeLinejoin="round" />
          <path d="M90 75c18-5 22-15 18-25-3-8-12-6-16 2l-12 18" fill="#d49b6a" stroke="#87532d" strokeWidth="2" strokeLinejoin="round" />
        </>
      ) : mood === 'water' ? (
        <>
          {/* Excited eyes */}
          <path d="M45 45c2-3 7-3 9 0" stroke="#4a2e1b" strokeWidth="2.8" strokeLinecap="round" fill="none" />
          <path d="M66 45c2-3 7-3 9 0" stroke="#4a2e1b" strokeWidth="2.8" strokeLinecap="round" fill="none" />
          <ellipse cx="44" cy="55" rx="6" ry="4" fill="#ff7690" opacity="0.8" />
          <ellipse cx="76" cy="55" rx="6" ry="4" fill="#ff7690" opacity="0.8" />
          {/* Arms holding cute water bottle */}
          <g transform="translate(50, 68)">
            {/* Water bottle */}
            <rect x="0" y="8" width="20" height="26" rx="4" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
            <rect x="5" y="2" width="10" height="6" rx="2" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
            <path d="M4 18h12m-12 5h12" stroke="#bae6fd" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M10 12l2 3-2 2-2-2z" fill="#fff" />
          </g>
          {/* Paws holding bottle */}
          <circle cx="48" cy="80" r="7" fill="#d49b6a" stroke="#87532d" strokeWidth="2" />
          <circle cx="72" cy="80" r="7" fill="#d49b6a" stroke="#87532d" strokeWidth="2" />
        </>
      ) : mood === 'waving' ? (
        <>
          <circle cx="48" cy="46" r="4.5" fill="#4a2e1b" />
          <circle cx="46.5" cy="44.5" r="1.8" fill="#fff" />
          <circle cx="72" cy="46" r="4.5" fill="#4a2e1b" />
          <circle cx="70.5" cy="44.5" r="1.8" fill="#fff" />
          <ellipse cx="44" cy="55" rx="6" ry="4" fill="#ff7690" opacity="0.8" />
          <ellipse cx="76" cy="55" rx="6" ry="4" fill="#ff7690" opacity="0.8" />
          {/* Left arm down */}
          <path d="M36 78c-6 4-12 12-8 16 4 4 12-2 16-8" fill="#d49b6a" stroke="#87532d" strokeWidth="2" />
          {/* Right arm waving up */}
          <path d="M84 72c10-8 18-22 24-20 6 3 2 12-6 18l-12 10" fill="#d49b6a" stroke="#87532d" strokeWidth="2" />
        </>
      ) : (
        /* Default: mood === 'heart' */
        <>
          <circle cx="48" cy="46" r="4.5" fill="#4a2e1b" />
          <circle cx="46.5" cy="44.5" r="1.8" fill="#fff" />
          <circle cx="72" cy="46" r="4.5" fill="#4a2e1b" />
          <circle cx="70.5" cy="44.5" r="1.8" fill="#fff" />
          <ellipse cx="44" cy="55" rx="6" ry="4" fill="#ff7690" opacity="0.8" />
          <ellipse cx="76" cy="55" rx="6" ry="4" fill="#ff7690" opacity="0.8" />

          {/* Big Pink Heart held with paws */}
          <path
            d="M60 68c-6-10-18-8-22-1-4 8 4 16 22 26 18-10 26-18 22-26-4-7-16-9-22 1z"
            fill="#ff4081"
            stroke="#ffffff"
            strokeWidth="2"
          />
          {/* Teddy Paws holding the heart */}
          <circle cx="44" cy="80" r="7" fill="#d49b6a" stroke="#87532d" strokeWidth="1.8" />
          <circle cx="76" cy="80" r="7" fill="#d49b6a" stroke="#87532d" strokeWidth="1.8" />
        </>
      )}
    </svg>
  );
};
