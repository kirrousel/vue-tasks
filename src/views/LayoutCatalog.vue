<template>
  <div class="content">
    <div class="section section--header">
      <BaseHeader/>
    </div>
    <div class="section section--breadcrumbs">
      <BaseBreadcrumbs/>
    </div>

    <router-view/>

    <div class="section section--subscription">
      <BaseSubscription/>
    </div>
    <div class="section section--more-products">
      <MoreProducts/>
    </div>
    <div class="section section--footer">
      <BaseFooter/>
    </div>
  </div>
</template>

<script>
  import BaseHeader from '@/components/catalog/layout/BaseHeader.vue';
  import BaseBreadcrumbs from '@/components/catalog/layout/BaseBreadcrumbs.vue';
  import BaseSubscription from '@/components/catalog/layout/BaseSubscription.vue';
  import BaseFooter from '@/components/catalog/layout/BaseFooter.vue';
  import MoreProducts from "../components/catalog/layout/MoreProducts.vue";

export default {
  name: 'LayoutCatalog',
  components: {MoreProducts, BaseHeader, BaseBreadcrumbs, BaseSubscription, BaseFooter }
}
</script>

<style scoped>
  .section--header {
    margin-top: 31px;
    margin-bottom: 58px;
  }

  .section--breadcrumbs {
    margin-bottom: 40px;}
</style>
