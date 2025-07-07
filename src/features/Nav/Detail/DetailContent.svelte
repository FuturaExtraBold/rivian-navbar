<script>
  import { getContext, tick } from 'svelte';
  import { gsap } from 'gsap';

  // Is the Detail open?
  const detailOpen = getContext('detailOpen');
  let open = false;
  detailOpen.subscribe((value) => (open = value));

  // Get vehicle data from context
  const detailData = getContext('detailData');
  let vehicle = {};
  detailData.subscribe((value) => (vehicle = value));

  let title, vehicleImage, startingPrice;

  $: {
    title = vehicle.title;
    vehicleImage = vehicle.image;
    startingPrice = vehicle.startingPrice;
  }

  // Image animation
  let imageEl;
  $: if (imageEl && vehicleImage) {
    tick().then(() => {
      gsap.fromTo(imageEl, { x: 30 }, { x: 0, duration: 1, ease: 'expo.out' });
    });
  }
</script>

<div class="content" class:open>
  <div class="image">
    <img bind:this={imageEl} src={vehicleImage} alt={title} />
  </div>
  <span class="title">{title}</span>
  {#if startingPrice}
    <span class="pricing">
      <span>Starting at</span>
      <br />
      <span>{startingPrice}</span>
    </span>
  {/if}
</div>

<style lang="scss">
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #eee;
    position: relative;
  }

  .content.open {
    .image img {
      display: block;
    }
  }

  .image img {
    max-width: 100%;
    height: auto;
    display: none;
  }

  .title {
    position: absolute;
    top: 30px;
    left: 30px;
    font-size: 32px;
    font-weight: bold;
    line-height: 1;
  }

  .pricing {
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 12px;
    color: #666;
    text-align: right;
  }
</style>
