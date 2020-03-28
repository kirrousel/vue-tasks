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
    display: flex;
    height: calc(100% - 39px);
    min-height: calc(100% - 39px);
    height: auto !important;

  }
  .content {
    flex-grow: 1;
    background-color: #F5F6F8;
    min-height: 100%;
  }
</style>
