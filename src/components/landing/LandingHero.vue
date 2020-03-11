<template>
  <div class="landing-hero">
    <div class="landing-hero__wrapper wrapper">
      <img class="landing-hero__img" src="/img/hero-img.png" alt="hero-img">
      <div class="landing-hero__content">
        <h1 class="landing-hero__title">New Automation Tool for Your Home</h1>
        <p class="landing-hero__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus tristique vulputate ultrices ut mauris tellus at. Posuere sollicitudin odio tellus elit.</p>
        <button type="button" class="landing-hero__button button">See Our Project</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .landing-hero {
    height: 100%;
    min-height: calc(100vh - 89px); /*headers*/
    background: linear-gradient(0deg, rgba(152, 195,232, 0.2) 8.84%, rgba(152, 195, 232, 0) 31.12%);

    @media (--viewport-tablet) {
      min-height: 717px;
      overflow: hidden;
    }
  }

  .landing-hero__wrapper {
    position: relative;
    height: 100%;
  }

  .landing-hero__img {
    display: none;
    position: absolute;
    right: -180px;
    top: 80px;
    width: 688px;
    height: auto;

    @media (--viewport-tablet) {
      display: block;
    }

  }

  .landing-hero__content {
    padding: 40px 0 70px;
    height: 100%;
    max-width: 510px;
    vertical-align: middle;
    box-sizing: border-box;

    @media (--viewport-tablet) {
      padding-top: 101px;
    }
  }

  .landing-hero__title {
    margin-bottom: 40px;
    font-size: 2.625rem;
    line-height: 1.16;
    letter-spacing: 0.04em;
    color: var(--main-color-darkest);
    font-weight: bold;

    @media (--viewport-tablet) {
      margin-bottom: 32px;
      font-size: 3rem;
    }

  }

  .landing-hero__subtitle {
    margin-bottom: 71px;
    max-width: 425px;
    font-size: 1rem;
    line-height: 1.625;
    color: var(--main-color-darkest);
    opacity: 60%;
  }

</style>
