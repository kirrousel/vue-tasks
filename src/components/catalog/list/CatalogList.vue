<template>
  <div class="catalog-list">
    <div class="catalog-list__item" v-for="(item, index) in itemsFirstChunk" :key="index">
      <CatalogListItem
        :img="item.img"
        :price="item.price"
      />
    </div>

    <div class="catalog-list__item">
      <CatalogListAd/>
    </div>

    <div class="catalog-list__item" v-for="(item, index) in itemsSecondChunk" :key="index">
      <CatalogListItem
        :img="item.img"
        :price="item.price"
      />
    </div>
  </div>
</template>
<script>
  import CatalogListAd from '@/components/catalog/list/CatalogListAd.vue'
  import CatalogListItem from '@/components/catalog/list/CatalogListItem.vue'

  export default {
    name: 'CatalogList',
    components: {CatalogListAd, CatalogListItem},
    props: {
      itemsFirstChunk: {},
      itemsSecondChunk: {}
    }
  }
</script>
<style scoped>

  .catalog-list {
    margin: -20px;
    display: flex;
    flex-wrap: wrap;
  }

  .catalog-list__item {
    display: flex;
    width: 33.33%;
    padding: 20px;
    box-sizing: border-box;
  }

</style>
