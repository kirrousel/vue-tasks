<template>
  <div class="header">
    <div class="header__box header__box--search">
      <div class="header__search header-search">
        <svg class="header-search__ico">
          <use href="#dashboard-search"></use>
        </svg>
        <input class="header-search__input" type="search" placeholder="Global search"/>
      </div>
    </div>
    <div class="header__box">
      <button type="button" class="header__button">
        <svg class="header__ico">
          <use href="#dashboard-notification"></use>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .header {
    display: flex;
    align-items: center;
    padding: 10px 35px;
    height: 60px;
    background-color: var(--color-white);
    box-sizing: border-box;
    border-bottom: 1px solid #EBEFF2;
  }

  .header__box {

  }

  .header__box--search {
    flex-grow: 1;
  }

  .header-search {
    position: relative;
  }

  .header-search__input {
    width: 100%;
    max-width: 300px;
    padding: 0 32px;

    &::placeholder {
      color: var(--dashboard-grey);
    }
  }

  .header-search__ico {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 20px;
    height: 20px;
    filL: var(--dashboard-grey-icon);
  }

  .header__button {
    position: relative;
    width: 32px;
    height: 32px;
  }

  .header__ico {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    width: 16px;
    height: 20px;
    fill: var(--dashboard-grey-icon);
  }

</style>
