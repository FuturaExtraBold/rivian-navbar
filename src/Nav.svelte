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
      <div class="nav-button">R3</div>
      <div class="nav-button">Fleet</div>
    </div>
  </div>
  <div class="nav-section nav-section--logo">
    <h2 class="nav-logo">BENZO</h2>
  </div>
  <div class="nav-section nav-section--user">
    <ul class="nav-list nav-list--user">
      <li><a href="/">Demo Drive</a></li>
      <li><a href="/">Sign In</a></li>
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
    font-size: 1.5em;
    font-weight: bold;
    color: var(--color-nav-text);
    letter-spacing: 10px;
    margin-right: -10px;
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
    font-weight: 500;
    border-radius: 40px;
    cursor: pointer;
  }

  .nav-button:hover {
    color: var(--color-nav-button-text-hover);
    background-color: var(--color-nav-button-bg-hover);
  }

  .nav:hover {
    background-color: var(--color-nav-bg-hover);

    .nav-section--logo h2 {
      color: var(--color-nav-text-hover);
    }

    .nav-button {
      color: #000;
    }
  }
</style>