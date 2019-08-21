<script>
  import { cx } from "../tools";

  export let sidebarOpen = false;
  export let toggleSidebar;
</script>

<style>
  .header {
    z-index: 998;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    height: 5em;
    backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 0.65);
    border-bottom: 1px solid #f3f3f3;
  }

  .columns {
    flex-wrap: nowrap;
  }

  .header-button {
    user-select: none;
    cursor: pointer;
    height: 2.5em;
    width: 2.5em;
    margin: 1.25em;
    border: 0;
    padding: 0;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header-brand-text {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<header class="header container">
  <div class="columns">
    <button
      aria-label="Open Sidebar"
      on:click={toggleSidebar}
      tabindex="0"
      class="header-button">
      <i class="icon icon-menu" />
    </button>

    <div class="header-brand-text column">
      <a href="/">NorthWhiteclaw ST/RS</a>
    </div>
  </div>
</header>
