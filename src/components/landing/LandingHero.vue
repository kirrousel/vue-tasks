<template>
  <div class="landing-hero">
    <div class="landing-hero__wrapper wrapper">
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
    min-height: 717px;
    background: linear-gradient(0deg, rgba(152, 195,232, 0.2) 8.84%, rgba(152, 195, 232, 0) 31.12%), url(/img/hero-img.png) no-repeat 95% top;
  }

  .landing-hero__wrapper {
    height: 100%;
  }

  .landing-hero__content {
    padding-top: 101px;
    height: 100%;
    max-width: 510px;
    vertical-align: middle;
    box-sizing: border-box;
  }

  .landing-hero__title {
    margin-bottom: 32px;
    font-size: 4.8rem;
    line-height: 1.16;
    letter-spacing: 0.04em;
    color: var(--main-color-darkest);
    font-weight: bold;

  }

  .landing-hero__subtitle {
    margin-bottom: 71px;
    max-width: 425px;
    font-size: 1.6rem;
    line-height: 1.625;
    color: var(--main-color-darkest);
    opacity: 60%;


  }

</style>
