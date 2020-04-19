<template>
  <div class="catalog-filers">
    <CatalogFiltersTab class="catalog-filers__item" title="Стоимость">
      <CatalogRangeSlider/>
    </CatalogFiltersTab>

    <CatalogFiltersTab class="catalog-filers__item" title="Бренд">
      <BaseCheckbox
        class="catalog-filers__checkbox"
        v-for="(brand, index) in brands"
        :title="brand.value"
        :key="index"
      >
        <input type="checkbox" name="brand" :value=brand.value>
      </BaseCheckbox>

    </CatalogFiltersTab>

    <CatalogFiltersTab class="catalog-filers__item" title="Механизм">
      <BaseCheckbox
        class="catalog-filers__checkbox"
        v-for="(mechanism, index) in mechanisms"
        :title="mechanism.value"
        :key="index"
      >
        <input type="checkbox" name="brand" :value=mechanism.value>
      </BaseCheckbox>
    </CatalogFiltersTab>

    <CatalogFiltersTab class="catalog-filers__item" title="Материал">
      <BaseCheckbox
        class="catalog-filers__checkbox"
        v-for="(material, index) in materials"
        :title="material.value"
        :key="index"

      >
        <input type="checkbox" name="brand" :value=material.value>
      </BaseCheckbox>
    </CatalogFiltersTab>

    <CatalogFiltersTab class="catalog-filers__item" title="Цвет">
      <BaseCheckbox
        class="catalog-filers__checkbox"
        v-for="(color, index) in colors"
        :title="color.value"
        :key="index"

      >
        <input type="checkbox" name="brand" :value=color.value>
      </BaseCheckbox>
    </CatalogFiltersTab>

    <button type="button" class="catalog-filers__button catalog-button">сбросить фильтр</button>

  </div>
</template>
<script>
  import BaseCheckbox from '@/components/catalog/base/BaseCheckbox.vue';
  import CatalogFiltersTab from '@/components/catalog/filters/CatalogFiltersTab.vue';
  import CatalogRangeSlider from '@/components/catalog/filters/CatalogRangeSlider.vue';

  export default {
    name: 'CatalogFilters',
    components: {BaseCheckbox, CatalogFiltersTab, CatalogRangeSlider},
    props: {
      brands: {},
      colors: {},
      materials: {},
      mechanisms: {}
    }
  }
</script>
<style scoped>

  .catalog-filers__item {
    margin-bottom: 20px;
  }

  .catalog-filers__checkbox {
    margin-bottom: 21px;
  }

  .catalog-filers__button {
    width: 100%;
  }
</style>
