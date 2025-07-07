<script>
  console.log('DiscoveryContent component loaded');
  import DiscoveryFeature from './DiscoveryFeature.svelte';
  import { discovery } from '../../../data/discovery.js';

  console.log('Discovery data:', discovery);

  let features = discovery.actions[0].features || [];

  console.log('Discovery features:', features);
</script>

<div class="content">
  {#each Object.values(features) as feature}
    <DiscoveryFeature {...feature} />
  {/each}
</div>

<style>
  .content {
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: #fff;
    border-left: 2px solid #eee;
    border-right: 2px solid #eee;
    flex-direction: column;
    gap: 12px;
  }
</style>
