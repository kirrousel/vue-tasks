<template>
  <div class="content">
    <LandingHeader/>
    <router-view/>
  </div>
</template>

<script>
import LandingHeader from '@/components/landing/layout/LandingHeader.vue';
export default {
  name: 'LayoutLanding',
  components: {LandingHeader}
}
</script>
