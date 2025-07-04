<script>
  console.log('NavButton component loaded');
  
  // Is the nav hovered?
  import { getContext } from 'svelte';
  const navHovered = getContext('navHovered');
  let hovered = false;
  navHovered.subscribe(value => hovered = value);

  // Is the button hovered?
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function handleMouseEnter() {
    dispatch('hovered', true);
  }

  function handleMouseLeave() {
    dispatch('hovered', false);
  }

  // Props
  export let title = 'Button';
  export let className = '';
</script>

<div
  role="button"
  tabindex="0"
  class="nav-button {className}"
  class:hovered={hovered}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
>
  {title}
</div>

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
    border-radius: 40px;
    letter-spacing: -0.75px;
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

  .nav-button--active {
    color: var(--color-text-hover);
    background-color: var(--color-button-bg-hover);

    &.hovered {
      color: var(--color-button-active-text-hover);
      background-color: var(--color-button-active-bg-hover);
    }
  }

</style>