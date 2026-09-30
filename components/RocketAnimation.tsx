'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Flame } from 'lucide-react';

export default function RocketAnimation() {
  const [launchKey, setLaunchKey] = useState(0);
  const [isLaunching, setIsLaunching] = useState(false);

  const handleManualLaunch = () => {
    if (isLaunching) return;
    setIsLaunching(true);
    setLaunchKey((prev) => prev + 1);

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#FF6B6B', '#F5C542', '#4A90E2', '#4CAF50'],
    });

    setTimeout(() => {
      setIsLaunching(false);
    }, 2400);
  };

  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Launching Comic Rocket */}
      <motion.div
        key={launchKey}
        initial={{ y: 350, x: -60, rotate: -25, scale: 0.4, opacity: 0 }}
        animate={{
          y: [350, -40, 15, 0],
          x: [-60, 20, -5, 0],
          rotate: [-25, 18, 8, 12],
          scale: [0.4, 1.1, 0.95, 1],
          opacity: 1,
        }}
        transition={{
          duration: 1.8,
          times: [0, 0.6, 0.85, 1],
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative cursor-pointer group"
        onClick={handleManualLaunch}
        title="Klik untuk meluncurkan roket lagi! 🚀"
      >
        {/* Floating Idle Loop after landing */}
        <motion.div
          animate={{
            y: [-7, 7, -7],
            rotate: [10, 14, 10],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.8,
          }}
          className="relative"
        >
          {/* Comic Sound Bubble on Hover */}
          <div className="absolute -top-7 -right-10 bg-secondary text-comic-text px-2.5 py-0.5 rounded-comic-pill border-2 border-comic-border text-[10px] font-heading font-extrabold shadow-comic-sm opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all select-none whitespace-nowrap">
            WOOOSH! 🚀
          </div>

          {/* SVG Rocket Illustration */}
          <svg
            viewBox="0 0 160 220"
            className="w-28 sm:w-36 md:w-44 h-auto drop-shadow-[0_8px_0_rgba(45,45,45,0.9)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Left Fin */}
            <path
              d="M38 135 L12 175 C10 185 24 185 36 170 L48 145 Z"
              fill="#FF6B6B"
              stroke="#2D2D2D"
              strokeWidth="5"
              strokeLinejoin="round"
            />
            {/* Right Fin */}
            <path
              d="M122 135 L148 175 C150 185 136 185 124 170 L112 145 Z"
              fill="#FF6B6B"
              stroke="#2D2D2D"
              strokeWidth="5"
              strokeLinejoin="round"
            />

            {/* Thruster Nozzle */}
            <path
              d="M60 165 L100 165 L94 182 L66 182 Z"
              fill="#4A5568"
              stroke="#2D2D2D"
              strokeWidth="5"
              strokeLinejoin="round"
            />

            {/* Rocket Body */}
            <path
              d="M80 15 C45 55 46 145 48 170 L112 170 C114 145 115 55 80 15 Z"
              fill="#FFFFFF"
              stroke="#2D2D2D"
              strokeWidth="5"
              strokeLinejoin="round"
            />

            {/* Nose Cone Tip */}
            <path
              d="M80 15 C60 45 53 75 51 90 L109 90 C107 75 100 45 80 15 Z"
              fill="#FF6B6B"
              stroke="#2D2D2D"
              strokeWidth="5"
              strokeLinejoin="round"
            />

            {/* Body Stripes */}
            <path
              d="M49 118 L111 118 L111 138 L49 138 Z"
              fill="#4A90E2"
              stroke="#2D2D2D"
              strokeWidth="5"
              strokeLinejoin="round"
            />

            {/* Window Porthole */}
            <circle
              cx="80"
              cy="98"
              r="18"
              fill="#F5C542"
              stroke="#2D2D2D"
              strokeWidth="5"
            />
            <circle
              cx="80"
              cy="98"
              r="12"
              fill="#4A90E2"
              stroke="#2D2D2D"
              strokeWidth="3"
            />
            <path
              d="M74 92 A 7 7 0 0 1 86 92"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Dynamic Animated Flame Exhaust */}
            <g className="animate-pulse">
              <path
                d="M66 182 Q80 225 80 220 Q80 225 94 182 Z"
                fill="#F5C542"
                stroke="#2D2D2D"
                strokeWidth="4"
              />
              <path
                d="M71 182 Q80 210 80 205 Q80 210 89 182 Z"
                fill="#FF6B6B"
              />
            </g>
          </svg>

          {/* Animated Smoke Puff Bubbles */}
          <motion.div
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1 -z-10 pointer-events-none"
          >
            <span className="w-5 h-5 rounded-full bg-slate-200 border-2 border-comic-border"></span>
            <span className="w-7 h-7 rounded-full bg-slate-100 border-2 border-comic-border -ml-2"></span>
            <span className="w-4 h-4 rounded-full bg-slate-200 border-2 border-comic-border -ml-2"></span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Interactive Trigger Button */}
      <button
        type="button"
        onClick={handleManualLaunch}
        className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 bg-surface/90 hover:bg-secondary text-comic-text rounded-comic-pill border-2 border-comic-border shadow-comic-sm text-xs font-heading font-extrabold active:translate-y-0.5 transition-all select-none hover:scale-105"
      >
        <Flame className="w-3.5 h-3.5 text-accent animate-bounce" />
        <span>Luncurkan Roket! 🚀</span>
      </button>
    </div>
  );
}
