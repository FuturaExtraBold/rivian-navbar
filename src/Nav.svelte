<script>
  console.log('Nav component loaded');
</script>

<nav class="nav">
  <div class="nav-section nav-section--vehicles">
    <div class="hamburger-menu"></div>
    <div class="nav-list">
      <div class="nav-button">R1S</div>
      <div class="nav-button">R1T</div>
      <div class="nav-button">R2</div>
      <div class="nav-button nav-button--active">R3</div>
      <div class="nav-button">Fleet</div>
    </div>
  </div>
  <div class="nav-section nav-section--logo">
    <h2 class="nav-logo">BENZO</h2>
  </div>
  <div class="nav-section nav-section--user">
    <ul class="nav-list nav-list--user">
       <div class="nav-button nav-button--small-text nav-button--accent">Demo Drive</div>
       <div class="nav-button nav-button--small-text">Sign In</div>
    </ul>
  </div>
</nav>

<style lang="scss">
  :root {
    --spacing-nav-gap-small: 10px;
    --spacing-nav-gap-medium: 20px;
    --color-nav-bg: transparent;
    --color-nav-bg-hover: #fff;
    --color-nav-text: #fff;
    --color-nav-text-hover: #000;
    --color-nav-button-text: #fff;
    --color-nav-button-text-hover: #000;
    --color-nav-button-active-text: #000;
    --color-nav-button-active-text-hover: #fff;
    --color-nav-button-active-bg: #fff;
    --color-nav-button-active-bg-hover: #000;
    --color-nav-button-accent-text: #000;
    --color-nav-button-accent-bg: orange;
    --color-nav-button-bg: transparent;
    --color-nav-button-bg-hover: #eee;
    --color-nav-hamburger-bg: transparent;
    --color-nav-hamburger-bg-hover: #eee;
  }

  .nav {
    width: 100%;
    max-width: 1920px;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 20px auto 0;
    gap: var(--spacing-nav-gap-medium);
    border-radius: 20px;
    padding: 0 20px;
    transition: all 0.2s ease-in-out;
    position: relative;
  }

  .nav-section {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
    gap: var(--spacing-nav-gap-small);
  }

  .nav-section--logo {
    justify-content: center;
  }

  .nav-section--logo h2 {
    margin: 0;
    font-size: 1.7em;
    font-weight: 900;
    color: var(--color-nav-text);
    letter-spacing: 8px;
    margin-right: -8px;
    transition: all 0.2s ease-in-out;
  }

  .nav-section--vehicles {
    justify-content: flex-start;
  }

  .nav-section--user {
    justify-content: flex-end;
  }

  .hamburger-menu {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
  }

  .nav-list {
    display: flex;
    gap: 10px;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  .nav-list {
    list-style: none;
    display: flex;
    gap: var(--spacing-nav-gap-small);
    align-items: center;
    margin: 0;
  }

  .nav-button {
    color: var(--color-nav-text);
    text-decoration: none;
    background-color: var(--color-nav-button-bg);
    transition: all 0.1s ease-in-out;
    padding: 0 24px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    border-radius: 40px;
    letter-spacing: -0.5px;
    cursor: pointer;
  }

  .nav-button--small-text {
    font-size: 0.9em;
  }

  .nav-button:hover {
    color: var(--color-nav-button-text-hover);
    background-color: var(--color-nav-button-bg-hover);
  }

  .nav-button--accent {
    color: var(--color-nav-button-accent-text);
    background-color: var(--color-nav-button-accent-bg);
  }

  .nav-button--accent:hover {
    color: var(--color-nav-button-accent-text);
    background-color: var(--color-nav-button-accent-bg);
  }

  .nav-button--active {
    color: var(--color-nav-text-hover);
    background-color: var(--color-nav-button-bg-hover);
  }

  .nav:hover {
    background-color: var(--color-nav-bg-hover);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);

    .nav-section--logo h2 {
      color: var(--color-nav-text-hover);
    }

    .nav-button {
      color: #000;
    }

    .nav-button--active {
      color: var(--color-nav-button-active-text-hover);
      background-color: var(--color-nav-button-active-bg-hover);
    }
  }
</style>