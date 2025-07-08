import { readable } from 'svelte/store';

export const windowSize = readable(
  { width: window.innerWidth, height: window.innerHeight },
  (set) => {
    const update = () => {
      set({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', update);

    return () => window.removeEventListener('resize', update);
  }
);
