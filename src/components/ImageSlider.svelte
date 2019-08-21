<script>
  import { onMount } from "svelte";
  import Siema from "siema";

  export let images;

  const id = "slider-" + new Date().getUTCMilliseconds().toString();
  let siema;

  onMount(() => {
    siema = new Siema({
      selector: `#${id}`
    });
  });

  function onNextClicked() {
    siema && siema.next();
  }

  function onPreviousClicked() {
    siema && siema.prev();
  }
</script>

<style>
  .wrapper {
    position: relative;
    height: 100%;
  }

  .siema {
    overflow: hidden;
  }

  .siema > :global(div) > :global(div) {
    display: flex;
    justify-content: center;
  }

  .siema,
  .siema > :global(div),
  .siema > :global(div) > :global(div) {
    height: 100%;
  }

  img {
    display: block;
    object-fit: contain;
  }

  button {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 2rem;
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
  }

  button:active {
    background-color: rgba(0, 0, 0, 0.3);
  }

  button:focus {
    outline: none;
  }

  .previous-button {
    left: 0;
  }

  .next-button {
    right: 0;
  }
</style>

<div class="wrapper">
  <div {id} class="siema">
    {#each images as image}
      <img alt={image.alt || 'Product Image'} src={image.src} />
    {/each}
  </div>
  <button class="previous-button" on:click={onPreviousClicked}>
    <i class="icon icon-arrow-left" />
  </button>
  <button class="next-button" on:click={onNextClicked}>
    <i class="icon icon-arrow-right" />
  </button>
</div>
