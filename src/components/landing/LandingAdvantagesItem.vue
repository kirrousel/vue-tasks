<template>
  <div class="landing-advantages-item">
    <img
      class="landing-advantages-item__img"
      :class="'landing-advantages-item__img--' + img"
      :src="'/img/advantages-' + img + '.png'"
      :alt=img
    >
    <h3 class="landing-advantages-item__title">{{ title }}</h3>
    <p class="landing-advantages-item__text">{{ text }}</p>
    <router-link to="#" class="landing-advantages-item__link">
      Learn more
      <svg class="landing-advantages-item__ico">
        <use xlink:href="#arrow-right"></use>
      </svg>
    </router-link>
  </div>
</template>

<script>
  export default {
    props: ['img', 'title', 'text' ]

  }
</script>

<style scoped>
  .landing-advantages-item {
    position: relative;
    padding: 236px 48px 48px;
    max-width: 380px;
    box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
    border-radius: 10px;
    background-color: var(--color-white);
    box-sizing: border-box;
  }

  .landing-advantages-item__img {
    position: absolute;
    top: 48px;
    left: 50%;
    transform: translateX(-50%);
    height: 132px;
    width: auto;
  }

  .landing-advantages-item__img--home {
    top: -21px;
    width: 224px;
    height: auto;

  }

  .landing-advantages-item__img--custom {
    width: 156px;
    height: auto;

  }

  .landing-advantages-item__title {
    margin-bottom: 16px;
    font-size: 2rem;
    line-height: 1.5;
    font-weight: 500;
    color: var(--main-color-darkest);
  }

  .landing-advantages-item__text {
    margin-bottom: 32px;
    font-size: 1.6rem;
    line-height: 1.625;
    letter-spacing: 0.05em;
    color: var(--main-color-darkest);
    opacity: 60%;
  }

  .landing-advantages-item__link {
    position: relative;
    padding-right: 48px;
    display: inline-block;
    font-size: 1.4rem;
    line-height: 2.2;
    color: var(--main-color-light);
    font-weight: 500;

    &:hover {
      opacity: .9;
    }
  }

  .landing-advantages-item__ico {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    fill: var(--main-color-light);
  }
</style>
