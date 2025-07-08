<script>
  console.log('NavMobile component loaded');
  import Hamburger from '../Hamburger.svelte';
  import Logo from '../Logo.svelte';
</script>

<nav class="nav">
  <div class="nav-container">
    <Hamburger className="hamburger--mobile" onclicked={() => console.log('Hamburger clicked')} />
    <Logo className="logo--mobile" />
  </div>
</nav>

<style lang="scss">
  .nav {
    width: 100%;
    margin: var(--spacing) auto 0;
    border-radius: 20px;
    transition: all var(--animation-default);
    position: relative;
    overflow: hidden;
    z-index: 100;
  }

  .nav-container {
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    padding: 0 var(--spacing);
  }
</style>
