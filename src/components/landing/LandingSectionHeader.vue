<template>
  <div class="section-header">
    <h2 class="section-header__title">Our Finished Project</h2>
    <p class="section-header__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
  </div>
</template>
<script>
  export default {
    name: 'LandingSectionHeader'
  }
</script>
<style scoped>
  .section-header {
    margin-bottom: 50px;
    color: var(--main-color-darkest);
    letter-spacing: 0.05em;

    @media (--viewport-tablet) {
      display: flex;
      margin-bottom: 96px;
    }
  }

  .section-header--light {
    color: #FFFFFF;
  }

  .section-header__title {
    margin-bottom: 50px;
    flex-shrink: 0;
    max-width: 239px;
    font-size: 1.75rem;

    @media (--viewport-tablet) {
      margin-right: 93px;
      font-size: 2.25rem;
    }
  }

  .section-header__text {
    max-width: 540px;
    font-size: 1rem;
    opacity: 0.6;
  }

</style>
