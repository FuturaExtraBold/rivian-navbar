<script>
  import Hamburger from '../Hamburger.svelte';
  import Logo from '../Logo.svelte';
  import NavButton from '../NavButton.svelte';

  import { mobileNavOpen } from '../../../stores/navStore.js';

  let open = $state($mobileNavOpen);
  mobileNavOpen.subscribe((value) => (open = value));

  function toggleMobileNav() {
    mobileNavOpen.update((current) => !current);
  }
</script>

<nav class="nav" class:open>
  <div class="header">
    <Hamburger className="hamburger--mobile" onclicked={toggleMobileNav} />
    {#if !open}
      <Logo className="logo--mobile" />
    {/if}
    {#if open}
      <div class="actions">
        <NavButton
          title="Demo Drive"
          className="nav-button--small-text nav-button--accent nav-button--fit-content"
        />
        <NavButton
          title="Sign In"
          className="nav-button--small-text nav-button--bordered nav-button--fit-content"
        />
      </div>
    {/if}
  </div>
  {#if open}
    <div class="divider"></div>
  {/if}
  <div class="container">
    <div class="content">
      <div class="link-list">
        <a class="link" href="/">R1S</a>
        <a class="link" href="/">R1T</a>
        <a class="link" href="/">R2</a>
        <a class="link" href="/">R3</a>
        <a class="link" href="/">Fleet</a>
      </div>
    </div>
    <div class="divider"></div>
    <div class="content">
      <div class="link-list">
        <a class="sale" href="/">
          <span class="sale-label">Shop R1S</span>
          <span class="availability">1-6 week delivery</span>
        </a>
        <a class="sale" href="/">
          <span class="sale-label">Shop R1T</span>
          <span class="availability">1-6 week delivery</span>
        </a>
        <a class="sale" href="/">
          <span class="sale-label">Build</span>
          <span class="availability">1-12 week delivery</span>
        </a>
      </div>
    </div>
    <div class="divider"></div>
    <div class="content">
      <div class="link-list">
        <a class="link link--small" href="/">Visit</a>
        <a class="link link--small" href="/">Gear Shop</a>
        <a class="link link--small" href="/">Charging</a>
        <a class="link link--small" href="/">Ownership</a>
        <a class="link link--small" href="/">Company</a>
      </div>
    </div>
    <div class="divider"></div>
    <div class="content">
      <div class="link-list">
        <a class="link link--small" href="/">Support</a>
      </div>
    </div>
  </div>
</nav>

<style lang="scss">
  .nav {
    width: 100%;
    margin: 0;
    border-radius: 0;
    transition: all var(--animation-default);
    position: relative;
    overflow: hidden;
    z-index: 1000;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .nav.open {
    background-color: #fff;

    .container {
      background-color: #fff;
      height: calc(100vh - 64px);
      opacity: 1;
    }
  }

  .header {
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    padding: 0 var(--spacing);
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 6px;
    flex: 1;
  }

  .container {
    height: 0;
    background-color: transparent;
    opacity: 0;
    transition: all var(--animation-default);
  }

  .content {
    padding: var(--spacing);
    display: flex;
    flex-direction: column;
    gap: var(--spacing);
  }

  .link-list {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: var(--spacing);
  }

  .link {
    font-size: 32px;
    font-weight: 600;
    text-decoration: none;
    color: #000;
  }

  .link--small {
    font-size: 14px;
    font-weight: 400;
  }

  .sale {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
  }

  .sale-label {
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    color: #000;
  }

  .availability {
    font-size: 14px;
    font-weight: 400;
    color: #999;
  }

  .divider {
    margin: 0;
    border-top: var(--border-default);
  }

  @media (min-width: 1024px) {
    .nav {
      margin: var(--spacing) auto 0;
      border-radius: 20px;
    }

    .container {
      height: calc(100vh - 104px);
    }
  }
</style>
