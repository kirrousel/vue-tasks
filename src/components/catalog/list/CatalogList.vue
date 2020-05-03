<template>
  <div class="catalog-list">
    <div class="catalog-list__item" v-for="(item, index) in itemsFirstChunk" :key="item.img">
      <CatalogListItem
        :img="item.img"
        :price="item.price"
      />
    </div>

    <div class="catalog-list__item">
      <CatalogListAd/>
    </div>

    <div class="catalog-list__item" v-for="(item, index) in itemsSecondChunk" :key="item.img">
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

    @media (--viewport-tablet) {
      margin: -20px;
      display: flex;
      flex-wrap: wrap;
    }
  }

  .catalog-list__item {
    margin-bottom: 20px;
    width: 100%;
    box-sizing: border-box;

    @media (--viewport-tablet) {
      margin-bottom: 0;
      display: flex;
      width: 50%;
      padding: 20px;
    }

    @media (--viewport-desktop) {
      width: 33.33%;
    }
  }

</style>
