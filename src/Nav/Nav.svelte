<script>
  console.log('Nav component loaded');
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';  
  const navHovered = writable(false);
  setContext('navHovered', navHovered);

  import NavButton from './NavButton.svelte';
</script>

<nav class="nav" on:mouseenter={() => navHovered.set(true)} on:mouseleave={() => navHovered.set(false)}>
  <div class="nav-section nav-section--vehicles">
    <div class="hamburger-menu"></div>
    <NavButton title="R1S" />
    <NavButton title="R1T" />
    <NavButton title="R2" />
    <NavButton title="R3" className="nav-button--active" />
    <NavButton title="Fleet" />
  </div>
  <div class="nav-section nav-section--logo">
    <h2 class="nav-logo">BENZO</h2>
  </div>
  <div class="nav-section nav-section--user">
    <NavButton title="Demo Drive" className="nav-button--small-text nav-button--accent" />
    <NavButton title="Sign In" className="nav-button--small-text" />
  </div>
</nav>

<style lang="scss">
  :root {
    --spacing-nav-gap-small: 10px;
    --spacing-nav-gap-medium: 20px;
    --color-nav-bg: transparent;
    --color-nav-bg-hover: #fff;
    --color-nav-text: #fff;
    --color-nav-text-hover: #000;
    --color-nav-hamburger-bg: transparent;
    --color-nav-hamburger-bg-hover: #eee;
  }

  .nav {
    width: 100%;
    max-width: 1920px;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 20px auto 0;
    gap: var(--spacing-nav-gap-medium);
    border-radius: 20px;
    padding: 0 20px;
    transition: all 0.2s ease-in-out;
    position: relative;
  }

  .nav-section {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
    gap: var(--spacing-nav-gap-small);
  }

  .nav-section--logo {
    justify-content: center;
  }

  .nav-section--logo h2 {
    margin: 0;
    font-size: 1.7em;
    font-weight: 900;
    color: var(--color-nav-text);
    letter-spacing: 8px;
    margin-right: -8px;
    transition: all 0.2s ease-in-out;
  }

  .nav-section--vehicles {
    justify-content: flex-start;
  }

  .nav-section--user {
    justify-content: flex-end;
  }

  .hamburger-menu {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
  }

  .nav:hover {
    background-color: var(--color-nav-bg-hover);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);

    .nav-section--logo h2 {
      color: var(--color-nav-text-hover);
    }
  }
</style>