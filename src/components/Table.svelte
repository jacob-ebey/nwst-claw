<script>
  import TableCellContent from "./TableCellContent.svelte";

  export let columns = [];
  export let items = [];
  export let href;
</script>

<style>
  .Rtable {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
  }

  .Rtable-cell {
    display: block;
    box-sizing: border-box;
    flex-grow: 1;
    width: 100%;
    padding: 0.5rem;
    overflow: hidden;
    list-style: none;
    border-bottom: 1px solid #dadee4;
    color: #3b4351;
  }

  .Rtable-cell-head {
    font-weight: 800;
  }

  @media (max-width: 600px) {
    .Rtable {
      display: block;
    }

    .Rtable-cell {
      width: 100% !important;
      border-bottom: none;
      border-left: 1px solid #dadee4;
      border-right: 1px solid #dadee4;
    }

    .Rtable-cell-head {
      display: none;
    }

    .Rtable-cell-first {
      border-top: 1px solid #dadee4;
    }

    .Rtable-cell-last {
      border-bottom: 1px solid #dadee4;
      margin-bottom: 1rem;
    }

    .Rtable-cell-last:last-child {
      margin-bottom: 0;
    }
  }
</style>

<div class="Rtable">
  {#each columns as column, i (column.key)}
    <div
      class="Rtable-cell Rtable-cell-head"
      style={`width: ${100 / columns.length}%;`}>
      {column.label}
    </div>
  {/each}
  {#each items as item}
    {#each columns as column, i (column.key)}
      {#if href}
        <a
          class={'Rtable-cell' + (i === 0 ? ' Rtable-cell-first' : i === columns.length - 1 ? ' Rtable-cell-last' : '')}
          style={`width: ${100 / columns.length}%;`}
          href={typeof href === 'function' ? href(item) : href}>
          <TableCellContent {column} {item} />
        </a>
      {:else}
        <div class="Rtable-cell" style={`width: ${100 / columns.length}%;`}>
          <TableCellContent {column} {item} />
        </div>
      {/if}
    {/each}
  {:else}
    <p>No items...</p>
  {/each}
</div>
