<script>
  export let title;
</script>

<style>
  .page-header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 1.5rem 0;
    border-top: 1px solid #f3f3f3;
    border-bottom: 1px solid #f3f3f3;
    text-transform: uppercase;
  }

  .page-header > div {
    display: flex;
    flex-wrap: wrap;
  }

  h1 {
    margin: 1rem 0;
    flex: 1;
    font-size: 1.5em;
    font-weight: 700;
    margin-right: 0.5rem;
  }
</style>

<div class="page-header">
  <h1>{title}</h1>
  <div>
    <slot />
  </div>
</div>
