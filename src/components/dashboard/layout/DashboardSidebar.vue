<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <p class="sidebar__title">Dashboard</p>
    </div>
    <div class="sidebar__box">
      <DashboardUser/>
    </div>
  </div>
</template>

<script>
  import DashboardUser from '../DashboardUser.vue';
  export default {
    components: {DashboardUser},

  }
</script>

<style scoped>
  .sidebar {
    position: fixed;
    top: 39px;
    bottom: 0;
    left: 0;
    width: 256px;
    background-color: var(--color-white);
    box-shadow: 6px 18px 18px rgba(0, 0, 0, 0.06);
  }

  .sidebar__header {
    display: flex;
    align-items: center;
    height: 60px;
    padding: 17px 24px;
    border-bottom: 1px solid #EBEFF2;
    box-sizing: border-box;
  }

  .sidebar__title {
    font-size: 1.125rem;
    font-weight: 500;
    color: var(--dashboard-accent-blue);
  }

  .sidebar__box {
    padding: 24px;
    border-bottom: 1px solid #EBEFF2;
  }

</style>
