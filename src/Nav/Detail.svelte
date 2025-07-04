<script>
  console.log("Detail component loaded");
  export let open = false;
  export let title = '';
</script>

<div class="detail" class:open={open}>
  <h1>{title}</h1>
  <p>This is a placeholder for the detail view.</p>
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
      height: 300px;
      padding: 20px;
    }
  }
</style>