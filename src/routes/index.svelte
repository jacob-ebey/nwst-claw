<script>
  import { onMount } from "svelte";

  import Content from "../components/Content.svelte";
  import HeaderImage from "../components/HeaderImage.svelte";

  import { createLoginCallback } from "../auth";

  async function googleMap(element) {
    const maps = (await import("google-maps")).default;

    maps.KEY = "AIzaSyB93xEuws0Lm37TmcBj5mc7SYj8uMGyHCo";
    maps.load(google => {
      const styledMapType = new google.maps.StyledMapType([
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5"
            }
          ]
        },
        {
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161"
            }
          ]
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#f5f5f5"
            }
          ]
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#bdbdbd"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#eeeeee"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#e5e5e5"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#dadada"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161"
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e"
            }
          ]
        },
        {
          featureType: "transit.line",
          elementType: "geometry",
          stylers: [
            {
              color: "#e5e5e5"
            }
          ]
        },
        {
          featureType: "transit.station",
          elementType: "geometry",
          stylers: [
            {
              color: "#eeeeee"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#c9c9c9"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e"
            }
          ]
        }
      ]);
      const map = new google.maps.Map(element, {
        center: { lat: 47.9, lng: -123.336588 },
        zoom: 8
      });
      map.mapTypes.set("styled_map", styledMapType);
      map.setMapTypeId("styled_map");
    });
  }

  let loggedIn = false;

  const login = createLoginCallback(res => {
    console.log(res);
    loggedIn = !!res && !res.errors;
  });

  function scrollToFind() {
    const elmnt = document.getElementById("locator-container");
    elmnt.scrollIntoView();
  }
</script>

<style>
  .hero-tag-line-text {
    margin: auto;
    width: 100%;
  }

  .hero-tag-line-text > p {
    margin: 0;
  }

  .hero-tag-line-text > hr {
    border: none;
    height: 1px;
    background-color: white;
  }

  .find-button {
    margin: auto;
    width: 100%;
  }

  .find-text, .animation-element-container-map {
    background-color: #fff;
    font-size: 29px !important;
    height: auto !important;
  }

  .find-white-claw-btn {
    max-width: 280px !important;
  }

  .jumps-text {
    color: white;
    width: 100%;
    font-weight: 800;
    font-size: 3em;
    margin: 1rem 0;
  }

  .flavor-finder-submit {
    border-right: 1px solid #ccc !important;
  }

  .logo-container {
    position: absolute;
    top: 1rem;
    right: 1rem;
    height: 120px;
    width: 120px;
  }

  .flavor-map-container,
  .map {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .flavor-map-search-block-container,
  .flavor-map-search-block-container-inner,
  .find-text {
    pointer-events: none;
  }

  form,
  .flavor-map-container,
  #flavor-finder-form,
  #flavor-list {
    pointer-events: all;
  }

  :global(.gmnoprint) {
    display: none !important;
  }

  @media (min-width: 1022px) {
    .flavor-finder-submit {
      display: flex;
      align-items: center;
      width: auto !important;
    }
  }

  #flavor-list {
    overflow-y: auto !important;
  }

  #locator-container {
    background: transparent !important;
    position: relative;
    padding-bottom: 0;
  }

  .find-others-button {
    background-color: transparent;
    cursor: pointer;
  }
</style>

<svelte:head>
  <title>NorthWhiteclaw ST/RS</title>
</svelte:head>

<header
  class="header-home d-xl-flex flex-xl-wrap align-items-xl-center
  justify-content-xl-center inner-link"
  data-link="home">
  <div class="overlay" />
  <div id="mob-detect" />
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

  <div class="logo-container mobile-hide">
    <img
      src="/logo-120.png"
      alt="White Claw White Logo"
      class="img-fluid logo-white" />
    <img
      src="https://www.whiteclaw.com/img/assets/logo-blk.png"
      alt="White Claw Black Logo"
      class="img-fluid logo-black d-none" />
  </div>

  <div class="header-home-inner w-100">
    <div class="container-fluid container-fluid-hero-images mx-auto">
      <div class="row justify-content-around text-center">
        <div
          class="d-none col-md-6 d-md-flex flex-wrap align-content-center
          animation-element-container bounce-up in-view"
          style="">
          <div
            class="align-self-center img-fluid hero-tag-line-text
            animation-element text-white">
            <p class="h2 text-center">
              <strong>NORTHWHITECLAW</strong>
            </p>
            <p class="h1 text-center">ST/RS</p>
            <hr />
            <p class="h3 text-center">PURE FUCKBOI</p>
          </div>
          <button
            class="find-others-button d-flex align-items-center
            justify-content-center find-white-claw-btn find-white-claw-btn--hero
            find-white-claw-btn--hero--position mt-4 font-weight-bold
            scroll-link animation-element find-button"
            on:click={scrollToFind}>
            <div class="btn-overflow" />
            <div class="btn-text">FIND OTHERS WHO CLAW</div>
          </button>
        </div>
        <div
          class="col-md-6 d-flex flex-wrap justify-content-end
          animation-element-container bounce-up in-view">

          <img
            class="hero-3-cans align-self-center img-fluid animation-element"
            src="https://www.whiteclaw.com/img/assets/hero-3-cans-lg.png"
            alt="Whiteclaw 3 cans image" />
          <p class="h1 text-center jumps-text">VERY CHINZ</p>
          <p class="h1 text-center jumps-text">MUCH JUMPS</p>
        </div>
      </div>
    </div>

    <div
      class="container-fluid container-fluid-hero-text mx-auto mb-md-3 mt-md-3
      mb-lg-4 mt-lg-4">
      <div
        class="row justify-content-around text-center
        animation-element-container bounce-up in-view">
        <div
          class="col-12 d-flex d-row justify-content-around animation-element">
          <div class="text-center">
            5%
            <br class="d-none d-sm-block d-md-none" />
            DOUCHE
          </div>
          <div class="d-flex flex-wrap align-content-center">
            <span class="mx-auto d-block d-sm-none d-md-block">•</span>
          </div>
          <div class="text-center">
            132
            <br class="d-none d-sm-block d-md-none" />
            COMBINED HP
          </div>
          <div class="d-flex flex-wrap align-content-center">
            <span class="mx-auto d-block d-sm-none d-md-block">•</span>
          </div>
          <div class="text-center">
            2g
            <br class="d-none d-sm-block d-md-none" />
            RANDOM DRUGS
          </div>
        </div>
      </div>
    </div>

    <div
      class="container-fluid container-fluid-hero-text mx-auto mb-4 pb-4 mt-2
      pt-2 my-sm-5 pb-sm-5 d-block d-md-none">
      <div class="row justify-content-around text-center">
        <div class="col-12 animation-element-container bounce-up in-view">
          <a
            href="#locator"
            class="d-flex align-items-center justify-content-center
            find-white-claw-btn find-white-claw-btn--hero mx-auto
            animation-element scroll-link">
            <div class="btn-overflow" />
            <div class="btn-text">FIND OTHERS WHO CLAW</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</header>
<section
  id="locator-container"
  class="locator inner-link"
  data-link="locator"
  style={loggedIn && 'height: 836px;'}>
  {#if loggedIn}
    <div
      class="flavor-map-container animation-element-container bounce-up in-view"
      use:googleMap />
  {/if}
  <div class="animation-element-container animation-element-container-map bounce-up in-view">
    <div class="flavor-map-search-block-container animation-element">
      <div class="flavor-map-search-block-container-inner mx-auto">
        <h1 class="text-center text-lg-left find-text">
          <span>Find</span>
          Others who claw
        </h1>
        <form id="flavor-finder-form">
          <div class="wrapper clearfix">
            {#if !loggedIn}
              <button on:click={login} class="flavor-finder-submit mobile-hide">
                Login
              </button>
              <!-- <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.facebook.com/groups/NWSTA/"
                class="flavor-finder-submit mobile-hide">
                ON FACEBOOK
              </a> -->
            {:else}
              <input
                placeholder="Enter Zip"
                type="text"
                name="flavor-finder-zip"
                class="flavor-finder-zip"
                maxlength="10" />
              <button class="flavor-finder-submit mobile-hide">Search</button>
              <button class="flavor-finder-submit mobile-hide">
                <span>Find Near Me</span>
              </button>
            {/if}
          </div>
          <div id="search-options" class="desktop-hide">
            {#if !loggedIn}
              <button on:click={login} class="flavor-mobile-submit">
                Login
              </button>
              <!-- <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.facebook.com/groups/NWSTA/"
                class="flavor-mobile-submit mobile-show">
                ON FACEBOOK
              </a> -->
            {:else}
              <button class="flavor-mobile-submit">Search</button>
              <span class="button-breaker">or</span>
              <button type="button" id="locate-me">Find Near Me</button>
            {/if}
          </div>
          {#if loggedIn}
            <div id="loading-container" class="">
              <div class="spinner">
                <div class="bounce1" />
                <div class="bounce2" />
                <div class="bounce3" />
              </div>
            </div>
          {/if}
        </form>
        <div id="form-no-results" class="error-bubble clearfix">
          Please enter a ZIP code.
        </div>
        {#if loggedIn}
          <div id="flavor-list">
            <div class="business clearfix">
              <a
                id="marker-list-0"
                data-target="marker-0"
                class="clearfix any-flavor"
                href="//maps.google.com/maps?saddr=My+Location&amp;daddr=1600%20SW%20HOLDEN%20ST%2098106"
                target="_blank">
                <p class="address-details">
                  <strong>7 ELEVEN</strong>
                  <br />
                  1600 SW HOLDEN ST 98106
                  <br />
                  (206) 763-1415
                </p>
                <span class="address-launcher">Go</span>
              </a>
            </div>
            <div class="business clearfix">
              <a
                id="marker-list-1"
                data-target="marker-1"
                class="clearfix any-flavor"
                href="//maps.google.com/maps?saddr=My+Location&amp;daddr=1513%20SW%20HOLDEN%20ST%2098106"
                target="_blank">
                <p class="address-details">
                  <strong>SEA MART</strong>
                  <br />
                  1513 SW HOLDEN ST 98106
                  <br />
                  (206) 766-9669
                </p>
                <span class="address-launcher">Go</span>
              </a>
            </div>
            <div class="business clearfix">
              <a
                id="marker-list-1"
                data-target="marker-1"
                class="clearfix any-flavor"
                href="//maps.google.com/maps?saddr=My+Location&amp;daddr=1513%20SW%20HOLDEN%20ST%2098106"
                target="_blank">
                <p class="address-details">
                  <strong>SEA MART</strong>
                  <br />
                  1513 SW HOLDEN ST 98106
                  <br />
                  (206) 766-9669
                </p>
                <span class="address-launcher">Go</span>
              </a>
            </div>
            <div class="business clearfix">
              <a
                id="marker-list-1"
                data-target="marker-1"
                class="clearfix any-flavor"
                href="//maps.google.com/maps?saddr=My+Location&amp;daddr=1513%20SW%20HOLDEN%20ST%2098106"
                target="_blank">
                <p class="address-details">
                  <strong>SEA MART</strong>
                  <br />
                  1513 SW HOLDEN ST 98106
                  <br />
                  (206) 766-9669
                </p>
                <span class="address-launcher">Go</span>
              </a>
            </div>
            <div class="business clearfix">
              <a
                id="marker-list-1"
                data-target="marker-1"
                class="clearfix any-flavor"
                href="//maps.google.com/maps?saddr=My+Location&amp;daddr=1513%20SW%20HOLDEN%20ST%2098106"
                target="_blank">
                <p class="address-details">
                  <strong>SEA MART</strong>
                  <br />
                  1513 SW HOLDEN ST 98106
                  <br />
                  (206) 766-9669
                </p>
                <span class="address-launcher">Go</span>
              </a>
            </div>
            <div class="business clearfix">
              <a
                id="marker-list-1"
                data-target="marker-1"
                class="clearfix any-flavor"
                href="//maps.google.com/maps?saddr=My+Location&amp;daddr=1513%20SW%20HOLDEN%20ST%2098106"
                target="_blank">
                <p class="address-details">
                  <strong>SEA MART</strong>
                  <br />
                  1513 SW HOLDEN ST 98106
                  <br />
                  (206) 766-9669
                </p>
                <span class="address-launcher">Go</span>
              </a>
            </div>
            <div class="business clearfix">
              <a
                id="marker-list-1"
                data-target="marker-1"
                class="clearfix any-flavor"
                href="//maps.google.com/maps?saddr=My+Location&amp;daddr=1513%20SW%20HOLDEN%20ST%2098106"
                target="_blank">
                <p class="address-details">
                  <strong>SEA MART</strong>
                  <br />
                  1513 SW HOLDEN ST 98106
                  <br />
                  (206) 766-9669
                </p>
                <span class="address-launcher">Go</span>
              </a>
            </div>
            <div class="business clearfix">
              <a
                id="marker-list-1"
                data-target="marker-1"
                class="clearfix any-flavor"
                href="//maps.google.com/maps?saddr=My+Location&amp;daddr=1513%20SW%20HOLDEN%20ST%2098106"
                target="_blank">
                <p class="address-details">
                  <strong>SEA MART</strong>
                  <br />
                  1513 SW HOLDEN ST 98106
                  <br />
                  (206) 766-9669
                </p>
                <span class="address-launcher">Go</span>
              </a>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>
