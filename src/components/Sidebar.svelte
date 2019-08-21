<script>
  import { cx } from "../tools";

  export let sidebarOpen = false;
  export let toggleSidebar;
</script>

<style>
  .my-sidebar {
    z-index: 999;
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 15rem;
    max-width: 80vw;
    left: -18rem;
    top: 0;
    bottom: 0;
    background-color: #ffffff;
    transition-duration: 0.25s;
  }

  .my-sidebar__open {
    left: 0;
  }

  .my-sidebar-overlay {
    display: none;
    z-index: 999;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(56, 56, 56, 0.5);
  }

  .my-sidebar-overlay__open {
    display: block;
    opacity: 1;
    animation: fadein 0.25s;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .sidebar-close-button {
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

  .nav-overflow {
    position: relative;
    overflow-y: auto;
    padding: 2em 0;
    flex: 1;
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 100%;
  }

  nav dl {
    margin-bottom: 2rem;
  }

  nav dt {
    margin-bottom: 1rem;
  }

  nav dt a {
    color: #3b4351;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.75em;
  }

  nav dt a:hover:after {
    transform: scaleX(1);
  }

  nav dt a:after {
    background-color: #3b4351;
    left: 0;
    position: absolute;
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    width: 100%;
    bottom: 0;
    height: 2px;
    content: "";
    display: block;
  }

  .follow-icons {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    padding: 1em 0;
    margin-bottom: 1em;
  }
</style>

<div
  class={cx('my-sidebar-overlay', sidebarOpen && 'my-sidebar-overlay__open')}
  on:click={toggleSidebar} />
<div class={cx('my-sidebar', sidebarOpen && 'my-sidebar__open')}>
  <div>
    <button
      class="sidebar-close-button"
      aria-label="Close Sidebar"
      on:click={toggleSidebar}
      tabindex="0">
      <i class="icon icon-cross" />
    </button>
  </div>
  <div class="nav-overflow">
    <nav>
      <dl>
        <dt>
          <a on:click={toggleSidebar} href="/">Home</a>
        </dt>
        <dt>
          <a on:click={toggleSidebar} href="/products">Products</a>
        </dt>
        <dt>
          <a on:click={toggleSidebar} href="/contact-us">Contact us</a>
        </dt>
        <dt>
          <a on:click={toggleSidebar} href="/dashboard">Dashboard</a>
        </dt>
        <dl>
          <a on:click={toggleSidebar} href="/dashboard/products">Products</a>
        </dl>
      </dl>

      <div>
        <span>FOLLOW US</span>
        <div class="follow-icons">
          <a
            aria-label="Facebook"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.facebook.com/groups/NWSTA">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.0"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              style="null"
              class="icon">
              <path
                d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z
                M39,17h-3
                c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z" />
            </svg>
          </a>
        </div>
      </div>

      <a href="/returns-policy">Returns Policy</a>
      <a href="/privacy-policy">Cookie & privacy policy</a>
    </nav>
  </div>
</div>
