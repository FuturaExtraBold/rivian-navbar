import { writable } from 'svelte/store';

export const detailData = writable({
  title: '',
  image: '',
  startingPrice: '',
  actions: [],
});
export const detailOpen = writable(false);
export const discoveryOpen = writable(false);
export const discoveryData = writable({
  title: '',
  features: [],
  links: [],
});
export const hamburgerHovered = writable(false);
export const navHovered = writable(false);
export const mobileNavOpen = writable(false);
