<script>
  console.log('Discovery component loaded');

  // Props
  export let open = false;
</script>

<div class="discovery" class:open>
  <h1>Discovery</h1>
  <p>Explore new content and features here!</p>
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

  .discovery.open {
    opacity: 1;
    height: calc(100vh - 120px);
    transition: opacity 0.2s ease-in-out;
  }
</style>
