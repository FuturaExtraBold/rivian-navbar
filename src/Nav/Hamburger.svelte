<script>
  console.log('Hamburger component loaded');
  import { getContext } from 'svelte';

  const navHovered = getContext('navHovered');
  let hovered = false;
  navHovered.subscribe((value) => (hovered = value));
</script>

<div class="hamburger" class:hovered>
  <div class="bar"></div>
  <div class="bar"></div>
</div>

<style lang="scss">
  :root {
    --color-nav-hamburger-bg: transparent;
    --color-nav-hamburger-bg-hover: #000;
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 20px;
    height: 40px;
    cursor: pointer;
    position: relative;
    margin: 0 10px;

    &.hovered .bar {
      background-color: var(--color-nav-hamburger-bg-hover);
    }
  }

  .bar {
    height: 2px;
    width: 100%;
    background-color: white;
    transition: all 0.3s ease-in-out;
    position: absolute;
    transform: translateY(-50%);
    top: calc(50% - 3px);
  }

  .bar:nth-child(1) {
    top: calc(50% + 3px);
  }
</style>
