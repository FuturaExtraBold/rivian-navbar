<script>
  import NavButton from '../NavButton.svelte';
</script>

<div class="actions">
  <NavButton title="Action 1" className="nav-button--full nav-button--light nav-button--active" />
  <NavButton title="Action 2" className="nav-button--full nav-button--light" />
  <NavButton title="Action 3" className="nav-button--full nav-button--light" />
</div>

<style>
  .actions {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 20px;
    width: 280px;
    background-color: #fff;
  }
</style>
