<script>
  import { gsap } from 'gsap';
  import { discoveryOpen, hamburgerHovered, navHovered } from '../../stores/navStore';

  let hovered = $state(false);
  navHovered.subscribe((value) => (hovered = value));

  let { className = '', onhovered = () => {}, onclicked = () => {} } = $props();

  let bar1, bar2;

  export function animateBars() {
    if ($discoveryOpen) {
      gsap.to(bar1, {
        y: -3,
        rotation: 45,
        duration: 0.2,
        ease: 'sine.inOut',
      });
      gsap.to(bar2, {
        y: 3,
        rotation: -45,
        duration: 0.2,
        ease: 'sine.inOut',
      });
    } else {
      gsap.to(bar1, {
        y: 0,
        rotation: 0,
        duration: 0.2,
        ease: 'sine.inOut',
      });
      gsap.to(bar2, {
        y: 0,
        rotation: 0,
        duration: 0.2,
        ease: 'sine.inOut',
      });
    }
  }

  $effect(() => {
    if (bar1 && bar2 && $discoveryOpen !== undefined) {
      animateBars();
    }
  });

  function handleClick() {
    onclicked?.(true);
  }

  function handleMouseEnter() {
    onhovered?.(true);
    hamburgerHovered.set(true);
  }

  function handleMouseLeave() {
    onhovered?.(false);
    hamburgerHovered.set(false);
  }
</script>

<button
  aria-label="Toggle Discovery Menu"
  type="button"
  class="hamburger {className}"
  class:hovered
  class:open={$discoveryOpen}
  onmouseenter={handleMouseEnter}
  onmouseleave={handleMouseLeave}
  onclick={handleClick}
>
  <div class="bars">
    <div class="bar" bind:this={bar1}></div>
    <div class="bar" bind:this={bar2}></div>
  </div>
</button>

<style lang="scss">
  :root {
    --color-nav-hamburger-bg: transparent;
    --color-nav-hamburger-bg-hover: #000;
  }

  .hamburger {
    display: flex;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: relative;
    border: 0;
    background-color: transparent;
    padding: 0;
    align-items: center;
    justify-content: center;
    margin-right: 6px;
    border-radius: 50%;

    &.hovered .bar {
      background-color: var(--color-nav-hamburger-bg-hover);
    }
  }

  .hamburger--mobile {
    margin: 0;
    flex: none;
  }

  .hamburger:active {
    background-color: #ddd;
  }

  .bars {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 20px;
    position: relative;
    overflow: hidden;
    z-index: 1;
    margin: 0;
  }

  .bar {
    height: 2px;
    width: 100%;
    background-color: white;
    transform-origin: center center;
    position: absolute;
    transform: translateY(-50%);
    top: calc(50% - 3px);
    left: 0;
  }

  .bar:nth-child(1) {
    top: calc(50% + 3px);
  }
</style>
