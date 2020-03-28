<template>
  <div class="dashboard-section-header">
    <div class="dashboard-section-header__box">
      <p v-if="isExtended" class="dashboard-section-header__status">8 tasks completed out of 10</p>
      <p v-else class="dashboard-section-header__title">Tasks</p>
      <div class="dashboard-section-header__select">
        <DashboardSelect/>
      </div>
    </div>
    <div v-if="isExtended" class="dashboard-section-header__status-bar">
      <DashboardStatusBar/>
    </div>
    <p v-if="isExtended" class="dashboard-section-header__title">23 December, Sunday</p>
    <div v-if="isExtended" class="dashboard-section-header__calendar">
      <DashboardCalendar/>
    </div>
  </div>
</template>
<script>
  import DashboardSelect from '../DashboardSelect.vue';
  import DashboardStatusBar from '../DashboardStatusBar.vue';
  import DashboardCalendar from "../DashboardCalendar.vue";


  export default {
    name: 'DashboardSectionHeader',
    components: {DashboardSelect, DashboardStatusBar, DashboardCalendar},
    props: ['isExtended']
  }
</script>
<style>

  .dashboard-section-header {
    padding: 16px 24px;
    width: 100%;
    border-bottom: 1px solid #EBEFF2;
    box-sizing: border-box;
  }

  .dashboard-section-header__box {
    display: flex;
    align-items: center;
  }

  .dashboard-section-header__title {
    flex-grow: 1;
    color: #192A3E;
    font-size: 0.9375rem;
    letter-spacing: 0.01em;
    line-height: 1.5;
    font-weight: 500;
  }

  .dashboard-section-header__status {
    flex-grow: 1;
    font-size: 0.8125rem;
    color: #334D6E;
    font-weight: 500;
  }

  .dashboard-section-header__status-bar {
    margin-top: 16px;
    margin-bottom: 20px;
  }

  .dashboard-section-header__calendar {
    padding-top: 26px;
    box-sizing: border-box;
  }

</style>
