<script>
  export let title;
  export let image;
  export let lightText;
  export let className = '';
  export let verticalCenter = false;
</script>

<div class="feature {className === 'first' ? 'feature--first' : ''}">
  <div class="background" style="background-image: url({image});"></div>
  <div class="container {verticalCenter ? 'container--vertical-center' : ''}">
    <span class="title {lightText ? 'title--light' : ''}">
      {title}
    </span>
  </div>
</div>

<style lang="scss">
  .feature {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    transition: border-radius 0.3s ease-out;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    flex: 1;
    background-color: #f9f9f9;
  }

  .background {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    position: absolute;
    background-size: cover;
    background-position: center;
    transition: transform 0.3s ease-out;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 20px;
  }

  .container--vertical-center {
    justify-content: center;
  }

  .title {
    position: relative;
    font-size: 32px;
    font-weight: 600;
    color: #000;
    letter-spacing: -2px;
  }

  .feature--first .title {
    font-size: 42px;
  }

  .title--light {
    color: #fff;
  }

  .feature:hover {
    border-radius: 24px;

    .background {
      transform: scale(1.05);
    }
  }
</style>
