'use client';

import React from 'react';
import { Play, Pause, Music } from 'lucide-react';
import { useAudio } from '@/hooks/useAudio';

interface AudioPlayerProps {
  memberId: string;
  audioUrl: string;
  audioTitle: string;
}

export default function AudioPlayer({ memberId, audioUrl, audioTitle }: AudioPlayerProps) {
  const {
    isCurrentPlaying,
    isSelected,
    currentTime,
    duration,
    progressPercentage,
    formattedCurrentTime,
    formattedDuration,
    togglePlay,
    seek,
  } = useAudio(memberId, audioUrl, audioTitle);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPercent = parseFloat(e.target.value);
    if (duration > 0) {
      seek((newPercent / 100) * duration);
    }
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()} // Prevent card click event
      className={`w-full p-2.5 sm:p-3 rounded-comic-sm border-2 border-comic-border transition-all ${
        isSelected
          ? 'bg-secondary/20 shadow-comic-sm'
          : 'bg-cream hover:bg-secondary/10'
      }`}
    >
      {/* Audio Title & Equalizer Animation */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-1.5 overflow-hidden">
          <Music className={`w-3.5 h-3.5 shrink-0 ${isCurrentPlaying ? 'text-accent animate-bounce' : 'text-comic-muted'}`} />
          <span className="font-heading font-bold text-xs text-comic-text truncate">
            {audioTitle || 'Theme Track'}
          </span>
        </div>

        {/* Animated Equalizer Bars */}
        {isCurrentPlaying && (
          <div className="flex items-end gap-0.5 h-3 shrink-0">
            <span className="w-1 bg-accent rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-full"></span>
            <span className="w-1 bg-primary rounded-full animate-[pulse_0.4s_ease-in-out_infinite] h-2/3"></span>
            <span className="w-1 bg-secondary rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-4/5"></span>
          </div>
        )}
      </div>

      {/* Controls & Progress */}
      <div className="flex items-center gap-2.5">
        {/* Play / Pause Toggle Button */}
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isCurrentPlaying ? `Jeda lagu ${audioTitle}` : `Putar lagu ${audioTitle}`}
          className={`w-8 h-8 rounded-full border-2 border-comic-border shadow-comic-sm flex items-center justify-center shrink-0 transition-transform active:translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary ${
            isCurrentPlaying
              ? 'bg-accent text-white scale-105'
              : 'bg-primary text-white hover:bg-primary-hover hover:scale-105'
          }`}
        >
          {isCurrentPlaying ? (
            <Pause className="w-4 h-4 fill-white" />
          ) : (
            <Play className="w-4 h-4 fill-white translate-x-0.5" />
          )}
        </button>

        {/* Progress Bar & Timestamps */}
        <div className="flex-1 flex flex-col justify-center">
          <input
            type="range"
            min="0"
            max="100"
            value={progressPercentage || 0}
            onChange={handleSliderChange}
            aria-label="Audio progress slider"
            className="w-full h-1.5 bg-comic-border/20 rounded-lg appearance-none cursor-pointer accent-accent focus:outline-none"
          />
          <div className="flex justify-between items-center text-[10px] font-heading font-semibold text-comic-muted mt-1">
            <span>{formattedCurrentTime}</span>
            <span>{formattedDuration || '0:30'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
