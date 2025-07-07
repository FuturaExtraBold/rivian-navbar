<script>
  import NavButton from '../NavButton.svelte';

  import { detailData } from '../../../stores/navStore';
  let vehicle = {};
  detailData.subscribe((value) => (vehicle = value));

  console.log('vehicle', vehicle);

  let actions = vehicle.actions;

  console.log('actions', actions);

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
