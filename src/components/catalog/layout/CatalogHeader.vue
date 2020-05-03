<template>
  <div class="catalog-header">
    <div class="catalog-header__content">
      <div class="catalog-header__item catalog-header__item--title">
        <h1 class="catalog-header__title">Мужские часы</h1>
      </div>
      <div class="catalog-header__item catalog-header__item--actions">
        <button type="button" class="catalog-header__filters catalog-button">
          Фильтры
        </button>
        <BaseSorting/>
      </div>
    </div>
  </div>
</template>

<script>
  import BaseSorting from "../base/BaseSorting";

  export default {
    components: {BaseSorting}
  }
</script>

<style scoped>
  .catalog-header__content {
    display: flex;
    flex-direction: column;

    @media (--viewport-desktop) {
      flex-direction: row;
      align-items: center;
    }
  }

  .catalog-header__item--title {
    margin-bottom: 16px;
    flex-grow: 1;

    @media (--viewport-desktop) {
      margin-bottom: 0;
    }
  }

  .catalog-header__item--actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .catalog-header__title {
    font-family: var(--font-catalog-secondary);
    font-size: 2rem;
    color: #1B1A17;
    font-weight: normal;

    @media (--viewport-tablet) {
      margin-bottom: 32px;
    }
  }

  .catalog-header__filters {
    margin-right: 16px;

    @media (--viewport-desktop) {
      display: none;
    }
  }
</style>
