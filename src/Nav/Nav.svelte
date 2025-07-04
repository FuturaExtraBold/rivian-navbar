<script>
  console.log('Nav component loaded');

   // Images
  import r1sImage from '../assets/hero/r1s.webp';
  import r1tImage from '../assets/hero/r1t.webp';
  import r2Image from '../assets/hero/r2.webp';
  import r3Image from '../assets/hero/r3.webp';
  import fleetImage from '../assets/hero/fleet.webp';

  // Is the nav hovered?
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';  
  const navHovered = writable(false);
  setContext('navHovered', navHovered);

  // Is the Detail open?
  const detailOpen = writable(false);
  setContext('detailOpen', detailOpen);

  const detailTitle = writable('');
  setContext('detailTitle', detailTitle);

  const detailImage = writable('');
  setContext('detailImage', detailImage);

  // Components
  import Detail from './Detail.svelte';
  import NavButton from './NavButton.svelte';
  import Hamburger from './Hamburger.svelte';
  import Logo from './Logo.svelte';

  function setDetailData(title) {
    switch (title) {
      case 'R1S':
        detailTitle.set('R1S');
        detailImage.set(r1sImage);
        break;
      case 'R1T':
        detailTitle.set('R1T');
        detailImage.set(r1tImage);
        break;
      case 'R2':
        detailTitle.set('R2');
        detailImage.set(r2Image);
        break;
      case 'R3':
        detailTitle.set('R3');
        detailImage.set(r3Image);
        break;
      case 'Fleet':
        detailTitle.set('Fleet');
        detailImage.set(fleetImage);
        break;
      default:
        detailImage.set('');
    }
  }
</script>

<nav 
  class="nav" 
  on:mouseenter={() => navHovered.set(true)} 
  on:mouseleave={() => {
    navHovered.set(false);
    detailOpen.set(false);
  }}
>
  <div class="nav-container">
    <div class="nav-section nav-section--vehicles">
      <Hamburger />
      <div 
        class="nav-actions"
        on:mouseenter={() => detailOpen.set(true)}
        role="navigation"
      >
        <NavButton title="R1S" on:hovered={() => setDetailData('R1S')} />
        <NavButton title="R1T" on:hovered={() => setDetailData('R1T')} />
        <NavButton title="R2" on:hovered={() => setDetailData('R2')} />
        <NavButton title="R3" className="nav-button--active" on:hovered={() => setDetailData('R3')} />
        <NavButton title="Fleet" on:hovered={() => setDetailData('Fleet')} />
      </div>
    </div>
    <div class="nav-section nav-section--logo">
      <Logo />
    </div>
    <div class="nav-section nav-section--user">
      <NavButton title="Demo Drive" className="nav-button--small-text nav-button--accent" />
      <NavButton title="Sign In" className="nav-button--small-text" />
    </div>
  </div>
  <Detail open={$detailOpen} title={$detailTitle} vehicleImage={$detailImage} />
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