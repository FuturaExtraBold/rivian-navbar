<script>
  import { navHovered } from '../../stores/navStore';
  let hovered = false;
  navHovered.subscribe((value) => (hovered = value));
</script>

<div class="nav-logo" class:hovered>
  <h2>BENZO</h2>
</div>

<style lang="scss">
  :root {
    --color-logo-text: #fff;
    --color-logo-text-hover: #000;
  }

  .nav-logo {
    cursor: pointer;

    h2 {
      margin: 0;
      font-size: 1.7em;
      font-weight: 700;
      color: var(--color-logo-text);
      letter-spacing: 8px;
      margin-right: -8px;
      transition: all 0.2s ease-in-out;
    }

    &.hovered h2 {
      color: var(--color-logo-text-hover);
    }
  }
</style>
