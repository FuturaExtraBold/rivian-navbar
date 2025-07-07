<script>
  // @ts-nocheck

  import {
    discoveryOpen,
    hamburgerHovered,
    hamburgerOpen,
    navHovered,
  } from '../../stores/navStore';

  let hovered = false;
  navHovered.subscribe((value) => (hovered = value));

  let open = false;
  discoveryOpen.subscribe((value) => (open = value));

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('clicked', true);
    hamburgerOpen.update((current) => !current);
  }

  function handleMouseEnter() {
    dispatch('hovered', true);
    hamburgerHovered.set(true);
  }

  function handleMouseLeave() {
    dispatch('hovered', false);
    hamburgerHovered.set(false);
  }
</script>

<button
  aria-label="Toggle Discovery Menu"
  type="button"
  class="hamburger"
  class:hovered
  class:open
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  on:click={handleClick}
>
  <div class="bars">
    <div class="bar"></div>
    <div class="bar"></div>
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
    transition: all 0.3s ease-in-out;
    position: absolute;
    transform: translateY(-50%);
    top: calc(50% - 3px);
    left: 0;
  }

  .bar:nth-child(1) {
    top: calc(50% + 3px);
  }
</style>
