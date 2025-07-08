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
    links: discovery.actions[0].links,
  });

  $: discoveryData;
</script>

<div class="actions">
  {#each discovery.actions as action}
    {#if action.dividerBefore}
      <div class="divider"></div>
    {/if}
    <NavButton
      title={action.title}
      className="nav-button--full nav-button--light {$discoveryData.title === action.title
        ? 'nav-button--active'
        : ''}"
      onclick={() =>
        discoveryData.set({
          title: action.title,
          features: action.features,
          links: action.links,
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
    border-right: 1px solid #eee;
  }

  .divider {
    height: 1px;
    background-color: #eee;
    margin: 10px 0;
  }
</style>
