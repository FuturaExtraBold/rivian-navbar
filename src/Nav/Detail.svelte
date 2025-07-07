<script>
  console.log('Detail component loaded');

  import { tick } from 'svelte';
  import { gsap } from 'gsap';
  import NavButton from './NavButton.svelte';

  // Props
  export let open = false;
  export let vehicle = {};
  let title,
    vehicleImage,
    startingPrice,
    actions = [];

  // Reactive
  $: {
    title = vehicle.title;
    vehicleImage = vehicle.image;
    startingPrice = vehicle.startingPrice;
    actions = vehicle.actions;
  }

  // Image animation
  let imageEl;
  $: if (imageEl && vehicleImage) {
    tick().then(() => {
      gsap.fromTo(imageEl, { x: 30 }, { x: 0, duration: 1, ease: 'expo.out' });
    });
  }
</script>

<div class="detail" class:open>
  <div class="detail-divider"></div>
  <div class="detail-content">
    <div class="detail-actions">
      {#each actions as action}
        <NavButton
          title={action.label}
          className="nav-button--full nav-button--light"
          on:click={() => {
            console.log(`Action clicked: ${action.label}`);
          }}
        />
      {/each}
    </div>
    <div class="detail-image">
      <img bind:this={imageEl} src={vehicleImage} alt={title} />
      <span class="detail-image-title">{title}</span>
      {#if startingPrice}
        <span class="detail-image-pricing">
          <span>Starting at</span>
          <br />
          <span>{startingPrice}</span>
        </span>
      {/if}
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
    opacity: 0;
    transition: opacity 0.2s ease-in-out;

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
    gap: 6px;
  }

  .detail-image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #eee;
    position: relative;

    img {
      max-width: 100%;
      height: auto;
      display: none;
    }
  }

  .detail-image-title {
    position: absolute;
    top: 30px;
    left: 30px;
    font-size: 32px;
    font-weight: bold;
    line-height: 1;
  }

  .detail-image-pricing {
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 12px;
    color: #666;
    text-align: right;
  }

  .detail.open {
    height: 400px;
    opacity: 1;

    .detail-image img {
      display: block;
    }
  }
</style>
