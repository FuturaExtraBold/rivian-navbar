<script>
  import { discoveryData } from '../../../stores/navStore';

  $: discoveryData;
</script>

<div class="links">
  {#each Object.values($discoveryData.links) as link}
    <div class="list">
      <div class="title">{link.title}</div>
      {#each Object.values(link.items) as item}
        <a class="item" href={item.href}>{item.text}</a>
      {/each}
    </div>
  {/each}
</div>

<style>
  .links {
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 280px;
    background-color: #fff;
  }

  .title {
    font-size: 12px;
    color: #666;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 40px;
  }

  .item {
    color: #000;
    text-decoration: none;
    font-size: 16px;
  }
</style>
