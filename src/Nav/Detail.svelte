<script>
  console.log('Detail component loaded');
  export let open = false;
  export let title = '';
  export let vehicleImage = null;
</script>

<div class="detail" class:open>
  <div class="detail-divider"></div>
  <div class="detail-content">
    <div class="detail-actions">
      <h1>Actions</h1>
      <h1>{title}</h1>
      <p>This is a placeholder for the detail view.</p>
    </div>
    <div class="detail-image">
      <img src={vehicleImage} alt={title} />
    </div>
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

    > * {
      margin: 0;
    }
  }

  .detail-content {
    display: flex;
    height: 100%;
    width: 100%;
  }

  .detail-divider {
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #eee;
  }

  .detail-actions {
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 400px;
  }

  .detail-image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #eee;

    img {
      max-width: 100%;
      height: auto;
      display: none;
    }
  }

  .detail.open {
    height: 400px;

    .detail-image img {
      display: block;
    }
  }
</style>
