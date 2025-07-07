import { writable } from 'svelte/store';

export const detailData = writable({
  title: '',
  image: '',
  startingPrice: '',
  actions: [],
});
export const detailOpen = writable(false);
export const discoveryOpen = writable(false);
export const hamburgerHovered = writable(false);
export const hamburgerOpen = writable(false);
export const navHovered = writable(false);
