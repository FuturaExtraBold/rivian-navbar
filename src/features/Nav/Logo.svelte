<script>
  import { navHovered } from '../../stores/navStore';

  let hovered = $state($navHovered);
  navHovered.subscribe((value) => (hovered = value));

  let { className = '' } = $props();
</script>

<div class="logo {className}" class:hovered>
  <span class="text">BENZO</span>
</div>

<style lang="scss">
  :root {
    --color-logo-text: #fff;
    --color-logo-text-hover: #000;
  }

  .logo {
    cursor: pointer;

    .text {
      margin: 0;
      font-size: 1.7em;
      font-weight: 700;
      color: var(--color-logo-text);
      letter-spacing: 8px;
      margin-right: -8px;
      transition: all var(--animation-default);
    }

    &.hovered .text {
      color: var(--color-logo-text-hover);
    }
  }

  .logo--mobile {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 2;

    .text {
      font-size: 1.4em;
      letter-spacing: 4px;
    }
  }
</style>
