<template>
  <div class="landing-advantages">
    <div class="landing-advantages__wrapper wrapper">
      <div class="landing-advantages__content">
        <div class="landing-advantages__box">
          <h2 class="landing-advantages__title">What we do to help our client grow in digital era</h2>
          <LandingAdvantagesItem
            img="business"
            title="Make Your business To Be Better Famous In Internet"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
        <div class="landing-advantages__box">
          <div class="landing-advantages__item">
            <LandingAdvantagesItem
              img="home"
              title="Bring Technology To Your Comfrotable Home"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
          <div class="landing-advantages__item">
            <LandingAdvantagesItem
              img="custom"
              title="Build Your Digital Product That Suitable For Your Need"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LandingAdvantagesItem from "./LandingAdvantagesItem";
  export default {
    components: {LandingAdvantagesItem}
  }
</script>

<style scoped>
  .landing-advantages__content {
    display: flex;
  }

  .landing-advantages__title {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 2.25rem;
    line-height: 1.3;
    color: var(--main-color-dark);
    font-weight: 500;
  }

  .landing-advantages__box {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    width: 50%;
  }

  .landing-advantages__item {
    &:first-child {
      margin-bottom: 100px;
    }
  }
</style>
