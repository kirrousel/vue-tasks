<template>
  <div class="catalog">
    <div class="catalog__wrapper wrapper wrapper--catalog">
      <div class="catalog__header">
        <CatalogHeader/>
      </div>
      <div class="catalog__content">
        <div class="catalog__box catalog__box--filters">
          <p>filters</p>
        </div>
        <div class="catalog__box catalog__box--list">
          <p>list</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CatalogHeader from '@/components/catalog/layout/CatalogHeader.vue';
  export default {
    components: { CatalogHeader }
  }
</script>

<style scoped>
  .catalog {
    padding-top: 40px;
    padding-bottom: 78px;
  }
  .catalog__content {
    display: flex;
    margin: 0 -10px;
  }

  .catalog__header {
    margin-bottom: 40px;
  }

  .catalog__box--filters {
    flex: 323px 0 0;
    padding: 0 10px;
    box-sizing: border-box;
  }

  .catalog__box--list {
    flex-grow: 1;
  }
</style>
