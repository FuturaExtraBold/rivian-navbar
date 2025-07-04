<script>
  // @ts-nocheck

  console.log('Slides component loaded');
  import { onMount, setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { gsap } from 'gsap';

  let progressItems = [];
  const slideDuration = 8;
  const currentSlide = writable(0);
  setContext('currentSlide', currentSlide);

  onMount(() => {
    const slides = document.querySelectorAll('.slide');
    slides[0].style.zIndex = '1';
    progressItems[0].classList.add('active');

    function animateSlide(slideIndex) {
      gsap.fromTo(
        slides[slideIndex],
        { scale: 1.2 },
        {
          scale: 1,
          duration: slideDuration,
          ease: 'linear',
          onStart: () => {
            slides[slideIndex].style.zIndex = '1';
          },
        }
      );
    }

    animateSlide(0);

    setInterval(() => {
      currentSlide.update((slide) => {
        slides.forEach((slide) => {
          slide.style.transform = 'scale(1.2)';
          slide.style.zIndex = '0';
        });

        const nextSlide = (slide + 1) % slides.length;
        animateSlide(nextSlide);

        progressItems.forEach((item, index) => {
          item.classList.toggle('active', index === nextSlide);
        });

        return nextSlide;
      });
    }, slideDuration * 1000);
  });
</script>

<div class="slides">
  {#each Array(8) as _, index}
    <div class="slide slide--{index + 1}"></div>
  {/each}
  <div class="slides-overlay"></div>
  <div class="slide-progress">
    {#each Array(8) as _, index}
      <div
        class="slide-progress__item slide-progress__item--{index + 1} "
        bind:this={progressItems[index]}
      ></div>
    {/each}
  </div>
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

  .slides-overlay {
    @include slide-sizing;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 5;
  }

  .slide {
    @include slide-sizing;
    background-size: cover;
    background-position: center;
    z-index: 0;

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

  .slide-progress {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    z-index: 10;

    &__item {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.1);
      transition: background-color 0.2s ease-in-out;
    }

    &__item.active {
      background-color: rgba(255, 255, 255, 0.7);
    }
  }
</style>
