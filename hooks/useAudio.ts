import { useAudioStore } from '@/store/useAudioStore';

export function useAudio(memberId: string, audioUrl: string, title: string) {
  const {
    currentPlayingId,
    isPlaying,
    currentTime,
    duration,
    togglePlay,
    seek,
  } = useAudioStore();

  const isCurrentPlaying = currentPlayingId === memberId && isPlaying;
  const isSelected = currentPlayingId === memberId;

  const handleToggle = () => {
    togglePlay(memberId, audioUrl, title);
  };

  const handleSeek = (time: number) => {
    if (isSelected) {
      seek(time);
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds === 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return {
    isCurrentPlaying,
    isSelected,
    currentTime: isSelected ? currentTime : 0,
    duration: isSelected ? duration : 0,
    progressPercentage: isSelected && duration > 0 ? (currentTime / duration) * 100 : 0,
    formattedCurrentTime: formatTime(isSelected ? currentTime : 0),
    formattedDuration: formatTime(isSelected ? duration : 0),
    togglePlay: handleToggle,
    seek: handleSeek,
  };
}
