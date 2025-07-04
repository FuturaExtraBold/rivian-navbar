<script>
  console.log("Detail component loaded");
  export let open = false;
  export let title = '';
</script>

<div class="detail" class:open={open}>
  <div class="detail-content">
    <div class="detail-actions">
      <h1>Actions</h1>
    </div>
    <div class="detail-image">
      <h1>{title}</h1>
      <p>This is a placeholder for the detail view.</p>
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
    
    &.open {
      height: 400px;
    }
  }

  .detail-content {
    display: flex;
    gap: 20px;
    height: 100%;
    width: 100%;
    border-top: 2px solid #eee;
  }

  .detail-actions {
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 400px;
    border-right: 2px solid #eee;
  }
</style>