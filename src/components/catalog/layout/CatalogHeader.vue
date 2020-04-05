<template>
  <div class="catalog-header">
    <div class="catalog-header__content">
      <div class="catalog-header__item catalog-header__item--title">
        <h1 class="catalog-header__title">Мужские часы</h1>
      </div>
      <div class="catalog-header__item">
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
    align-items: center;
  }

  .catalog-header__item--title {
    flex-grow: 1;
  }

  .catalog-header__title {
    font-family: var(--font-catalog-secondary);
    font-size: 2rem;
    color: #1B1A17;
    font-weight: normal;
  }
</style>
