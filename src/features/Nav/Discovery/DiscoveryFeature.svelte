<script>
  export let title;
  export let image;
  export let largeType;
  export let lightText;
</script>

<div class="feature">
  <div class="background" style="background-image: url({image});"></div>
  <div class="container">
    <span class="title {largeType ? 'title--large' : ''} {lightText ? 'title--light' : ''}">
      {title}
    </span>
  </div>
</div>

<style lang="scss">
  .feature {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    transition: border-radius 0.3s ease-out;
    cursor: pointer;
    overflow: hidden;
    position: relative;
  }

  .background {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    position: absolute;
    background-size: cover;
    background-position: center;
    transition: all 0.3s ease-out;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 20px;
  }

  .title {
    position: relative;
    font-size: 32px;
    font-weight: 600;
    color: #000;
    letter-spacing: -2px;
  }

  .title--large {
    font-size: 42px;
  }

  .title--light {
    color: #fff;
  }

  .feature:hover {
    border-radius: 30px;

    .background {
      transform: scale(1.05);
    }
  }
</style>
