<script>
  import { cx } from "../tools";

  export let alt = "Header Image";
  export let src;
</script>

<style>
  video {
    position: static;
    display: block;
    height: 33%;
    width: 100%;
    object-fit: cover;
  }
</style>
<video
  id="header-home-video-container"
  playsinline="playsinline"
  autoplay="autoplay"
  muted="muted"
  loop="loop"
  class="header-video">
  <source
    src="https://www.whiteclaw.com/videos/white-claw-website-wave-cinemagraph.mp4"
    type="video/mp4" />
</video>
