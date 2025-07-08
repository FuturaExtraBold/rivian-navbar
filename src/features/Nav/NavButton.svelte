<script>
  import { navHovered } from '../../stores/navStore.js';
  let hovered = $state(false);
  navHovered.subscribe((value) => (hovered = value));

  // Props
  let { title = 'Button', className = '', onhovered = undefined, onclick = undefined } = $props();

  function handleMouseEnter() {
    onhovered?.(true);
  }

  function handleMouseLeave() {
    onhovered?.(false);
  }

  function handleClick() {
    onclick?.();
  }
</script>

<button
  class="nav-button {className}"
  class:hovered
  onclick={handleClick}
  onmouseenter={handleMouseEnter}
  onmouseleave={handleMouseLeave}
>
  {title}
</button>

<style lang="scss">
  :root {
    --color-button-text: #fff;
    --color-button-text-hover: #000;
    --color-button-active-text: #000;
    --color-button-active-text-hover: #fff;
    --color-button-active-bg: #fff;
    --color-button-active-bg-hover: #000;
    --color-button-accent-text: #000;
    --color-button-accent-bg: orange;
    --color-button-bg: transparent;
    --color-button-bg-hover: #eee;
  }

  .nav-button {
    color: var(--color-button-text);
    text-decoration: none;
    background-color: var(--color-button-bg);
    transition: all 0.1s ease-in-out;
    padding: 0 24px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-family: var(--font-family);
    border-radius: 40px;
    letter-spacing: -0.75px;
    font-size: 1em;
    border: none;
    cursor: pointer;

    &.hovered {
      color: #000;
    }
  }

  .nav-button--small-text {
    font-size: 0.9em;
  }

  .nav-button:hover {
    color: var(--color-button-text-hover);
    background-color: var(--color-button-bg-hover);
  }

  .nav-button--accent {
    color: var(--color-button-accent-text);
    background-color: var(--color-button-accent-bg);
  }

  .nav-button--accent:hover {
    color: var(--color-button-accent-text);
    background-color: var(--color-button-accent-bg);
  }

  .nav-button--full {
    width: 100%;
    justify-content: flex-start;
    height: 50px;
  }

  .nav-button--fit-content {
    width: fit-content;
  }

  .nav-button--bordered {
    border: var(--border-default);
    color: var(--color-button-active-text);
  }

  .nav-button--light {
    font-weight: 500;
    letter-spacing: normal;
  }

  .nav-button--active {
    color: var(--color-text-hover);
    background-color: var(--color-button-bg-hover);

    &.hovered {
      color: var(--color-button-active-text-hover);
      background-color: var(--color-button-active-bg-hover);
    }
  }
</style>
