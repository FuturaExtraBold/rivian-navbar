<div class="disclaimer">
  <span class="disclaimer-title">⚠️&nbsp;&nbsp;Disclaimer</span>
  <span>This is a personal project created for demonstration purposes.</span>
  <span>Nothing is offered for sale. Images and text are presentational.</span>
  <span>All related brand assets are the property of Rivian, LLC.</span>
</div>

<style lang="scss">
  .disclaimer {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 500px;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 20px;
    font-size: 0.9em;
    z-index: 200;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    gap: 6px;

    > span {
      margin: 0;
    }
  }

  .disclaimer-title {
    font-weight: bold;
    font-size: 1.4em;
  }
</style>
