<script>
  import NavButton from '../NavButton.svelte';
  import { discovery } from '../../../data/discovery.js';
  import { discoveryData } from '../../../stores/navStore';

  discoveryData.subscribe((data) => {
    console.log('Discovery data updated:', data);
  });

  discoveryData.set({
    title: discovery.actions[0].title,
    features: discovery.actions[0].features,
  });

  $: discoveryData;
</script>

<div class="actions">
  {#each discovery.actions as action}
    <NavButton
      title={action.title}
      className="nav-button--full nav-button--light {$discoveryData.title === action.title
        ? 'nav-button--active'
        : ''}"
      on:click={() =>
        discoveryData.set({
          title: action.title,
          features: action.features,
        })}
    />
  {/each}
</div>

<style>
  .actions {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    width: 280px;
    background-color: #fff;
  }
</style>
