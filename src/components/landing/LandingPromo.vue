<template>
  <div class="landing-promo">
    <div class="landing-promo__wrapper wrapper">
      <div class="landing-promo__content">
        <div class="landing-promo__box">
          <h2 class="landing-promo__title">Interested to work with our team?</h2>
          <p class="landing-promo__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
        <div class="landing-promo__box landing-promo__box--action">
          <button type="button" class="landing-promo__button button">Let’s Talk</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .landing-promo {
    position: relative;
  }

  .landing-promo__title {
    margin-bottom: 32px;
    max-width: 370px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    font-size: 2.25rem;
    line-height: 1.28;
  }

  .landing-promo__text {
    font-size: 1rem;
    line-height: 1.625;
    color: #FFFFFF;
    opacity: 0.6;
  }

  .landing-promo__content {
    padding-bottom: 96px;
    display: flex;
    border-bottom: 1px solid #83A0C2;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 50%;
      height: 1px;
      background-color: #83A0C2;
    }
  }

  .landing-promo__box {
    width: 50%;
  }

  .landing-promo__box--action {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }


</style>
