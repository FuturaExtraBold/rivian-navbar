import r1sImage from '../assets/hero/r1s.webp';
import r1tImage from '../assets/hero/r1t.webp';
import r2Image from '../assets/hero/r2.webp';
import r3Image from '../assets/hero/r3.webp';
import fleetImage from '../assets/hero/fleet.webp';

export const vehicles = {
  R1S: {
    title: 'R1S',
    image: r1sImage,
    description: "The R1S is Rivian's all-electric SUV, designed for adventure and family.",
    startingPrice: '$75,900',
    actions: [
      { label: 'Explore', url: '/' },
      { label: 'Buy', url: '/' },
      { label: 'Shop new inventory', url: '/' },
      { label: 'Shop pre-owned', url: '/' },
      { label: 'Demo drive', url: '/' },
    ],
  },
  R1T: {
    title: 'R1T',
    image: r1tImage,
    description: "The R1T is Rivian's all-electric pickup truck, built for rugged performance.",
    startingPrice: '$69,900',
    actions: [
      { label: 'Explore', url: '/' },
      { label: 'Buy', url: '/' },
      { label: 'Shop new inventory', url: '/' },
      { label: 'Shop pre-owned', url: '/' },
      { label: 'Demo drive', url: '/' },
    ],
  },
  R2: {
    title: 'R2',
    image: r2Image,
    description:
      "The R2 is Rivian's next-generation electric vehicle, focusing on efficiency and innovation.",
    startingPrice: '$45,000',
    actions: [
      { label: 'Explore', url: '/' },
      { label: 'Reserve', url: '/' },
    ],
  },
  R3: {
    title: 'R3',
    image: r3Image,
    description:
      "The R3 is Rivian's future electric vehicle, promising advanced technology and sustainability.",
    startingPrice: null,
    actions: [{ label: 'Explore', url: '/' }],
  },
  Fleet: {
    title: 'Fleet',
    image: fleetImage,
    description: "Rivian's fleet solutions for businesses and commercial use.",
    startingPrice: null,
    actions: [
      { label: 'Explore', url: '/' },
      { label: 'Start a Fleet order', url: '/' },
    ],
  },
};
