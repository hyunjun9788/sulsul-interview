import { create } from 'zustand';

interface VideoState {
  videoPlaying: boolean;
  pause: () => void;
  restart: () => void;
}

export const useVideoStateStore = create<VideoState>((set) => ({
  videoPlaying: true,
  pause: () => {
    set((state) => ({
      videoPlaying: false,
    }));
  },
  restart: () => {
    set((state) => ({
      videoPlaying: true,
    }));
  },
}));
