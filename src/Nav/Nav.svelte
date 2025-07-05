<script>
  console.log('Nav component loaded');

  // Vehicle data
  import { vehicles } from '../data/vehicles.js';

  // Is the nav hovered?
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  const navHovered = writable(false);
  setContext('navHovered', navHovered);

  // Is the Detail open?
  const detailOpen = writable(true);
  setContext('detailOpen', detailOpen);

  const detailTitle = writable('');
  setContext('detailTitle', detailTitle);

  const detailImage = writable('');
  setContext('detailImage', detailImage);

  const detailStartingPrice = writable('');
  setContext('detailStartingPrice', detailStartingPrice);

  // Components
  import Detail from './Detail.svelte';
  import NavButton from './NavButton.svelte';
  import Hamburger from './Hamburger.svelte';
  import Logo from './Logo.svelte';
</script>

<nav
  class="nav"
  on:mouseenter={() => navHovered.set(true)}
  on:mouseleave={() => {
    navHovered.set(false);
    // detailOpen.set(false);
  }}
>
  <div class="nav-container">
    <div class="nav-section nav-section--vehicles">
      <Hamburger />
      <div class="nav-actions" on:mouseenter={() => detailOpen.set(true)} role="navigation">
        {#each Object.values(vehicles) as vehicle, index}
          <NavButton
            title={vehicle.title}
            on:hovered={() => {
              detailOpen.set(true);
              detailTitle.set(vehicle.title);
              detailImage.set(vehicle.image);
              detailStartingPrice.set(vehicle.startingPrice);
            }}
          />
        {/each}
      </div>
    </div>
    <div class="nav-section nav-section--logo">
      <Logo />
    </div>
    <div class="nav-section nav-section--user">
      <div class="nav-actions">
        <NavButton title="Demo Drive" className="nav-button--small-text nav-button--accent" />
        <NavButton title="Sign In" className="nav-button--small-text" />
      </div>
    </div>
  </div>
  <Detail
    open={$detailOpen}
    title={$detailTitle}
    startingPrice={$detailStartingPrice}
    vehicleImage={$detailImage}
  />
</nav>

<style lang="scss">
  :root {
    --spacing-nav-gap-small: 6px;
    --spacing-nav-gap-medium: 20px;
    --color-nav-bg: transparent;
    --color-nav-bg-hover: #fff;
  }

  .nav {
    width: 100%;
    max-width: 1920px;
    margin: 20px auto 0;
    border-radius: 20px;
    transition: all 0.2s ease-in-out;
    position: relative;
    overflow: hidden;
  }

  .nav-container {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-nav-gap-medium);
    padding: 0 20px;
  }

  .nav-section {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: var(--spacing-nav-gap-small);
    position: relative;
  }

  .nav-section--logo {
    justify-content: center;
  }

  .nav-section--vehicles {
    justify-content: flex-start;
  }

  .nav-section--user {
    justify-content: flex-end;
  }

  .nav:hover {
    background-color: var(--color-nav-bg-hover);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
  }
</style>
