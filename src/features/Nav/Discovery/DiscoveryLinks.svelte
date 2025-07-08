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
    padding: var(--spacing);
    padding-right: var(--spacing-large);
    width: 280px;
    background-color: #fff;
    border-left: var(--border-default);
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
    line-height: 1.5;
  }
</style>
