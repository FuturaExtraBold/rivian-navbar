<script>
  import DiscoveryFeature from './DiscoveryFeature.svelte';

  import { discoveryData } from '../../../stores/navStore';

  $: discoveryData;
</script>

<div class="content">
  <DiscoveryFeature {...$discoveryData.features[0]} className="first" />
  {#if $discoveryData.features.length >= 2}
    <div class="content-split">
      <DiscoveryFeature {...$discoveryData.features[1]} />
      {#if $discoveryData.features.length >= 3}
        <DiscoveryFeature {...$discoveryData.features[2]} />
      {/if}
    </div>
  {/if}
</div>

<style>
  .content {
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
    padding: var(--spacing);
    background-color: #fff;
    flex-direction: column;
    gap: var(--spacing-small);
  }

  .content-split {
    flex: 1;
    display: flex;
    flex-direction: row;
    gap: var(--spacing-small);
    width: 100%;
  }
</style>
