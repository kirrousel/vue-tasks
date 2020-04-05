<template>
  <div class="header">
    <div class="header__wrapper wrapper wrapper--catalog">
      <div class="header__content">
        <div class="header__box">
          <BaseLogo/>
        </div>
        <div class="header__box header__box--nav">
          <BaseNav></BaseNav>
        </div>
        <div class="header__box">
          <button class="header__button" type="button">
            <svg class="header__ico">
              <use href="#catalog-search"></use>
            </svg>
          </button>

          <button class="header__button" type="button">
            <span class="header__counter">1</span>
            <svg class="header__ico">
              <use href="#catalog-favourite"></use>
            </svg>
          </button>

          <button class="header__button" type="button">
            <svg class="header__ico">
              <use href="#catalog-cart"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BaseLogo from "../base/BaseLogo.vue";
  import BaseNav from "../base/BaseNav.vue";

  export default {
    components: {BaseLogo, BaseNav}
  }
</script>

<style scoped>
  .header {}

  .header__content {
    display: flex;
    margin: 0 -5px;
  }

  .header__box {
    padding: 0 5px;
    box-sizing: border-box;
  }

  .header__box--nav {
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }

  .header__button {
    margin-left: 18px;
    position: relative;
    height: 22px;
    width: 16px;
  }

  .header__ico {
    position: absolute;
    width: 16px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 16px;
    fill: #1B1A17;
  }

  .header__counter {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -2px);
    width: 13px;
    height: 13px;
    font-size: .5rem;
    line-height: 13px;
    color: #1B1A17;
    background-color: #E6C8B4;
    border-radius: 50%;
    z-index: 1;
    font-family: var(--font-catalog-primary);
  }

</style>
