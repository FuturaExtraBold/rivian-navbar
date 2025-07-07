<script>
  import Disclaimer from './features/Disclaimer.svelte';
  import Nav from './features/Nav/Nav.svelte';
  import Slides from './features/Slides.svelte';
  import { discoveryOpen } from './stores/navStore';
</script>

<main>
  <Slides />
  {#if $discoveryOpen}
    <button class="overlay" on:click={() => discoveryOpen.set(false)} aria-label="overlay"></button>
  {/if}
  <Nav />
  <Disclaimer />
</main>

<style lang="scss">
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
    background-color: transparent;
    z-index: 10;
  }
</style>
