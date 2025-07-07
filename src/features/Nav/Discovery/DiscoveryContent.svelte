<script>
  import DiscoveryFeature from './DiscoveryFeature.svelte';

  import { discoveryData } from '../../../stores/navStore';

  $: discoveryData;
</script>

<div class="content">
  <DiscoveryFeature {...$discoveryData.features[0]} />
  <div class="content-split">
    {#if $discoveryData.features.length >= 2}
      <DiscoveryFeature {...$discoveryData.features[1]} />
    {/if}
    {#if $discoveryData.features.length >= 3}
      <DiscoveryFeature {...$discoveryData.features[2]} />
    {/if}
  </div>
</div>

<style>
  .content {
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: #fff;
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
    flex-direction: column;
    gap: 12px;
  }

  .content-split {
    flex: 1;
    display: flex;
    flex-direction: row;
    gap: 12px;
    width: 100%;
  }
</style>
