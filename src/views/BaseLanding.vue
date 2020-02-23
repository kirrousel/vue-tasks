<template>
  <div class="landing">
    <div class="landing__section">
      <LandingHero/>
    </div>
    <div class="landing__section landing__section--advantages">
      <LandingAdvantages/>
    </div>
  </div>
</template>

<script>
  import LandingHero from "../components/landing/LandingHero.vue";
  import LandingAdvantages from "../components/landing/LandingAdvantages";
  export default {
    components: {LandingAdvantages, LandingHero}
  }
</script>

<style scoped>
  .landing__section {
    margin-bottom: 180px;
  }
</style>
