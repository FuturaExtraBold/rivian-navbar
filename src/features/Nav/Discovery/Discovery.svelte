<script>
  import DiscoveryActions from './DiscoveryActions.svelte';
  import DiscoveryContent from './DiscoveryContent.svelte';
  import DiscoveryLinks from './DiscoveryLinks.svelte';

  import { discoveryOpen } from '../../../stores/navStore.js';
  let open = false;
  discoveryOpen.subscribe((value) => (open = value));
</script>

<div class="discovery" class:open>
  <div class="container">
    <div class="divider"></div>
    <DiscoveryActions />
    <DiscoveryContent />
    <DiscoveryLinks />
  </div>
</div>

<style>
  .discovery {
    background-color: #fff;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0;
    height: 0;
    opacity: 0;

    > * {
      margin: 0;
    }
  }

  .divider {
    width: 100%;
    height: 2px;
    background-color: #eee;
    position: absolute;
    top: 0;
    left: 0;
  }

  .container {
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #eee;
  }

  .discovery.open {
    opacity: 1;
    height: calc(100vh - 120px);
    transition: opacity 0.2s ease-in-out;
  }
</style>
