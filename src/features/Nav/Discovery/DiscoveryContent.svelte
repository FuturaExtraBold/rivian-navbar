<script>
  console.log('DiscoveryContent component loaded');
</script>

<div class="content">
  <div class="item"></div>
  <div class="item"></div>
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
    gap: 20px;
  }

  .item {
    width: 100%;
    height: 100%;
    background-color: red;
    border-radius: 20px;
    transition: border-radius 0.2s ease-in-out;
    cursor: pointer;
    overflow: hidden;
  }

  .item:hover {
    border-radius: 40px;
  }
</style>
