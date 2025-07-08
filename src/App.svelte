<script>
  import Disclaimer from './features/Disclaimer.svelte';
  import Nav from './features/Nav/Nav.svelte';
  import NavMobile from './features/Nav/NavMobile/NavMobile.svelte';
  import Slides from './features/Slides.svelte';
  import { discoveryOpen } from './stores/navStore';

  import { windowSize } from './stores/windowStore';
  $: isMobile = $windowSize.width < 1200;
</script>

<main>
  <Slides />
  {#if $discoveryOpen}
    <button
      class="overlay"
      on:click={() => {
        discoveryOpen.set(false);
      }}
      aria-label="overlay"
    ></button>
  {/if}
  <div class="container">
    {#if isMobile}
      <NavMobile />
    {:else}
      <Nav />
    {/if}
  </div>
  <Disclaimer className={isMobile ? 'disclaimer--mobile' : ''} />
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

  .container {
    padding: 0 var(--spacing);
  }
</style>
