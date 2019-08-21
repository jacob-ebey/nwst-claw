<script>
  import Header from "../components/Header.svelte";
  import Sidebar from "../components/Sidebar.svelte";

  export let segment;

  let sidebarOpen = false;

  const preventScroll = event => {
    event.preventDefault();
  };

  function toggleSidebar() {
    sidebarOpen = !sidebarOpen;

    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
</script>

<div>
  <slot {toggleSidebar} />
</div>

<Sidebar {sidebarOpen} {toggleSidebar} />
