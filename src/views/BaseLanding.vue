<template>
  <div class="landing">
    <div class="landing__section">
      <LandingHero/>
    </div>
    <div class="landing__section landing__section--advantages">
      <LandingAdvantages/>
    </div>
    <div class="landing__section landing__section--projects">
      <LandingProjects/>
    </div>
    <div class="landing__section-wrapper">
      <div class="landing__section landing__section--clients">
        <LandingClients/>
      </div>

      <div class="landing__section-wrapper landing__section-wrapper--dark">

        <div class="landing__section landing__section--promo">
          <LandingPromo/>
        </div>

        <div class="landing__section landing__section--footer">
          <LandingFooter/>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import LandingHero from "../components/landing/LandingHero.vue";
  import LandingAdvantages from "../components/landing/LandingAdvantages";
  import LandingProjects from "../components/landing/LandingProjects";
  import LandingClients from "../components/landing/LandingClients";
  import LandingPromo from "../components/landing/LandingPromo";
  import LandingFooter from "../components/landing/LandingFooter";


  export default {
    components: {LandingClients, LandingAdvantages, LandingHero, LandingProjects, LandingPromo, LandingFooter}
  }
</script>

<style scoped>
  .landing__section {
    margin-bottom: 50px;

    @media (--viewport-tablet)  {
      margin-bottom: 180px;
    }
  }

  .landing__section-wrapper {
    margin-bottom: 0;
    border-radius: 50px 0 0 0;
    padding-top: 50px;
    background-color: #5A98D0;

    @media (--viewport-tablet) {
      border-radius: 130px 0 0 0;
      padding-top: 96px;
    }

    @media (--viewport-desktop) {
      border-radius: 0 200px 0 0;
    }
  }

  .landing__section-wrapper--dark {
    margin-right: 15px;
    padding-top: 45px;
    padding-bottom: 40px;
    background-color: #316099;
    border-radius: 0 50px 0 0;

    @media (--viewport-tablet) {
      margin-right: 20px;
      padding-top: 91px;
      padding-bottom: 64px;
      border-radius: 0 130px 0 0;
    }

    @media (--viewport-desktop) {
      margin-right: 96px;
      border-radius: 0 200px 0 0;
    }
  }

  .landing__section--clients {
    margin-bottom: 111px;
  }

  .landing__section--promo {
    margin-bottom: 30px;

    @media (--viewport-tablet) {
      margin-bottom: 96px;
    }
  }

  .landing__section--footer {
    margin-bottom: 0;
  }

</style>
