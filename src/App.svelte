<script>
  import Disclaimer from './Disclaimer.svelte';
  import Nav from './Nav/Nav.svelte';
  import Slides from './Slides.svelte';
</script>

<main>
  <Slides />
  <div class="overlay"></div>
  <Nav />
  <Disclaimer />
</main>

<style lang="scss">
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
</style>
