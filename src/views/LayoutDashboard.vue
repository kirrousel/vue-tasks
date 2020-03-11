<template>
  <div class="layout">
    <DashboardSidebar></DashboardSidebar>
    <div class="content">
      <DashboardHeader/>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import DashboardSidebar from '@/components/dashboard/layout/DashboardSidebar.vue';
  import DashboardHeader from '@/components/dashboard/layout/DashboardHeader.vue';

export default {
  name: 'LayoutDashboard',
  components: {DashboardSidebar, DashboardHeader}
}
</script>

<style scoped>

  .layout {
    height: calc(100% - 39px);
  }
  .content {
    padding-left: 256px;
    background-color: #F5F6F8;
    height: 100%;
    min-height: 100%;
    height: auto !important;
  }
</style>
