<script>
  export let column;
  export let item;
</script>

<style>
  .Rtable-cell-label {
    display: none;
    color: #3b4351;
    font-weight: 800;
  }

  @media (max-width: 600px) {
    .Rtable-cell-label {
      display: block;
    }
  }

  @media (min-width: 601px) {
    .Rtable-cell-content {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>

{#if column.label}
  <div class="Rtable-cell-label">{column.label}</div>
{/if}
<div class="Rtable-cell-content">
  {column.value ? (typeof column.value === 'function' ? column.value(item) : column.value) : item[column.key]}
</div>
