<script>
  console.log('Slides component loaded');
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';

  onMount(() => {
    const slides = document.querySelectorAll('.slide');
    gsap.fromTo(
      slides,
      { opacity: 0, scale: 1.2 },
      { opacity: 1, scale: 1, duration: 3, stagger: 6, ease: 'expo.out', repeat: -1 }
    );
  });
</script>

<div class="slides">
  <!-- Generate slides dynamically using a loop -->
  {#each Array(8) as _, index}
    <div class="slide slide--{index + 1}"></div>
  {/each}
</div>

<style lang="scss">
  @mixin slide-sizing {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .slides {
    display: block;
    overflow: hidden;
    @include slide-sizing;
  }

  .slide {
    @include slide-sizing;
    background-size: cover;
    background-position: center;
    scale: 1.2;

    &--1 {
      background-image: url('assets/slides/1.avif');
    }
    &--2 {
      background-image: url('assets/slides/2.avif');
    }
    &--3 {
      background-image: url('assets/slides/3.avif');
    }
    &--4 {
      background-image: url('assets/slides/5.avif');
    }
    &--5 {
      background-image: url('assets/slides/6.avif');
    }
    &--6 {
      background-image: url('assets/slides/7.avif');
    }
    &--7 {
      background-image: url('assets/slides/8.avif');
    }
    &--8 {
      background-image: url('assets/slides/9.avif');
    }
  }
</style>
