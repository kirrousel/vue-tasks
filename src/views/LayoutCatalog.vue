<template>
  <div class="content">
    <BaseHeader/>
    <BaseBreadcrumbs/>
    <router-view/>
    <BaseSubscription/>
    <MoreProducts/>
    <BaseFooter/>
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
