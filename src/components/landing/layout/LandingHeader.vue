<template>
  <div class="header">
    <div class="header__wrapper wrapper wrapper--header">
      <div class="header__content">
        <div class="header__box header__box--logo">
          <img class="header__logo" src="/logo.svg" alt="logo">
        </div>
        <div class="header__box">
          <button class="header__button" type="button">
            <span class="header__ico"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LandingHeader'
  }
</script>

<style scoped>
  .header {
    position: sticky;
    top: 0;
    background-color: var(--color-white);
  }

  .header__content {
    display: flex;
    align-items: center;

  }

  .header__box {
    flex-shrink: 0;
  }

  .header__box--logo {
    flex-grow: 1;
    text-align: left;
  }

  .header__wrapper {
    max-width: 1200px;
  }

  .header__logo {
    width: 48px;
    height: 48px;
  }

  .header__button {
    position: relative;
    width: 32px;
    height: 32px;
  }

  .header__ico  {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    display: block;
    width: 24px;
    height: 3px;
    background-color: var(--main-color);

    &:before, &:after {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: inherit;
      height: inherit;
      background-color: inherit;
    }

    &:before {
      top: -6px;
    }

    &:after {
      bottom: -6px;
    }
  }


</style>
