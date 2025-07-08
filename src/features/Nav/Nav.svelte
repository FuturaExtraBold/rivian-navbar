<script>
  import Detail from './Detail/Detail.svelte';
  import Discovery from './Discovery/Discovery.svelte';
  import Hamburger from './Hamburger.svelte';
  import Logo from './Logo.svelte';
  import NavButton from './NavButton.svelte';

  import { vehicles } from '../../data/vehicles.js';
  import { navHovered, detailOpen, discoveryOpen, detailData } from '../../stores/navStore.js';
</script>

<nav
  class="nav"
  class:hovered={$navHovered ? 'nav--hovered' : ''}
  on:mouseenter={() => navHovered.set(true)}
  on:mouseleave={() => {
    $discoveryOpen ? navHovered.set(true) : navHovered.set(false);
    detailOpen.set(false);
  }}
>
  <div class="nav-container">
    <div class="nav-section nav-section--vehicles">
      <Hamburger
        onhovered={() => detailOpen.set(false)}
        onclicked={() => discoveryOpen.update((open) => !open)}
      />
      <div
        class="nav-actions {$discoveryOpen ? 'nav-actions--hidden' : ''}"
        on:mouseenter={() => detailOpen.set(true)}
        role="navigation"
      >
        {#each Object.values(vehicles) as vehicle}
          <NavButton
            className={vehicle.title === 'R3' ? 'nav-button--active' : ''}
            title={vehicle.title}
            onhovered={() => {
              discoveryOpen.set(false);
              detailOpen.set(true);
              detailData.set(vehicle);
            }}
          />
        {/each}
      </div>
    </div>
    <div class="nav-section nav-section--logo">
      <Logo />
    </div>
    <div class="nav-section nav-section--user">
      <div class="nav-actions {$discoveryOpen ? 'nav-actions--hidden' : ''}">
        <NavButton title="Demo Drive" className="nav-button--small-text nav-button--accent" />
        <NavButton title="Sign In" className="nav-button--small-text" />
      </div>
    </div>
  </div>
  <Detail />
  <Discovery />
</nav>

<style lang="scss">
  :root {
    --color-nav-bg: transparent;
    --color-nav-bg-hover: #fff;
  }

  .nav {
    width: 100%;
    max-width: 1920px;
    margin: var(--spacing) auto 0;
    border-radius: 20px;
    transition: all 0.2s ease-in-out;
    position: relative;
    overflow: hidden;
    z-index: 100;
  }

  .nav-container {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing);
    padding: 0 var(--spacing);
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
    gap: 6px;
    position: relative;
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
    pointer-events: all;
  }

  .nav-actions--hidden {
    opacity: 0;
    pointer-events: none;
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

  .nav.hovered {
    background-color: var(--color-nav-bg-hover);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
  }
</style>
