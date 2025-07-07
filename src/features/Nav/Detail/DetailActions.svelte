<script>
  import { getContext } from 'svelte';

  import NavButton from '../NavButton.svelte';

  // Get actions data from context
  const detailData = getContext('detailData');
  let vehicle = {};
  detailData.subscribe((value) => (vehicle = value));

  let actions = vehicle.actions;

  $: {
    actions = vehicle.actions;
  }
</script>

<div class="actions">
  {#each actions as action}
    <NavButton
      title={action.label}
      className="nav-button--full nav-button--light"
      on:click={() => {
        console.log(`Action clicked: ${action.label}`);
      }}
    />
  {/each}
</div>

<style lang="scss">
  .actions {
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 400px;
    gap: 6px;
  }
</style>
