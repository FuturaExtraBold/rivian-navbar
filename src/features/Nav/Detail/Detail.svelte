<script>
  import DetailActions from './DetailActions.svelte';
  import DetailContent from './DetailContent.svelte';

  import { detailOpen } from '../../../stores/navStore.js';

  let open;
  detailOpen.subscribe((value) => (open = value));
</script>

<div class="detail" class:open>
  <div class="divider"></div>
  <div class="container">
    <DetailActions />
    <DetailContent />
  </div>
</div>

<style lang="scss">
  :root {
    --color-detail-bg: #fff;
  }

  .detail {
    background-color: var(--color-detail-bg);
    height: 0;
    width: 100%;
    position: relative;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;

    > * {
      margin: 0;
    }
  }

  .container {
    display: flex;
    height: 100%;
    width: 100%;
  }

  .divider {
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #eee;
  }

  .detail.open {
    height: 400px;
    opacity: 1;
  }
</style>
